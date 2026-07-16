import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Factory,
  FileCheck2,
  Globe2,
  Layers3,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { getProductImages, productImages, siteImages } from "@/lib/product-images";
import { faq, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastics & CNC Machined Plastic Parts Supplier",
  description:
    "Apex PolyWorks is an engineering plastics supplier for US industrial buyers sourcing PEEK sheet, PTFE rod, UHMWPE sheet, and CNC plastic machining support.",
  alternates: {
    canonical: siteConfig.url
  }
};

const trustTags = [
  "Engineering Plastic Specialists",
  "CNC Machining Capability",
  "Material Certificates Available",
  "Serving US Industrial Buyers"
];

const buyerQuestions = [
  ["Materials?", "PEEK, PTFE, UHMWPE, PC, Nylon, Acetal, HDPE, PP, ABS, Acrylic"],
  ["Machining?", "CNC milled and turned plastic components from drawings"],
  ["Lead Time?", "Fast engineering RFQ review for complete quote requests"],
  ["Quality?", "Material certificates and inspection reports available on request"]
];

const supplyCards = [
  {
    title: "Engineering Plastic Sheets & Rods",
    description:
      "PEEK, PTFE, UHMWPE and other high-performance plastic materials available in sheets, rods and custom sizes.",
    href: "/materials",
    button: "View Materials",
    image: productImages.PEEK.sheet[0],
    alt: "PEEK engineering plastic sheet stock for industrial buyers",
    icon: Layers3
  },
  {
    title: "Custom CNC Plastic Parts",
    description:
      "Precision machined plastic components from prototype quantities to production runs.",
    href: "/services/cnc-plastic-machining",
    button: "Explore CNC Machining",
    image: productImages.PEEK.cnc[0],
    alt: "CNC machined PEEK plastic part for manufacturing applications",
    icon: Settings2
  },
  {
    title: "Cut-to-Size Plastic Supply",
    description:
      "Flexible sizing options for industrial applications and replacement parts.",
    href: "/request-a-quote",
    button: "Request Quote",
    image: siteImages.warehouse,
    alt: "Warehouse inventory of engineering plastic sheets and rods",
    icon: Wrench
  }
];

const whyChoose = [
  {
    title: "Engineering Material Expertise",
    text: "Supporting demanding applications with high-performance plastics.",
    icon: ShieldCheck
  },
  {
    title: "Flexible Production",
    text: "From prototypes to repeat production orders.",
    icon: Factory
  },
  {
    title: "Fast Engineering Response",
    text: "Quick review of drawings and RFQ requirements.",
    icon: Clock3
  },
  {
    title: "Global Supply Support",
    text: "Hong Kong based sales office serving international industrial customers.",
    icon: Globe2
  }
];

const industries = [
  {
    title: "Semiconductor Equipment",
    href: "/industries/electronics",
    text: "Insulators, fixtures, trays, and precision plastic components."
  },
  {
    title: "Medical Devices",
    href: "/industries/medical-devices",
    text: "Prototype fixtures, stable plastics, and clean machined parts."
  },
  {
    title: "Industrial Automation",
    href: "/industries/industrial-equipment",
    text: "Wear parts, guides, rollers, guards, and equipment components."
  },
  {
    title: "Food Processing",
    href: "/industries/food-processing",
    text: "HDPE, UHMWPE, PP, and machined parts for production lines."
  },
  {
    title: "Machinery Manufacturing",
    href: "/industries/industrial-equipment",
    text: "Replacement parts, panels, bushings, liners, and custom parts."
  }
];

const homeFaq = faq.slice(0, 3);

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getProductImages();
  const materialHighlights = [
    {
      title: "PEEK Sheet Supplier",
      href: "/products/peek-sheet",
      image: images.PEEK.hero,
      alt: "PEEK engineering plastic sheet and machined component supply"
    },
    {
      title: "POM / Acetal Supplier",
      href: "/materials/pom-acetal",
      image: images.POM.hero,
      alt: "POM acetal engineering plastic stock for precision components"
    },
    {
      title: "PTFE Rod Supplier",
      href: "/materials/ptfe",
      image: images.PTFE.hero,
      alt: "PTFE engineering plastic stock for chemical resistant components"
    },
    {
      title: "UHMWPE Sheet Supplier",
      href: "/materials/uhmwpe",
      image: images.UHMWPE.hero,
      alt: "UHMWPE sheet material for wear strips and industrial liners"
    }
  ];

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <FaqJsonLd items={homeFaq} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              US-focused engineering plastics supplier
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-graphite sm:text-6xl">
              Engineering Plastics & CNC Machined Parts Supplier
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Apex PolyWorks supplies high-performance engineering plastics including PEEK, PTFE, UHMWPE and custom CNC machined plastic parts for industrial manufacturers in the United States.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Get a Fast Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Upload Your Drawing</ButtonLink>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustTags.map((tag) => (
                <span key={tag} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-graphite/10 bg-white px-3 py-2 text-sm font-semibold text-graphite shadow-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-teal" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[19rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[27rem]">
              <Image
                src={images.HOMEPAGE.hero}
                alt="Engineering plastic stock and CNC machined plastic parts supplied by Apex PolyWorks"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                [productImages.PEEK.sheet[0], "PEEK sheet stock for precision manufacturing"],
                [productImages.PTFE.rod, "PTFE rod stock for industrial machining"],
                [productImages.PEEK.cnc[1], "CNC machined plastic component example"]
              ].map(([src, alt]) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                  <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 17vw, 33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {buyerQuestions.map(([title, text]) => (
            <div key={title} className="rounded-md border border-graphite/10 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-graphite">{title}</p>
              <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we supply"
            title="Material supply and CNC plastic machining from one RFQ"
            text="Start with material, drawing, size, quantity, or application requirements. Apex PolyWorks reviews the sourcing path before quoting."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {supplyCards.map((card) => (
              <article key={card.title} className="group flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <card.icon className="size-6 text-teal" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-graphite">{card.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-steel">{card.description}</p>
                  <div className="mt-6">
                    <ButtonLink href={card.href} variant={card.href === "/request-a-quote" ? "primary" : "secondary"}>
                      {card.button}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="High-value materials"
              title="PEEK, PTFE, and UHMWPE for demanding industrial applications"
              text="Use the material pages when you need stock forms, cut-to-size supply, machining review, or a fast quote for engineering plastic parts."
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/materials">View Materials</ButtonLink>
              <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">CNC Plastic Machining</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materialHighlights.map((item) => (
              <Link key={item.href} href={item.href} className="group overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 14vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.04]" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-graphite">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why choose Apex PolyWorks"
            title="Why Choose Apex PolyWorks?"
            text="A sourcing partner for buyers who need material answers, drawing review, quote clarity, and production support."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative min-h-[20rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm sm:min-h-[26rem]">
            <Image
              src={images.HOMEPAGE.cnc}
              alt="CNC plastic machining capability for precision engineering plastic parts"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Machining capability"
              title="CNC plastic machining for prototypes and production runs"
              text="Send PDF, STEP, DXF, DWG, or sample photos. Our team reviews material behavior, tolerance, finish, and quantity before quoting."
            />
            <div className="mt-6 grid gap-3">
              {["PEEK CNC machining for high-performance parts", "PTFE, UHMWPE, Nylon, Acetal, PC, HDPE and more", "Prototype quantities through repeat production orders"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <PackageCheck className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/request-a-quote">Upload Your Drawing</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            text="Industrial plastic material and part support for engineering teams, maintenance teams, OEMs, and manufacturing buyers."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <Link key={industry.title} href={industry.href} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                <Factory className="size-5 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-base font-semibold text-graphite">{industry.title}</h2>
                <p className="mt-2 text-sm leading-6 text-steel">{industry.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Quality & Documentation
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Documentation support for industrial procurement
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                "Material certificates available upon request.",
                "Inspection reports available for qualified projects.",
                "Support engineering documentation requirements."
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-graphite/10 bg-white p-4 text-sm font-semibold text-ink shadow-sm">
                  <FileCheck2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm sm:min-h-[24rem]">
            <Image
              src={siteImages.warehouse}
              alt="Engineering plastic warehouse inventory for documented industrial supply"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/75 via-transparent to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold text-white">
              Stock, cutting, packing, and documentation support for industrial RFQs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buyer FAQ"
            title="Common RFQ questions"
            text="Short answers for engineers and purchasing teams planning material or machined plastic part requests."
            align="center"
          />
          <div className="mt-8 grid gap-4">
            {homeFaq.map((item) => (
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

      <section className="bg-graphite py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-citrus">
              <BadgeCheck className="size-4" aria-hidden="true" />
              RFQ ready
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">
              Need Engineering Plastic Parts?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
              Upload your drawing or send your material requirements. Our engineering team will review your request and provide a quotation.
            </p>
          </div>
          <ButtonLink href="/request-a-quote">Request A Quote</ButtonLink>
        </div>
      </section>
    </main>
  );
}
