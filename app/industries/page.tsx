import type { Metadata } from "next";
import { ListingCard } from "@/components/ListingCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { industries, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plastic Materials and Custom Parts for Automotive, Medical, Electronics, Aerospace, Industrial, and Food Processing",
  description:
    "Explore industrial applications for engineering plastics, cut-to-size materials, and custom CNC machined plastic parts.",
  alternates: {
    canonical: `${siteConfig.url}/industries`
  }
};

export default function IndustriesPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" }
        ]}
      />
      <PageHero
        eyebrow="Industries"
        title="Engineering plastic solutions organized around real industrial applications"
        text="Find common material and fabrication paths for automotive, medical device, electronics, aerospace, industrial equipment, and food processing buyers."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Applications"
            title="A sourcing partner for maintenance, OEM, engineering, and production teams"
            text="Each industry page highlights common plastic parts, material considerations, and RFQ details that make quoting smoother."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <ListingCard
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                eyebrow={industry.eyebrow}
                title={industry.title}
                text={industry.summary}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
