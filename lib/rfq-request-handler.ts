import { NextResponse } from "next/server";
import {
  consumeRfqRateLimit,
  getTrustedClientIp,
  hasValidRfqSource,
  loadRfqProtectionConfig,
  looksLikeUrl,
  normalizeRateLimitEmail,
  type RfqProtectionConfig,
  verifyTurnstileToken
} from "@/lib/rfq-spam-protection";

const resendEndpoint = "https://api.resend.com/emails";
const defaultToEmail = "sales@apexpolyworks.com";
const maxUploadBytes = 20 * 1024 * 1024;
const maxRequestBytes = maxUploadBytes + 1024 * 1024;
const minimumFormCompletionMs = 3000;
const maximumFormAgeMs = 24 * 60 * 60 * 1000;
const allowedExtensions = new Set([
  "pdf",
  "step",
  "stp",
  "dxf",
  "dwg",
  "png",
  "jpg",
  "jpeg",
  "webp"
]);

type RfqPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  material: string;
  serviceNeeded: string;
  quantity: string;
  drawingFileName: string;
  drawingUrl: string;
  projectDescription: string;
  sourcePage: string;
  attribution: {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmTerm: string;
    utmContent: string;
    gclid: string;
    gbraid: string;
    wbraid: string;
    landingPage: string;
    referrer: string;
    capturedAt: string;
  };
};

type BlobPut = (
  pathname: string,
  body: File,
  options: {
    access: "public";
    addRandomSuffix: true;
    token: string;
  }
) => Promise<{ url: string }>;

type RfqHandlerDependencies = {
  config?: RfqProtectionConfig;
  fetchImpl?: typeof fetch;
  now?: () => number;
  putBlob: BlobPut;
};

function clean(value: FormDataEntryValue | null, maxLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getFileExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() || "";
}

function getSafeFileName(fileName: string) {
  const cleanedName = fileName
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);

  return cleanedName || "drawing-upload";
}

function fieldRow(label: string, value: string, fallback = "Not provided") {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;width:180px;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;word-break:break-word;">${escapeHtml(value || fallback)}</td>
    </tr>
  `;
}

function buildEmail(payload: RfqPayload) {
  const subject = `New RFQ from ${payload.company || payload.name}`;
  const text = [
    "New RFQ submitted from apexpolyworks.com",
    "",
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Country: ${payload.country}`,
    `Material: ${payload.material || "Not provided"}`,
    `Service Needed: ${payload.serviceNeeded || "Not provided"}`,
    `Quantity: ${payload.quantity || "Not provided"}`,
    `Drawing Upload: ${payload.drawingFileName || "No file uploaded"}`,
    `Drawing Download Link: ${payload.drawingUrl || "No file uploaded"}`,
    "",
    "Marketing Attribution:",
    `RFQ Source Page: ${payload.sourcePage || "Not captured"}`,
    `Landing Page: ${payload.attribution.landingPage || "Not captured"}`,
    `Referrer: ${payload.attribution.referrer || "Not captured"}`,
    `UTM Source: ${payload.attribution.utmSource || "Not captured"}`,
    `UTM Medium: ${payload.attribution.utmMedium || "Not captured"}`,
    `UTM Campaign: ${payload.attribution.utmCampaign || "Not captured"}`,
    `UTM Term: ${payload.attribution.utmTerm || "Not captured"}`,
    `UTM Content: ${payload.attribution.utmContent || "Not captured"}`,
    `GCLID: ${payload.attribution.gclid || "Not captured"}`,
    `GBRAID: ${payload.attribution.gbraid || "Not captured"}`,
    `WBRAID: ${payload.attribution.wbraid || "Not captured"}`,
    `Attribution Captured At: ${payload.attribution.capturedAt || "Not captured"}`,
    "",
    "Project Description:",
    payload.projectDescription || "Not provided"
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h1 style="font-size:20px;margin:0 0 16px;">New RFQ submitted from apexpolyworks.com</h1>
      <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;">
        ${fieldRow("Name", payload.name)}
        ${fieldRow("Company", payload.company)}
        ${fieldRow("Email", payload.email)}
        ${fieldRow("Phone", payload.phone)}
        ${fieldRow("Country", payload.country)}
        ${fieldRow("Material", payload.material)}
        ${fieldRow("Service Needed", payload.serviceNeeded)}
        ${fieldRow("Quantity", payload.quantity)}
        ${fieldRow("Drawing Upload", payload.drawingFileName || "No file uploaded")}
        ${fieldRow("Drawing Download Link", payload.drawingUrl)}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px;">Marketing Attribution</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;">
        ${fieldRow("RFQ Source Page", payload.sourcePage, "Not captured")}
        ${fieldRow("Landing Page", payload.attribution.landingPage, "Not captured")}
        ${fieldRow("Referrer", payload.attribution.referrer, "Not captured")}
        ${fieldRow("UTM Source", payload.attribution.utmSource, "Not captured")}
        ${fieldRow("UTM Medium", payload.attribution.utmMedium, "Not captured")}
        ${fieldRow("UTM Campaign", payload.attribution.utmCampaign, "Not captured")}
        ${fieldRow("UTM Term", payload.attribution.utmTerm, "Not captured")}
        ${fieldRow("UTM Content", payload.attribution.utmContent, "Not captured")}
        ${fieldRow("GCLID", payload.attribution.gclid, "Not captured")}
        ${fieldRow("GBRAID", payload.attribution.gbraid, "Not captured")}
        ${fieldRow("WBRAID", payload.attribution.wbraid, "Not captured")}
        ${fieldRow("Captured At", payload.attribution.capturedAt, "Not captured")}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px;">Project Description</h2>
      <div style="max-width:760px;white-space:pre-wrap;border:1px solid #e5e7eb;background:#f8fafc;padding:14px;">${escapeHtml(payload.projectDescription || "Not provided")}</div>
    </div>
  `;

  return { subject, text, html };
}

function jsonError(error: string, status: number, retryAfterSeconds?: number) {
  const response = NextResponse.json({ error }, { status });
  if (retryAfterSeconds) {
    response.headers.set("Retry-After", String(retryAfterSeconds));
  }
  return response;
}

function getContentLength(request: Request) {
  const rawValue = request.headers.get("content-length");
  if (!rawValue) {
    return null;
  }
  const value = Number(rawValue);
  return Number.isFinite(value) && value >= 0 ? value : Number.NaN;
}

export async function handleRfqRequest(
  request: Request,
  {
    config: providedConfig,
    fetchImpl = fetch,
    now = Date.now,
    putBlob
  }: RfqHandlerDependencies
) {
  const contentLength = getContentLength(request);
  if (Number.isNaN(contentLength)) {
    return jsonError("Invalid request size.", 400);
  }
  if (contentLength !== null && contentLength > maxRequestBytes) {
    return jsonError("RFQ request is too large.", 413);
  }

  let config: RfqProtectionConfig;
  try {
    config = providedConfig ?? loadRfqProtectionConfig();
  } catch {
    return jsonError("RFQ verification is not configured.", 503);
  }

  if (!hasValidRfqSource(request, config.environment)) {
    return jsonError("RFQ request origin is not allowed.", 403);
  }

  const clientIp = getTrustedClientIp(request.headers, config.environment);
  if (!clientIp) {
    return jsonError("Unable to verify the request source.", 400);
  }

  try {
    const ipRateLimit = await consumeRfqRateLimit({
      config,
      fetchImpl,
      identifier: clientIp,
      scope: "ip"
    });
    if (!ipRateLimit.allowed) {
      return jsonError(
        "Too many RFQ attempts. Please try again later.",
        429,
        ipRateLimit.retryAfterSeconds
      );
    }
  } catch {
    return jsonError("RFQ verification is temporarily unavailable.", 503);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonError("Unable to read the RFQ submission.", 400);
  }

  const honeypot = clean(formData.get("website"), 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const submittedAt = now();
  const startedAt = Number(clean(formData.get("formStartedAt"), 32));
  const formAge = submittedAt - startedAt;
  if (
    !Number.isFinite(startedAt) ||
    formAge < minimumFormCompletionMs ||
    formAge > maximumFormAgeMs
  ) {
    return jsonError("Please wait a moment before submitting the form.", 400);
  }

  const payload: RfqPayload = {
    name: clean(formData.get("name"), 120),
    company: clean(formData.get("company"), 160),
    email: clean(formData.get("email"), 180),
    phone: clean(formData.get("phone"), 80),
    country: clean(formData.get("country"), 120),
    material: clean(formData.get("material"), 180),
    serviceNeeded: clean(formData.get("serviceNeeded"), 180),
    quantity: clean(formData.get("quantity"), 120),
    drawingFileName: clean(formData.get("drawingFileName"), 260),
    drawingUrl: "",
    projectDescription: clean(formData.get("projectDescription"), 4000),
    sourcePage: clean(formData.get("sourcePage"), 600),
    attribution: {
      utmSource: clean(formData.get("utmSource"), 300),
      utmMedium: clean(formData.get("utmMedium"), 300),
      utmCampaign: clean(formData.get("utmCampaign"), 300),
      utmTerm: clean(formData.get("utmTerm"), 300),
      utmContent: clean(formData.get("utmContent"), 300),
      gclid: clean(formData.get("gclid"), 500),
      gbraid: clean(formData.get("gbraid"), 500),
      wbraid: clean(formData.get("wbraid"), 500),
      landingPage: clean(formData.get("landingPage"), 1000),
      referrer: clean(formData.get("referrer"), 1000),
      capturedAt: clean(formData.get("attributionCapturedAt"), 80)
    }
  };
  const drawing = formData.get("drawing");
  const hasDrawing = drawing instanceof File && drawing.size > 0;

  if (!payload.name || !payload.email) {
    return jsonError("Please complete name and email before submitting.", 400);
  }

  if (looksLikeUrl(payload.name) || (payload.company && looksLikeUrl(payload.company))) {
    return jsonError("Name and company fields cannot contain website links.", 400);
  }

  if (!isValidEmail(payload.email)) {
    return jsonError("Please enter a valid business email address.", 400);
  }

  if (!payload.material && !payload.projectDescription && !hasDrawing) {
    return jsonError(
      "Please provide a material, project description, or drawing.",
      400
    );
  }

  try {
    const emailRateLimit = await consumeRfqRateLimit({
      config,
      fetchImpl,
      identifier: normalizeRateLimitEmail(payload.email),
      scope: "email"
    });
    if (!emailRateLimit.allowed) {
      return jsonError(
        "Too many RFQ attempts for this email. Please try again later.",
        429,
        emailRateLimit.retryAfterSeconds
      );
    }
  } catch {
    return jsonError("RFQ verification is temporarily unavailable.", 503);
  }

  const turnstileToken = clean(formData.get("turnstileToken"), 4096);
  if (!turnstileToken) {
    return jsonError("Please complete the bot verification.", 400);
  }

  let turnstileResult;
  try {
    turnstileResult = await verifyTurnstileToken({
      config,
      expectedHostname: new URL(request.url).hostname,
      fetchImpl,
      remoteIp: clientIp,
      token: turnstileToken
    });
  } catch {
    return jsonError("RFQ verification is temporarily unavailable.", 503);
  }
  if (!turnstileResult.success) {
    return jsonError("Bot verification failed. Please try again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RFQ_FROM_EMAIL;
  const toEmail = process.env.RFQ_TO_EMAIL || defaultToEmail;
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!apiKey || !fromEmail) {
    return jsonError("RFQ email service is not configured yet.", 500);
  }

  if (hasDrawing) {
    if (!blobToken) {
      return jsonError(
        "Drawing upload storage is not configured yet. Please contact sales@apexpolyworks.com or try again later.",
        500
      );
    }

    if (drawing.size > maxUploadBytes) {
      return jsonError("Drawing upload must be 20MB or smaller.", 400);
    }

    const extension = getFileExtension(drawing.name);
    if (!allowedExtensions.has(extension)) {
      return jsonError(
        "Unsupported drawing file type. Please upload PDF, STEP, STP, DXF, DWG, PNG, JPG, JPEG, or WEBP.",
        400
      );
    }
    const safeFileName = getSafeFileName(drawing.name);
    const pathname = `rfq-uploads/${submittedAt}-${safeFileName}`;
    const blob = await putBlob(pathname, drawing, {
      access: "public",
      addRandomSuffix: true,
      token: blobToken
    });

    payload.drawingFileName = drawing.name;
    payload.drawingUrl = blob.url;
  }

  const email = buildEmail(payload);
  const resendResponse = await fetchImpl(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: email.subject,
      text: email.text,
      html: email.html
    })
  });

  if (!resendResponse.ok) {
    return jsonError(
      "Unable to send the RFQ right now. Please email sales@apexpolyworks.com directly.",
      502
    );
  }

  return NextResponse.json({ ok: true });
}
