import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { findBySlug, services, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

  return <DetailTemplate item={service} parentLabel="Services" />;
}
