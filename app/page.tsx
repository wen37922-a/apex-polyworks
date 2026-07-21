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
  MapPin,
  MessageCircle,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { getProductImages, productImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Engineering Plastics Supplier & CNC Machined Plastic Parts | Apex PolyWorks"
  },
  description:
    "Apex PolyWorks supplies high-performance engineering plastics including PEEK, PTFE, POM and UHMWPE, with custom CNC machining services for industrial customers worldwide.",
  alternates: {
    canonical: `${siteConfig.url}/`
  }
};

const trustTags = [
  "Engineering Plastic Expertise",
  "CNC Machining Capability",
  "Material Traceability",
  "Serving Global Industrial Customers"
];

const buyerQuestions = [
  ["Materials?", "PEEK, PTFE, UHMWPE, PC, Nylon, Acetal, HDPE, PP, ABS, Acrylic"],
  ["Machining?", "CNC milled and turned plastic components from drawings"],
  ["Lead Time?", "RFQs are typically reviewed within 24 hours on business days"],
  ["Quality?", "Documentation and inspection requirements are reviewed by material and project"]
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
    text: "RFQs are typically reviewed within 24 hours on business days.",
    icon: Clock3
  },
  {
    title: "Global Supply Support",
    text: "Shenzhen-based operations with Hong Kong sales support for industrial customers worldwide.",
    icon: Globe2
  }
];

const projectSupportSteps = [
  {
    number: "01",
    title: "Send Your Requirements",
    text: "Share drawings, specifications, materials, dimensions or application requirements.",
    icon: FileCheck2
  },
  {
    number: "02",
    title: "Engineering Review",
    text: "Review material options, machining requirements and production considerations.",
    icon: Settings2
  },
  {
    number: "03",
    title: "Quotation & Confirmation",
    text: "Provide quotation details including material, process and estimated lead time.",
    icon: BadgeCheck
  },
  {
    number: "04",
    title: "Production Support",
    text: "Coordinate manufacturing, inspection requirements and delivery arrangements.",
    icon: PackageCheck
  }
];

const companyInformation = [
  {
    title: "Location",
    lines: ["Shenzhen, China"],
    icon: MapPin
  },
  {
    title: "Materials",
    lines: ["PEEK, PTFE, POM, UHMWPE, Nylon and more"],
    icon: Layers3
  },
  {
    title: "Services",
    lines: ["Cut-to-size supply", "CNC plastic machining"],
    icon: Settings2
  },
  {
    title: "Customers",
    lines: ["Serving industrial buyers worldwide"],
    icon: Globe2
  }
];

const qualitySupport = [
  {
    title: "Material Certificates Support",
    text: "Material certificate requirements can be reviewed with the selected grade and sourcing scope.",
    icon: FileCheck2
  },
  {
    title: "Inspection Reports",
    text: "Inspection report requirements can be defined according to the drawing and project needs.",
    icon: ShieldCheck
  },
  {
    title: "Drawing Review",
    text: "Drawings are reviewed for material, dimensions, critical features, and documentation requirements.",
    icon: Settings2
  },
  {
    title: "CMM Inspection Support",
    text: "CMM inspection can be coordinated when required by part geometry, drawing requirements, and project scope.",
    icon: BadgeCheck
  }
];

const industries = [
  {
    title: "Machinery & Equipment",
    href: "/industries/industrial-equipment",
    text: "Custom plastic parts, wear components, insulation parts and replacement components for equipment manufacturers."
  },
  {
    title: "Automation & Robotics",
    href: "/services/cnc-plastic-machining",
    text: "Guide rails, sliders, fixtures, supports and custom plastic components."
  },
  {
    title: "Semiconductor & Electronics",
    href: "/industries/electronics",
    text: "Insulation parts, tooling fixtures, carriers and high-performance engineering plastic components."
  },
  {
    title: "Food & Packaging Equipment",
    href: "/industries/food-processing",
    text: "Wear strips, rollers, conveyor components and equipment plastic parts."
  },
  {
    title: "Medical & Laboratory Equipment",
    href: "/industries/medical-devices",
    text: "Chemical-resistant plastic components and custom machined parts."
  },
  {
    title: "Custom Industrial Applications",
    href: "/request-a-quote",
    text: "Special requirements are welcome. Our engineering team can help evaluate material selection and custom solutions."
  }
];

const homeFaq = [
  {
    question: "What engineering plastics can you supply?",
    answer:
      "Apex PolyWorks supplies a wide range of engineering plastics including PEEK, PTFE, POM (Acetal), UHMWPE, Nylon, PPS, PVDF and other high-performance materials. Contact us for material availability and technical support."
  },
  {
    question: "Do you provide CNC machining services?",
    answer:
      "Yes. We provide custom CNC machining services for engineering plastic components based on customer drawings, specifications and application requirements."
  },
  {
    question: "Can you manufacture custom plastic parts from drawings?",
    answer:
      "Yes. Customers can provide 2D drawings, 3D CAD files or samples. Our team can review requirements and provide manufacturing suggestions and quotation support."
  },
  {
    question: "Can you provide samples before production?",
    answer:
      "Yes. Prototype and sample production are available for design verification before larger production orders."
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our engineering plastics are used in semiconductor equipment, medical devices, automation systems, electronics, food processing and other industrial applications."
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Apex PolyWorks supports international shipments and works with customers worldwide. We provide export packaging and logistics coordination for global industrial customers."
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We perform material verification, dimensional inspection and production checks according to customer requirements and specifications."
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Send us your drawings, material requirements, dimensions and quantity. Our team will review your request and provide quotation support."
  }
];

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
              Global engineering plastics and machining partner
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-graphite sm:text-6xl">
              Engineering Plastics Supplier & Custom CNC Machined Parts Manufacturer
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Apex PolyWorks supplies high-performance engineering plastics including PEEK, PTFE, POM, UHMWPE and custom CNC machined plastic components for industrial customers worldwide.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-graphite">
              <MapPin className="size-4 shrink-0 text-amber" aria-hidden="true" />
              Based in Shenzhen, China
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <SectionHeader
              eyebrow="Engineering materials"
              title="Engineering Plastics for Demanding Industrial Applications"
              text="Apex PolyWorks supplies a broad range of engineering plastics, including PEEK, PTFE, POM, UHMWPE, Nylon, Acrylic and other high-performance materials. The materials shown below represent commonly requested products. Additional materials, grades, sizes and custom solutions are available upon request."
            />
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

          <div className="mt-8 flex flex-col gap-5 border-t border-graphite/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-sm leading-7 text-steel">
              <span className="block font-semibold text-graphite">Need a specific grade, size or material?</span>
              Send your requirements - our engineering team will help identify the right solution.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request Material Availability</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact Engineering Team</ButtonLink>
            </div>
          </div>

          <div className="mt-6 grid gap-6 rounded-md border border-graphite/10 bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-graphite">Need a Material Not Listed Here?</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-steel">
                Our engineering team can help identify the right material solution based on your application requirements. Contact us for special grades, custom sizes, and engineering plastic solutions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href="/request-a-quote">Ask About a Material</ButtonLink>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-whatsapp-location="homepage_material_inquiry"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-graphite/15 bg-white px-5 py-3 text-sm font-semibold text-graphite transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal/30"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Quick Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeader
              eyebrow="Company profile"
              title="About Apex PolyWorks"
              text="Engineering Plastics & CNC Machining Partner Based in Shenzhen, China"
            />
            <div className="grid gap-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              <p>
                Apex PolyWorks is an engineering plastics supplier and CNC machining partner based in Shenzhen, China.
              </p>
              <p>
                We provide high-performance engineering plastics, cut-to-size materials, and custom machined plastic components for industrial customers worldwide.
              </p>
              <p>
                Our team supports engineers and purchasing teams with material selection, drawing review, production requirements, and technical communication.
              </p>
              <p>
                From prototype development to repeat production, we help customers find practical plastic solutions for demanding applications.
              </p>
            </div>
          </div>
          <div className="mt-10 grid overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:grid-cols-[0.72fr_1.28fr] sm:items-stretch">
            <div className="relative aspect-[4/3] min-h-[13rem] overflow-hidden sm:aspect-auto">
              <Image
                src={images.PEEK.cnc[3] ?? images.HOMEPAGE.cnc}
                alt="CNC machined engineering plastic components supported by the Shenzhen team"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 lg:p-8">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-teal">
                <MapPin className="size-4 shrink-0 text-amber" aria-hidden="true" />
                Based in Shenzhen, China
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-steel">
                Located within a major manufacturing supply chain, our team coordinates material sourcing, drawing review, machining requirements, and export communication for industrial projects.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyInformation.map((item) => (
              <article key={item.title} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <div className="mt-3 grid gap-1 text-sm leading-6 text-steel">
                  {item.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </article>
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

      <section className="border-t border-graphite/10 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Customer workflow"
            title="How We Support Your Project"
            text="A clear review process helps engineering and purchasing teams move from requirements to production planning."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectSupportSteps.map((step) => (
              <article key={step.number} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-citrus">{step.number}</span>
                  <step.icon className="size-6 text-teal" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-graphite">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{step.text}</p>
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
            title="Industries We Support"
            text="Supporting engineers, OEMs, maintenance teams and manufacturers across different industries with engineering plastics and custom plastic components."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quality support"
            title="Quality Documentation & Inspection Support"
            text="Documentation and inspection requirements are reviewed against the selected material, customer drawing, and agreed project scope."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySupport.map((item) => (
              <article key={item.title} className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-steel">
            Include certificate, inspection, critical-dimension, or CMM requirements with the RFQ so availability and scope can be confirmed before quotation.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buyer FAQ"
            title="Frequently Asked Questions"
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
