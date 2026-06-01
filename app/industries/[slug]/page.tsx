import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { findBySlug, industries, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = findBySlug(industries, slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/industries/${industry.slug}`
    }
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = findBySlug(industries, slug);

  if (!industry) {
    notFound();
  }

  return <DetailTemplate item={industry} parentLabel="Industries" />;
}
