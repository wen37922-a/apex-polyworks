import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Globe2, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

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
        eyebrow="About us"
        title="Engineering plastics and CNC machining support for industrial teams"
        text="Apex PolyWorks is based in Shenzhen, China, with sales support in Hong Kong and service for industrial customers worldwide."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[24rem] overflow-hidden rounded-md">
            <Image
              src="/images/plastic-machining-hero.png"
              alt="Engineering plastic stock and CNC machined plastic components supplied by Apex PolyWorks"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite/90 to-transparent px-6 pb-6 pt-16 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-citrus">Company Introduction</p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Engineering plastics, stock forms, and custom components supported through one sourcing conversation.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="A practical partner from material selection through production"
              text="Apex PolyWorks supplies engineering plastics, cut-to-size materials, and custom CNC machined plastic components. We connect material selection, drawing requirements, manufacturing review, and buyer communication before production begins."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Engineering plastic sheets, rods, cut-to-size blanks, and finished components",
                "Drawing review for material, dimensions, finish, quantity, and application requirements",
                "Support for prototypes, maintenance requirements, and repeat production",
                "Clear technical communication for engineering and purchasing teams worldwide"
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Shenzhen manufacturing network"
            title="Material sourcing and engineering support"
            text="Our Shenzhen-based team coordinates material requirements, drawing review, machining communication, packing, and export preparation with qualified supply partners."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Shenzhen Manufacturing Supply Chain",
                text: "Engineering plastic stock, cut-to-size requirements, machining scope, and delivery planning are coordinated around each project.",
                image: siteImages.warehouse,
                alt: "Engineering plastic sheet and rod inventory supporting material supply coordination"
              },
              {
                title: "Engineering Support",
                text: "Drawings and application requirements are reviewed to clarify material, geometry, documentation, and production expectations before quotation.",
                image: productImages.PEEK.cnc[0],
                alt: "CNC machined engineering plastic component for drawing and application review"
              }
            ].map((item) => (
              <article key={item.title} className="overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <div className="relative aspect-[8/5] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-graphite">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Company capabilities"
            title="Location, services, and buyer support"
            text="Clear company identity and practical project support for international industrial procurement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [MapPin, "Location", "Based in Shenzhen, China, with sales support in Hong Kong and service for industrial customers worldwide."],
              [Wrench, "Services", "Engineering plastic supply, cut-to-size materials, CNC plastic machining, and custom component support."],
              [Globe2, "Customer Support", "Material selection, drawing review, production requirements, and technical communication for engineering and purchasing teams."],
              [ShieldCheck, "Quality Documentation", "Material documentation and inspection reports may be available depending on the selected material and project requirements."]
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="rounded-md bg-white p-6 shadow-sm">
                <Icon className="size-6 text-amber" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold text-graphite">{String(title)}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{String(text)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/request-a-quote">Send a Project</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
