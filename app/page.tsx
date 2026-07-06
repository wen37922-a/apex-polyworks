import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  Factory,
  FileCheck2,
  Globe2,
  Layers3,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ListingCard } from "@/components/ListingCard";
import { MaterialCard } from "@/components/MaterialCard";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { productImages, siteImages } from "@/lib/product-images";
import { getCatalogMaterials, getMaterialCardImages, getMaterialsData } from "@/lib/materials-data";
import {
  faq,
  processSteps,
  services,
  siteConfig,
  trustBadges
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastics, CNC Machining, and Cut-to-Size Plastic Supply",
  description:
    "Apex PolyWorks helps US buyers source engineering plastic sheets, rods, films, CNC machined plastic parts, and custom fabrication with no MOQ options.",
  alternates: {
    canonical: siteConfig.url
  }
};

const images = {
  peekSheetHero: productImages.PEEK.sheet[0],
  peekSheetDetail: productImages.PEEK.sheet[1],
  peekRodHero: productImages.PEEK.rod[0],
  peekRodDetail: productImages.PEEK.rod[2],
  warehouse: siteImages.warehouse,
  cncHero: productImages.PEEK.hero,
  cncSecondary: siteImages.secondaryHero,
  acrylic: productImages.ACRYLIC.sheet[0],
  homeHero: productImages.PEEK.hero
};

const cncImages = productImages.PEEK.cnc.map((src, index) => ({
  src,
  alt: `CNC machined PEEK plastic component example ${index + 1}`
}));

const capabilityBlocks = [
  {
    icon: Wrench,
    title: "CNC machining",
    text: "Milled and turned plastic parts for fixtures, guards, insulators, wear parts, and equipment builds."
  },
  {
    icon: Layers3,
    title: "Sheet cutting",
    text: "Cut-to-size sheets, routed panels, laser-cut profiles, blanks, and production-ready material kits."
  },
  {
    icon: Factory,
    title: "Custom fabrication",
    text: "Bending, welding, finishing, inserts, polishing, labeling, assembly, and packed-to-order releases."
  }
];

const buyerTrustBlocks = [
  {
    icon: ShieldCheck,
    title: "ISO / Industrial Quality",
    text: "Material traceability and inspection notes available on request."
  },
  {
    icon: BadgeCheck,
    title: "Fast RFQ Response within 12 Hours",
    text: "Send drawings, material, quantity, and application notes for faster review."
  },
  {
    icon: Globe2,
    title: "Global Shipping to US & EU",
    text: "Export-ready packing for industrial buyers and procurement teams."
  },
  {
    icon: Settings2,
    title: "Custom CNC Machining Available",
    text: "Prototype, replacement, and repeat production plastic parts."
  }
];

const heroCapabilityTags = [
  "Engineering Plastics",
  "Custom CNC Machining",
  "Fast RFQ Response",
  "Global Shipping"
];

const whyChooseBlocks = [
  {
    icon: ShieldCheck,
    title: "Engineering Expertise",
    text: "Material selection support for wear, heat, clarity, chemical exposure, tolerance, and production route."
  },
  {
    icon: Settings2,
    title: "CNC Machining",
    text: "Plastic milling, turning, routing, drilling, finishing, and made-to-print component support."
  },
  {
    icon: Layers3,
    title: "Material Inventory",
    text: "PEEK, PTFE, UHMWPE, acrylic, nylon, acetal, PC, HDPE, PP, PVC, and specialty grades."
  },
  {
    icon: BadgeCheck,
    title: "Fast Quote Response",
    text: "Clear RFQ review for drawings, stock sizes, cut-to-size blanks, prototypes, and repeat orders."
  }
];

export default async function HomePage() {
  const materialCards = getCatalogMaterials(await getMaterialsData()).slice(0, 6);
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <FaqJsonLd items={faq} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8 lg:py-14">
          <div className="relative min-h-[20rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[28rem] lg:min-h-[34rem]">
            <Image
              src={images.homeHero}
              alt="Engineering plastic materials and custom CNC machined plastic parts for Apex PolyWorks"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              US-focused plastic material and fabrication partner
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-graphite sm:text-6xl">
              Engineering Plastics Supplier for Precision Manufacturing
            </h1>
            <p className="mt-5 text-xl font-semibold leading-8 text-teal">
              PEEK / PTFE / UHMWPE / CNC Machined Parts Delivered Fast
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel">
              Apex PolyWorks helps US B2B buyers source plastic sheets, rods, cut-to-size blanks, and custom machined parts with a clear RFQ path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/materials" variant="secondary">
                View Materials
              </ButtonLink>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {heroCapabilityTags.map((tag) => (
                <span key={tag} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-graphite/10 bg-white px-3 py-2 text-sm font-semibold text-graphite shadow-sm">
                  <CheckCircle2 className="size-4 text-teal" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-graphite shadow-sm ring-1 ring-graphite/10">
                  <BadgeCheck className="size-4 text-amber" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {buyerTrustBlocks.map((item) => (
            <div key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-4">
              <item.icon className="size-5 text-amber" aria-hidden="true" />
              <h2 className="mt-3 text-base font-semibold text-graphite">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why choose Apex PolyWorks"
            title="Built for industrial buyers who need answers, drawings reviewed, and quotes moving"
            text="Apex PolyWorks combines material supply, CNC plastic machining, inventory support, and responsive RFQ communication for purchasing and engineering teams."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseBlocks.map((item) => (
              <div key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-3 lg:px-8">
          {capabilityBlocks.map((item) => (
            <div key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
              <item.icon className="size-6 text-teal" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-graphite">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Services"
              title="Plastic manufacturing support from raw material to finished part"
              text="Choose one service or combine machining, sheet cutting, forming, welding, and finishing into a single RFQ."
            />
            <ButtonLink href="/services" variant="secondary">View All Services</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ListingCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow={service.eyebrow}
                title={service.title}
                text={service.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-center">
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm sm:min-h-[24rem]">
              <Image
                src={images.warehouse}
                alt="Large warehouse inventory of engineering plastic sheets and rods"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Warehouse & logistics"
                title="Global Supply Capability"
                text="Stock support, cut-to-size preparation, export packing, and coordinated global delivery for recurring industrial material requirements."
              />
              <div className="mt-7">
                <ButtonLink href="/request-a-quote">Request Supply Pricing</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured materials"
            title="Featured Materials for fast RFQ review"
            text="Start with a core industrial material, then send dimensions, quantity, drawings, and application notes for a practical quote."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <MaterialCard
                key={material.slug}
                title={material.shortName}
                href={`/materials/${material.slug}`}
                images={getMaterialCardImages(material)}
                description={material.cardDescription}
                applications={material.cardApplications}
                tags={material.tags}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/materials" variant="secondary">View All Materials</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="CNC capability"
              title="PEEK CNC machining examples for high-performance parts"
              text="Review milled features, finished edges, and precision-machined plastic details before sending drawings or STEP files."
            />
            <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">View CNC Service</ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {cncImages.map((image) => (
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

      <section className="relative overflow-hidden bg-graphite py-16 lg:py-20">
        <Image
          src={images.cncHero}
          alt="Blurred CNC machining background for RFQ submission"
          fill
          sizes="100vw"
          className="scale-105 object-cover opacity-35 blur-sm"
        />
        <div className="absolute inset-0 bg-graphite/75" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">RFQ process</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Request a Quote</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              Send drawings, dimensions, material, quantity, deadline, tolerance, and application notes. Complete RFQs are typically reviewed within 12 hours.
            </p>
            <div className="mt-8">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
            </div>
            <div className="mt-8 grid gap-4">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-md border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-amber text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/70">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="bg-graphite py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {[
            [ShieldCheck, "Supplier clarity", "Material, process, finish, and packing assumptions are written into the quote."],
            [FileCheck2, "Drawing review", "Our team checks tolerance, geometry, resin behavior, and production route before release."],
            [CheckCircle2, "RFQ-ready communication", "Quote assumptions, material choices, lead time, and next steps are presented clearly for purchasing review."],
            [Factory, "Industrial scope", "Materials and fabrication support for maintenance, OEM, and product development buyers."]
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="rounded-md border border-white/10 bg-white/5 p-5">
              <Icon className="size-6 text-amber" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold">{String(title)}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">{String(text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common buyer questions"
            text="Short answers for sourcing, engineering, and maintenance teams planning a plastic material or custom part purchase."
            align="center"
          />
          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-graphite">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-steel">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
