import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { getProductImages } from "@/lib/product-images";
import { findBySlug, services, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findBySlug(services, slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = findBySlug(services, slug);

  if (!service) {
    notFound();
  }

  const images = await getProductImages();
  const unifiedService = slug === "cnc-plastic-machining"
    ? {
        ...service,
        galleryImages: [...images.PEEK.cnc, ...images.ABS.gallery].map((src, index) => ({
          src,
          alt: `Precision CNC machined engineering plastic part example ${index + 1}`
        }))
      }
    : service;

  return <DetailTemplate item={unifiedService} parentLabel="Services" />;
}
