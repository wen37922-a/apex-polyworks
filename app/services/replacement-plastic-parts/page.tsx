import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  FileImage,
  FileSearch,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

const pagePath = "/services/replacement-plastic-parts";

const problems = [
  {
    title: "Broken plastic parts",
    text: "Send the damaged part details, operating conditions, and available dimensions for a replacement review."
  },
  {
    title: "Discontinued components",
    text: "Provide the old part reference, equipment information, and any available specification so practical options can be evaluated."
  },
  {
    title: "No CAD drawing",
    text: "Photos, marked sketches, sample dimensions, and application notes can help start the quotation discussion."
  },
  {
    title: "Small quantity requirements",
    text: "One-off, prototype, maintenance, and low-volume requirements can be reviewed before a repeat-production plan is needed."
  }
];

const supportedParts = [
  "Bushings and sleeves",
  "Rollers and spacers",
  "Wear strips and guides",
  "Liners and slide plates",
  "Fixtures",
  "Machine components"
];

const acceptedInputs = [
  ["CAD files", "STEP files and other available 3D references."],
  ["Drawings", "PDF, DXF, DWG, or dimensioned production drawings."],
  ["Photos", "Clear images showing the complete part, damage, and mounting details."],
  ["Sketches", "Marked dimensions, hole locations, thicknesses, and functional notes."],
  ["Samples", "Sample-based review can be discussed when drawings are incomplete."]
];

const workflow = [
  ["01", "Requirement review", "Review the part function, dimensions, quantity, operating conditions, and available files."],
  ["02", "Material evaluation", "Compare the requested material with load, wear, friction, chemical, temperature, and moisture needs."],
  ["03", "Quote", "Confirm the proposed material, manufacturing scope, quantity, inspection needs, and delivery destination."],
  ["04", "Prototype or first part", "A first-part or prototype requirement can be reviewed before repeat production when appropriate."],
  ["05", "Repeat production", "Retain agreed part information to support future maintenance or production requirements."]
];

const materials = [
  {
    name: "POM / Acetal",
    href: "/materials/pom-acetal",
    text: "A common option for dimensionally stable, low-friction mechanical components."
  },
  {
    name: "Nylon PA",
    href: "/materials/nylon-pa",
    text: "Often reviewed for rollers, bushings, wheels, and load-bearing wear components."
  },
  {
    name: "UHMWPE",
    href: "/materials/uhmwpe",
    text: "Useful for low-friction guides, wear strips, liners, and sliding components."
  },
  {
    name: "PTFE",
    href: "/materials/ptfe",
    text: "Considered for chemical exposure, low-friction service, seals, and insulation."
  },
  {
    name: "PEEK",
    href: "/materials/peek",
    text: "Reviewed for demanding thermal, chemical, electrical, and mechanical conditions."
  }
];

const faqs = [
  {
    question: "Can you quote a replacement plastic part without a CAD file?",
    answer:
      "Yes. Clear photographs, a dimensioned sketch, sample measurements, equipment information, and a description of the part function can help begin the review. Additional details may be requested before manufacturing is confirmed."
  },
  {
    question: "Can you review a discontinued or worn plastic component?",
    answer:
      "Yes. Send the available part reference, photographs, dimensions, material information, operating conditions, and quantity. The team will review whether the information is sufficient for quotation and production planning."
  },
  {
    question: "Can you help identify a suitable replacement material?",
    answer:
      "Material options can be discussed using the part function, load, wear, friction, temperature, chemical exposure, moisture, electrical requirements, and mating surfaces. Final suitability remains application specific."
  },
  {
    question: "Can you support one-off or small-quantity replacement parts?",
    answer:
      "Prototype, maintenance, one-off, and low-volume requirements can be reviewed. Minimum order requirements depend on the material, stock size, geometry, manufacturing process, and inspection scope."
  },
  {
    question: "What information helps produce an accurate quotation?",
    answer:
      "Provide the best available drawing or photographs, dimensions, requested material or service conditions, quantity, delivery destination, deadline, and any critical fit, finish, or inspection requirements."
  },
  {
    question: "What inspection or material documentation is available?",
    answer:
      "Inspection and documentation requirements are reviewed by project. Material documentation or inspection reports may be available depending on the selected material, supplier records, drawing requirements, and agreed quotation scope."
  }
];

export const metadata: Metadata = {
  title: "Custom Replacement Plastic Parts from Drawings or Samples",
  description:
    "Request custom replacement plastic parts from drawings, photos, sketches, dimensions, or samples for industrial machinery, maintenance, and low-volume requirements.",
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title: "Custom Replacement Plastic Parts | Apex PolyWorks",
    description:
      "Replacement bushings, rollers, wear strips, guides, liners, fixtures, and machine components reviewed from available project information.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

export default function ReplacementPlasticPartsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Replacement Plastic Parts", path: pagePath }
        ]}
      />
      <FaqJsonLd items={faqs} />

      <section className="border-b border-graphite/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Maintenance and low-volume part support
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Custom Replacement Plastic Parts from Drawings or Samples
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Send the best information you have: a drawing, CAD file, part photographs, marked sketch, sample dimensions, or material requirements. Apex PolyWorks will review the replacement scope before quoting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#replacement-rfq">Request a Replacement Part Quote</ButtonLink>
              <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
                Review CNC Machining
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4">
            {[
              [FileImage, "Flexible input", "Drawings, CAD files, photos, sketches, and sample information are accepted for review."],
              [Settings2, "Practical order fit", "One-off, maintenance, prototype, and low-volume requirements can be evaluated."],
              [ClipboardCheck, "Project-specific review", "Material, geometry, quantity, inspection, and application needs are reviewed before quote release."]
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="rounded-md bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-graphite">{String(title)}</h2>
                    <p className="mt-2 text-sm leading-6 text-steel">{String(text)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Problems we solve"
            title="Start with the industrial problem, even when the documentation is incomplete"
            text="Replacement-part projects often begin with a failed component, an outdated drawing, or a small maintenance requirement. Share the available evidence so the next practical step can be identified."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <article key={problem.title} className="rounded-md border border-graphite/10 bg-slate-50 p-6">
                <Wrench className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{problem.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Parts we support"
            title="Common replacement components for machinery and production equipment"
            text="The final manufacturing route depends on geometry, material, quantity, service conditions, and the quality of the available reference information."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportedParts.map((part) => (
              <div key={part} className="flex items-center gap-3 rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <CheckCircle2 className="size-5 shrink-0 text-amber" aria-hidden="true" />
                <h2 className="font-semibold text-graphite">{part}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Input we accept"
              title="Use the best reference information currently available"
              text="A formal production drawing is helpful but not always required for the initial review. Clear context reduces assumptions and helps identify missing dimensions or specifications."
            />
            <div className="mt-8 grid gap-4">
              {acceptedInputs.map(([title, text]) => (
                <div key={title} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-5">
                  <FileSearch className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <h2 className="font-semibold text-graphite">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-steel">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Workflow"
              title="A clear path from requirement review to repeat production"
              text="Each stage is confirmed according to the information available and the agreed project scope."
            />
            <ol className="mt-8 grid gap-4">
              {workflow.map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-md bg-teal text-sm font-semibold text-white">
                    {number}
                  </span>
                  <div>
                    <h2 className="font-semibold text-graphite">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-steel">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material recommendations"
            title="Match the replacement material to the part function and operating environment"
            text="A visual match alone does not confirm material suitability. Share load, wear, friction, temperature, chemical, moisture, electrical, and mating-surface requirements when available."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {materials.map((material) => (
              <article key={material.name} className="flex flex-col rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-graphite">{material.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-steel">{material.text}</p>
                <Link href={material.href} className="mt-5 text-sm font-semibold text-teal hover:text-teal/80">
                  View material details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-md bg-graphite p-7 text-white lg:p-9">
            <ShieldCheck className="size-8 text-citrus" aria-hidden="true" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
              Inspection and documentation
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">Define quality requirements before quotation</h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Inspection and documentation are project specific. Material records or inspection reports may be available depending on the selected material, supplier documentation, drawing requirements, and agreed quotation scope.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/80">
              <li>Critical dimensions should be identified on the drawing or sketch.</li>
              <li>Fit, finish, and mating-part requirements should be included in the RFQ.</li>
              <li>Documentation needs must be confirmed before the order is placed.</li>
            </ul>
          </div>
          <div id="replacement-rfq" className="scroll-mt-24">
            <QuoteForm
              compact
              showQuantity
              showSize
              serviceNeeded="Replacement Plastic Parts"
              sourceTracking="replacement-parts"
              title="Request a replacement plastic part quote"
              description="Send the available drawing, photos, dimensions, material information, quantity, and part function. Unknown material is acceptable for the initial review."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buyer FAQ"
            title="Replacement plastic part quotation questions"
            text="Practical guidance for maintenance, engineering, and purchasing teams preparing a replacement-part request."
          />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-graphite marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Related sourcing paths"
            title="Continue with machining, material selection, or a full RFQ"
            text="Review the manufacturing process, compare relevant engineering plastics, or send a complete requirement package through the main RFQ page."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">CNC Plastic Machining</ButtonLink>
            <ButtonLink href="/materials" variant="secondary">Browse Relevant Materials</ButtonLink>
            <ButtonLink href="/request-a-quote">Use the Full RFQ Form</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
