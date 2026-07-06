import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialTemplate } from "@/components/material/MaterialTemplate";
import { getMaterialBySlug, getMaterialsData, materialsData } from "@/lib/materials-data";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return materialsData.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) return { title: "Material Not Found" };

  return {
    title: material.seoTitle,
    description: material.seoDescription,
    alternates: { canonical: `${siteConfig.url}/materials/${material.slug}` }
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug, await getMaterialsData());
  if (!material) notFound();
  return <MaterialTemplate material={material} />;
}
