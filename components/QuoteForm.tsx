"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock3, Send, Upload } from "lucide-react";
import { rfqConversion } from "@/lib/google-ads";

const fieldClass =
  "min-h-11 rounded-md border border-graphite/15 bg-white px-3 text-sm text-graphite outline-none transition placeholder:text-steel/60 focus:border-teal focus:ring-4 focus:ring-teal/10";

type QuoteFormProps = {
  compact?: boolean;
  defaultMaterial?: string;
  showQuantity?: boolean;
  showSize?: boolean;
  title?: string;
  description?: string;
};

export function QuoteForm({
  compact = false,
  defaultMaterial = "",
  showQuantity = false,
  showSize = false,
  title = "Request pricing and lead time",
  description = "Share material, drawings, and end-use details. RFQs are typically reviewed within 24 hours on business days."
}: QuoteFormProps) {
  const router = useRouter();
  const [formStartedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("formStartedAt", String(formStartedAt));
    formData.set("drawingFileName", fileName);
    const size = String(formData.get("size") || "").trim();
    const projectDescription = String(formData.get("projectDescription") || "").trim();
    if (size) {
      formData.set("projectDescription", `Size / Dimensions: ${size}${projectDescription ? `\n\n${projectDescription}` : ""}`);
    }

    try {
      const response = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
        cache: "no-store"
      });

      const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit the RFQ. Please email sales@apexpolyworks.com directly.");
      }

      if (data?.ok !== true) {
        throw new Error("Unable to submit the RFQ. Please email sales@apexpolyworks.com directly.");
      }

      try {
        sessionStorage.setItem(rfqConversion.storageKey, "1");
      } catch {
        // Conversion tracking should not block a successful RFQ submission.
      }

      router.push("/thank-you");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit the RFQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action="/api/request-quote"
      className="grid gap-4 rounded-md border border-graphite/10 bg-white p-5 shadow-soft"
      encType="multipart/form-data"
      method="post"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-lg font-semibold text-graphite">{title}</p>
        <p className="mt-2 text-sm leading-6 text-steel">
          {description}
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-mint px-3 py-2 text-sm font-semibold text-teal">
          <Clock3 className="size-4" aria-hidden="true" />
          Typical RFQ review within 24 business hours
        </p>
      </div>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800" role="alert">
          {error}
        </div>
      ) : null}

      <label className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <input type="hidden" name="formStartedAt" value={formStartedAt} readOnly />
      <input type="hidden" name="drawingFileName" value={fileName} readOnly />
      <input type="hidden" name="company" value="Not provided" readOnly />
      <input type="hidden" name="country" value="United States" readOnly />
      <input type="hidden" name="serviceNeeded" value="Material Supply / CNC Machining" readOnly />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Name
          <input className={fieldClass} name="name" placeholder="Jane Smith" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Email
          <input className={fieldClass} name="email" placeholder="name@company.com" type="email" required />
        </label>
      </div>
      <div className={`grid gap-4 ${showQuantity || showSize ? "sm:grid-cols-2" : ""}`}>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Material
          <input className={fieldClass} name="material" defaultValue={defaultMaterial} placeholder="PEEK, PTFE, UHMWPE, Nylon..." required={!compact || Boolean(defaultMaterial)} />
        </label>
        {showSize ? (
          <label className="grid gap-2 text-sm font-medium text-graphite">
            Size / Dimensions
            <input className={fieldClass} name="size" placeholder="12 x 24 x 0.5 in or drawing dimensions" />
          </label>
        ) : showQuantity ? (
          <label className="grid gap-2 text-sm font-medium text-graphite">
            Quantity
            <input className={fieldClass} name="quantity" placeholder="10 pcs, 2 sheets, 1 prototype..." />
          </label>
        ) : (
          <input type="hidden" name="quantity" value="" readOnly />
        )}
      </div>
      {showSize && showQuantity ? (
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Quantity
          <input className={fieldClass} name="quantity" placeholder="10 pcs, 2 sheets, 1 prototype..." />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-medium text-graphite">
        Drawing Upload
        <span className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-graphite/25 bg-slate-50 px-4 py-3 text-sm font-medium text-steel transition hover:border-teal/50 hover:bg-mint/40">
          <span className="inline-flex items-center gap-2">
            <Upload className="size-4" aria-hidden="true" />
            {fileName || "PDF, STEP, DXF, DWG, or image file up to 20MB"}
          </span>
          <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-graphite shadow-sm">
            Choose File
          </span>
        </span>
        <input
          className="sr-only"
          name="drawing"
          type="file"
          accept=".pdf,.step,.stp,.dxf,.dwg,.jpg,.jpeg,.png,.webp"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-graphite">
        Message
        <textarea className={`${fieldClass} min-h-32 py-3`} name="projectDescription" placeholder="Dimensions, tolerance, application, deadline, shipping destination..." required={!compact} />
      </label>
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber/90 focus:outline-none focus:ring-4 focus:ring-amber/20 disabled:cursor-not-allowed disabled:bg-steel" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending RFQ..." : "Send RFQ"}
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
