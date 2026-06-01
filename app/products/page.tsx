import type { Metadata } from "next";
import { ListingCard } from "@/components/ListingCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { products, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plastic Sheets, Rods, Films, and Custom Plastic Parts",
  description:
    "Source plastic sheets, rods, films, and custom plastic parts made by CNC machining, cutting, bending, welding, finishing, and assembly.",
  alternates: {
    canonical: `${siteConfig.url}/products`
  }
};

export default function ProductsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" }
        ]}
      />
      <PageHero
        eyebrow="Products"
        title="Plastic stock material and made-to-print parts from one RFQ"
        text="Buy full-size stock, cut-to-size blanks, thin-gauge films, or finished custom plastic parts for prototypes, maintenance, and production."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product categories"
            title="Flexible sourcing for standard materials and custom plastic components"
            text="A single order can include sheet, rod, film, machined parts, finishing, and kitted delivery."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ListingCard
                key={product.slug}
                href={`/products/${product.slug}`}
                eyebrow={product.eyebrow}
                title={product.title}
                text={product.summary}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
