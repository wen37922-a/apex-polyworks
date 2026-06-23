import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { findBySlug, products, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products
    .filter((product) => !["peek-rod", "peek-sheet"].includes(product.slug))
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findBySlug(products, slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`
    }
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = findBySlug(products, slug);

  if (!product) {
    notFound();
  }

  return <DetailTemplate item={product} parentLabel="Products" />;
}
