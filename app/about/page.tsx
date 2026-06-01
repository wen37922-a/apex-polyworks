import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Factory, FileSearch, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Apex Polymer Works",
  description:
    "Learn how Apex Polymer Works supports US buyers with engineering plastics, CNC machining, cut-to-size materials, and custom fabrication.",
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
        title="A sourcing and fabrication partner for buyers who need clear plastic part answers"
        text="Apex Polymer Works is built around fast RFQ review, practical material guidance, and production-ready plastic materials and parts for US industrial teams."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="relative min-h-[24rem] overflow-hidden rounded-md">
            <Image
              src="/images/plastic-machining-hero.png"
              alt="Plastic sheet stock, rods, and CNC machined plastic components"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Operating model"
              title="Materials knowledge plus manufacturing follow-through"
              text="Many plastic suppliers stop at raw material. Many machine shops quote only what is on the drawing. Our role is to connect the material choice, manufacturing route, finish, and buyer constraints before production starts."
            />
            <div className="mt-8 grid gap-4">
              {[
                "RFQ review for material, tolerance, finish, quantity, and application fit",
                "Supply options for sheets, rods, films, cut-to-size blanks, and finished parts",
                "Support for prototypes, maintenance, repeat production, and custom assemblies",
                "Clear communication for US purchasing, engineering, and operations teams"
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
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [FileSearch, "Quote discipline", "We document assumptions so price, lead time, material, finish, and inspection expectations are visible."],
              [Factory, "Manufacturing range", "CNC machining, sheet cutting, forming, welding, finishing, assembly, and stock supply can be quoted together."],
              [ShieldCheck, "Buyer confidence", "Material certificates, packing requirements, and project notes can be added when the order requires them."]
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
