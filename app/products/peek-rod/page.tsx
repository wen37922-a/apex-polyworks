import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { getProductImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const title = "PEEK Rod";
const description =
  "PEEK rod stock for CNC turned bushings, spacers, sleeves, seals, pump components, and high-performance plastic parts that need heat resistance, chemical resistance, and dimensional stability.";

export const metadata: Metadata = {
  title: "PEEK Rod Supplier and CNC Machined PEEK Rod Parts",
  description:
    "Source PEEK rod stock, cut PEEK rod blanks, and CNC machined PEEK round parts for high-temperature, chemical-resistant industrial applications.",
  alternates: {
    canonical: `${siteConfig.url}/products/peek-rod`
  }
};

const relatedLinks = [
  {
    href: "/materials/peek",
    label: "PEEK Material Overview",
    text: "Review PEEK properties, applications, available forms, and RFQ guidance."
  },
  {
    href: "/products/peek-sheet",
    label: "PEEK Sheet",
    text: "Sheet, plate, and cut-to-size blanks for CNC milled PEEK components."
  },
  {
    href: "/services/cnc-plastic-machining",
    label: "PEEK CNC Machining",
    text: "Send drawings for precision milled and turned PEEK components."
  }
];

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
        quoteCtaLabel="Request PEEK Rod Quote"
        defaultMaterial="PEEK Rod"
        availableForms={[
          "PEEK round rod stock for CNC turning and machining",
          "Cut PEEK rod blanks for prototypes, maintenance, and production",
          "Turned bushings, spacers, sleeves, seals, and round components",
          "Diameter, length, grade, tolerance, and packing reviewed before quote"
        ]}
        typicalGrades={[
          "Natural unfilled PEEK rod",
          "Glass-filled PEEK rod for added stiffness",
          "Carbon-filled PEEK rod for wear and dimensional control",
          "Bearing and specialty PEEK grades reviewed by load, speed, and environment"
        ]}
        machiningCapabilities={[
          "CNC turning, milling, drilling, threading, grooving, and chamfering",
          "Concentricity and tolerance review based on diameter and wall thickness",
          "Small quantity prototypes through repeat-production turned components",
          "Material behavior review for heat, chemical exposure, wear, and mating surfaces"
        ]}
        buyerApplications={[
          "Bushings, spacers, sleeves, seals, rollers, and pump components",
          "Valve, fluid-handling, aerospace, semiconductor, and medical fixture parts",
          "High-temperature round components and chemically resistant assemblies",
          "Precision replacements where metal is too heavy, conductive, or corrosive"
        ]}
        quoteChecklist={[
          "Rod diameter, cut length, grade, color, and quantity",
          "2D drawing, STEP file, sample photo, or marked-up dimensions",
          "Tolerance, surface finish, threads, grooves, holes, or chamfers",
          "Operating temperature, chemical exposure, load, speed, and delivery deadline"
        ]}
        certificateNote="Material documentation and inspection reports may be available depending on the material and project requirements. Share compliance, traceability, or packing requirements before quote release."
        relatedLinks={relatedLinks}
        productGalleryTitle="PEEK Rod Gallery"
        applicationsTitle="PEEK Rod CNC Machining Applications"
        warehouseTitle="PEEK Rod Stock Availability"
        warehouseEyebrow="Inventory Section"
      />
    </>
  );
}
