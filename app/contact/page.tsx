import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
