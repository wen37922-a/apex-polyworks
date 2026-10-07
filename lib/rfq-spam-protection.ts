import { createHmac } from "node:crypto";
import { isIP } from "node:net";

export const rfqRateLimits = {
  ip: { limit: 5, windowSeconds: 15 * 60 },
  email: { limit: 3, windowSeconds: 60 * 60 }
} as const;

export type RfqProtectionConfig = {
  environment: string;
  rateLimitSalt: string;
  redisToken: string;
  redisUrl: string;
  turnstileSecretKey: string;
  turnstileSiteKey: string;
};

export type RateLimitScope = keyof typeof rfqRateLimits;

export type RateLimitResult = {
  allowed: boolean;
  count: number;
  limit: number;
  retryAfterSeconds: number;
};

export type TurnstileVerificationResult = {
  errorCodes: string[];
  success: boolean;
};

type FetchLike = typeof fetch;

const rateLimitScript = `
local count = redis.call("INCR", KEYS[1])
if count == 1 then
  redis.call("EXPIRE", KEYS[1], ARGV[1])
end
local ttl = redis.call("TTL", KEYS[1])
return {count, ttl}
`;

function requireEnvironmentValue(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required RFQ protection configuration: ${name}`);
  }
  return value;
}

function normalizeEnvironment(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9_-]/g, "-").slice(0, 40) || "unknown";
}

export function loadRfqProtectionConfig(): RfqProtectionConfig {
  return {
    environment: normalizeEnvironment(
      process.env.VERCEL_ENV?.trim() || process.env.NODE_ENV?.trim() || "development"
    ),
    rateLimitSalt: requireEnvironmentValue("RFQ_RATE_LIMIT_SALT"),
    redisToken: requireEnvironmentValue("UPSTASH_REDIS_REST_TOKEN"),
    redisUrl: requireEnvironmentValue("UPSTASH_REDIS_REST_URL").replace(/\/+$/, ""),
    turnstileSecretKey: requireEnvironmentValue("TURNSTILE_SECRET_KEY"),
    turnstileSiteKey: requireEnvironmentValue("NEXT_PUBLIC_TURNSTILE_SITE_KEY")
  };
}

export function getTrustedClientIp(headers: Headers, environment: string) {
  const trustedValue = headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || "";
  if (isIP(trustedValue)) {
    return trustedValue;
  }

  if (environment === "development" || environment === "test") {
    const developmentValue =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip")?.trim() ||
      "127.0.0.1";
    return isIP(developmentValue) ? developmentValue : "127.0.0.1";
  }

  return "";
}

export function normalizeRateLimitEmail(email: string) {
  return email.trim().toLowerCase();
}

const productionRfqOrigins = new Set([
  "https://apexpolyworks.com",
  "https://www.apexpolyworks.com"
]);

export function hasValidRfqSource(request: Request, environment: string) {
  const target = new URL(request.url);
  if (
    !["https:", "http:"].includes(target.protocol) ||
    (environment === "production" && !productionRfqOrigins.has(target.origin))
  ) {
    return false;
  }

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  if (origin === null && referer === null) {
    return false;
  }

  // Never fall back to Referer when a supplied Origin is invalid.
  // When both are supplied, require both to agree with the request origin.
  for (const [name, value] of [["origin", origin], ["referer", referer]]) {
    if (value === null) continue;
    if (!value || !/^https?:\/\//i.test(value) || /[\s\\]/.test(value)) return false;
    try {
      const source = new URL(value);
      if (source.username || source.password || source.origin !== target.origin) return false;
      if (name === "origin" && value.toLowerCase() !== source.origin) return false;
    } catch {
      return false;
    }
  }
  return true;
}

export function anonymizeRateLimitIdentifier(value: string, salt: string) {
  return createHmac("sha256", salt).update(value).digest("hex");
}

export async function consumeRfqRateLimit({
  config,
  fetchImpl = fetch,
  identifier,
  scope
}: {
  config: RfqProtectionConfig;
  fetchImpl?: FetchLike;
  identifier: string;
  scope: RateLimitScope;
}): Promise<RateLimitResult> {
  const policy = rfqRateLimits[scope];
  const anonymousIdentifier = anonymizeRateLimitIdentifier(identifier, config.rateLimitSalt);
  const key = `rfq:${config.environment}:rate:${scope}:${anonymousIdentifier}`;
  const response = await fetchImpl(config.redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.redisToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify([
      "EVAL",
      rateLimitScript,
      "1",
      key,
      String(policy.windowSeconds)
    ]),
    cache: "no-store",
    signal: AbortSignal.timeout(5000)
  });

  if (!response.ok) {
    throw new Error("RFQ rate-limit storage is unavailable.");
  }

  const data = (await response.json().catch(() => null)) as
    | { error?: string; result?: unknown }
    | null;
  if (data?.error || !Array.isArray(data?.result)) {
    throw new Error("RFQ rate-limit storage returned an invalid response.");
  }

  const count = Number(data.result[0]);
  const ttl = Number(data.result[1]);
  if (!Number.isFinite(count) || !Number.isFinite(ttl)) {
    throw new Error("RFQ rate-limit storage returned an invalid counter.");
  }

  return {
    allowed: count <= policy.limit,
    count,
    limit: policy.limit,
    retryAfterSeconds: Math.max(1, ttl > 0 ? ttl : policy.windowSeconds)
  };
}

export async function verifyTurnstileToken({
  config,
  expectedHostname,
  fetchImpl = fetch,
  remoteIp,
  token
}: {
  config: RfqProtectionConfig;
  expectedHostname: string;
  fetchImpl?: FetchLike;
  remoteIp: string;
  token: string;
}): Promise<TurnstileVerificationResult> {
  if (!token) {
    return { success: false, errorCodes: ["missing-input-response"] };
  }

  const body = new URLSearchParams({
    secret: config.turnstileSecretKey,
    response: token,
    remoteip: remoteIp
  });
  const response = await fetchImpl(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(5000)
    }
  );

  if (!response.ok) {
    throw new Error("Turnstile verification is unavailable.");
  }

  const data = (await response.json().catch(() => null)) as
    | {
        action?: string;
        "error-codes"?: string[];
        hostname?: string;
        success?: boolean;
      }
    | null;
  const errorCodes = Array.isArray(data?.["error-codes"]) ? data["error-codes"] : [];
  const success =
    data?.success === true &&
    data.action === "rfq_submit" &&
    data.hostname === expectedHostname;

  return { success, errorCodes };
}

export function looksLikeUrl(value: string) {
  return /(?:https?:\/\/|ftp:\/\/|www\.|(?:[a-z0-9-]+\.)+(?:com|net|org|io|co|cn|info|biz|xyz|top|site|online)(?:[/:]|$))/i.test(
    value.trim()
  );
}
