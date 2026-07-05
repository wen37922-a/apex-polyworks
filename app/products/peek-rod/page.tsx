import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { getProductImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const title = "PEEK Rod";
const description =
  "PEEK rod stock for CNC turned bushings, spacers, sleeves, seals, pump components, and high-performance plastic parts that need heat resistance, chemical resistance, and dimensional stability.";

export const metadata: Metadata = {
  title: "PEEK Rod Stock and CNC Machined PEEK Rod Parts",
  description:
    "Source PEEK rod stock, cut PEEK rod blanks, and CNC machined PEEK round parts for high-temperature, chemical-resistant industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-rod`
  }
};

export const dynamic = "force-dynamic";

export default async function PeekRodPage() {
  const images = await getProductImages();
  const heroImage = images.PEEK.rod[0];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "PEEK Rod", path: "/products/peek-rod" }
        ]}
      />
      <ProductPageTemplate
        title={title}
        description={description}
        heroImage={heroImage}
        productImages={images.PEEK.rod}
        applicationImages={images.PEEK.cnc.slice(0, 4)}
        warehouseImage={siteImages.warehouse}
        productGalleryTitle="PEEK Rod Gallery"
        applicationsTitle="PEEK Rod CNC Machining Applications"
        warehouseTitle="PEEK Rod Stock Availability"
        warehouseEyebrow="Inventory Section"
      />
    </>
  );
}
