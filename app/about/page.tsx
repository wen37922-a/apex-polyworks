import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  MapPin,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const materials = [
  { name: "PEEK", href: "/materials/peek" },
  { name: "POM / Acetal", href: "/materials/pom-acetal" },
  { name: "UHMWPE", href: "/materials/uhmwpe" },
  { name: "PTFE", href: "/materials/ptfe" },
  { name: "Nylon", href: "/materials/nylon-pa" }
];

const forms = [
  { name: "Sheets", href: "/products/plastic-sheets" },
  { name: "Rods", href: "/products/plastic-rods" },
  { name: "Tubes" },
  { name: "Custom Cut Pieces", href: "/services/cut-to-size-plastic" }
];

const projectSteps = [
  {
    number: "01",
    title: "Material Requirement",
    text: "Share the material, form, dimensions, quantity, application, and delivery destination available."
  },
  {
    number: "02",
    title: "Specification Confirmation",
    text: "We clarify grade, dimensions, tolerances, documentation, and other purchasing requirements before quotation."
  },
  {
    number: "03",
    title: "Supply / Processing Support",
    text: "The scope is aligned around stock shapes, cut-to-size supply, and optional CNC machining support when required."
  },
  {
    number: "04",
    title: "Shipment Support",
    text: "Packing, export documentation, and delivery arrangements are reviewed against the confirmed order scope."
  }
];

const locations = [
  {
    icon: MapPin,
    title: "Shenzhen Operations",
    text: "Material sourcing, specification review, cut-to-size, processing coordination, and shipment preparation are supported from Shenzhen, China."
  },
  {
    icon: Globe2,
    title: "Hong Kong Sales Support",
    text: "Sales communication support helps international buyers discuss engineering plastic requirements and commercial details."
  },
  {
    icon: Truck,
    title: "Global Industrial Support",
    text: "We support industrial customers worldwide through clear email, drawing, specification, packing, and shipment communication."
  }
];

const documentationSupport = [
  {
    icon: FileCheck2,
    title: "Material Datasheets",
    text: "Relevant datasheet availability can be reviewed for the selected material and grade."
  },
  {
    icon: ClipboardCheck,
    title: "Product Specifications",
    text: "Dimensions, grade, form, quantity, tolerances, and project requirements are confirmed before order release."
  },
  {
    icon: ShieldCheck,
    title: "Inspection Documentation",
    text: "Inspection documentation can be discussed when required and included in the agreed project scope."
  },
  {
    icon: PackageCheck,
    title: "Export Documentation",
    text: "Packing and export documentation requirements can be coordinated for international shipments."
  }
];

export const metadata: Metadata = {
  title: "About Apex PolyWorks",
  description:
    "Learn how Shenzhen-based Apex PolyWorks supports industrial customers worldwide with engineering plastics, CNC machining, cut-to-size materials, and technical communication.",
  alternates: {
    canonical: `${siteConfig.url}/about`
  }
};

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" }
        ]}
      />

      <PageHero
        eyebrow="About Apex PolyWorks"
        title="Engineering Plastics Supplier for Global Industrial Customers"
        text="Apex PolyWorks is a Shenzhen, China-based engineering plastics supplier supporting industrial customers worldwide with material supply, stock shapes, and practical cut-to-size options."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Engineering Plastic Supply Built Around Buyer Requirements"
              text="Apex PolyWorks is an engineering plastics supplier based in Shenzhen, China. We help industrial buyers source practical material forms and clarify purchasing requirements before quotation."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Engineering plastic sheets",
                "Engineering plastic rods",
                "Engineering plastic tubes",
                "Cut-to-size materials",
                "CNC machining support when required"
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-100 shadow-sm">
            <Image
              src={productImages.PEEK.sheet[0]}
              alt="PEEK engineering plastic sheet stock supplied for industrial purchasing"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we supply"
            title="Engineering Plastics in Practical Stock Forms"
            text="Material, form, dimensions, grade, and quantity are reviewed together so industrial buyers can request the supply format that fits their project."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Boxes className="size-7 text-teal" aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-graphite">Materials</h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {materials.map((material) => (
                  <Link
                    key={material.name}
                    href={material.href}
                    className="flex min-h-12 items-center justify-between rounded-md border border-graphite/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
                  >
                    <span>{material.name}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </article>
            <article className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Ruler className="size-7 text-amber" aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-graphite">Forms</h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {forms.map((form) =>
                  form.href ? (
                    <Link
                      key={form.name}
                      href={form.href}
                      className="flex min-h-12 items-center justify-between rounded-md border border-graphite/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-graphite transition hover:border-amber hover:text-amber"
                    >
                      <span>{form.name}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ) : (
                    <div
                      key={form.name}
                      className="flex min-h-12 items-center rounded-md border border-graphite/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-graphite"
                    >
                      {form.name}
                    </div>
                  )
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="How we support projects"
            title="A Clear Path from Requirement to Shipment"
            text="Each inquiry is reviewed through a practical sequence that helps engineering and purchasing teams understand what information is needed next."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold tracking-[0.16em] text-teal">STEP {step.number}</p>
                <h2 className="mt-4 text-xl font-semibold text-graphite">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Location and global support"
            title="Shenzhen Operations with International Buyer Communication"
            text="Our stated locations and support model reflect how projects are coordinated today, without implying additional offices or facilities."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {locations.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <item.icon className="size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quality and documentation support"
            title="Procurement Documentation Reviewed by Material and Project"
            text="Documentation availability depends on the selected material, source records, project requirements, and the scope confirmed before order release."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {documentationSupport.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm"
              >
                <item.icon className="size-7 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-slate-800 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-white/10 bg-slate-700 shadow-sm">
            <Image
              src={siteImages.warehouse}
              alt="Engineering plastic sheet and rod material storage supporting supply coordination"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
              Trust evidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Practical Evidence, Clear Scope, No Unsupported Claims</h2>
            <p className="mt-4 text-base leading-8 text-slate-200">
              Material storage imagery and project-specific records are used to support purchasing discussions. Packing, inspection, and documentation evidence can be reviewed when it is available for the confirmed order scope.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                "Material and stock-form information reviewed before quotation",
                "Packing and inspection requirements documented when included in scope",
                "Additional verified storage, packing, and inspection photos can be added over time"
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-100">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-citrus" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request Material Quote</ButtonLink>
              <ButtonLink href="/products/stock-shapes" variant="secondary">
                View Stock Shapes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
