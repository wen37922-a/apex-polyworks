import type { Metadata } from "next";
import type { SEOImage } from "@/lib/seo-page-types";
import { siteConfig } from "@/lib/site";

export type SEOPageMetadataConfig = {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  openGraphImage?: SEOImage;
  openGraphType?: "website" | "article";
  appendBrand?: boolean;
};

function getAbsoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, siteConfig.url).toString();
}

function getBrandedTitle(title: string) {
  return title.toLowerCase().includes(siteConfig.name.toLowerCase())
    ? title
    : `${title} | ${siteConfig.name}`;
}

export function createSEOMetadata({
  title,
  description,
  keywords,
  canonicalPath,
  openGraphImage,
  openGraphType = "website",
  appendBrand = true
}: SEOPageMetadataConfig): Metadata {
  const canonical = getAbsoluteUrl(canonicalPath);
  const resolvedTitle = appendBrand ? getBrandedTitle(title) : title;
  const images = openGraphImage
    ? [
        {
          url: getAbsoluteUrl(openGraphImage.src),
          width: openGraphImage.width ?? 1200,
          height: openGraphImage.height ?? 630,
          alt: openGraphImage.alt
        }
      ]
    : undefined;

  return {
    title: {
      absolute: resolvedTitle
    },
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      type: openGraphType,
      title: resolvedTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      images
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: images?.map((image) => image.url)
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
