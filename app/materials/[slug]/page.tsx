import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { findBySlug, materials, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return materials
    .filter((material) => material.slug !== "acrylic-pmma")
    .map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = findBySlug(materials, slug);

  if (!material) {
    return { title: "Material Not Found" };
  }

  return {
    title: material.seoTitle,
    description: material.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/materials/${material.slug}`
    }
  };
}

export default async function MaterialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const material = findBySlug(materials, slug);

  if (!material) {
    notFound();
  }

  return <DetailTemplate item={material} parentLabel="Materials" />;
}
