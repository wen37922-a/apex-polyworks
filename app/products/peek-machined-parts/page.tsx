import type { Metadata } from "next";
import { ProductSEOPageTemplate } from "@/components/seo/ProductSEOPageTemplate";
import { getProductImages } from "@/lib/product-images";
import { createPeekMachinedPartsSEOPageData } from "@/lib/seo-pages/peek-machined-parts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "CNC Machined PEEK Parts Supplier | Custom PEEK Components | Apex PolyWorks"
  },
  description:
    "Apex PolyWorks provides custom CNC machined PEEK parts and precision plastic components for semiconductor, medical, automation and industrial applications worldwide.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-machined-parts`
  }
};

export const dynamic = "force-dynamic";

export default async function PeekMachinedPartsPage() {
  const images = await getProductImages();
  const product = createPeekMachinedPartsSEOPageData(images);

  return <ProductSEOPageTemplate product={product} />;
}
