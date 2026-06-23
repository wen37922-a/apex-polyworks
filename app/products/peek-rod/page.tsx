import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { siteConfig } from "@/lib/site";

const title = "PEEK Rod";
const description =
  "PEEK rod stock for CNC turned bushings, spacers, sleeves, seals, pump components, and high-performance plastic parts that need heat resistance, chemical resistance, and dimensional stability.";

const heroImage =
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134600318-peek-rod-1-0UJzW7RMBl7XOlyKOm3tEO6TgwGzrU.webp";

const productImages = [
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134600318-peek-rod-1-0UJzW7RMBl7XOlyKOm3tEO6TgwGzrU.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134605963-peek-rod-2-sfOEzAPNwhBOxaB9THtphEeQT8QtTv.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134612579-peek-rod-3-OM1NQs4ciiZfLIROtEkqifGcZ68EIU.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134620767-peek-rod-4-k00hKpOtEZscx8edQpKhFPEfg8N8Tf.webp"
];

const applicationImages = [
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134507708-peek-cnc%E5%9B%BE1-Pyau8a8ctGrTZGK56cMHYPmmNUcZkK.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134520033-peek-cnc%E5%9B%BE2-pOGRYOEvQjuysSzVXbwUCb4nja5wKA.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134533843-peek-cnc%E5%9B%BE3-xKzrkB27J9mnmwy46lW2jaKrC8JS60.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134539239-peek-cnc%E5%9B%BE4-KgyoVQeDflchuKrcKsmOsx1YSiC59f.webp"
];

const warehouseImage =
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp";

export const metadata: Metadata = {
  title: "PEEK Rod Stock and CNC Machined PEEK Rod Parts",
  description:
    "Source PEEK rod stock, cut PEEK rod blanks, and CNC machined PEEK round parts for high-temperature, chemical-resistant industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-rod`
  }
};

export default function PeekRodPage() {
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
        productImages={productImages}
        applicationImages={applicationImages}
        warehouseImage={warehouseImage}
        productGalleryTitle="PEEK Rod Gallery"
        applicationsTitle="PEEK Rod CNC Machining Applications"
        warehouseTitle="PEEK Rod Stock Availability"
        warehouseEyebrow="Inventory Section"
      />
    </>
  );
}
