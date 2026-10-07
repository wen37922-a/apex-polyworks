import assert from "node:assert/strict";
import test from "node:test";
import { handleRfqRequest } from "../lib/rfq-request-handler.ts";
import { hasValidRfqSource, type RfqProtectionConfig } from "../lib/rfq-spam-protection.ts";

const now = 1_750_000_000_000;
const requestUrl = "https://apexpolyworks.com/api/request-quote";
const turnstileEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const resendEndpoint = "https://api.resend.com/emails";

const config: RfqProtectionConfig = {
  environment: "test",
  rateLimitSalt: "local-test-rate-limit-salt",
  redisToken: "local-test-redis-token",
  redisUrl: "https://local-redis.test",
  turnstileSecretKey: "local-test-turnstile-secret",
  turnstileSiteKey: "local-test-turnstile-site-key"
};

type TurnstileResult = {
  action?: string;
  hostname?: string;
  success: boolean;
  "error-codes"?: string[];
};

type HarnessOptions = {
  emailCount?: number;
  ipCount?: number;
  resendOk?: boolean;
  turnstileResults?: TurnstileResult[];
};

function createHarness(options: HarnessOptions = {}) {
  const calls = {
    blob: [] as Array<{ file: File; pathname: string }>,
    order: [] as string[],
    redisKeys: [] as string[],
    resend: [] as Array<Record<string, unknown>>,
    turnstile: [] as URLSearchParams[]
  };
  const turnstileResults = [...(options.turnstileResults ?? [])];

  const fetchImpl = async (input: string | URL | Request, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

    if (url === config.redisUrl) {
      const command = JSON.parse(String(init?.body)) as string[];
      const key = command[3];
      const isEmail = key.includes(":rate:email:");
      calls.order.push(isEmail ? "rate:email" : "rate:ip");
      calls.redisKeys.push(key);
      return Response.json({
        result: [isEmail ? options.emailCount ?? 1 : options.ipCount ?? 1, 600]
      });
    }

    if (url === turnstileEndpoint) {
      const body = new URLSearchParams(String(init?.body));
      calls.order.push("turnstile");
      calls.turnstile.push(body);
      return Response.json(
        turnstileResults.shift() ?? {
          action: "rfq_submit",
          hostname: "apexpolyworks.com",
          success: true
        }
      );
    }

    if (url === resendEndpoint) {
      calls.order.push("resend");
      calls.resend.push(JSON.parse(String(init?.body)) as Record<string, unknown>);
      return Response.json(
        options.resendOk === false ? { message: "test failure" } : { id: "local-test-email" },
        { status: options.resendOk === false ? 500 : 200 }
      );
    }

    throw new Error(`Unexpected local test request: ${url}`);
  };

  const putBlob = async (pathname: string, file: File) => {
    calls.order.push("blob");
    calls.blob.push({ file, pathname });
    return { url: "https://local-blob.test/rfq-drawing.pdf" };
  };

  return { calls, fetchImpl, putBlob };
}

function createFormData(overrides: Record<string, FormDataEntryValue | null> = {}) {
  const defaults: Record<string, FormDataEntryValue> = {
    company: "Example Engineering",
    country: "United States",
    email: "buyer@example.com",
    formStartedAt: String(now - 5_000),
    material: "UHMWPE",
    name: "Internal Test Buyer",
    projectDescription: "Please quote sheet material.",
    quantity: "2 sheets",
    serviceNeeded: "Material Supply",
    sourcePage: "/materials/uhmwpe",
    turnstileToken: "local-valid-token",
    website: ""
  };
  const formData = new FormData();

  for (const [key, value] of Object.entries({ ...defaults, ...overrides })) {
    if (value !== null) {
      formData.set(key, value);
    }
  }

  return formData;
}

function createRequest(
  overrides: Record<string, FormDataEntryValue | null> = {},
  headers: Record<string, string> = {}
) {
  return new Request(requestUrl, {
    method: "POST",
    headers: {
      origin: new URL(requestUrl).origin,
      "x-vercel-forwarded-for": "203.0.113.42",
      ...headers
    },
    body: createFormData(overrides)
  });
}

async function submit(
  request: Request,
  harness: ReturnType<typeof createHarness>
) {
  return handleRfqRequest(request, {
    config,
    fetchImpl: harness.fetchImpl as typeof fetch,
    now: () => now,
    putBlob: harness.putBlob
  });
}

function assertNoDelivery(harness: ReturnType<typeof createHarness>) {
  assert.equal(harness.calls.blob.length, 0);
  assert.equal(harness.calls.resend.length, 0);
}

test("invalid RFQ sources are rejected before any external service call", async (t) => {
  const cases: Array<[string, Record<string, string>]> = [
    ["missing headers", {}],
    ["cross-origin", { origin: "https://evil.example" }],
    ["null origin cannot fall back", { origin: "null", referer: "https://apexpolyworks.com/contact" }],
    ["empty origin cannot fall back", { origin: "", referer: "https://apexpolyworks.com/contact" }],
    ["malformed origin", { origin: "not-a-url" }],
    ["origin with path", { origin: "https://apexpolyworks.com/contact" }],
    ["multiple origins", { origin: "https://apexpolyworks.com https://evil.example" }],
    ["suffix spoof", { origin: "https://apexpolyworks.com.evil.example" }],
    ["userinfo spoof", { origin: "https://apexpolyworks.com@evil.example" }],
    ["wrong protocol", { origin: "http://apexpolyworks.com" }],
    ["wrong port", { origin: "https://apexpolyworks.com:444" }],
    ["cross-origin referer", { referer: "https://evil.example/contact" }],
    ["malformed referer", { referer: "/contact" }],
    ["conflicting headers", { origin: "https://apexpolyworks.com", referer: "https://evil.example/contact" }],
    ["empty referer", { origin: "https://apexpolyworks.com", referer: "" }],
    ["forwarded host cannot override", { origin: "https://evil.example", "x-forwarded-host": "evil.example", host: "evil.example" }]
  ];
  for (const [label, headers] of cases) {
    await t.test(label, async () => {
      const harness = createHarness();
      const request = createRequest();
      request.headers.delete("origin");
      for (const [key, value] of Object.entries(headers)) request.headers.set(key, value);
      const response = await submit(request, harness);
      assert.equal(response.status, 403);
      assert.deepEqual(harness.calls.order, []);
      assertNoDelivery(harness);
    });
  }
});

test("same-origin Origin and Referer fallback permit valid RFQs", async (t) => {
  for (const mode of ["origin", "referer", "both"]) {
    await t.test(mode, async () => {
      const harness = createHarness();
      const request = createRequest();
      if (mode === "referer") request.headers.delete("origin");
      if (mode !== "origin") request.headers.set("referer", "https://apexpolyworks.com/request-a-quote?source=contact");
      const response = await submit(request, harness);
      assert.equal(response.status, 200);
      assert.equal(harness.calls.resend.length, 1);
    });
  }
});

test("production limits target origins while local and preview remain same-origin", () => {
  const source = (url: string, origin: string, environment: string) =>
    hasValidRfqSource(new Request(url, { headers: { origin } }), environment);
  for (const origin of ["https://apexpolyworks.com", "https://www.apexpolyworks.com"]) {
    assert.equal(source(`${origin}/api/request-quote`, origin, "production"), true);
  }
  for (const origin of ["https://evil.example", "http://apexpolyworks.com", "http://localhost:3000", "https://apexpolyworks.com:444"]) {
    assert.equal(source(`${origin}/api/request-quote`, origin, "production"), false);
  }
  assert.equal(source(requestUrl, "https://www.apexpolyworks.com", "production"), false);
  assert.equal(source("http://localhost:3000/api/request-quote", "http://localhost:3000", "development"), true);
  assert.equal(source("http://localhost:3000/api/request-quote", "http://localhost:3001", "development"), false);
  assert.equal(source("https://example-preview.vercel.app/api/request-quote", "https://example-preview.vercel.app", "preview"), true);
  assert.equal(source("https://example-preview.vercel.app/api/request-quote", "https://evil.example", "preview"), false);
});

const savedEmailEnvironment = {
  blob: process.env.BLOB_READ_WRITE_TOKEN,
  from: process.env.RFQ_FROM_EMAIL,
  resend: process.env.RESEND_API_KEY,
  to: process.env.RFQ_TO_EMAIL
};

test.before(() => {
  process.env.BLOB_READ_WRITE_TOKEN = "local-test-blob-token";
  process.env.RESEND_API_KEY = "local-test-resend-key";
  process.env.RFQ_FROM_EMAIL = "rfq@local.test";
  process.env.RFQ_TO_EMAIL = "sales@local.test";
});

test.after(() => {
  const restore = (name: string, value: string | undefined) => {
    if (value === undefined) {
      delete process.env[name];
    } else {
      process.env[name] = value;
    }
  };
  restore("BLOB_READ_WRITE_TOKEN", savedEmailEnvironment.blob);
  restore("RFQ_FROM_EMAIL", savedEmailEnvironment.from);
  restore("RESEND_API_KEY", savedEmailEnvironment.resend);
  restore("RFQ_TO_EMAIL", savedEmailEnvironment.to);
});

test("a valid RFQ passes rate limits and Turnstile before Resend", async () => {
  const harness = createHarness();
  const response = await submit(
    createRequest({ company: "", quantity: "" }),
    harness
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.deepEqual(harness.calls.order, ["rate:ip", "rate:email", "turnstile", "resend"]);
  assert.equal(harness.calls.resend.length, 1);
  assert.equal(harness.calls.turnstile.length, 1);
  assert.equal(harness.calls.turnstile[0].get("response"), "local-valid-token");
  assert.equal(harness.calls.turnstile[0].get("remoteip"), "203.0.113.42");

  assert.equal(harness.calls.redisKeys.length, 2);
  for (const key of harness.calls.redisKeys) {
    assert.match(key, /^rfq:test:rate:(?:ip|email):[a-f0-9]{64}$/);
    assert.doesNotMatch(key, /203\.0\.113\.42|buyer@example\.com/);
  }
});

test("a direct POST without a Turnstile token is rejected before delivery", async () => {
  const harness = createHarness();
  const response = await submit(createRequest({ turnstileToken: null }), harness);

  assert.equal(response.status, 400);
  assert.equal(harness.calls.turnstile.length, 0);
  assertNoDelivery(harness);
});

test("invalid and reused Turnstile tokens cannot create another RFQ", async () => {
  const harness = createHarness({
    turnstileResults: [
      { action: "rfq_submit", hostname: "apexpolyworks.com", success: true },
      {
        action: "rfq_submit",
        hostname: "apexpolyworks.com",
        success: false,
        "error-codes": ["timeout-or-duplicate"]
      }
    ]
  });

  const firstResponse = await submit(createRequest(), harness);
  const duplicateResponse = await submit(createRequest(), harness);

  assert.equal(firstResponse.status, 200);
  assert.equal(duplicateResponse.status, 400);
  assert.equal(harness.calls.turnstile.length, 2);
  assert.equal(harness.calls.resend.length, 1);
  assert.equal(harness.calls.blob.length, 0);

  const invalidHarness = createHarness({
    turnstileResults: [
      {
        action: "rfq_submit",
        hostname: "apexpolyworks.com",
        success: false,
        "error-codes": ["invalid-input-response"]
      }
    ]
  });
  const invalidResponse = await submit(createRequest(), invalidHarness);
  assert.equal(invalidResponse.status, 400);
  assertNoDelivery(invalidHarness);
});

test("forged form timing is rejected before Turnstile or delivery", async (t) => {
  for (const startedAt of [String(now - 1_000), String(now + 10_000), "not-a-timestamp"]) {
    await t.test(startedAt, async () => {
      const harness = createHarness();
      const response = await submit(createRequest({ formStartedAt: startedAt }), harness);
      assert.equal(response.status, 400);
      assert.equal(harness.calls.turnstile.length, 0);
      assertNoDelivery(harness);
    });
  }
});

test("honeypot submissions receive a neutral response without delivery", async () => {
  const harness = createHarness();
  const response = await submit(createRequest({ website: "spam value" }), harness);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.deepEqual(harness.calls.order, ["rate:ip"]);
  assert.equal(harness.calls.turnstile.length, 0);
  assertNoDelivery(harness);
});

test("IP and normalized-email limits stop delivery", async (t) => {
  await t.test("IP limit", async () => {
    const harness = createHarness({ ipCount: 6 });
    const response = await submit(createRequest(), harness);
    assert.equal(response.status, 429);
    assert.equal(response.headers.get("retry-after"), "600");
    assert.deepEqual(harness.calls.order, ["rate:ip"]);
    assertNoDelivery(harness);
  });

  await t.test("email limit", async () => {
    const harness = createHarness({ emailCount: 4 });
    const response = await submit(
      createRequest({ email: "  BUYER@EXAMPLE.COM " }),
      harness
    );
    assert.equal(response.status, 429);
    assert.deepEqual(harness.calls.order, ["rate:ip", "rate:email"]);
    assert.equal(harness.calls.turnstile.length, 0);
    assertNoDelivery(harness);
  });
});

test("URL-like name and company values are rejected", async (t) => {
  for (const overrides of [
    { name: "https://spam.example" },
    { company: "www.spam.example" }
  ]) {
    await t.test(JSON.stringify(overrides), async () => {
      const harness = createHarness();
      const response = await submit(createRequest(overrides), harness);
      assert.equal(response.status, 400);
      assert.equal(harness.calls.turnstile.length, 0);
      assertNoDelivery(harness);
    });
  }
});

test("an RFQ needs a material, project description, or drawing", async () => {
  const harness = createHarness();
  const response = await submit(
    createRequest({ drawing: null, material: "", projectDescription: "" }),
    harness
  );

  assert.equal(response.status, 400);
  assert.equal(harness.calls.turnstile.length, 0);
  assertNoDelivery(harness);
});

test("HTML special characters are escaped in the notification HTML", async () => {
  const harness = createHarness();
  const response = await submit(
    createRequest({
      company: 'A&B "Purchasing"',
      name: "Tom & <Buyer>",
      projectDescription: "Need <10 sheets & a drawing link: https://drive.google.com/example>"
    }),
    harness
  );

  assert.equal(response.status, 200);
  const html = String(harness.calls.resend[0].html);
  assert.match(html, /Tom &amp; &lt;Buyer&gt;/);
  assert.match(html, /A&amp;B &quot;Purchasing&quot;/);
  assert.match(html, /https:\/\/drive\.google\.com\/example&gt;/);
  assert.doesNotMatch(html, /Tom & <Buyer>/);
});

test("a supported drawing uploads only after all verification succeeds", async () => {
  const harness = createHarness();
  const drawing = new File(["local test drawing"], "sample drawing.pdf", {
    type: "application/pdf"
  });
  const response = await submit(createRequest({ drawing }), harness);

  assert.equal(response.status, 200);
  assert.deepEqual(harness.calls.order, [
    "rate:ip",
    "rate:email",
    "turnstile",
    "blob",
    "resend"
  ]);
  assert.equal(harness.calls.blob.length, 1);
  assert.equal(harness.calls.resend.length, 1);
  assert.match(harness.calls.blob[0].pathname, /^rfq-uploads\/1750000000000-sample-drawing\.pdf$/);
});

test("an oversized declared request is rejected before rate limiting or parsing", async () => {
  const harness = createHarness();
  const request = createRequest({}, { "content-length": String(22 * 1024 * 1024) });
  const response = await submit(request, harness);

  assert.equal(response.status, 413);
  assert.deepEqual(harness.calls.order, []);
  assertNoDelivery(harness);
});
