import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Settings2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

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
      <PageHero
        eyebrow="Contact"
        title="Talk with a plastics sourcing and fabrication specialist"
        text="Send an RFQ, ask a material question, or confirm whether a plastic sheet, rod, film, or custom part is a fit for your application."
      />
      <section className="border-b border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Apex PolyWorks"
            title="Engineering Plastics & CNC Machining Support"
            text="A Shenzhen-based partner helping industrial teams source engineering plastics and custom plastic components."
          />
          <div className="mt-7 max-w-4xl space-y-4 text-base leading-8 text-steel">
            <p>
              Apex PolyWorks is an engineering plastics supplier and CNC machining partner based in Shenzhen, China.
            </p>
            <p>
              We support industrial customers worldwide with material supply, cut-to-size solutions, and custom plastic components.
            </p>
            <p>
              Our team works with engineers and purchasing teams to review material requirements, drawings, and project specifications.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Location", text: "Shenzhen, China" },
              { icon: Globe2, title: "Support", text: "Global customer support" },
              { icon: Settings2, title: "Services", text: "Engineering plastics and CNC machined plastic parts" },
              { icon: MessageCircle, title: "Communication", text: "Email and WhatsApp inquiry" }
            ].map((item) => (
              <article key={item.title} className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm">
                <item.icon className="size-6 text-teal" aria-hidden="true" />
                <h2 className="mt-4 font-semibold text-graphite">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Sales support"
              title="Get a practical answer before you place the order"
              text="For the fastest response, include drawings, material, quantity, finish, deadline, and application notes."
            />
            <div className="mt-8 grid gap-4">
              <Link href={`mailto:${siteConfig.email}`} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4 hover:border-teal/40">
                <Mail className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-graphite">Email</span>
                  <span className="mt-1 block text-sm text-steel">{siteConfig.email}</span>
                </span>
              </Link>
              <Link href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4 hover:border-teal/40">
                <Phone className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-graphite">Phone</span>
                  <span className="mt-1 block text-sm text-steel">{siteConfig.phone}</span>
                </span>
              </Link>
              <Link href={siteConfig.whatsappUrl} className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4 hover:border-teal/40">
                <MessageCircle className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-graphite">WhatsApp</span>
                  <span className="mt-1 block text-sm text-steel">{siteConfig.whatsapp}</span>
                </span>
              </Link>
              <div className="flex gap-4 rounded-md border border-graphite/10 bg-slate-50 p-4">
                <MapPin className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-graphite">Service area</span>
                  <span className="mt-1 block text-sm text-steel">{siteConfig.address}</span>
                </span>
              </div>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </main>
  );
}
