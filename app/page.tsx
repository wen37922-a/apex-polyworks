import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Box,
  CheckCircle2,
  Clock3,
  Factory,
  FileCheck2,
  Layers3,
  PackageCheck,
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
  industries,
  materials,
  processSteps,
  products,
  services,
  siteConfig,
  trustBadges
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastics, CNC Machining, and Cut-to-Size Plastic Supply",
  description:
    "Apex Polymer Works helps US buyers source engineering plastic sheets, rods, films, CNC machined plastic parts, and custom fabrication with no MOQ options.",
  alternates: {
    canonical: siteConfig.url
  }
};

const heroStats = [
  {
    icon: Clock3,
    title: "24-hour quote response",
    text: "Complete RFQs are reviewed fast so purchasing and engineering teams can keep projects moving."
  },
  {
    icon: PackageCheck,
    title: "No MOQ",
    text: "Order one prototype, a cut-to-size blank, or a recurring production batch."
  },
  {
    icon: Layers3,
    title: "50+ engineering plastics",
    text: "ABS, PC, nylon, acetal, PEEK, PTFE, PVC, HDPE, PP, acrylic, and specialty grades."
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

export default function HomePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <FaqJsonLd items={faq} />
      <section className="relative overflow-hidden bg-graphite text-white">
        <Image
          src="/images/plastic-machining-hero.png"
          alt="Engineering plastic sheets, rods, and CNC machined plastic parts"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
              US-focused plastic material and fabrication partner
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Engineering Plastics, CNC Machining, and Cut-to-Size Supply
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Source plastic sheets, rods, films, and custom machined parts from one responsive team built for industrial RFQs, prototypes, maintenance, and repeat production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
                Explore CNC Machining
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white/85 ring-1 ring-white/15">
                  <BadgeCheck className="size-4 text-citrus" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid content-end gap-4">
            {heroStats.map((stat) => (
              <div key={stat.title} className="rounded-md border border-white/15 bg-white/10 p-5 backdrop-blur">
                <stat.icon className="size-6 text-amber" aria-hidden="true" />
                <h2 className="mt-3 text-xl font-semibold">{stat.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/75">{stat.text}</p>
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

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material categories"
            title="Engineering plastics selected for cost, performance, and availability"
            text="Send the application details if the resin is not fixed. We can compare practical options for wear, impact, heat, chemicals, optical clarity, food contact, and electrical behavior."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {materials.map((material) => (
              <Link
                key={material.slug}
                href={`/materials/${material.slug}`}
                className="rounded-md border border-graphite/10 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-mint text-teal">
                  <Box className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-graphite">{material.title}</h3>
                <p className="mt-2 leading-6 text-steel">{material.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Products"
              title="Stock material or custom plastic parts, quoted around your buying reality"
              text="Order sheets, rods, films, or made-to-print components. Small urgent orders and repeat production releases can live in the same sourcing program."
            />
            <div className="mt-8">
              <ButtonLink href="/products" variant="secondary">Browse Product Categories</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <ListingCard
                key={product.slug}
                href={`/products/${product.slug}`}
                eyebrow={product.eyebrow}
                title={product.title}
                text={product.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-mint/45 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Industry applications"
              title="Plastic parts for teams that need function first"
              text="From line maintenance to product development, each quote starts with how the plastic will be used."
            />
            <ButtonLink href="/industries" variant="secondary">View Industries</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <ListingCard
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                eyebrow={industry.eyebrow}
                title={industry.title}
                text={industry.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="RFQ process"
              title="Built to reduce quote friction"
              text="The goal is not to make buyers fill out a perfect form. The goal is to get enough engineering context to quote accurately and flag avoidable problems early."
            />
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-graphite text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-graphite">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-steel">{step.text}</p>
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
