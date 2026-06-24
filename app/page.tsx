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
  peekSheetHero:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134683304-peek-sheet-4-WqAf6XEcfIWq45uAg3Pg2DA9ffnojb.webp",
  peekSheetDetail:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134654887-peek-sheet-3-pcMOr4FbUGq6WQ6ZtFiCa5SKtMUktT.webp",
  peekRodHero:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134600318-peek-rod-1-0UJzW7RMBl7XOlyKOm3tEO6TgwGzrU.webp",
  peekRodDetail:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134612579-peek-rod-3-OM1NQs4ciiZfLIROtEkqifGcZ68EIU.webp",
  warehouse:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
  cncHero:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134584794-peek-hero1-bAHaI9sBsvIbVEUrE3AnDA9YeM3bPP.webp",
  cncSecondary:
    "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134591199-peek-hero2-9gA9kx8TxOtwLPvMivYEyGhFHOHAlD.webp"
};

const cncImages = [
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134507708-peek-cnc%E5%9B%BE1-Pyau8a8ctGrTZGK56cMHYPmmNUcZkK.webp",
    alt: "CNC machined PEEK plastic component with milled precision features"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134520033-peek-cnc%E5%9B%BE2-pOGRYOEvQjuysSzVXbwUCb4nja5wKA.webp",
    alt: "Precision machined PEEK part for high performance engineering use"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134533843-peek-cnc%E5%9B%BE3-xKzrkB27J9mnmwy46lW2jaKrC8JS60.webp",
    alt: "Custom CNC milled PEEK plastic part with clean geometry"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134539239-peek-cnc%E5%9B%BE4-KgyoVQeDflchuKrcKsmOsx1YSiC59f.webp",
    alt: "PEEK machined plastic component for demanding industrial assemblies"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134544516-peek-cnc%E5%9B%BE5-r0FcLiF4dfAdiV3DAuBZGmejsq72Lx.webp",
    alt: "Finished PEEK CNC machining sample with smooth surface finish"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134561731-peek-cnc%E5%9B%BE6-uJ9Ba3nQHSe9cMUYbppmWOHfaqGJSk.webp",
    alt: "Custom machined PEEK part made from engineering plastic stock"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134571749-peek-cnc%E5%9B%BE7-xR5UUCtJAT5PAh8FecTuBRp1MfrGmR.webp",
    alt: "PEEK CNC machined component ready for industrial inspection"
  },
  {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134577091-peek-cnc%E5%9B%BE8-Oru9Qesn6iDzPGU9d3TFe5vl9rplfK.webp",
    alt: "Finished CNC machined PEEK plastic part for precision applications"
  }
];

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
    href: "/request-a-quote",
    image: images.warehouse,
    alt: "UHMWPE and industrial plastic stock inventory for wear parts",
    text: "Wear-resistant plastic option for guides, liners, conveyor parts, and plant maintenance."
  },
  {
    title: "NYLON",
    href: "/materials/nylon-pa",
    image: images.peekRodDetail,
    alt: "Nylon engineering plastic rod stock reference for machined parts",
    text: "Tough bearing-grade plastic for bushings, rollers, gears, wear pads, and guide rails."
  }
];

const industryCards = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    image: cncImages[0].src,
    alt: "CNC machined plastic components for automotive manufacturing fixtures",
    text: "Fixtures, line guards, checking aids, EV insulators, and conveyor replacement parts."
  },
  {
    title: "Aerospace",
    href: "/industries/aerospace",
    image: images.cncSecondary,
    alt: "High performance plastic stock for aerospace engineering applications",
    text: "Lightweight PEEK, PTFE, PC, nylon, and acetal components for demanding programs."
  },
  {
    title: "Medical",
    href: "/industries/medical-devices",
    image: cncImages[3].src,
    alt: "Precision machined plastic parts for medical device and lab equipment suppliers",
    text: "Clean machined plastics, lab fixtures, insulators, housings, and prototype support."
  },
  {
    title: "Electronics",
    href: "/industries/electronics",
    image: images.peekSheetDetail,
    alt: "Engineering plastic sheet material for electronics insulation and protection",
    text: "Insulators, trays, standoffs, enclosures, ESD options, and thin plastic materials."
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

export default function HomePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <FaqJsonLd items={faq} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
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
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-graphite shadow-sm ring-1 ring-graphite/10">
                  <BadgeCheck className="size-4 text-amber" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[17rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[22rem]">
              <Image
                src={images.cncHero}
                alt="Apex PolyWorks PEEK plastic material and CNC machining hero image"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <Image
                  src={images.cncHero}
                  alt="CNC machining setup for PEEK engineering plastic parts"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <Image
                  src={images.peekSheetHero}
                  alt="PEEK sheet material collage for engineering plastic sourcing"
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </div>
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
            eyebrow="Material categories"
            title="Core engineering plastics for industrial RFQs"
            text="Start with a material family, or send the application details and let our team compare practical options for heat, wear, chemicals, impact, and machinability."
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
          <SectionHeader
            eyebrow="Industry applications"
            title="Industrial plastics for engineering, sourcing, and maintenance teams"
            text="Each industry order starts with the function of the part, the operating environment, and the buyer's required documentation."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industryCards.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-graphite">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{industry.text}</p>
                </div>
              </Link>
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
