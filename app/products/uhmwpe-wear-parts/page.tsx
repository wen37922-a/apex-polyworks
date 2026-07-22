import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Factory,
  FileSearch,
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

const pagePath = "/products/uhmwpe-wear-parts";

const wearProblems = [
  {
    title: "Conveyor wear",
    text: "Worn chain paths, sliding surfaces, and guide points can be reviewed using the existing part, dimensions, or equipment details."
  },
  {
    title: "Friction problems",
    text: "Material and geometry can be discussed when sliding resistance, product movement, or contact with a mating surface is causing trouble."
  },
  {
    title: "Damaged liners",
    text: "Chute, hopper, and equipment liners can be evaluated using drawings, photographs, mounting details, and service conditions."
  },
  {
    title: "Replacement components",
    text: "Discontinued, worn, or difficult-to-source wear parts can be reviewed from available drawings, dimensions, photographs, or samples."
  }
];

const wearParts = [
  "Wear strips",
  "Chain guides",
  "Conveyor guide rails",
  "Chute liners",
  "Slide plates",
  "Wear blocks",
  "Custom machined profiles"
];

const applications = [
  {
    title: "Food processing equipment",
    text: "Guides, wear strips, liners, and equipment components where washdown, moisture, and documentation requirements must be defined.",
    href: "/industries/food-processing"
  },
  {
    title: "Packaging machinery",
    text: "Sliding guides, change parts, profiles, and replacement components for packaging and handling equipment.",
    href: "/services/replacement-plastic-parts"
  },
  {
    title: "Conveyor systems",
    text: "Wear surfaces, chain guides, side rails, slide tracks, and custom parts for product and material movement.",
    href: "/industries/industrial-equipment"
  },
  {
    title: "Material handling",
    text: "Liners, slide plates, wear pads, and guides for chutes, hoppers, transfer points, and handling equipment.",
    href: "/industries/industrial-equipment"
  },
  {
    title: "Industrial machinery",
    text: "Drawing-based wear parts and replacement components for maintenance teams, equipment builders, and production plants.",
    href: "/services/cnc-plastic-machining"
  }
];

const materialAdvantages = [
  {
    title: "Low-friction behavior",
    text: "UHMWPE is often evaluated for sliding and guiding surfaces where lower friction may support smoother movement."
  },
  {
    title: "Wear resistance",
    text: "Its abrasion behavior can make UHMWPE a practical candidate for recurring contact and material-handling applications."
  },
  {
    title: "Impact resistance",
    text: "UHMWPE can be considered for parts exposed to impact or intermittent loading, subject to the application review."
  },
  {
    title: "Moisture resistance",
    text: "Low moisture absorption can be useful in wet or washdown environments when the selected grade meets project needs."
  }
];

const manufacturingOptions = [
  {
    title: "Cut-to-size",
    text: "Sheet, plate, blanks, strips, and liner panels prepared to project dimensions."
  },
  {
    title: "Routing",
    text: "Profiles, slots, channels, edges, and shaped parts routed from suitable UHMWPE stock."
  },
  {
    title: "Drilling",
    text: "Mounting holes, countersinks, and fastening features reviewed against the drawing and installation method."
  },
  {
    title: "CNC machining",
    text: "Custom milled or turned components produced from drawings with geometry and inspection needs reviewed before quoting."
  },
  {
    title: "Replacement from drawings or samples",
    text: "Existing drawings, marked photographs, measurements, sketches, or sample parts can support the initial review."
  }
];

const quoteRequirements = [
  "Part type and equipment function",
  "Drawing, profile sketch, photographs, or sample availability",
  "Overall dimensions, profile cross-section, and required length",
  "Quantity and expected repeat-order demand",
  "Current material, grade, and color when known",
  "Load, speed, mating surface, and wear conditions",
  "Temperature, moisture, washdown, or chemical exposure",
  "Mounting holes, hardware, critical fit, and inspection requirements"
];

const faqs = [
  {
    question: "What UHMWPE wear parts can Apex PolyWorks supply?",
    answer:
      "Wear strips, chain guides, conveyor guide rails, chute liners, slide plates, wear blocks, routed profiles, and custom machined components can be reviewed. Availability and the manufacturing route depend on the grade, geometry, size, quantity, and project requirements."
  },
  {
    question: "Can you make UHMWPE wear parts from a drawing or sample?",
    answer:
      "Yes. A drawing is preferred, but marked photographs, dimensions, profile sketches, equipment information, or an existing sample can help begin the review. Additional measurements or documentation may be needed before production is confirmed."
  },
  {
    question: "What information is needed for a UHMWPE wear parts quotation?",
    answer:
      "Send the part type, dimensions, quantity, drawing or photographs, current material when known, application conditions, mounting details, delivery destination, and any critical inspection or documentation requirements."
  },
  {
    question: "Can UHMWPE wear strips and guide rails be supplied in custom profiles?",
    answer:
      "Custom profile requirements can be reviewed from a cross-section drawing, dimensions, sample, or installation information. The appropriate sourcing and machining route depends on profile geometry, length, quantity, and grade."
  },
  {
    question: "Can UHMWPE components be used in food processing equipment?",
    answer:
      "UHMWPE is used in many food-processing and packaging applications, but food-contact suitability depends on the specific grade, documentation, operating environment, and buyer requirements. Share all compliance and washdown requirements with the RFQ."
  },
  {
    question: "Can you support replacement or small-quantity UHMWPE parts?",
    answer:
      "Replacement, maintenance, prototype, and low-volume requirements can be reviewed. Minimum order and production options depend on material stock, part dimensions, geometry, and the required manufacturing process."
  },
  {
    question: "What inspection and material documentation is available?",
    answer:
      "Inspection scope and documentation are reviewed by project. Material records or dimensional inspection reports may be available depending on the selected grade, source records, drawing requirements, and agreed quotation scope."
  }
];

const relatedLinks = [
  {
    title: "UHMWPE material options",
    text: "Review UHMWPE sheet, properties, available forms, and general material applications.",
    href: "/materials/uhmwpe"
  },
  {
    title: "Replacement plastic parts",
    text: "Start a replacement-part review using drawings, photos, sketches, dimensions, or sample information.",
    href: "/services/replacement-plastic-parts"
  },
  {
    title: "CNC plastic machining",
    text: "Review machining support for custom plastic components produced from customer drawings.",
    href: "/services/cnc-plastic-machining"
  }
];

export const metadata: Metadata = {
  title: {
    absolute: "UHMWPE Wear Parts Supplier | Conveyor Components | Apex PolyWorks"
  },
  description:
    "Custom UHMWPE wear strips, guide rails, liners and conveyor components from drawings or samples for industrial equipment.",
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title: "UHMWPE Wear Parts Supplier | Conveyor Components | Apex PolyWorks",
    description:
      "Custom UHMWPE wear strips, guide rails, liners and conveyor components from drawings or samples for industrial equipment.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

function findImage(images: string[], stems: string[], fallback: string) {
  return (
    images.find((url) => {
      const decoded = decodeURIComponent(url).toLowerCase();
      return stems.some((stem) => decoded.includes(stem));
    }) || fallback
  );
}

export default async function UhmwpeWearPartsPage() {
  const imageLibrary = await getProductImages();
  const uhmwpeImages = imageLibrary.UHMWPE;
  const heroImage = findImage(
    uhmwpeImages.gallery,
    ["uhmwpe5", "uhmwpe05"],
    uhmwpeImages.hero
  );
  const applicationImage = findImage(
    uhmwpeImages.gallery,
    ["uhmwpe2", "uhmwpe02"],
    uhmwpeImages.gallery[1] || uhmwpeImages.hero
  );
  const machiningImage = findImage(
    uhmwpeImages.gallery,
    ["uhmwpe4", "uhmwpe04"],
    uhmwpeImages.gallery[3] || uhmwpeImages.hero
  );

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "UHMWPE Wear Parts", path: pagePath }
        ]}
      />
      <FaqJsonLd items={faqs} />

      <section className="border-b border-graphite/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Conveyor and industrial wear components
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Custom UHMWPE Wear Parts for Conveyors and Industrial Equipment
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Custom UHMWPE wear strips, guide rails, liners and machined components produced from drawings, dimensions or existing samples.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#uhmwpe-wear-rfq">Request a UHMWPE Wear Parts Quote</ButtonLink>
              <ButtonLink href="/materials/uhmwpe" variant="secondary">
                Review UHMWPE Material
              </ButtonLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-steel">
              <span>Drawings and part photos accepted</span>
              <span>Replacement requirements reviewed</span>
              <span>Global industrial support</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={heroImage}
              alt="Custom UHMWPE wear strips, guide profiles, and machined wear parts"
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
            eyebrow="Common wear problems"
            title="Start with the equipment problem or worn component"
            text="Wear-part projects often begin with downtime, recurring friction, damaged liners, or a component that is no longer easy to source. Share the best information available for an application review."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wearProblems.map((problem) => (
              <article key={problem.title} className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm">
                <AlertTriangle className="size-6 text-amber" aria-hidden="true" />
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
            eyebrow="Parts we supply"
            title="UHMWPE wear components for sliding, guiding, and material movement"
            text="Part geometry, grade, dimensions, mounting details, quantity, and operating conditions are reviewed before the manufacturing route is confirmed."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wearParts.map((part) => (
              <div key={part} className="flex min-h-24 items-center gap-3 rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <Cog className="size-5 shrink-0 text-teal" aria-hidden="true" />
                <h2 className="text-base font-semibold text-graphite">{part}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={applicationImage}
              alt="Custom UHMWPE wear blocks and guide components for industrial equipment"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Wear-part support across industrial equipment</h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Specify the contact surface, movement, load, environment, cleaning conditions, and required service function so material and manufacturing options can be reviewed.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {applications.map((application) => (
                <Link
                  key={application.title}
                  href={application.href}
                  className="rounded-md border border-graphite/10 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                >
                  <h3 className="text-base font-semibold text-graphite">{application.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{application.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why UHMWPE"
            title="Material behavior suited to many wear and sliding applications"
            text="UHMWPE should be evaluated against the complete operating environment. Grade, geometry, loading, mating surfaces, temperature, chemicals, and documentation needs can all affect suitability."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materialAdvantages.map((advantage) => (
              <article key={advantage.title} className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm">
                <CheckCircle2 className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{advantage.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{advantage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Manufacturing options</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">From cut blanks to custom replacement profiles</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-steel">
              The production approach is selected after reviewing stock form, geometry, dimensions, quantity, functional surfaces, and available reference information.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {manufacturingOptions.map((option) => (
                <article key={option.title} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                  <Settings2 className="size-5 text-teal" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-graphite">{option.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{option.text}</p>
                </article>
              ))}
            </div>
            <Link
              href="/services/cnc-plastic-machining"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Review CNC Plastic Machining
            </Link>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
            <Image
              src={machiningImage}
              alt="UHMWPE sheet stock for cut-to-size wear parts and CNC machining"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Quote requirements</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Information that supports an efficient wear-part review</h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Complete information helps distinguish a simple cut part from a profile, liner, or replacement component that needs additional application review.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quoteRequirements.map((requirement) => (
              <div key={requirement} className="flex gap-3 rounded-md border border-graphite/10 bg-white p-4 shadow-sm">
                <Ruler className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-graphite">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Inspection and documentation"
            title="Define acceptance requirements before production"
            text="Inspection and documentation are agreed by project so the quotation reflects the drawing, selected material, required records, and practical verification method."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: FileSearch,
                title: "Drawing review",
                text: "Critical dimensions, mounting features, interfaces, and functional notes should be identified before quote approval."
              },
              {
                icon: ClipboardCheck,
                title: "Dimensional inspection",
                text: "Inspection scope can be reviewed against the drawing, geometry, quantity, and agreed project requirements."
              },
              {
                icon: ShieldCheck,
                title: "Material documentation",
                text: "Material records may be available depending on the grade, source documentation, and agreed quotation scope."
              }
            ].map((item) => (
              <article key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="uhmwpe-wear-rfq" className="scroll-mt-24 border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">UHMWPE wear parts RFQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Request a UHMWPE Wear Parts Quote</h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Send a drawing, profile dimensions, part photographs, sample details, quantity, and operating conditions. Unknown details can be identified for follow-up during the review.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-ink">
              {[
                [Wrench, "Part function and wear problem"],
                [Boxes, "Dimensions, length, and quantity"],
                [PackageCheck, "Delivery and repeat-order needs"]
              ].map(([Icon, label]) => (
                <div key={String(label)} className="flex items-center gap-3">
                  <Icon className="size-5 text-teal" aria-hidden="true" />
                  <span>{String(label)}</span>
                </div>
              ))}
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-whatsapp-location="uhmwpe_wear_parts_rfq"
              data-tracking-material="UHMWPE Wear Parts"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-600 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              WhatsApp Quick Inquiry
            </a>
          </div>
          <QuoteForm
            compact
            showQuantity
            showSize
            defaultMaterial="UHMWPE"
            serviceNeeded="UHMWPE Wear Parts"
            sourceTracking="uhmwpe-wear-parts"
            title="Request a UHMWPE wear parts quote"
            description="Add the part type, dimensions, quantity, drawing or photographs, and operating conditions for review."
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Related support"
            title="Continue with material, replacement, or machining information"
            text="Use the most relevant page for the next purchasing or engineering decision."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <Factory className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/industries/industrial-equipment" variant="secondary">
              Industrial Equipment Applications
            </ButtonLink>
            <ButtonLink href="/industries/food-processing" variant="secondary">
              Food Processing Applications
            </ButtonLink>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buyer FAQ"
            title="UHMWPE wear parts quotation questions"
            text="Practical guidance for equipment builders, maintenance teams, engineers, and purchasing teams."
          />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-graphite marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-4 border-t border-graphite/10 pt-4 text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
