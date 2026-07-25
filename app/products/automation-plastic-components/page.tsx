import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  Cog,
  FileImage,
  FileSearch,
  Gauge,
  Layers3,
  PackageCheck,
  Ruler,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const pagePath = "/products/automation-plastic-components";

const challenges = [
  {
    title: "Wear problems",
    text: "Recurring contact can wear guides, sliders, rollers, bushings, and other equipment components."
  },
  {
    title: "Friction issues",
    text: "Sliding behavior, mating surfaces, speed, and load should be reviewed when motion becomes inconsistent."
  },
  {
    title: "Small quantities",
    text: "Prototype, first-part, and low-volume requirements can be evaluated without assuming a large production run."
  },
  {
    title: "Replacement components",
    text: "Damaged or discontinued parts can be reviewed from drawings, dimensions, photographs, or available samples."
  },
  {
    title: "Material selection",
    text: "Operating conditions help narrow suitable plastics when the original material is unknown or no longer appropriate."
  }
];

const components = [
  "Fixtures",
  "Positioning blocks",
  "Guide rails",
  "Sliders",
  "Bushings",
  "Rollers",
  "Spacers",
  "Supports",
  "Covers"
];

const applications = [
  {
    title: "Packaging machinery",
    text: "Guides, change parts, supports, rollers, and fixtures for product handling and machine setup."
  },
  {
    title: "Assembly equipment",
    text: "Positioning blocks, nests, spacers, and supports for assembly and production tooling."
  },
  {
    title: "Conveyor systems",
    text: "Guide rails, wear strips, sliders, rollers, and transition components for material movement."
  },
  {
    title: "Inspection systems",
    text: "Fixtures, locating components, insulating parts, and protective covers for checking equipment."
  },
  {
    title: "General automation equipment",
    text: "Drawing-based plastic components for machine builders, integrators, maintenance teams, and OEM projects."
  }
];

const materials = [
  {
    name: "POM / Acetal",
    href: "/materials/pom-acetal",
    text: "Often evaluated for precision fixtures, positioning blocks, bushings, spacers, and moving components."
  },
  {
    name: "UHMWPE",
    href: "/materials/uhmwpe",
    text: "Commonly considered for guide rails, wear strips, sliders, liners, and low-friction contact surfaces."
  },
  {
    name: "Nylon PA",
    href: "/materials/nylon-pa",
    text: "Used for rollers, wheels, bushings, gears, and load-supporting components when the application is suitable."
  },
  {
    name: "Polycarbonate PC",
    href: "/materials/polycarbonate-pc",
    text: "A practical option for machine covers, guards, windows, and impact-resistant protective components."
  },
  {
    name: "PEEK",
    href: "/materials/peek",
    text: "Reviewed for demanding components involving temperature, chemical, electrical, or dimensional requirements."
  },
  {
    name: "PTFE",
    href: "/materials/ptfe",
    text: "Considered for low-friction, chemical exposure, sealing, and electrical insulation applications."
  }
];

const manufacturingSupport = [
  {
    title: "Drawing review",
    text: "Dimensioned drawings help identify interfaces, critical features, material notes, and inspection needs."
  },
  {
    title: "CAD file review",
    text: "STEP and other available 3D files can support geometry review and manufacturing preparation."
  },
  {
    title: "Photo or sample review",
    text: "Marked photographs, measurements, sketches, or samples can help start projects without complete CAD data."
  },
  {
    title: "Prototype support",
    text: "Prototype and first-part requirements can be reviewed before repeat production is considered."
  },
  {
    title: "Low-volume production",
    text: "Small production quantities can be evaluated against material stock, geometry, and process requirements."
  },
  {
    title: "Repeat orders",
    text: "Confirmed drawings and project requirements can support recurring production and replacement needs."
  }
];

const quoteRequirements = [
  {
    title: "Drawing, CAD, photo, or sample",
    text: "Send the best technical reference available, even when the original drawing is missing."
  },
  {
    title: "Part function",
    text: "Describe what the component guides, supports, insulates, protects, locates, or replaces."
  },
  {
    title: "Material information",
    text: "Include the requested grade or share operating conditions when material selection support is needed."
  },
  {
    title: "Dimensions",
    text: "Provide overall size, mounting interfaces, mating features, and project-specific critical dimensions."
  },
  {
    title: "Quantity",
    text: "State prototype, first-part, low-volume, repeat-order, or estimated annual requirements."
  },
  {
    title: "Operating conditions",
    text: "Share load, motion, wear, temperature, moisture, chemicals, electrical needs, and equipment environment."
  }
];

const faqs = [
  {
    question: "What plastic components can you supply for automation equipment?",
    answer:
      "Apex PolyWorks can review fixtures, positioning blocks, guide rails, sliders, bushings, rollers, spacers, supports, covers, and other drawing-based plastic components. Manufacturing feasibility depends on the geometry, material, dimensions, quantity, and application requirements."
  },
  {
    question: "Can you manufacture automation parts from drawings or CAD files?",
    answer:
      "Yes. Send a dimensioned drawing or available CAD file together with the material, quantity, operating conditions, and inspection requirements. The project is reviewed before the manufacturing route and quotation scope are confirmed."
  },
  {
    question: "Can you review a part when no CAD drawing is available?",
    answer:
      "Marked photographs, sketches, dimensions, equipment information, or an existing sample can help begin the review. Additional measurements or a confirmed production drawing may be required before manufacturing."
  },
  {
    question: "Which plastics are commonly considered for automation components?",
    answer:
      "POM, UHMWPE, nylon, polycarbonate, PEEK, and PTFE are among the materials often reviewed. The appropriate choice depends on part function, load, motion, wear, temperature, chemicals, moisture, electrical requirements, and documentation needs."
  },
  {
    question: "Can you support prototype and low-volume automation parts?",
    answer:
      "Prototype, first-part, and low-volume requirements can be reviewed. Material availability, part size, geometry, process, and inspection scope determine the practical production option."
  },
  {
    question: "Can you make replacement parts for existing automation equipment?",
    answer:
      "Replacement components can be reviewed using drawings, dimensions, photographs, sketches, or samples. Functional interfaces and operating conditions should be documented before the replacement design is confirmed."
  },
  {
    question: "What information is needed for an automation parts quotation?",
    answer:
      "Provide the available drawing, CAD file, photograph, or sample information; part function; material or operating conditions; dimensions; quantity; inspection needs; and delivery destination."
  },
  {
    question: "What inspection and material documentation can be provided?",
    answer:
      "Inspection and documentation are reviewed by project. Material records and dimensional inspection reports may be available depending on the selected material, source records, drawing requirements, and agreed quotation scope."
  }
];

export const metadata: Metadata = {
  title: {
    absolute: "Custom Plastic Parts for Automation Equipment | Apex PolyWorks"
  },
  description:
    "Custom machined plastic components for automation equipment, packaging machinery and industrial systems. Parts from drawings, CAD files, photos or samples.",
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title: "Custom Plastic Parts for Automation Equipment | Apex PolyWorks",
    description:
      "Custom machined plastic components for automation equipment, packaging machinery and industrial systems. Parts from drawings, CAD files, photos or samples.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

export const dynamic = "force-dynamic";

export default async function AutomationPlasticComponentsPage() {
  const images = await getProductImages();
  const heroImage = images.POM.hero;
  const componentImage = images.UHMWPE.gallery[1] || images.UHMWPE.hero;
  const manufacturingImage = images.HDPE.services;

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Automation Plastic Components", path: pagePath }
        ]}
      />
      <FaqJsonLd items={faqs} />

      <section className="border-b border-graphite/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Components for machine builders and integrators
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Custom Plastic Components for Automation Equipment
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Custom machined plastic parts for packaging machinery, assembly equipment,
              conveyor systems, inspection systems, and general automation projects,
              produced from drawings, CAD files, photos, or samples.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#automation-rfq">
                Request an Automation Parts Quote
              </ButtonLink>
              <ButtonLink href="#automation-rfq" variant="secondary">
                Upload Your Drawing or Part Photo
              </ButtonLink>
            </div>
            <div className="mt-6 hidden flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-steel sm:flex">
              <span>Prototype and low-volume review</span>
              <span>Multi-material support</span>
              <span>Repeat-order coordination</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={heroImage}
              alt="Plastic guide rails installed on automated bottle conveyor equipment"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common automation challenges"
            title="Start with the component problem and operating conditions"
            text="Automation component projects can begin with recurring wear, inconsistent movement, an unavailable replacement, or a new machine design. Share the information available for an engineering and manufacturing review."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {challenges.map((challenge) => (
              <article
                key={challenge.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <AlertTriangle className="size-6 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">
                  {challenge.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-steel">{challenge.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
            <Image
              src={componentImage}
              alt="Machined UHMWPE guide blocks and support components for automation equipment"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Components we supply"
              title="Drawing-based parts for movement, positioning, support, and protection"
              text="Part geometry, material, quantity, mating surfaces, mounting details, and equipment conditions are reviewed before production is confirmed."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
                <div
                  key={component}
                  className="flex min-h-20 items-center gap-3 rounded-md border border-graphite/10 bg-white p-4 shadow-sm"
                >
                  <Cog className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-graphite">{component}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Applications"
            title="Plastic component support across automated industrial equipment"
            text="The same component type can require different material and manufacturing decisions depending on motion, load, wear, environment, and equipment function."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((application) => (
              <article
                key={application.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <Settings2 className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">
                  {application.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-steel">{application.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Materials by function"
            title="Select material around the job the component must perform"
            text="Material suitability should be reviewed against the complete operating environment rather than a component name alone."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Link
                key={material.href}
                href={material.href}
                className="flex h-full flex-col rounded-md border border-graphite/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <Layers3 className="size-6 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">
                  {material.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-steel">
                  {material.text}
                </p>
                <span className="mt-5 text-sm font-semibold text-teal">
                  Review material
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Manufacturing support"
              title="From available reference information to repeat production"
              text="The review process can begin with complete CAD data or with the best information available from an existing component."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {manufacturingSupport.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-graphite/10 bg-slate-50 p-5"
                >
                  <Wrench className="size-5 text-teal" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
                </article>
              ))}
            </div>
            <Link
              href="/services/cnc-plastic-machining"
              className="mt-7 inline-flex text-sm font-semibold text-teal hover:text-graphite"
            >
              Review CNC plastic machining capability
            </Link>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={manufacturingImage}
              alt="CNC routing equipment used for machining industrial plastic components"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quote requirements"
            title="Information that helps us review automation components"
            text="Incomplete information is acceptable for the first discussion. More detail helps clarify material, process, inspection scope, and quotation assumptions."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quoteRequirements.map((item, index) => {
              const icons = [FileSearch, FileImage, Layers3, Ruler, PackageCheck, Gauge];
              const Icon = icons[index];

              return (
                <article
                  key={item.title}
                  className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
                >
                  <Icon className="size-6 text-amber" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-semibold text-graphite">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Inspection and documentation
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Define quality requirements with the RFQ
            </h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Inspection scope and documentation should match the component function,
              drawing, selected material, and agreed quotation requirements.
            </p>
            <div className="mt-7 grid gap-4">
              {[
                "Drawing and critical-feature review before quotation",
                "Material records reviewed according to grade and project scope",
                "Dimensional inspection requirements defined by the drawing",
                "Inspection reports discussed when required for the project"
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-steel">
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-5">
              <ShieldCheck className="size-6 shrink-0 text-amber" aria-hidden="true" />
              <p className="text-sm leading-7 text-steel">
                Availability of specific records or reports depends on the material source,
                drawing requirements, and quotation scope confirmed for the project.
              </p>
            </div>
          </div>

          <div id="automation-rfq" className="scroll-mt-24">
            <QuoteForm
              compact
              showQuantity
              showSize
              serviceNeeded="Automation Plastic Components"
              sourceTracking="automation-plastic-components"
              title="Request an automation plastic components quote"
              description="Send your drawing, CAD file, part photo, sample details, dimensions, quantity, and operating conditions for review."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Automation Plastic Components FAQ"
            text="Practical answers for machine builders, integrators, maintenance teams, engineers, and industrial buyers."
            align="center"
          />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
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
            eyebrow="Related support"
            title="Continue with the most relevant sourcing path"
            text="Review machining capability, replacement-part support, or material-specific wear components before sending the RFQ."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "CNC Plastic Machining",
                text: "Review milling, turning, prototype, low-volume, and repeat-production support.",
                href: "/services/cnc-plastic-machining"
              },
              {
                title: "Replacement Plastic Parts",
                text: "Start with drawings, photographs, measurements, sketches, or an existing sample.",
                href: "/services/replacement-plastic-parts"
              },
              {
                title: "UHMWPE Wear Parts",
                text: "Explore wear strips, guide rails, liners, slide plates, and conveyor components.",
                href: "/products/uhmwpe-wear-parts"
              }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <Boxes className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#automation-rfq">
              Request an Automation Parts Quote
            </ButtonLink>
            <ButtonLink href="/request-a-quote" variant="secondary">
              Use the Full RFQ Form
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
