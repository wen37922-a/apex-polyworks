import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Ruler,
  Send,
  Truck
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const requestSteps = [
  {
    number: "01",
    icon: Send,
    title: "Send Your Requirement",
    text: "Share the material, size, quantity, and any delivery information already available."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Specification Review",
    text: "We review the material, dimensions, application, and points that need clarification."
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Quote & Supply Support",
    text: "Receive quotation, agreed supply or production support, and shipment coordination."
  }
];

const quoteInformation = [
  {
    icon: Boxes,
    title: "Material",
    text: "PEEK / POM / PTFE / UHMWPE / Other"
  },
  {
    icon: PackageCheck,
    title: "Product Form",
    text: "Sheet / Rod / Tube / Cut Piece"
  },
  {
    icon: Ruler,
    title: "Dimensions",
    text: "Finished or stock dimensions, plus tolerances when relevant"
  },
  {
    icon: ClipboardCheck,
    title: "Quantity",
    text: "Required pieces, sheets, rods, tubes, or estimated order quantity"
  },
  {
    icon: FileCheck2,
    title: "Application",
    text: "Operating conditions or performance requirements you can share"
  },
  {
    icon: FileCheck2,
    title: "Drawing (Optional)",
    text: "A drawing or specification can help clarify custom sizes and details"
  }
];

const globalSupport = [
  {
    icon: Globe2,
    title: "Worldwide Customer Communication",
    text: "Clear email, WhatsApp, specification, and drawing communication for international purchasing teams."
  },
  {
    icon: Truck,
    title: "Export Shipment Support",
    text: "Packing and shipment requirements can be coordinated against the confirmed order scope."
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    text: "Available material, product, inspection, and export documentation can be reviewed when required."
  }
];

const materials = [
  { name: "PEEK", href: "/materials/peek" },
  { name: "POM / Acetal", href: "/materials/pom-acetal" },
  { name: "UHMWPE", href: "/materials/uhmwpe" },
  { name: "PTFE", href: "/materials/ptfe" }
];

export const metadata: Metadata = {
  title: "Contact Apex PolyWorks",
  description:
    "Contact Apex PolyWorks for engineering plastics, CNC plastic machining, cut-to-size sheets, rods, films, and custom plastic fabrication.",
  alternates: {
    canonical: `${siteConfig.url}/contact`
  }
};

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      />

      <section className="border-b border-graphite/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Contact Apex PolyWorks
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Contact Apex PolyWorks for Engineering Plastic Requirements
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Discuss engineering plastic materials, stock shapes, cut-to-size requirements, and global supply support with our team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote?source=contact-page">
                Request Material Quote
              </ButtonLink>
              <ButtonLink href="/materials" variant="secondary">
                Browse Materials
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4">
            {[
              ["Material Supply", "Engineering plastic sheets, rods, tubes, and other stock forms"],
              ["Size Support", "Full stock shapes and cut-to-size requirements"],
              ["Global Communication", "Purchasing and shipment coordination for international customers"]
            ].map(([title, text]) => (
              <div key={title} className="rounded-md bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-graphite">{title}</p>
                <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Company contact information"
            title="A Material Supply Contact for Industrial Requirements"
            text="Apex PolyWorks is an engineering plastics supplier with Shenzhen, China operations and Hong Kong sales support for international purchasing communication."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-100 shadow-sm lg:aspect-auto">
              <Image
                src={productImages.PEEK.sheet[0]}
                alt="PEEK engineering plastic sheet stock supplied for industrial requirements"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                <Boxes className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">Apex PolyWorks</h2>
                <p className="mt-2 text-sm leading-7 text-steel">
                  Engineering plastics supplier supporting material, stock-shape, and cut-to-size requirements.
                </p>
              </article>
              <article className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                <MapPin className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">Shenzhen Operations</h2>
                <p className="mt-2 text-sm leading-7 text-steel">
                  Material and specification review, supply coordination, and shipment preparation in Shenzhen, China.
                </p>
              </article>
              <article className="rounded-md border border-graphite/10 bg-slate-50 p-5 sm:col-span-2">
                <Globe2 className="size-6 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">Hong Kong Sales Support</h2>
                <p className="mt-2 text-sm leading-7 text-steel">
                  Sales communication support for international buyers discussing engineering plastic and commercial requirements.
                </p>
              </article>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex min-w-0 gap-4 rounded-md border border-graphite/10 bg-white p-4 transition hover:border-teal/40"
              >
                <Mail className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-graphite">Email</span>
                  <span className="mt-1 block break-all text-sm text-steel">{siteConfig.email}</span>
                </span>
              </Link>
              <Link
                href={siteConfig.whatsappUrl}
                data-whatsapp-location="contact_details"
                className="flex min-w-0 gap-4 rounded-md border border-graphite/10 bg-white p-4 transition hover:border-teal/40"
              >
                <MessageCircle className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-graphite">WhatsApp</span>
                  <span className="mt-1 block text-sm text-steel">{siteConfig.whatsapp}</span>
                </span>
              </Link>
              <Link
                href="/request-a-quote?source=contact-page"
                className="flex gap-4 rounded-md border border-graphite/10 bg-white p-4 transition hover:border-teal/40 sm:col-span-2"
              >
                <Send className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-graphite">RFQ Channel</span>
                  <span className="mt-1 block text-sm leading-6 text-steel">
                    Send material, size, quantity, destination, and optional drawing details through the existing RFQ system.
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to start your request"
            title="Three Steps from Requirement to Supply Support"
            text="Start with the information you already have. Our team can identify clarification points before preparing a quotation."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {requestSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <step.icon className="size-7 text-teal" aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-[0.18em] text-amber">{step.number}</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-graphite">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Information for a faster quote"
            title="Useful Purchasing Details to Include"
            text="These details are guidance only, not mandatory fields. You can still start an inquiry when some specifications are not yet available."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {materials.map((material) => (
              <Link
                key={material.name}
                href={material.href}
                className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-2 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
              >
                {material.name}
              </Link>
            ))}
            <Link
              href="/products/stock-shapes"
              className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-2 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
            >
              Stock Shapes
            </Link>
            <Link
              href="/services/cut-to-size-plastic"
              className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-2 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal"
            >
              Cut-to-Size
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quoteInformation.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-6"
              >
                <item.icon className="size-7 text-amber" aria-hidden="true" />
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
            eyebrow="Global support"
            title="Practical Communication for International Purchasing"
            text="Apex PolyWorks supports international sourcing through clear requirement review, shipment coordination, and documentation communication."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {globalSupport.map((item) => (
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

      <section className="bg-slate-800 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <CheckCircle2 className="size-9 text-citrus" aria-hidden="true" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
              Start your material request
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Share the Engineering Plastic Requirement You Have Today
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
              Send the available material, form, dimensions, quantity, destination, application, or drawing details. Missing information does not prevent an initial review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote?source=contact-page">
                Request Material Quote
              </ButtonLink>
              <ButtonLink href="/products/stock-shapes" variant="secondary">
                View Stock Shapes
              </ButtonLink>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </main>
  );
}
