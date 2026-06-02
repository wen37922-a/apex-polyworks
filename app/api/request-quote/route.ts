import { NextResponse } from "next/server";

export const runtime = "nodejs";

const resendEndpoint = "https://api.resend.com/emails";
const defaultToEmail = "sales@apexpolyworks.com";

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
    `Drawing Upload: ${payload.drawingFileName || "No file name provided"}`,
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
        ${fieldRow("Drawing Upload", payload.drawingFileName || "No file name provided")}
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
