import type { SEOImage } from "@/lib/seo-page-types";
import { siteConfig } from "@/lib/site";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  canonicalPath: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: SEOImage;
  articleSection?: string;
};

function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, siteConfig.url).toString();
}

export function ArticleJsonLd({
  headline,
  description,
  canonicalPath,
  datePublished,
  dateModified,
  authorName = siteConfig.name,
  image,
  articleSection
}: ArticleJsonLdProps) {
  const canonical = absoluteUrl(canonicalPath);
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    image: image ? [absoluteUrl(image.src)] : undefined,
    articleSection
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
