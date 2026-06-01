import type { Metadata } from "next";
import { ListingCard } from "@/components/ListingCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plastic CNC Machining, Cutting, Molding, Bending, Welding, and Finishing",
  description:
    "Explore plastic manufacturing services including CNC machining, laser cutting, cut-to-size sheets, injection molding, bending, welding, and finishing.",
  alternates: {
    canonical: `${siteConfig.url}/services`
  }
};

export default function ServicesPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Plastic manufacturing services for material buyers and custom part RFQs"
        text="Combine CNC machining, cutting, bending, welding, molding, finishing, and stock material supply into one practical sourcing path."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Choose the service that matches your drawings, material, and order volume"
            text="Every service page includes quote inputs, practical use cases, and material-aware notes for industrial purchasing teams."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ListingCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow={service.eyebrow}
                title={service.title}
                text={service.summary}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
