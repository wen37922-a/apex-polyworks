import type { Metadata } from "next";
import { ProductSEOPageTemplate } from "@/components/seo/ProductSEOPageTemplate";
import { getProductImages } from "@/lib/product-images";
import { createPeekRodSEOPageData } from "@/lib/seo-pages/peek-rod";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "PEEK Rod Supplier | Custom PEEK Plastic Rods | Apex PolyWorks"
  },
  description:
    "Apex PolyWorks supplies PEEK rods for industrial applications, including custom lengths and CNC machined PEEK components for customers worldwide.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-rod`
  }
};

export const dynamic = "force-dynamic";

export default async function PeekRodPage() {
  const images = await getProductImages();
  const product = createPeekRodSEOPageData(images);

  return <ProductSEOPageTemplate product={product} />;
}
