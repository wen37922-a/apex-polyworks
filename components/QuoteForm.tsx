"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Send, Upload } from "lucide-react";

const fieldClass =
  "min-h-11 rounded-md border border-graphite/15 bg-white px-3 text-sm text-graphite outline-none transition placeholder:text-steel/60 focus:border-teal focus:ring-4 focus:ring-teal/10";

const services = [
  "CNC Plastic Machining",
  "Laser Cutting",
  "Cut-to-Size Plastic Sheets",
  "Injection Molding",
  "Plastic Bending",
  "Plastic Welding",
  "Surface Finishing",
  "Material Supply",
  "Not Sure Yet"
];

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
  "Australia",
  "Other"
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
    setFileName("");
    event.currentTarget.reset();
    router.push("/thank-you");
  }

  return (
    <form
      className="grid gap-4 rounded-md border border-graphite/10 bg-white p-5 shadow-soft"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-lg font-semibold text-graphite">Request pricing and lead time</p>
        <p className="mt-2 text-sm leading-6 text-steel">
          Share material, quantity, drawings, and end-use details. A complete RFQ usually gets reviewed within 24 hours.
        </p>
      </div>

      {isSubmitted ? (
        <div className="flex gap-3 rounded-md border border-teal/20 bg-mint p-4 text-sm leading-6 text-graphite" role="status">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
          <span>
            Thank you. Your RFQ has been submitted successfully. Our sales team will review the project details and respond within 24 hours.
          </span>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Name
          <input className={fieldClass} name="name" placeholder="Jane Smith" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Company
          <input className={fieldClass} name="company" placeholder="Company name" required />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Email
          <input className={fieldClass} name="email" placeholder="name@company.com" type="email" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Phone
          <input className={fieldClass} name="phone" placeholder="+1" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Country
          <select className={fieldClass} name="country" defaultValue="United States" required>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Material
          <input className={fieldClass} name="material" placeholder="PEEK, acetal, PC, HDPE..." required={!compact} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Service Needed
          <select className={fieldClass} name="serviceNeeded" defaultValue="" required={!compact}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          Quantity
          <input className={fieldClass} name="quantity" placeholder="1 prototype, 50 pcs, 20 sheets..." required={!compact} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-graphite">
        Drawing Upload
        <span className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-graphite/25 bg-slate-50 px-4 py-3 text-sm font-medium text-steel transition hover:border-teal/50 hover:bg-mint/40">
          <span className="inline-flex items-center gap-2">
            <Upload className="size-4" aria-hidden="true" />
            {fileName || "PDF, STEP, DXF, DWG, or image file"}
          </span>
          <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-graphite shadow-sm">
            Choose File
          </span>
        </span>
        <input
          className="sr-only"
          name="drawing"
          type="file"
          accept=".pdf,.step,.stp,.dxf,.dwg,.jpg,.jpeg,.png"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-graphite">
        Project Description
        <textarea className={`${fieldClass} min-h-36 py-3`} name="projectDescription" placeholder="Dimensions, tolerance, finish, application, deadline, shipping destination..." required={!compact} />
      </label>
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber/90 focus:outline-none focus:ring-4 focus:ring-amber/20" type="submit">
        Send RFQ
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
