import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { siteConfig } from "@/lib/site";

const title = "PEEK Sheet";
const description =
  "PEEK sheet and cut-to-size PEEK plate for CNC machined components, insulation parts, wear plates, fixtures, and high-performance industrial applications requiring heat resistance, chemical stability, and strength.";

const heroImage =
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134683304-peek-sheet-4-WqAf6XEcfIWq45uAg3Pg2DA9ffnojb.webp";

const productImages = [
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134669577-peek-sheet-2-UPAhf4gpr557LSvihX9sZ2d7eQ1rJQ.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134654887-peek-sheet-3-pcMOr4FbUGq6WQ6ZtFiCa5SKtMUktT.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134697332-peek-sheet-5-vDSHVTBo4hYJSLmqClmou0cQ8WKLwV.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134704720-peek-sheet-6-aZlNYbzKqeJ5MQvv4o5eQdQqmheNku.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134712937-peek-sheet-7-RnucSKet1WoVoXeD8xFqFDvS1wVbfr.webp",
  "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134721456-peek-sheet-8-4zdf3WpBJ9wZBpbqlMVYXBf4fNeL7V.webp"
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
  title: "PEEK Sheet and Cut-to-Size PEEK Plate",
  description:
    "Buy PEEK sheet and cut-to-size PEEK plate for CNC machining, insulation, wear, chemical-resistant, and high-temperature industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-sheet`
  }
};

export default function PeekSheetPage() {
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
        productImages={productImages}
        applicationImages={applicationImages}
        warehouseImage={warehouseImage}
        productGalleryTitle="PEEK Sheet Gallery"
        applicationsTitle="PEEK Sheet Machining Applications"
        warehouseTitle="Cut-to-Size PEEK Sheet Inventory"
        warehouseEyebrow="Warehouse Section"
      />
    </>
  );
}
