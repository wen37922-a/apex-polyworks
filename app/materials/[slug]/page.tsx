import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { getProductImages } from "@/lib/product-images";
import { findBySlug, materials, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return materials
    .filter((material) => !["acrylic-pmma", "polycarbonate-pc", "pp", "nylon-pa"].includes(material.slug))
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

  const images = await getProductImages();
  const unifiedMaterial = slug === "abs" && images.ABS.gallery.length
    ? {
        ...material,
        heroImage: { src: images.ABS.hero || images.ABS.gallery[0], alt: "ABS plastic sheet material for industrial fabrication" },
        galleryImages: images.ABS.gallery.map((src, index) => ({
          src,
          alt: `ABS plastic material and manufactured part example ${index + 1}`
        }))
      }
    : slug === "peek"
      ? {
          ...material,
          heroImage: { src: images.PEEK.sheet[0], alt: "PEEK engineering plastic sheet material" },
          galleryImages: [...images.PEEK.sheet, ...images.PEEK.rod].map((src, index) => ({
            src,
            alt: `PEEK sheet and rod stock example ${index + 1}`
          }))
        }
      : material;

  return <DetailTemplate item={unifiedMaterial} parentLabel="Materials" />;
}
