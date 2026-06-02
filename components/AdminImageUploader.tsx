"use client";

import { useEffect, useState } from "react";
import { Copy, ExternalLink, Lock, Trash2, Upload } from "lucide-react";

const fieldClass =
  "min-h-11 rounded-md border border-graphite/15 bg-white px-3 text-sm text-graphite outline-none transition placeholder:text-steel/60 focus:border-teal focus:ring-4 focus:ring-teal/10";

type UploadResult = {
  url: string;
  fileName: string;
  size: number;
};

type RecentImage = UploadResult & {
  uploadedAt: string;
};

const recentImagesKey = "apex-polyworks-admin-images";
const maxRecentImages = 24;

export function AdminImageUploader() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [recentImages, setRecentImages] = useState<RecentImage[]>([]);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [copiedUrl, setCopiedUrl] = useState("");

  useEffect(() => {
    const storedImages = window.localStorage.getItem(recentImagesKey);
    if (!storedImages) {
      return;
    }

    try {
      const parsedImages = JSON.parse(storedImages) as RecentImage[];
      if (Array.isArray(parsedImages)) {
        setRecentImages(parsedImages.filter((image) => image?.url && image?.fileName));
      }
    } catch {
      window.localStorage.removeItem(recentImagesKey);
    }
  }, []);

  function saveRecentImage(image: RecentImage) {
    setRecentImages((currentImages) => {
      const nextImages = [
        image,
        ...currentImages.filter((currentImage) => currentImage.url !== image.url)
      ].slice(0, maxRecentImages);

      window.localStorage.setItem(recentImagesKey, JSON.stringify(nextImages));
      return nextImages;
    });
  }

  function deleteRecentImage(url: string) {
    setRecentImages((currentImages) => {
      const nextImages = currentImages.filter((image) => image.url !== url);
      window.localStorage.setItem(recentImagesKey, JSON.stringify(nextImages));
      return nextImages;
    });
  }

  function handleUnlock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!password.trim()) {
      setError("Enter the admin password to continue.");
      return;
    }

    setIsUnlocked(true);
  }

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);

    if (!selectedFile) {
      setError("Choose a JPG, PNG, or WEBP image before uploading.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.set("password", password);
    formData.set("image", selectedFile);

    try {
      const response = await fetch("/api/admin/upload-image", {
        method: "POST",
        body: formData,
        cache: "no-store"
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; url?: string; fileName?: string; size?: number; error?: string }
        | null;

      if (!response.ok || data?.ok !== true || !data.url) {
        throw new Error(data?.error || "Image upload failed. Please try again.");
      }

      const uploadResult = {
        url: data.url,
        fileName: data.fileName || selectedFile.name,
        size: data.size || selectedFile.size
      };

      setResult(uploadResult);
      saveRecentImage({
        ...uploadResult,
        uploadedAt: new Date().toISOString()
      });
      setSelectedFile(null);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  async function copyUrl() {
    if (!result?.url) {
      return;
    }

    await copyImageUrl(result.url);
  }

  async function copyImageUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    if (result?.url === url) {
      setCopyLabel("Copied");
    }
    window.setTimeout(() => {
      setCopiedUrl("");
      setCopyLabel("Copy");
    }, 1800);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <div className="rounded-md border border-graphite/10 bg-white p-6 shadow-soft">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">Admin</p>
          <h1 className="mt-3 text-3xl font-semibold text-graphite">Image Manager</h1>
          <p className="mt-3 text-sm leading-6 text-steel">
            Upload website images to Vercel Blob and copy the returned URL for use in page code.
          </p>
        </div>

        {error ? (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800" role="alert">
            {error}
          </div>
        ) : null}

        {!isUnlocked ? (
          <form className="mt-8 grid gap-4" onSubmit={handleUnlock}>
            <label className="grid gap-2 text-sm font-medium text-graphite">
              Admin Password
              <input
                className={fieldClass}
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber/90 focus:outline-none focus:ring-4 focus:ring-amber/20"
              type="submit"
            >
              Continue
              <Lock className="size-4" aria-hidden="true" />
            </button>
          </form>
        ) : (
          <form className="mt-8 grid gap-5" onSubmit={handleUpload}>
            <label className="grid gap-2 text-sm font-medium text-graphite">
              Upload Image
              <span className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-graphite/25 bg-slate-50 px-4 py-3 text-sm font-medium text-steel transition hover:border-teal/50 hover:bg-mint/40">
                <span className="inline-flex items-center gap-2">
                  <Upload className="size-4" aria-hidden="true" />
                  {selectedFile ? selectedFile.name : "JPG, PNG, or WEBP up to 5MB"}
                </span>
                <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-graphite shadow-sm">
                  Choose File
                </span>
              </span>
              <input
                className="sr-only"
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
              />
            </label>
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber/90 focus:outline-none focus:ring-4 focus:ring-amber/20 disabled:cursor-not-allowed disabled:bg-steel"
              type="submit"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Image"}
              <Upload className="size-4" aria-hidden="true" />
            </button>
          </form>
        )}

        {result ? (
          <div className="mt-8 grid gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4">
            <img
              src={result.url}
              alt={result.fileName}
              className="max-h-80 w-full rounded-md border border-graphite/10 bg-white object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-graphite">{result.fileName}</p>
              <p className="mt-1 text-xs text-steel">{Math.round(result.size / 1024)} KB</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input className={`${fieldClass} flex-1`} value={result.url} readOnly />
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-teal/90"
                type="button"
                onClick={copyUrl}
              >
                {copyLabel}
                <Copy className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}

        {recentImages.length > 0 ? (
          <section className="mt-10">
            <div>
              <h2 className="text-xl font-semibold text-graphite">Recent Uploaded Images</h2>
              <p className="mt-2 text-sm leading-6 text-steel">
                Stored in this browser only. This list does not read from Vercel Blob or any database.
              </p>
            </div>
            <div className="mt-5 grid gap-4">
              {recentImages.map((image) => (
                <div key={image.url} className="grid gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4 sm:grid-cols-[7rem_1fr]">
                  <img
                    src={image.url}
                    alt={image.fileName}
                    className="h-28 w-full rounded-md border border-graphite/10 bg-white object-contain sm:w-28"
                  />
                  <div className="grid min-w-0 gap-3">
                    <div>
                      <p className="truncate text-sm font-semibold text-graphite">{image.fileName}</p>
                      <p className="mt-1 text-xs text-steel">
                        {Math.round(image.size / 1024)} KB
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row">
                      <input className={`${fieldClass} min-w-0 flex-1`} value={image.url} readOnly />
                      <button
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:border-red-300 hover:bg-red-50"
                        type="button"
                        onClick={() => deleteRecentImage(image.url)}
                      >
                        Delete
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                      <button
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-teal/90"
                        type="button"
                        onClick={() => copyImageUrl(image.url)}
                      >
                        {copiedUrl === image.url ? "Copied" : "Copy URL"}
                        <Copy className="size-4" aria-hidden="true" />
                      </button>
                      <a
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-graphite/15 bg-white px-4 py-2 text-sm font-semibold text-graphite hover:border-teal hover:text-teal"
                        href={image.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
