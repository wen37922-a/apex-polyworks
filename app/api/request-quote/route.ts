import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const resendEndpoint = "https://api.resend.com/emails";
const defaultToEmail = "sales@apexpolyworks.com";
const maxUploadBytes = 20 * 1024 * 1024;
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
  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  return extension;
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

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;width:180px;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(value || "Not provided")}</td>
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
      <h2 style="font-size:16px;margin:22px 0 8px;">Project Description</h2>
      <div style="max-width:760px;white-space:pre-wrap;border:1px solid #e5e7eb;background:#f8fafc;padding:14px;">${escapeHtml(payload.projectDescription || "Not provided")}</div>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RFQ_FROM_EMAIL;
  const toEmail = process.env.RFQ_TO_EMAIL || defaultToEmail;
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "RFQ email service is not configured yet." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const honeypot = clean(formData.get("website"), 200);
  const startedAt = Number(clean(formData.get("formStartedAt"), 32));

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 3000) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting the form." },
      { status: 400 }
    );
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
    projectDescription: clean(formData.get("projectDescription"), 4000)
  };

  if (!payload.name || !payload.company || !payload.email || !payload.country) {
    return NextResponse.json(
      { error: "Please complete name, company, email, and country before submitting." },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { error: "Please enter a valid business email address." },
      { status: 400 }
    );
  }

  const drawing = formData.get("drawing");
  if (drawing instanceof File && drawing.size > 0) {
    if (!blobToken) {
      return NextResponse.json(
        { error: "Drawing upload storage is not configured yet. Please contact sales@apexpolyworks.com or try again later." },
        { status: 500 }
      );
    }

    if (drawing.size > maxUploadBytes) {
      return NextResponse.json(
        { error: "Drawing upload must be 20MB or smaller." },
        { status: 400 }
      );
    }

    const extension = getFileExtension(drawing.name);
    if (!allowedExtensions.has(extension)) {
      return NextResponse.json(
        { error: "Unsupported drawing file type. Please upload PDF, STEP, STP, DXF, DWG, PNG, JPG, JPEG, or WEBP." },
        { status: 400 }
      );
    }

    const safeFileName = getSafeFileName(drawing.name);
    const pathname = `rfq-uploads/${Date.now()}-${safeFileName}`;
    const blob = await put(pathname, drawing, {
      access: "public",
      addRandomSuffix: true,
      token: blobToken
    });

    payload.drawingFileName = drawing.name;
    payload.drawingUrl = blob.url;
  }

  const email = buildEmail(payload);
  const resendResponse = await fetch(resendEndpoint, {
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
    return NextResponse.json(
      { error: "Unable to send the RFQ right now. Please email sales@apexpolyworks.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
