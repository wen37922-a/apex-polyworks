import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { getProductImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const title = "PEEK Sheet";
const description =
  "PEEK sheet and cut-to-size PEEK plate for CNC machined components, insulation parts, wear plates, fixtures, and high-performance industrial applications requiring heat resistance, chemical stability, and strength.";

export const metadata: Metadata = {
  title: "PEEK Sheet and Cut-to-Size PEEK Plate",
  description:
    "Buy PEEK sheet and cut-to-size PEEK plate for CNC machining, insulation, wear, chemical-resistant, and high-temperature industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-sheet`
  }
};

export const dynamic = "force-dynamic";

export default async function PeekSheetPage() {
  const images = await getProductImages();
  const heroImage = images.PEEK.sheet[0];
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "PEEK Sheet", path: "/products/peek-sheet" }
        ]}
      />
      <ProductPageTemplate
        title={title}
        description={description}
        heroImage={heroImage}
        productImages={images.PEEK.sheet}
        applicationImages={images.PEEK.cnc.slice(0, 4)}
        warehouseImage={siteImages.warehouse}
        productGalleryTitle="PEEK Sheet Gallery"
        applicationsTitle="PEEK Sheet Machining Applications"
        warehouseTitle="Cut-to-Size PEEK Sheet Inventory"
        warehouseEyebrow="Warehouse Section"
      />
    </>
  );
}
