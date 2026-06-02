import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const maxUploadBytes = 5 * 1024 * 1024;
const allowedExtensions = new Set(["jpg", "jpeg", "png", "webp"]);
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

function clean(value: FormDataEntryValue | null, maxLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
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

  return cleanedName || "admin-image";
}

export async function POST(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

  if (!adminPassword) {
    return NextResponse.json(
      { error: "Admin password is not configured. Set ADMIN_PASSWORD in Vercel." },
      { status: 500 }
    );
  }

  if (!blobToken) {
    return NextResponse.json(
      { error: "Image storage is not configured. Set BLOB_READ_WRITE_TOKEN in Vercel." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const password = clean(formData.get("password"), 200);

  if (password !== adminPassword) {
    return NextResponse.json(
      { error: "Invalid admin password." },
      { status: 401 }
    );
  }

  const image = formData.get("image");
  if (!(image instanceof File) || image.size === 0) {
    return NextResponse.json(
      { error: "Choose an image file before uploading." },
      { status: 400 }
    );
  }

  if (image.size > maxUploadBytes) {
    return NextResponse.json(
      { error: "Image must be 5MB or smaller." },
      { status: 400 }
    );
  }

  const extension = getFileExtension(image.name);
  if (!allowedExtensions.has(extension) || !allowedMimeTypes.has(image.type)) {
    return NextResponse.json(
      { error: "Unsupported image type. Please upload JPG, PNG, or WEBP." },
      { status: 400 }
    );
  }

  const safeFileName = getSafeFileName(image.name);
  const pathname = `admin-images/${Date.now()}-${safeFileName}`;
  const blob = await put(pathname, image, {
    access: "public",
    addRandomSuffix: true,
    token: blobToken
  });

  return NextResponse.json({
    ok: true,
    url: blob.url,
    fileName: image.name,
    size: image.size
  });
}
