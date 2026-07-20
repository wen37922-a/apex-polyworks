import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialTemplate } from "@/components/material/MaterialTemplate";
import { MaterialSEOPageTemplate } from "@/components/seo/MaterialSEOPageTemplate";
import { getMaterialBySlug, getMaterialsData, materialsData } from "@/lib/materials-data";
import { createPeekSEOPageData, peekSEOMetadata } from "@/lib/seo-pages/peek";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return materialsData.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "peek") return peekSEOMetadata;

  const material = getMaterialBySlug(slug);
  if (!material) return { title: "Material Not Found" };

  return {
    title: `${material.shortName} Supplier & CNC Parts Manufacturer`,
    description: `Source ${material.shortName} sheet, rod, tube, and CNC machined parts from an engineering plastics supplier. Send drawings for material and machining review.`,
    alternates: { canonical: `${siteConfig.url}/materials/${material.slug}` }
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug, await getMaterialsData());
  if (!material) notFound();
  if (slug === "peek") {
    return <MaterialSEOPageTemplate material={createPeekSEOPageData(material)} />;
  }

  return <MaterialTemplate material={material} />;
}
