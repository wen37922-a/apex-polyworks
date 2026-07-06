import type { Metadata } from "next";
import { MaterialCard } from "@/components/MaterialCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { getCatalogMaterials, getMaterialPrimaryImage, getMaterialsData } from "@/lib/materials-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastic Materials: ABS, PC, Nylon, Acetal, PEEK, PTFE, PVC, HDPE, PP, Acrylic",
  description:
    "Compare engineering plastic materials including ABS, polycarbonate, nylon, acetal, PEEK, PTFE, PVC, HDPE, PP, and acrylic for custom parts.",
  alternates: {
    canonical: `${siteConfig.url}/materials`
  }
};

export const dynamic = "force-dynamic";

export default async function MaterialsPage() {
  const materialCards = getCatalogMaterials(await getMaterialsData());
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" }
        ]}
      />
      <PageHero
        eyebrow="Materials"
        title="Engineering plastic sheets, rods, films, and machinable stock"
        text="Find practical material options for impact resistance, wear, clarity, chemical resistance, food processing, electrical insulation, and high-performance applications."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material library"
            title="50+ plastic options, with the core industrial grades organized here"
            text="If a drawing lists a trade name or an unclear material, send it with your RFQ and we will help match a practical equivalent."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <MaterialCard
                key={material.slug}
                title={material.shortName}
                href={`/materials/${material.slug}`}
                image={getMaterialPrimaryImage(material)}
                alt={`${material.name} material for industrial machining and fabrication`}
                description={material.cardDescription}
                applications={material.cardApplications}
                tags={material.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
