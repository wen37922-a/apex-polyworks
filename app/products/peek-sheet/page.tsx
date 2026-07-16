import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { getProductImages, selectNamedSeries, selectProductImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const title = "PEEK Sheet";
const description =
  "PEEK sheet and cut-to-size PEEK plate for CNC machined components, insulation parts, wear plates, fixtures, and high-performance industrial applications requiring heat resistance, chemical stability, and strength.";

export const metadata: Metadata = {
  title: "PEEK Sheet Supplier and Cut-to-Size PEEK Plate",
  description:
    "Source PEEK sheet and cut-to-size PEEK plate for CNC machining, insulation, wear, chemical-resistant, and high-temperature industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-sheet`
  }
};

const relatedLinks = [
  {
    href: "/materials/peek",
    label: "PEEK Material Overview",
    text: "Review PEEK properties, applications, available forms, and RFQ guidance."
  },
  {
    href: "/products/peek-rod",
    label: "PEEK Rod",
    text: "Round stock for CNC turning, bushings, seals, spacers, and sleeves."
  },
  {
    href: "/services/cnc-plastic-machining",
    label: "PEEK CNC Machining",
    text: "Send drawings for precision milled and turned PEEK components."
  }
];

export const dynamic = "force-dynamic";

export default async function PeekSheetPage() {
  const images = await getProductImages();
  const galleryOrder = [2, 3, 5, 4, 8, 6];
  const legacyGallery = selectProductImages(images.PEEK.sheet, galleryOrder.map((number) => `sheet-${number}`));
  const galleryImages = selectNamedSeries(images.PEEK.sheet, "peek", galleryOrder, legacyGallery);
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
        heroImage={images.PEEK.hero}
        productImages={galleryImages}
        applicationImages={images.PEEK.cnc.slice(0, 4)}
        warehouseImage={siteImages.warehouse}
        quoteCtaLabel="Request PEEK Sheet Quote"
        defaultMaterial="PEEK Sheet"
        availableForms={[
          "Full-size PEEK sheet and plate for stock supply",
          "Cut-to-size PEEK blanks for CNC machining",
          "Saw-cut or CNC-ready plates for fixtures, insulators, and wear parts",
          "Thickness, grade, color, tolerance, and packing reviewed before quote"
        ]}
        typicalGrades={[
          "Natural unfilled PEEK sheet",
          "Glass-filled PEEK sheet for stiffness and dimensional control",
          "Carbon-filled PEEK sheet for wear, strength, and lower thermal expansion",
          "Bearing and specialty PEEK grades reviewed by application"
        ]}
        machiningCapabilities={[
          "CNC milling, drilling, pocketing, profiling, chamfering, and tapping",
          "Material-yield review for high-value PEEK plate projects",
          "Tolerance planning based on thickness, geometry, heat, and fixture method",
          "Prototype, replacement, and repeat-production PEEK sheet components"
        ]}
        buyerApplications={[
          "Electrical insulators and high-temperature fixtures",
          "Valve plates, pump components, seals, and wear pads",
          "Aerospace, semiconductor, medical, and industrial equipment parts",
          "Chemical-resistant plates and precision machined components"
        ]}
        quoteChecklist={[
          "Sheet thickness, final size, grade, and quantity",
          "Drawing, STEP file, DXF, or marked-up PDF",
          "Tolerance, finish, holes, countersinks, threads, or edge breaks",
          "Operating temperature, chemical exposure, load, and delivery deadline"
        ]}
        certificateNote="Material certificates, grade confirmation, and traceability details can be quoted on request. Share any certificate, compliance, or packing requirement before release so it is included in the quote assumptions."
        relatedLinks={relatedLinks}
        productGalleryTitle="PEEK Sheet Gallery"
        applicationsTitle="PEEK Sheet Machining Applications"
        warehouseTitle="Cut-to-Size PEEK Sheet Inventory"
        warehouseEyebrow="Warehouse Section"
      />
    </>
  );
}
