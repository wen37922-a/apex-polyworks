import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { ProductPageTemplate } from "@/components/product/ProductPageTemplate";
import { getProductImages, selectNamedSeries, selectProductImages, siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const title = "PEEK Sheet";
const description =
  "Virgin PEEK sheet and plate in standard and custom sizes, with cut-to-size service and optional CNC support for finished parts.";

export const metadata: Metadata = {
  title: "PEEK Sheet Supplier | Virgin PEEK Plate & Cut-to-Size",
  description:
    "Source virgin PEEK sheet and plate in standard and custom sizes, with cut-to-size service and optional CNC support for finished industrial components.",
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
    text: "Review PEEK rod supply for industrial stock-shape and component requirements."
  },
  {
    href: "/services/cut-to-size-plastic",
    label: "Cut-to-Size Plastic Service",
    text: "Send dimensions and quantities for custom-cut engineering plastic pieces."
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
        materialName={title}
        materialCategory="High-Performance Engineering Plastic"
        heroTitle="PEEK Sheet Supplier"
        heroSupportingText="Virgin PEEK Sheet supply with standard sizes and custom cut-to-size service."
        heroHighlights={[
          "Virgin PEEK sheet and plate",
          "Standard and custom sizes",
          "Cut-to-size service",
          "Optional CNC support"
        ]}
        description={description}
        overviewTitle="PEEK Sheet Material Overview"
        overviewText="Virgin PEEK is a high-performance engineering plastic selected for applications that may require high-temperature resistance, chemical resistance, dimensional stability, and mechanical strength. Final material suitability should be reviewed against the operating environment and component requirements."
        heroImage={images.PEEK.hero}
        productImages={galleryImages}
        applicationImages={images.PEEK.cnc.slice(0, 4)}
        warehouseImage={siteImages.warehouse}
        quoteCtaLabel="Request Material Quote"
        secondaryQuoteCtaLabel="Send Drawing / Requirement"
        defaultMaterial="PEEK Sheet"
        forms={[
          "PEEK Sheet",
          "PEEK Plate",
          "Custom Cut Pieces"
        ]}
        supplyOptions={[
          {
            title: "Full Sheet / Plate Supply",
            text: "Virgin PEEK sheet and plate supplied for industrial purchasing, fabrication, and stock-shape requirements."
          },
          {
            title: "Cut-to-Size PEEK Sheet",
            text: "Custom-cut pieces can be reviewed from required thickness, length, width, quantity, and delivery requirements."
          },
          {
            title: "Need Finished Plastic Parts?",
            text: "CNC machined PEEK components are available as optional support when finished parts are required."
          }
        ]}
        supplyOptionsDescription="Choose full material supply, custom-cut pieces, or optional finished-component support based on your purchasing requirements."
        sizeInformation="Standard and custom sizes available. Exact dimensions and availability are confirmed during quote review."
        customOptions="Full sheet or plate supply, custom cut pieces, and optional CNC machined components."
        specifications={[
          {
            label: "Material grade",
            value: "Virgin PEEK"
          }
        ]}
        quoteRequirements={[
          "Virgin PEEK or requested grade",
          "Thickness",
          "Sheet or cut-piece dimensions",
          "Quantity",
          "Drawing or dimensional requirement",
          "Application and delivery details"
        ]}
        trustItems={[
          {
            title: "Material Requirement Review",
            text: "Grade, form, dimensions, quantity, and application requirements are reviewed before quotation."
          },
          {
            title: "Cut-to-Size Support",
            text: "Custom-cut pieces can be reviewed around requested dimensions and purchasing quantities."
          },
          {
            title: "Documentation Support",
            text: "Material and inspection documentation requirements can be discussed before quote release."
          },
          {
            title: "Delivery Coordination",
            text: "Packing and international delivery requirements can be included in the purchasing review."
          }
        ]}
        applications={[
          {
            title: "Semiconductor Equipment Components",
            text: "PEEK sheet can be evaluated for fixtures, supports, insulators, and other equipment components."
          },
          {
            title: "Chemical Processing Components",
            text: "Material selection can be reviewed for components exposed to application-specific chemical environments."
          },
          {
            title: "Mechanical Components",
            text: "PEEK plate and cut pieces support wear, structural, and precision mechanical component requirements."
          },
          {
            title: "Electrical Insulation Parts",
            text: "PEEK can be considered for insulating components where electrical and mechanical requirements overlap."
          }
        ]}
        showCncSupport
        cncSupportTitle="Need Finished Plastic Parts?"
        cncSupportText="CNC machined PEEK components are available when a project requires finished parts instead of full sheet, plate, or custom-cut material. Send a drawing or dimensional requirement for a manufacturing review."
        machiningCapabilities={[
          "Drawing-based finished-component review",
          "Milling, drilling, profiling, and turning scope reviewed by part",
          "Prototype, replacement, and repeat-production support"
        ]}
        certificateNote="Material documentation and inspection reports may be available depending on the material and project requirements. Share compliance, traceability, or packing requirements before quote release."
        faqs={[
          {
            question: "What PEEK sheet forms can Apex PolyWorks supply?",
            answer: "Apex PolyWorks supports virgin PEEK sheet, PEEK plate, and custom cut pieces. Exact form, dimensions, and availability are confirmed during quotation."
          },
          {
            question: "Is virgin PEEK sheet available?",
            answer: "Virgin PEEK is the primary material option for this page. Share the required form, dimensions, quantity, and application so the material requirement can be reviewed."
          },
          {
            question: "Are standard and custom PEEK sheet sizes available?",
            answer: "Standard and custom sizes can be reviewed. Exact size availability depends on the requested thickness, sheet dimensions, quantity, and delivery requirements."
          },
          {
            question: "Can PEEK sheet be cut to size?",
            answer: "Yes. Provide the required thickness, length, width, quantity, and any dimensional notes for a cut-to-size quotation."
          },
          {
            question: "Can you help review PEEK material selection?",
            answer: "Our team can discuss material requirements based on operating temperature, chemical exposure, mechanical load, electrical needs, and component design."
          },
          {
            question: "What information is needed for a PEEK sheet quotation?",
            answer: "Send the requested material or grade, thickness, sheet or cut-piece dimensions, quantity, application details, delivery location, and any drawing files."
          },
          {
            question: "Can you supply finished CNC machined PEEK parts?",
            answer: "Yes. CNC machining is available as optional support when finished components are required. Send a drawing or dimensional requirement for review."
          }
        ]}
        relatedLinks={relatedLinks}
        productGalleryTitle="PEEK Sheet Gallery"
        applicationsTitle="Industrial Applications for PEEK Sheet"
        cutToSizeTitle="Cut-to-Size PEEK Sheet Support"
        cutToSizeText="Share the required PEEK sheet thickness, length, width, quantity, and delivery needs. Standard and custom sizes are reviewed during quotation without assuming fixed inventory."
        cutToSizeCtaLabel="Request Cut-to-Size PEEK Quote"
        warehouseEyebrow="Cut-to-size service"
      />
    </>
  );
}
