import type { Metadata } from "next";
import { CheckCircle2, FileCheck2, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { GoogleAdsRfqConversion } from "@/components/GoogleAdsRfqConversion";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You for Your RFQ",
  description:
    "Thank you for submitting a quote request to Apex PolyWorks.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <GoogleAdsRfqConversion />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote" },
          { name: "Thank You", path: "/thank-you" }
        ]}
      />
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <div className="mx-auto grid size-16 place-items-center rounded-md bg-mint text-teal">
          <CheckCircle2 className="size-9" aria-hidden="true" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          RFQ received
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
          Thank you. Your quote request has been submitted.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
          Our team will review your project details and follow up within 12 hours. If drawings, material notes, or deadline details change, send an update to {siteConfig.email}.
        </p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-md border border-graphite/10 bg-slate-50 p-5">
            <FileCheck2 className="size-6 text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-graphite">What happens next</h2>
            <p className="mt-2 text-sm leading-6 text-steel">
              We check material, quantity, manufacturing route, tolerance, finish, and packing assumptions before responding.
            </p>
          </div>
          <div className="rounded-md border border-graphite/10 bg-slate-50 p-5">
            <Mail className="size-6 text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-graphite">Need to add files?</h2>
            <p className="mt-2 text-sm leading-6 text-steel">
              Email drawings, STEP files, DXF files, or revised specifications to {siteConfig.email}.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/materials" variant="secondary">Browse Materials</ButtonLink>
        </div>
      </section>
    </main>
  );
}
