import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/DetailTemplate";
import { getProductImages, selectProductImages } from "@/lib/product-images";
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
    title:
      service.slug === "cnc-plastic-machining"
        ? { absolute: service.seoTitle }
        : service.seoTitle,
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
  const absCncImages = selectProductImages(images.ABS.gallery, ["abs-7", "abs-8"]);
  const uhmwpeCncImage = selectProductImages(images.UHMWPE.gallery, ["uhmwpe5"])[0];
  const cncGalleryCandidates = [
    {
      src: images.PEEK.cnc[0],
      alt: "Custom CNC machined PEEK engineering plastic component"
    },
    {
      src: images.NYLON.machining,
      alt: "CNC machined nylon plastic component for industrial equipment"
    },
    {
      src: images.PTFE.machining,
      alt: "CNC machined PTFE component produced from rod stock"
    },
    {
      src: uhmwpeCncImage,
      alt: "UHMWPE plastic component machining and fabrication example"
    },
    {
      src: images.HDPE.machining,
      alt: "Custom CNC machined HDPE industrial plastic part"
    },
    {
      src: absCncImages[0],
      alt: "Custom CNC machined ABS plastic component"
    },
    {
      src: images.PEEK.cnc[1],
      alt: "CNC machined PEEK part with finished geometric features"
    },
    {
      src: absCncImages[1],
      alt: "Finished ABS plastic part manufactured by CNC machining"
    }
  ];
  const cncGalleryImages = cncGalleryCandidates.reduce<{ src: string; alt: string }[]>(
    (gallery, image) => {
      if (!image.src || gallery.some((entry) => entry.src === image.src)) {
        return gallery;
      }

      gallery.push({ src: image.src, alt: image.alt });
      return gallery;
    },
    []
  );
  const unifiedService = slug === "cnc-plastic-machining"
    ? {
        ...service,
        galleryImages: cncGalleryImages
      }
    : service;

  return <DetailTemplate item={unifiedService} parentLabel="Services" />;
}
