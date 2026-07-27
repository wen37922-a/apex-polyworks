import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  Building2,
  CheckCircle2,
  Factory,
  PackageCheck,
  Ruler,
  Scissors,
  Settings2,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const pagePath = "/products/engineering-plastics-stock-shapes";

const supplyForms = [
  {
    icon: Boxes,
    title: "Plastic Sheets",
    text: "Engineering plastic sheets available in standard sizes and custom cut dimensions."
  },
  {
    icon: Ruler,
    title: "Plastic Rods",
    text: "Engineering plastic rods supplied for machining, fabrication and industrial applications."
  },
  {
    icon: Scissors,
    title: "Custom Cut Sizes",
    text: "Order only the dimensions you need without purchasing oversized material."
  }
];

const supplyOptions = [
  {
    icon: PackageCheck,
    title: "Full Sheet & Rod Supply",
    text: "Standard material supply for industrial buyers and distributors."
  },
  {
    icon: Ruler,
    title: "Custom Cut Sizes",
    text: "Material can be cut according to required dimensions."
  },
  {
    icon: Settings2,
    title: "Machining Support",
    text: "Additional CNC machining support is available for customers requiring finished plastic components."
  }
];

const targetCustomers = [
  {
    icon: Factory,
    title: "Industrial Equipment Builders",
    text: "Engineering plastic materials for production equipment and replacement applications."
  },
  {
    icon: Settings2,
    title: "CNC Machining Shops",
    text: "Reliable plastic stock materials for custom machining projects."
  },
  {
    icon: Wrench,
    title: "Maintenance Teams",
    text: "Replacement materials supplied in the dimensions required for equipment work."
  },
  {
    icon: Building2,
    title: "Industrial Distributors",
    text: "Flexible engineering plastics supply solutions for recurring customer requirements."
  }
];

const sourcingBenefits = [
  "Flexible material supply options",
  "Standard and custom sizes available",
  "Support for small and repeat orders",
  "Export support for worldwide customers"
];

const quoteGuidance = [
  "Material type or preferred grade",
  "Sheet or rod size",
  "Required dimensions",
  "Quantity",
  "Application information"
];

const faqs = [
  {
    question: "What engineering plastics does Apex PolyWorks supply?",
    answer:
      "Apex PolyWorks supplies a range of engineering plastics including POM (Acetal), UHMWPE, PTFE, PEEK, nylon, polycarbonate, HDPE, polypropylene, ABS and acrylic. Availability depends on the requested grade, form, dimensions and quantity."
  },
  {
    question: "Do you supply plastic sheets and rods?",
    answer:
      "Yes. Engineering plastic sheets and rods are available for industrial purchasing, machining, fabrication and replacement-part requirements. Send the material, dimensions and quantity for an availability review."
  },
  {
    question: "Can engineering plastic sheets be cut to custom sizes?",
    answer:
      "Yes. Cut-to-size supply can be reviewed for customers who need blanks, panels, strips or other practical dimensions instead of full stock sizes. Material, thickness, dimensions and quantity help us prepare a quotation."
  },
  {
    question: "What are engineering plastic stock shapes?",
    answer:
      "Stock shapes are standard material forms such as sheets, plates, rods and tubes that can be supplied as raw material or prepared for later fabrication and machining. Available forms vary by material and grade."
  },
  {
    question: "Can you provide PEEK, POM, PTFE and UHMWPE materials?",
    answer:
      "Yes. PEEK, POM, PTFE and UHMWPE are among the commonly requested engineering plastics we support. Confirm the required form, grade, size and quantity so current supply options can be reviewed."
  },
  {
    question: "Do you supply materials for CNC machining?",
    answer:
      "Yes. Sheets, rods and cut blanks can be supplied for machining projects. Optional CNC plastic machining support is also available when customers require finished components from drawings or other project information."
  },
  {
    question: "Can I request a quotation for a specific size?",
    answer:
      "Yes. Include the material, grade when known, sheet or rod dimensions, required cut size, quantity and delivery destination. Drawings can be uploaded when the requirement includes profiles, holes or finished-part features."
  },
  {
    question: "Do you ship engineering plastics internationally?",
    answer:
      "Yes. Apex PolyWorks supports international industrial customers. Packaging, delivery method and export arrangements are reviewed according to the material form, dimensions, order quantity and destination."
  }
];

export const metadata: Metadata = {
  title: {
    absolute:
      "Engineering Plastics Stock Shapes Supplier | Sheets, Rods & Custom Sizes | Apex PolyWorks"
  },
  description:
    "Apex PolyWorks supplies engineering plastic sheets, rods and stock shapes including PEEK, POM, PTFE and UHMWPE, with custom cut sizes and machining support for industrial applications.",
  keywords: [
    "engineering plastics supplier",
    "plastic sheet supplier",
    "plastic rod supplier",
    "engineering plastic stock shapes supplier",
    "PEEK sheet supplier",
    "POM rod supplier"
  ],
  alternates: {
    canonical: `${siteConfig.url}${pagePath}`
  },
  openGraph: {
    title:
      "Engineering Plastics Stock Shapes Supplier | Sheets, Rods & Custom Sizes | Apex PolyWorks",
    description:
      "Engineering plastic sheets, rods, stock shapes and custom cut sizes for industrial applications worldwide.",
    url: `${siteConfig.url}${pagePath}`,
    type: "website"
  }
};

export default async function EngineeringPlasticsStockShapesPage() {
  const images = await getProductImages();
  const materials = [
    {
      name: "POM / Acetal",
      text: "Low-friction engineering plastic widely used for mechanical components, guides and wear parts.",
      href: "/materials/pom-acetal",
      image: images.POM.hero,
      alt: "POM Acetal engineering plastic sheet and rod stock shapes"
    },
    {
      name: "UHMWPE",
      text: "Wear-resistant engineering plastic for liners, guides and industrial applications.",
      href: "/materials/uhmwpe",
      image: images.UHMWPE.hero,
      alt: "UHMWPE engineering plastic sheet stock for industrial applications"
    },
    {
      name: "PTFE",
      text: "Chemical-resistant material with excellent low-friction properties.",
      href: "/materials/ptfe",
      image: images.PTFE.sheet,
      alt: "PTFE engineering plastic sheet and stock material"
    },
    {
      name: "PEEK",
      text: "High-performance engineering plastic for demanding industrial applications.",
      href: "/materials/peek",
      image: images.PEEK.sheet[0] || images.PEEK.hero,
      alt: "PEEK engineering plastic sheet stock for industrial supply"
    }
  ];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Engineering Plastics Stock Shapes", path: pagePath }
        ]}
      />
      <FaqJsonLd items={faqs} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Sheets, rods and custom dimensions
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Engineering Plastics Stock Shapes Supplier
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Supply engineering plastic sheets, rods and custom cut sizes for industrial applications worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request Material Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">
                Send Drawing for Custom Requirement
              </ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-3">
              {["Sheet and rod supply", "Custom cut dimensions", "Optional machining support"].map(
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
              alt="Engineering plastic sheets and rods supplied in stock and custom sizes"
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
            eyebrow="Supply forms"
            title="Engineering Plastic Forms We Supply"
            text="Choose full stock shapes or request dimensions prepared for purchasing, fabrication and machining requirements."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supplyForms.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm"
              >
                <item.icon className="size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common materials"
            title="Engineering Plastics Available"
            text="These are commonly requested stock-shape materials. Contact us to discuss additional materials, grades, forms and dimensions."
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
            <ButtonLink href="/request-a-quote">Ask About Another Material</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Purchasing flexibility"
            title="Flexible Supply Options"
            text="Select the supply format that matches your material purchasing and downstream production needs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supplyOptions.map((item) => (
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
              CNC Machining Support
            </ButtonLink>
            <ButtonLink href="/services/replacement-plastic-parts" variant="secondary">
              Replacement Plastic Parts
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Customer groups"
            title="Who We Supply"
            text="Material form, dimensions, quantity and delivery needs can be reviewed for different industrial purchasing workflows."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {targetCustomers.map((customer) => (
              <article
                key={customer.title}
                className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <customer.icon className="size-7 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{customer.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{customer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Material sourcing support"
            title="Why Source Engineering Plastics From Apex PolyWorks"
            text="Share the material, size, quantity and application information available. Our team can review practical supply options without positioning machining as a requirement."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {sourcingBenefits.map((benefit) => (
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material buyer FAQ"
            title="Engineering plastics supply questions"
            text="Guidance for buyers requesting sheets, rods, stock shapes and custom cut dimensions."
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

      <section id="material-rfq" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Material supply RFQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Request Engineering Plastic Material Quote
            </h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Provide the material form, dimensions and quantity needed. A drawing is useful for custom cut profiles or optional finished-part requirements.
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
            serviceNeeded="Engineering Plastics Stock Shapes"
            sourceTracking="engineering-plastics-stock-shapes"
            title="Request a material supply quote"
            description="Add the material, sheet or rod size, required dimensions, quantity and application information for review."
          />
        </div>
      </section>
    </main>
  );
}
