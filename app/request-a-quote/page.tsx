import type { Metadata } from "next";
import { Clock3, FileCheck2, Layers3, PackageCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote for Plastic Materials or Custom Plastic Parts",
  description:
    "Send an RFQ for engineering plastic sheets, rods, films, CNC machined plastic parts, cut-to-size materials, and custom fabrication.",
  alternates: {
    canonical: `${siteConfig.url}/request-a-quote`
  }
};

export default function RequestQuotePage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote" }
        ]}
      />
      <PageHero
        eyebrow="Request a quote"
        title="Send drawings, material lists, or custom plastic part requirements"
        text="A complete RFQ is usually reviewed within 24 hours. If your material is not fixed, describe the environment and we will suggest practical options."
        primaryCta="Complete RFQ"
        secondaryCta="Contact Sales"
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="RFQ checklist"
              title="Details that help us quote accurately"
              text="You can still send a rough request. These details simply reduce assumptions and speed up the response."
            />
            <div className="mt-8 grid gap-4">
              {[
                [FileCheck2, "Drawing or file", "PDF, STEP, DXF, DWG, photo, sketch, or sample dimensions."],
                [Layers3, "Material and grade", "Plastic type, color, thickness, diameter, film gauge, or performance requirements."],
                [PackageCheck, "Quantity and delivery", "Prototype quantity, production batch, recurring need, deadline, and destination."],
                [Clock3, "Use environment", "Temperature, load, chemicals, wear, food contact, electrical, and cosmetic needs."]
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4">
                  <Icon className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <h2 className="font-semibold text-graphite">{String(title)}</h2>
                    <p className="mt-1 text-sm leading-6 text-steel">{String(text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
