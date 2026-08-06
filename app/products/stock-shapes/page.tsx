import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  Factory,
  Layers3,
  PackageCheck,
  Ruler,
  Scissors
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const pagePath = "/products/stock-shapes";
const quoteHref = "/request-a-quote?source=stock-shapes-page";

const stockForms = [
  {
    icon: Layers3,
    title: "Plastic Sheets & Plates",
    text: "Engineering plastic sheets and plates for industrial applications, standard and custom sizes.",
    href: "/products/plastic-sheets",
    linkLabel: "View Plastic Sheets"
  },
  {
    icon: Ruler,
    title: "Plastic Rods",
    text: "Engineering plastic rods and machining blanks with custom length options.",
    href: "/products/plastic-rods",
    linkLabel: "View Plastic Rods"
  },
  {
    icon: Boxes,
    title: "Plastic Tubes",
    text: "Engineering plastic tubes for specialized industrial requirements.",
    availability: "Available forms are reviewed by material, grade and dimensions."
  },
  {
    icon: Scissors,
    title: "Cut Blanks",
    text: "Pre-cut material pieces to reduce preparation time.",
    href: "/services/cut-to-size-plastic",
    linkLabel: "Explore Cut-to-Size"
  }
];

const materialGroups = [
  {
    title: "High Performance Plastics",
    materials: [
      { name: "PEEK", href: "/materials/peek" },
      { name: "PTFE", href: "/materials/ptfe" }
    ]
  },
  {
    title: "Engineering Plastics",
    materials: [
      { name: "POM / Acetal", href: "/materials/pom-acetal" },
      { name: "UHMWPE", href: "/materials/uhmwpe" },
      { name: "Nylon PA" }
    ]
  },
  {
    title: "General Engineering Plastics",
    materials: [
      { name: "HDPE" },
      { name: "PP" },
      { name: "PC" },
      { name: "ABS" },
      { name: "Acrylic" }
    ]
  }
];

const procurementInformation = [
  "Material type",
  "Shape",
  "Dimensions",
  "Quantity",
  "Application",
  "Drawing (optional)"
];

const applications = [
  "Automation equipment",
  "Machinery",
  "Electrical components",
  "Semiconductor equipment",
  "Chemical equipment",
  "Food processing equipment",
  "Custom industrial applications"
];

export const metadata: Metadata = {
  title: {
    absolute:
      "Engineering Plastic Stock Shapes Supplier | Sheets, Rods & Custom Sizes | Apex PolyWorks"
  },
  description:
    "Source engineering plastic stock shapes in sheets, rods and tubes, with custom sizes available for industrial purchasing and project requirements.",
  keywords: [
    "engineering plastic stock shapes",
    "engineering plastic sheets",
    "engineering plastic rods",
    "engineering plastic tubes",
    "custom plastic sizes"
  ],
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title:
      "Engineering Plastic Stock Shapes Supplier | Sheets, Rods & Custom Sizes | Apex PolyWorks",
    description:
      "Engineering plastic sheets, rods, tubes and custom cut sizes for industrial material purchasing.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

export default async function StockShapesPage() {
  const images = await getProductImages();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Engineering Plastic Stock Shapes", path: pagePath }
        ]}
      />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Material supply in practical forms
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Engineering Plastic Stock Shapes Supplier
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Source engineering plastic sheets, rods, tubes and custom cut sizes for purchasing,
              inventory, fabrication and industrial project requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHref}>Request Material Quote</ButtonLink>
              <ButtonLink href={quoteHref} variant="secondary">
                Send Drawing / Requirement
              </ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
              {["Sheets, rods and tubes", "Standard and custom cut sizes"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
            <Image
              src={images.HOMEPAGE.hero}
              alt="Engineering plastic sheets, rods and stock shapes for material supply"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Available stock forms"
            title="Engineering Plastic Forms for Material Purchasing"
            text="Choose a standard material form or request practical cut dimensions for your purchasing and production workflow."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stockForms.map((form) => (
              <article
                key={form.title}
                className="flex min-h-full flex-col rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm"
              >
                <form.icon className="size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{form.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-steel">{form.text}</p>
                {form.href ? (
                  <Link
                    href={form.href}
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-graphite/15 bg-white px-4 py-3 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
                  >
                    {form.linkLabel}
                  </Link>
                ) : (
                  <p className="mt-6 border-t border-graphite/10 pt-4 text-xs font-semibold leading-6 text-steel">
                    {form.availability}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Materials available"
            title="Engineering Plastics Across Performance Levels"
            text="Material availability depends on grade, stock form, dimensions and quantity. Linked materials include detailed supply information."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {materialGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-graphite">{group.title}</h2>
                <div className="mt-5 grid gap-3">
                  {group.materials.map((material) =>
                    material.href ? (
                      <Link
                        key={material.name}
                        href={material.href}
                        className="flex min-h-11 items-center justify-between rounded-md border border-graphite/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
                      >
                        <span>{material.name}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <div
                        key={material.name}
                        className="flex min-h-11 items-center rounded-md border border-graphite/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-graphite"
                      >
                        {material.name}
                      </div>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/materials" variant="secondary">
              View Engineering Plastic Materials
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Supply choice"
            title="Stock Shapes vs Cut-to-Size"
            text="Choose the supply route that matches how your team purchases, stores and prepares engineering plastics."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-md border border-graphite/10 bg-slate-50 p-7 shadow-sm">
              <PackageCheck className="size-7 text-teal" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold text-graphite">Stock Shapes</h2>
              <p className="mt-3 text-sm leading-7 text-steel">
                Standard forms for flexible material purchasing and downstream preparation.
              </p>
              <div className="mt-6 grid gap-3">
                {["Standard material purchase", "Inventory", "Customer machining"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-md border border-graphite/10 bg-slate-50 p-7 shadow-sm">
              <Scissors className="size-7 text-amber" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold text-graphite">Cut-to-Size</h2>
              <p className="mt-3 text-sm leading-7 text-steel">
                Prepared material dimensions for defined project and production requirements.
              </p>
              <div className="mt-6 grid gap-3">
                {["Specific dimensions", "Reduced machining preparation", "Project requirements"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                      <CheckCircle2 className="size-5 shrink-0 text-amber" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-7">
                <ButtonLink href="/services/cut-to-size-plastic" variant="secondary">
                  Explore Cut-to-Size Service
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Procurement information"
            title="What to Include in a Material Request"
            text="Share the information already available. A drawing can help with cut profiles or dimensional details, but it is optional for an initial material inquiry."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {procurementInformation.map((item) => (
              <div
                key={item}
                className="flex min-h-20 items-center gap-3 rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="size-6 shrink-0 text-teal" aria-hidden="true" />
                <p className="text-base font-semibold text-graphite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open application support"
            title="Engineering Plastic Stock Shapes for Diverse Applications"
            text="Supply requests are reviewed by material, form and project requirements rather than limited to a fixed customer industry."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <article
                key={application}
                className="flex min-h-28 items-center gap-4 rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <Factory className="size-6 shrink-0 text-teal" aria-hidden="true" />
                <h2 className="text-base font-semibold leading-6 text-graphite">{application}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-slate-800 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Material supply RFQ
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">
              Request an Engineering Plastic Stock Shapes Quote
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
              Send the material, shape, dimensions and quantity available for a practical supply review.
              Optional CNC support can be discussed separately when finished features are required.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={quoteHref}>Request Material Quote</ButtonLink>
            <ButtonLink href="/materials" variant="secondary">
              Browse Materials
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
