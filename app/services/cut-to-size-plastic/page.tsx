import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Ruler,
  Scissors,
  Send,
  Ship
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const pagePath = "/services/cut-to-size-plastic";

const cuttingOptions = [
  {
    icon: Scissors,
    title: "Plastic Sheet Cutting",
    text: "Engineering plastic sheets can be cut into required sizes for industrial applications.",
    materials: ["POM", "UHMWPE", "PTFE", "PEEK"]
  },
  {
    icon: Ruler,
    title: "Plastic Rod Cutting",
    text: "Engineering plastic rods can be cut to required lengths for machining and fabrication.",
    materials: ["PEEK", "POM", "PTFE"]
  },
  {
    icon: Boxes,
    title: "Custom Dimensions",
    text: "Provide your required dimensions and quantity for a suitable material solution.",
    materials: ["Blanks", "Strips", "Panels", "Cut lengths"]
  }
];

const processSteps = [
  {
    number: "01",
    icon: Send,
    title: "Send Material Requirements",
    text: "Share the material, dimensions, quantity and application information available."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Receive Quotation",
    text: "Material availability and cutting requirements are reviewed before quotation details are provided."
  },
  {
    number: "03",
    icon: Scissors,
    title: "Cut and Prepare Material",
    text: "Material is prepared according to the dimensions and scope agreed in the quotation."
  },
  {
    number: "04",
    icon: Ship,
    title: "Ship Worldwide",
    text: "Export packaging and international delivery arrangements can be coordinated for the order."
  }
];

const cutSizeBenefits = [
  "Reduce material waste",
  "Purchase only required dimensions",
  "Flexible quantities",
  "Simplify material preparation",
  "Export support for international customers"
];

const applications = [
  {
    title: "Automation Equipment",
    text: "Prepared sheets, rods and blanks for fixtures, guides, supports and equipment components."
  },
  {
    title: "Packaging Machinery",
    text: "Cut material for change parts, wear components, supports and maintenance requirements."
  },
  {
    title: "Mechanical Components",
    text: "Material prepared for bushings, spacers, rollers, plates and other drawing-based parts."
  },
  {
    title: "Maintenance Replacement Parts",
    text: "Practical material sizes for repair work and replacement-component preparation."
  },
  {
    title: "CNC Machining Preparation",
    text: "Cut blanks and rod lengths prepared for downstream milling, turning and fabrication."
  }
];

const quoteGuidance = [
  "Material type or preferred grade",
  "Sheet, rod or blank dimensions",
  "Quantity",
  "Required tolerance, when applicable",
  "Application information"
];

const faqs = [
  {
    question: "Can engineering plastics be cut to custom sizes?",
    answer:
      "Yes. Engineering plastic sheets, plates and rods can be reviewed for cut-to-size supply. The suitable cutting method and quotation depend on the material, stock form, dimensions, quantity and dimensional requirements."
  },
  {
    question: "What engineering plastics can you cut?",
    answer:
      "Common requests include POM (Acetal), UHMWPE, PTFE and PEEK, along with other engineering plastics. Share the material or application requirement so available grades, forms and cutting options can be reviewed."
  },
  {
    question: "Can you cut plastic sheets and rods?",
    answer:
      "Yes. Plastic sheets can be prepared as panels, strips or blanks, while rods can be cut to required lengths. Available options vary according to the selected material, stock size and quantity."
  },
  {
    question: "Can I order small quantities?",
    answer:
      "Small-quantity and maintenance requirements can be reviewed. Practical order quantities depend on material availability, stock form, requested dimensions and the cutting work required."
  },
  {
    question: "Do you provide PEEK, POM, PTFE and UHMWPE cutting?",
    answer:
      "Yes. Cut-to-size requests for PEEK, POM, PTFE and UHMWPE can be reviewed. Include the grade when known, original stock form, required dimensions and quantity in the RFQ."
  },
  {
    question: "What information is required for quotation?",
    answer:
      "Provide the material, grade when known, sheet thickness or rod diameter, required cut dimensions, quantity, dimensional requirements and delivery destination. Application details help identify issues that may affect material or preparation options."
  },
  {
    question: "Can you ship cut plastic materials internationally?",
    answer:
      "Yes. Apex PolyWorks supports international industrial customers. Packaging and delivery arrangements are reviewed according to the material, dimensions, shipment weight, order quantity and destination."
  },
  {
    question: "Do you provide CNC machining after cutting?",
    answer:
      "Yes. CNC plastic machining is available as an optional supporting service when a project requires finished features or components rather than cut material only. Send a drawing or sample information for a separate machining review."
  }
];

export const metadata: Metadata = {
  title: {
    absolute: "Cut-to-Size Engineering Plastics | Custom Sheet & Rod Sizes | Apex PolyWorks"
  },
  description:
    "Apex PolyWorks provides cut-to-size engineering plastics including PEEK, POM, PTFE and UHMWPE sheets and rods with custom dimensions for industrial applications worldwide.",
  keywords: [
    "plastic cut to size",
    "engineering plastic cut to size",
    "custom plastic sheet cutting",
    "cut plastic sheet to size",
    "plastic rod cut to length"
  ],
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title: "Cut-to-Size Engineering Plastics | Custom Sheet & Rod Sizes | Apex PolyWorks",
    description:
      "Engineering plastic sheets and rods cut to custom dimensions for industrial applications worldwide.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

export default async function CutToSizePlasticPage() {
  const images = await getProductImages();
  const materials = [
    {
      name: "POM / Acetal",
      text: "Low-friction engineering plastic widely used for mechanical parts, guides and wear components.",
      href: "/materials/pom-acetal",
      image: images.POM.hero,
      alt: "POM Acetal sheet and rod material for custom cut sizes"
    },
    {
      name: "UHMWPE",
      text: "Wear-resistant engineering plastic commonly used for liners, guides and industrial applications.",
      href: "/materials/uhmwpe",
      image: images.UHMWPE.hero,
      alt: "UHMWPE engineering plastic sheet for cut-to-size supply"
    },
    {
      name: "PTFE",
      text: "Chemical-resistant material with excellent low-friction properties.",
      href: "/materials/ptfe",
      image: images.PTFE.sheet,
      alt: "PTFE engineering plastic sheet prepared for custom cutting"
    },
    {
      name: "PEEK",
      text: "High-performance engineering plastic for demanding industrial environments.",
      href: "/materials/peek",
      image: images.PEEK.sheet[0] || images.PEEK.hero,
      alt: "PEEK engineering plastic sheet available in custom cut dimensions"
    }
  ];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Cut-to-Size Engineering Plastics", path: pagePath }
        ]}
      />
      <FaqJsonLd items={faqs} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Custom sheet and rod dimensions
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Cut-to-Size Engineering Plastics
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Get engineering plastic sheets and rods cut to your required dimensions. Flexible sizes, material supply and worldwide shipping support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request Material Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">
                Send Drawing / Requirement
              </ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-3">
              {["Engineering plastic supply", "Custom dimensions", "No oversized stock required"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
            <Image
              src={images.HOMEPAGE.hero}
              alt="Engineering plastic sheets and rods supplied in custom cut sizes"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Material purchasing"
            title="Custom Plastic Cutting Service"
            text="Many industrial customers do not need full-size sheets or rods. Apex PolyWorks provides flexible cut-to-size options for engineering plastics to reduce material waste and simplify purchasing."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Specify the material and stock form",
              "Request practical dimensions",
              "Match quantity to the project",
              "Prepare material for downstream work"
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-center gap-3 rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <CheckCircle2 className="size-6 shrink-0 text-teal" aria-hidden="true" />
                <p className="text-base font-semibold leading-6 text-graphite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Preparation options"
            title="Cutting Options Available"
            text="Send the stock form, finished dimensions and quantity required so the material and cutting scope can be reviewed."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cuttingOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <option.icon className="size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{option.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{option.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {option.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded border border-graphite/10 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-ink"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cut-to-size materials"
            title="Engineering Plastics Available for Cut-to-Size"
            text="These are commonly requested materials. Grade, stock form and current availability are reviewed against each RFQ."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <article
                key={material.name}
                className="group flex min-h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-semibold text-graphite">{material.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-steel">{material.text}</p>
                  <Link
                    href={material.href}
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-graphite/15 bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    View Material
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products/peek-sheet" variant="secondary">
              View PEEK Sheet Supply
            </ButtonLink>
            <ButtonLink href="/products/engineering-plastics-stock-shapes" variant="secondary">
              View Stock Shapes Supply
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Simple purchasing workflow"
            title="How Our Cut-to-Size Service Works"
            text="The process begins with material and dimensional information, not a machining requirement."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-semibold text-amber">{step.number}</span>
                <step.icon className="mt-4 size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Purchasing benefits"
            title="Why Order Cut-to-Size Engineering Plastics?"
            text="Cut-to-size supply can reduce unnecessary stock purchasing and remove a preparation step before fabrication or installation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {cutSizeBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex min-h-24 items-center gap-3 rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <CheckCircle2 className="size-6 shrink-0 text-teal" aria-hidden="true" />
                <p className="text-base font-semibold leading-6 text-graphite">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industrial uses"
            title="Common Applications"
            text="Prepared stock materials support equipment builders, machining teams and maintenance requirements across practical industrial applications."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((application) => (
              <article
                key={application.title}
                className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
                <Factory className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{application.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{application.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Optional machining support
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Need Finished Plastic Parts?</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-steel">
              For customers requiring finished components, Apex PolyWorks also provides CNC machining support based on drawings or samples.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">
              This is an additional option. Customers can request cut material only without adding machining to the order.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
                Review CNC Machining Support
              </ButtonLink>
              <ButtonLink href="/request-a-quote">Send Drawing / Requirement</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={images.HOMEPAGE.cnc}
              alt="Optional CNC machining support for finished engineering plastic components"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cut-to-size FAQ"
            title="Custom plastic sheet and rod cutting questions"
            text="Guidance for buyers requesting engineering plastic stock in practical dimensions."
          />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-graphite marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-4 border-t border-graphite/10 pt-4 text-sm leading-7 text-steel">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cut-to-size-rfq" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Cut-to-size material RFQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Request Cut-to-Size Engineering Plastics Quote
            </h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Send the required material form, dimensions and quantity. Add a drawing when the request includes a profile, hole pattern or dimensional detail.
            </p>
            <div className="mt-7 grid gap-3">
              {quoteGuidance.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm
            compact
            showQuantity
            showSize
            defaultMaterial="Engineering Plastics"
            serviceNeeded="Cut-to-Size Engineering Plastics"
            sourceTracking="cut-to-size-plastic"
            title="Request a cut-to-size material quote"
            description="Add the material, stock form, dimensions, quantity, dimensional requirements and application information for review."
          />
        </div>
      </section>
    </main>
  );
}
