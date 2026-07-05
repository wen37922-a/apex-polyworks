import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { productImages, siteImages } from "@/lib/product-images";
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

const materialCards = [
  {
    title: "PEEK",
    href: "/materials/peek",
    image: images.peekSheetHero,
    alt: "PEEK engineering plastic sheet stock for high temperature applications",
    text: "High-performance plastic for heat, strength, chemical resistance, and precision machining."
  },
  {
    title: "PTFE",
    href: "/materials/ptfe",
    image: cncImages[1].src,
    alt: "PTFE and fluoropolymer machined plastic part application reference",
    text: "Low-friction fluoropolymer for seals, gaskets, liners, bearings, and chemical service."
  },
  {
    title: "UHMWPE",
    href: "/materials/uhmwpe-sheet",
    image: images.warehouse,
    alt: "UHMWPE and industrial plastic stock inventory for wear parts",
    text: "Wear-resistant plastic option for guides, liners, conveyor parts, and plant maintenance."
  },
  {
    title: "Acrylic",
    href: "/materials/acrylic-pmma",
    image: images.acrylic,
    alt: "Acrylic PMMA sheet sample board for display and fabrication projects",
    text: "Clear and colored PMMA for displays, guards, covers, polished panels, and custom fabrication."
  }
];

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

export default function HomePage() {
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
            <SectionHeader
              eyebrow="Engineering Plastics in Stock"
              title="Large Inventory Available"
              text="PEEK, PTFE, Acetal, Nylon, PC, HDPE and other engineering plastics available for rapid delivery."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured materials"
            title="Featured Materials for fast RFQ review"
            text="Start with PEEK, PTFE, UHMWPE, or Acrylic, then send dimensions, quantity, drawings, and application notes for a practical quote."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materialCards.map((material) => (
              <div key={material.title} className="overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                <div className="relative aspect-[4/3] bg-slate-50">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-graphite">{material.title}</h3>
                  <p className="mt-2 min-h-20 text-sm leading-6 text-steel">{material.text}</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <Link
                      href={material.href}
                      className="inline-flex min-h-10 items-center justify-center rounded-md border border-graphite/15 bg-white px-4 py-2 text-sm font-semibold text-graphite hover:border-teal hover:text-teal"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/request-a-quote"
                      className="inline-flex min-h-10 items-center justify-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-white hover:bg-amber/90"
                    >
                      RFQ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
