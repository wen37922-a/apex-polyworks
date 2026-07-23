import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  FileCheck2,
  Gauge,
  Layers3,
  PackageCheck,
  RefreshCw,
  Ruler,
  Send,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { DetailItem } from "@/lib/site";

type DetailTemplateProps = {
  item: DetailItem;
  parentLabel: string;
};

const cncFaqs = [
  {
    question: "What files can I send for a CNC plastic parts quotation?",
    answer:
      "You can send PDF drawings, STEP files, DXF or DWG files, photos, sketches, or available sample dimensions. Clear notes about critical features and intended use help the review."
  },
  {
    question: "Can you manufacture a replacement plastic part from a sample or photo?",
    answer:
      "Photos and physical samples can be reviewed when original CAD data is unavailable. Additional dimensions or application information may be requested before a manufacturing approach is confirmed."
  },
  {
    question: "Do you support prototypes and low-volume production?",
    answer:
      "Yes. Projects can include prototype parts, first-part evaluation, low-volume requirements, repair components, and repeat production orders, subject to drawing and material review."
  },
  {
    question: "Which engineering plastics can be CNC machined?",
    answer:
      "Common project materials include POM or acetal, UHMWPE, nylon, PTFE, PEEK, polycarbonate, HDPE, PVC, and acrylic. The appropriate material depends on the application and part requirements."
  },
  {
    question: "Can Apex PolyWorks help with material selection?",
    answer:
      "Our team can discuss material options based on wear, load, temperature, chemical exposure, moisture, electrical behavior, and other application conditions. Final material approval remains project-specific."
  },
  {
    question: "What information is needed for an accurate CNC machining quote?",
    answer:
      "Provide the drawing or sample information, preferred material, dimensions, quantity, operating conditions, critical tolerances, finish requirements, inspection needs, and delivery destination when available."
  },
  {
    question: "How are inspection and documentation requirements handled?",
    answer:
      "Dimensional checks, material documentation, and inspection reporting can be discussed according to the drawing, material source, and project requirements before production."
  },
  {
    question: "Can repeat orders follow an approved first part?",
    answer:
      "Repeat production can be supported after the part definition, material, revision, and inspection expectations have been confirmed for the project."
  }
];

const cncManufacturingGroups = [
  {
    title: "Precision Components",
    items: ["Bushings", "Rollers", "Spacers", "Sleeves"]
  },
  {
    title: "Wear Components",
    items: ["UHMWPE wear strips", "Guides", "Liners"]
  },
  {
    title: "Industrial Components",
    items: ["Fixtures", "Supports", "Covers"]
  }
];

const cncWorkflow = [
  ["01", "Requirement Review", "Review drawings, CAD files, photos, samples, quantities, and the intended application."],
  ["02", "Material Discussion", "Discuss practical engineering plastic options based on the operating environment and part function."],
  ["03", "Quote", "Confirm the proposed material, manufacturing scope, quantity, and project-specific requirements."],
  ["04", "Prototype / First Part", "Support an initial part or prototype review when the project requires verification before repeat production."],
  ["05", "Repeat Production", "Coordinate repeat orders against the confirmed part revision, material, and inspection expectations."]
] as const;

const cncMaterials = [
  {
    name: "POM / Acetal",
    href: "/materials/pom-acetal",
    text: "Often considered for dimensionally stable parts, bushings, fixtures, and low-friction components."
  },
  {
    name: "UHMWPE",
    href: "/materials/uhmwpe",
    text: "Commonly evaluated for wear strips, guides, liners, slide plates, and impact-prone components."
  },
  {
    name: "Nylon PA",
    href: "/materials/nylon-pa",
    text: "Used for industrial components where strength, wear behavior, or load support may be important."
  },
  {
    name: "PTFE",
    href: "/materials/ptfe",
    text: "Considered for low-friction, chemical exposure, sealing, and electrical insulation applications."
  },
  {
    name: "PEEK",
    href: "/materials/peek",
    text: "Selected for demanding applications that require a high-performance engineering plastic."
  }
];

const cncQuoteRequirements = [
  [FileCheck2, "Drawing or CAD", "PDF, STEP, DXF, DWG, or another available technical reference."],
  [PackageCheck, "Photos or Samples", "Useful for broken, discontinued, or replacement components without complete CAD data."],
  [Layers3, "Material", "Preferred plastic grade, color, certification needs, or application requirements."],
  [Ruler, "Dimensions", "Overall size, interfaces, critical features, and project-specific tolerances."],
  [RefreshCw, "Quantity", "Prototype, first-part, low-volume, repeat order, or estimated annual requirement."],
  [Gauge, "Operating Conditions", "Load, wear, temperature, chemicals, moisture, electrical needs, and service environment."]
] as const;

const cncRelatedLinks = [
  {
    href: "/services/replacement-plastic-parts",
    label: "Replacement Plastic Parts",
    text: "Support for damaged or discontinued components from drawings, photos, or samples."
  },
  {
    href: "/products/uhmwpe-wear-parts",
    label: "UHMWPE Wear Parts",
    text: "Wear strips, guide rails, liners, slide plates, and custom wear components."
  },
  {
    href: "/materials/pom-acetal",
    label: "POM / Acetal",
    text: "Review acetal material options for machined industrial components."
  },
  {
    href: "/materials/uhmwpe",
    label: "UHMWPE",
    text: "Explore UHMWPE material supply and wear-related applications."
  },
  {
    href: "/materials/nylon-pa",
    label: "Nylon PA",
    text: "Review nylon material forms and machining applications."
  },
  {
    href: "/materials/ptfe",
    label: "PTFE",
    text: "Explore PTFE material and custom component support."
  },
  {
    href: "/materials/peek",
    label: "PEEK",
    text: "Review high-performance PEEK material and CNC component options."
  },
  {
    href: "/industries/industrial-equipment",
    label: "Industrial Equipment",
    text: "Plastic component support for machinery and equipment applications."
  },
  {
    href: "/industries/food-processing",
    label: "Food Processing",
    text: "Material and component considerations for food and packaging equipment."
  },
  {
    href: "/request-a-quote",
    label: "Request a Quote",
    text: "Send drawings, dimensions, photos, or material requirements for review."
  }
];

export function DetailTemplate({ item, parentLabel }: DetailTemplateProps) {
  const parentPath = `/${parentLabel.toLowerCase()}`;
  const isCncPage = item.slug === "cnc-plastic-machining";
  const showQuickRfq = parentLabel === "Materials" || parentLabel === "Products" || isCncPage;
  const cncCapabilities = [
    [Settings2, "CNC milling and turning", "Plastic parts, fixtures, pockets, profiles, and turned features are reviewed by drawing."],
    [Ruler, "Tolerance engineering review", "Tolerances are reviewed according to material, geometry, part size and inspection requirements."],
    [Gauge, "Prototype + Low-volume + Repeat Production", "One-off repair parts, samples, bridge orders, low-volume requirements, and repeat production batches."]
  ] as const;
  const heroCtas = (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href={isCncPage ? "#cnc-rfq" : "/request-a-quote"}>
        {isCncPage ? "Request a CNC Plastic Parts Quote" : "Request a Quote"}
      </ButtonLink>
      <ButtonLink href={isCncPage ? "#cnc-rfq" : "/request-a-quote"} variant="secondary">
        {isCncPage ? "Upload Drawing or Part Photo" : "Send Drawing"}
      </ButtonLink>
    </div>
  );

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: parentLabel, path: parentPath },
          { name: item.title, path: `${parentPath}/${item.slug}` }
        ]}
      />
      {isCncPage ? <FaqJsonLd items={cncFaqs} /> : null}
      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {parentLabel} / {item.eyebrow}
            </p>
            <h1 className={`mt-4 max-w-4xl font-semibold leading-tight text-graphite ${
              isCncPage ? "text-3xl sm:text-5xl" : "text-4xl sm:text-5xl"
            }`}>
              {item.title}
            </h1>
            {(parentLabel === "Materials" || parentLabel === "Products") ? (
              <p className="mt-4 text-lg font-semibold text-teal">
                High-performance engineering plastic for demanding environments
              </p>
            ) : null}
            <p className={`mt-5 max-w-3xl text-steel ${
              isCncPage ? "text-base leading-7 sm:text-lg sm:leading-8" : "text-lg leading-8"
            }`}>{item.description}</p>
            {isCncPage ? heroCtas : null}
            {isCncPage ? (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Drawings, CAD files, photos, or samples",
                  "Prototype and first-part support",
                  "Low-volume production requirements",
                  "Repeat order coordination"
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-semibold text-graphite">
                    <CheckCircle2 className="size-4 shrink-0 text-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
            {!isCncPage ? heroCtas : null}
          </div>
          {item.heroImage ? (
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[24rem]">
              <Image
                src={item.heroImage.src}
                alt={item.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {showQuickRfq ? (
        <section id={isCncPage ? "cnc-rfq" : undefined} className="scroll-mt-24 border-b border-graphite/10 bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Quick RFQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {isCncPage ? "Request a CNC plastic parts quote" : "Request price, lead time, and stock availability"}
              </h2>
              <p className="mt-4 text-base leading-8 text-steel">
                {isCncPage
                  ? "Send a drawing, CAD file, part photo, sample details, dimensions, quantity, and operating conditions. Our team will review the material and manufacturing requirements."
                  : "Send material type, quantity, drawing, or application notes. RFQs are typically reviewed within 24 hours on business days."}
              </p>
            </div>
            <QuoteForm
              compact
              showQuantity
              showSize={isCncPage}
              serviceNeeded={isCncPage ? "CNC Plastic Machining" : undefined}
              sourceTracking={isCncPage ? "cnc-plastic-machining" : undefined}
              title={isCncPage ? "CNC plastic parts RFQ" : `Quick RFQ for ${item.title}`}
              description={
                isCncPage
                  ? "Start with your contact details, material or application, dimensions, quantity, and any available drawing or part photo."
                  : "Start with name, email, material type, quantity, and drawing upload."
              }
            />
          </div>
        </section>
      ) : null}

      {isCncPage ? (
        <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {cncCapabilities.map(([Icon, title, text]) => (
                <div key={title} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                  <Icon className="size-6 text-teal" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-graphite">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-graphite">Capabilities and buyer fit</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="rounded-md border border-graphite/10 bg-slate-50 p-4">
                  <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-ink">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-md border border-graphite/10 bg-graphite p-6 text-white">
            <p className="text-lg font-semibold">Quote notes</p>
            <div className="mt-5 grid gap-4">
              {item.specs.map((spec) => (
                <div key={spec} className="border-l-2 border-amber pl-4 text-sm leading-6 text-white/75">
                  {spec}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {isCncPage ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                What we manufacture
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                Custom plastic components for industrial equipment
              </h2>
              <p className="mt-4 text-base leading-8 text-steel">
                Part geometry, material, quantity, and operating requirements are reviewed before a manufacturing approach is confirmed.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {cncManufacturingGroups.map((group) => (
                <article key={group.title} className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm">
                  <Wrench className="size-6 text-teal" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-graphite">{group.title}</h3>
                  <ul className="mt-4 grid gap-3">
                    {group.items.map((part) => (
                      <li key={part} className="flex items-center gap-2 text-sm text-steel">
                        <CheckCircle2 className="size-4 shrink-0 text-amber" aria-hidden="true" />
                        {part}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {item.galleryImages?.length ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Product photos
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {item.galleryTitle || `${item.title} gallery`}
              </h2>
              {item.galleryText ? (
                <p className="mt-4 text-sm leading-7 text-steel">{item.galleryText}</p>
              ) : null}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {item.galleryImages.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isCncPage ? (
        <>
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                  Manufacturing workflow
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-graphite">
                  From requirement review to repeat production
                </h2>
              </div>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {cncWorkflow.map(([number, title, text]) => (
                  <li key={number} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                    <span className="text-sm font-semibold text-amber">{number}</span>
                    <h3 className="mt-3 text-lg font-semibold text-graphite">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-y border-graphite/10 bg-mint/35 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  Material selection support
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-graphite">
                  Match the plastic to the application
                </h2>
                <p className="mt-4 text-base leading-8 text-steel">
                  Material discussions consider part function and operating conditions. Recommendations are reviewed against customer requirements before production.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {cncMaterials.map((material) => (
                  <Link
                    key={material.href}
                    href={material.href}
                    className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                  >
                    <h3 className="text-lg font-semibold text-graphite">{material.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{material.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:px-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                  Quote requirements
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-graphite">
                  Information that helps us review your parts
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {cncQuoteRequirements.map(([Icon, title, text]) => (
                    <article key={title} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                      <Icon className="size-5 text-teal" aria-hidden="true" />
                      <h3 className="mt-3 font-semibold text-graphite">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <aside className="rounded-md bg-graphite p-6 text-white shadow-soft">
                <ShieldCheck className="size-7 text-citrus" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-semibold">Inspection and documentation</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Dimensional checks, material documentation, revision control, and inspection reporting can be discussed according to the drawing and project requirements.
                </p>
                <div className="mt-6">
                  <ButtonLink href="#cnc-rfq">Send Project Requirements</ButtonLink>
                </div>
              </aside>
            </div>
          </section>
        </>
      ) : null}

      {item.featureImage ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
              <Image
                src={item.featureImage.src}
                alt={item.featureImage.alt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Inventory support
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">{item.featureImage.title}</h2>
              <p className="mt-4 text-base leading-8 text-steel">{item.featureImage.text}</p>
              <div className="mt-8">
                <ButtonLink href="/request-a-quote">Request Stock Availability</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-graphite/10 bg-mint/45 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-graphite">Common applications</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {item.applications.map((application) => (
              <div key={application} className="rounded-md bg-white px-4 py-5 text-sm font-semibold text-graphite shadow-sm">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Industries served
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Aerospace", "Automotive", "Electronics", "Medical"].map((industry) => (
              <div key={industry} className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-5 text-sm font-semibold text-graphite">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCncPage ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Related manufacturing resources
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cncRelatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                  <span className="text-base font-semibold text-graphite">{link.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-steel">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isCncPage ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Procurement FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                CNC plastic machining questions
              </h2>
            </div>
            <div className="mt-8 grid gap-3">
              {cncFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-md border border-graphite/10 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-graphite">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-steel">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isCncPage ? (
        <ButtonLink
          href="#cnc-rfq"
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 shadow-soft lg:inline-flex"
        >
          <Send className="size-4" aria-hidden="true" />
          Send Drawing for Quote
        </ButtonLink>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                Ready for quote review
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isCncPage ? "Ready to quote custom CNC plastic parts?" : "Send drawings, dimensions, or a material list."}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                Include quantity, deadline, finish, tolerance, and the end-use environment so our team can recommend the right manufacturing path.
              </p>
            </div>
            <ButtonLink href={isCncPage ? "#cnc-rfq" : "/request-a-quote"} variant="primary">
              {isCncPage ? "Request a CNC Plastic Parts Quote" : "Start RFQ"}
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
