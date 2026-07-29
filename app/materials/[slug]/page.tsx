import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialTemplate } from "@/components/material/MaterialTemplate";
import {
  ProductPageTemplate,
  type ProductPageProps
} from "@/components/product/ProductPageTemplate";
import { MaterialSEOPageTemplate } from "@/components/seo/MaterialSEOPageTemplate";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Material } from "@/lib/material-schema";
import {
  getMaterialBySlug,
  getMaterialPrimaryImage,
  getMaterialsData,
  materialsData
} from "@/lib/materials-data";
import { createPeekSEOPageData, peekSEOMetadata } from "@/lib/seo-pages/peek";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

const pomMetadata: Metadata = {
  title: "POM Sheet Supplier | Acetal Sheet & Rod",
  description:
    "Source POM sheet, POM rod, and cut-to-size acetal material for industrial applications, with optional CNC support for finished plastic parts.",
  alternates: { canonical: `${siteConfig.url}/materials/pom-acetal` }
};

function createPomPageData(material: Material): ProductPageProps {
  const productImages = material.images.gallery.length
    ? material.images.gallery
    : [getMaterialPrimaryImage(material)];

  return {
    title: "POM Sheet and Rod Supplier",
    description:
      "Industrial POM Acetal sheets, rods, and custom cut sizes for mechanical applications.",
    materialName: "POM / Acetal",
    materialCategory: "Engineering Plastic",
    heroTitle: "POM Sheet and Rod Supplier",
    heroSupportingText:
      "Industrial POM Acetal sheets, rods and custom cut sizes for mechanical applications.",
    heroDescription:
      "Source POM sheet and rod in standard or custom sizes, with cut-to-size support for purchasing and production requirements.",
    heroImage: getMaterialPrimaryImage(material),
    productImages,
    applicationImages: material.images.applications,
    quoteCtaLabel: "Request Material Quote",
    secondaryQuoteCtaLabel: "Send Drawing / Requirement",
    defaultMaterial: "POM / Acetal",
    overviewTitle: "POM / Acetal Material Overview",
    overviewText:
      "POM, also known as acetal, is an engineering thermoplastic commonly selected for low friction, good wear resistance, dimensional stability, low moisture absorption, and practical machinability. Grade selection should be reviewed against the operating environment and component requirements.",
    forms: ["POM Sheet", "POM Rod", "Custom Cut Pieces"],
    supplyOptions: [
      {
        title: "Full Sheet / Rod Supply",
        text: "Request full POM sheet or rod stock shapes for purchasing, fabrication, or production programs."
      },
      {
        title: "Cut-to-Size POM",
        text: "Share the required dimensions and quantity for a review of custom-cut POM blanks or pieces."
      },
      {
        title: "Need Finished Plastic Parts?",
        text: "CNC machined POM components can be reviewed from drawings, dimensions, photos, or samples when finished parts are required."
      }
    ],
    supplyOptionsTitle: "POM Material Supply Options",
    supplyOptionsDescription:
      "Choose full stock shapes, custom cut pieces, or optional finished-part support based on your purchasing requirement.",
    sizeInformation: "Available in standard and custom sizes",
    customOptions:
      "Full sheet or rod supply and custom cut pieces can be reviewed for each requirement.",
    applications: [
      {
        title: "Automation Equipment",
        text: "Guides, rollers, bushings, positioning components, and other low-friction mechanical parts."
      },
      {
        title: "Industrial Machinery",
        text: "Wear parts, gears, spacers, sleeves, and replacement components for equipment applications."
      },
      {
        title: "Packaging Equipment",
        text: "Sliding components, guides, supports, and custom parts for packaging machinery."
      }
    ],
    productGalleryTitle: "POM Sheet and Rod Supply",
    applicationsTitle: "Industrial Applications for POM / Acetal",
    showCutToSizeSupport: true,
    cutToSizeTitle: "Cut-to-Size POM Support",
    cutToSizeText:
      "Send the required POM form, dimensions, quantity, and application details. Material availability and cutting scope are confirmed during quotation review.",
    cutToSizeCtaLabel: "Request Material Quote",
    showCncSupport: true,
    cncSupportTitle: "Need Finished Plastic Parts?",
    cncSupportText:
      "CNC machined POM components are available when required. Share drawings, dimensions, photos, or samples so the material and manufacturing scope can be reviewed.",
    machiningCapabilities: [
      "Drawing- and sample-based component review",
      "Gears, bushings, rollers, spacers, and custom mechanical parts",
      "Prototype, low-volume, and repeat-order support"
    ],
    faqs: [
      {
        question: "What is POM plastic?",
        answer:
          "POM is polyoxymethylene, an engineering thermoplastic commonly used for mechanical components that benefit from low friction, wear resistance, dimensional stability, and low moisture absorption."
      },
      {
        question: "Do you supply POM sheets and rods?",
        answer:
          "Yes. Apex PolyWorks supports POM sheet and rod sourcing in standard and custom sizes, subject to the requested grade, dimensions, and quantity."
      },
      {
        question: "Can POM sheets be cut to custom sizes?",
        answer:
          "Yes. Send the target length, width, thickness, quantity, and any relevant application requirements for a cut-to-size review."
      },
      {
        question: "What is the difference between POM and Acetal?",
        answer:
          "Acetal is the common material-family name, while POM refers to polyoxymethylene. Available homopolymer and copolymer options can have different characteristics, so the requested grade or application should be confirmed before quotation."
      },
      {
        question: "What information is needed for a POM quotation?",
        answer:
          "Provide the required form, dimensions, quantity, grade if known, application details, and any drawings or samples. These details help clarify material supply, cutting, and optional machining requirements."
      }
    ]
  };
}

const uhmwpeMetadata: Metadata = {
  title: "UHMWPE Sheet Supplier | Plastic Sheet & Rod",
  description:
    "Source UHMWPE sheet, UHMWPE rod, and cut-to-size wear-resistant plastic material for conveyors, packaging equipment, and industrial applications.",
  alternates: { canonical: `${siteConfig.url}/materials/uhmwpe` }
};

function createUhmwpePageData(material: Material): ProductPageProps {
  const productImages = material.images.gallery.length
    ? material.images.gallery
    : [getMaterialPrimaryImage(material)];

  return {
    title: "UHMWPE Sheet Supplier",
    description:
      "Wear-resistant UHMWPE sheets, rods, and custom cut sizes for industrial applications.",
    materialName: "UHMWPE",
    materialCategory: "Engineering Plastic",
    heroTitle: "UHMWPE Sheet Supplier",
    heroSupportingText:
      "Wear-resistant UHMWPE sheets, rods and custom cut sizes for industrial applications.",
    heroDescription:
      "Source UHMWPE sheet and rod in standard or custom sizes, with cut-to-size support for conveyor, packaging, and material-handling requirements.",
    heroImage: getMaterialPrimaryImage(material),
    productImages,
    applicationImages: material.images.applications,
    warehouseImage: material.images.warehouse[0],
    quoteCtaLabel: "Request Material Quote",
    secondaryQuoteCtaLabel: "Send Drawing / Requirement",
    defaultMaterial: "UHMWPE",
    overviewTitle: "UHMWPE Material Overview",
    overviewText:
      "UHMWPE is an engineering polyethylene commonly selected for excellent wear resistance, low friction, impact resistance, resistance to many chemicals, and low moisture absorption. Material suitability should be reviewed against the operating environment and component requirements.",
    forms: ["UHMWPE Sheet", "UHMWPE Rod", "Custom Cut Pieces"],
    supplyOptions: [
      {
        title: "Full Sheet / Rod Supply",
        text: "Request full UHMWPE sheet or rod stock shapes for purchasing, fabrication, or production programs."
      },
      {
        title: "Cut-to-Size UHMWPE",
        text: "Share the required dimensions and quantity for a review of custom-cut UHMWPE blanks or pieces."
      },
      {
        title: "Need Finished Plastic Parts?",
        text: "CNC machined UHMWPE components can be reviewed from drawings, dimensions, photos, or samples when finished parts are required."
      }
    ],
    supplyOptionsTitle: "UHMWPE Material Supply Options",
    supplyOptionsDescription:
      "Choose full stock shapes, custom cut pieces, or optional finished-part support based on your purchasing requirement.",
    sizeInformation: "Available in standard and custom sizes",
    customOptions:
      "Full sheet or rod supply and custom cut pieces can be reviewed for each requirement.",
    applications: [
      {
        title: "Conveyor Systems",
        text: "Wear strips, guide rails, sliding components, and other low-friction conveyor parts."
      },
      {
        title: "Packaging Equipment",
        text: "Wear plates, guides, supports, and replacement components for packaging machinery."
      },
      {
        title: "Material Handling",
        text: "Liners, impact surfaces, slide plates, and wear components for handling equipment."
      },
      {
        title: "Industrial Machinery",
        text: "Low-friction components, wear parts, guides, and custom equipment components."
      }
    ],
    productGalleryTitle: "UHMWPE Sheet and Rod Supply",
    applicationsTitle: "Industrial Applications for UHMWPE",
    showCutToSizeSupport: true,
    cutToSizeTitle: "Cut-to-Size UHMWPE Support",
    cutToSizeText:
      "Send the required UHMWPE form, dimensions, quantity, and application details. Material availability and cutting scope are confirmed during quotation review.",
    cutToSizeCtaLabel: "Request Material Quote",
    showCncSupport: true,
    cncSupportTitle: "Need Finished Plastic Parts?",
    cncSupportText:
      "CNC machined UHMWPE components are available when required. Share drawings, dimensions, photos, or samples so the material and manufacturing scope can be reviewed.",
    machiningCapabilities: [
      "Drawing- and sample-based component review",
      "Wear strips, guides, liners, slide plates, and custom equipment parts",
      "Prototype, low-volume, and repeat-order support"
    ],
    faqs: [
      {
        question: "What is UHMWPE plastic?",
        answer:
          "UHMWPE is ultra-high-molecular-weight polyethylene, an engineering plastic commonly used where low friction, wear resistance, impact resistance, and low moisture absorption are important."
      },
      {
        question: "Do you supply UHMWPE sheets and rods?",
        answer:
          "Yes. Apex PolyWorks supports UHMWPE sheet and rod sourcing in standard and custom sizes, subject to the requested grade, dimensions, and quantity."
      },
      {
        question: "Can UHMWPE sheets be cut to custom sizes?",
        answer:
          "Yes. Send the target length, width, thickness, quantity, and application requirements for a cut-to-size review."
      },
      {
        question: "What are UHMWPE sheets used for?",
        answer:
          "Common industrial uses include conveyor wear strips, guide rails, liners, slide plates, impact surfaces, packaging-equipment guides, and other low-friction wear components."
      },
      {
        question: "What information is needed for a UHMWPE quotation?",
        answer:
          "Provide the required form, dimensions, quantity, grade if known, application details, and any drawings or samples. These details help clarify material supply, cutting, and optional machining requirements."
      }
    ]
  };
}

const ptfeMetadata: Metadata = {
  title: "PTFE Sheet Supplier | Virgin PTFE Sheet & Rod",
  description:
    "Source virgin PTFE sheet, PTFE rod, and cut-to-size material with chemical resistance for electrical, sealing, and industrial applications.",
  alternates: { canonical: `${siteConfig.url}/materials/ptfe` }
};

function createPtfePageData(material: Material): ProductPageProps {
  const productImages = material.images.gallery.length
    ? material.images.gallery
    : [getMaterialPrimaryImage(material)];

  return {
    title: "PTFE Sheet and Rod Supplier",
    description:
      "Virgin PTFE sheets, rods, and custom cut sizes for chemical, electrical, and industrial applications.",
    materialName: "Virgin PTFE",
    materialCategory: "Engineering Fluoropolymer",
    heroTitle: "PTFE Sheet and Rod Supplier",
    heroSupportingText:
      "Virgin PTFE sheets, rods and custom cut sizes for chemical, electrical and industrial applications.",
    heroDescription:
      "Source PTFE sheet and rod in standard or custom sizes, with cut-to-size support for chemical processing, electrical equipment, sealing, and mechanical requirements.",
    heroImage: getMaterialPrimaryImage(material),
    productImages,
    applicationImages: material.images.applications,
    warehouseImage: material.images.warehouse[0],
    quoteCtaLabel: "Request Material Quote",
    secondaryQuoteCtaLabel: "Send Drawing / Requirement",
    defaultMaterial: "PTFE",
    overviewTitle: "PTFE Material Overview",
    overviewText:
      "PTFE is a fluoropolymer commonly selected for excellent resistance to many chemicals, low friction, useful performance across a wide temperature range, electrical insulation properties, and non-stick characteristics. Material suitability should be reviewed against the operating environment and component requirements.",
    forms: ["PTFE Sheet", "PTFE Rod", "Custom Cut Pieces"],
    supplyOptions: [
      {
        title: "Full Sheet / Rod Supply",
        text: "Request full PTFE sheet or rod stock shapes for purchasing, fabrication, or production programs."
      },
      {
        title: "Cut-to-Size PTFE",
        text: "Share the required dimensions and quantity for a review of custom-cut PTFE blanks or pieces."
      },
      {
        title: "Need Finished Plastic Parts?",
        text: "CNC machined PTFE components can be reviewed from drawings, dimensions, photos, or samples when finished parts are required."
      }
    ],
    supplyOptionsTitle: "PTFE Material Supply Options",
    supplyOptionsDescription:
      "Choose full stock shapes, custom cut pieces, or optional finished-part support based on your purchasing requirement.",
    sizeInformation: "Available in standard and custom sizes",
    customOptions:
      "Full sheet or rod supply and custom cut pieces can be reviewed for each requirement.",
    applications: [
      {
        title: "Chemical Processing",
        text: "Liners and chemical-resistant components for process equipment and handling applications."
      },
      {
        title: "Electrical Equipment",
        text: "Insulation parts and electrically insulating components for industrial equipment."
      },
      {
        title: "Mechanical Systems",
        text: "Low-friction components for sliding, guiding, and other mechanical applications."
      },
      {
        title: "Sealing Applications",
        text: "Seal components and related parts where chemical resistance and low friction are important."
      }
    ],
    productGalleryTitle: "PTFE Sheet and Rod Supply",
    applicationsTitle: "Industrial Applications for PTFE",
    showCutToSizeSupport: true,
    cutToSizeTitle: "Cut-to-Size PTFE Support",
    cutToSizeText:
      "Send the required PTFE form, dimensions, quantity, and application details. Material availability and cutting scope are confirmed during quotation review.",
    cutToSizeCtaLabel: "Request Material Quote",
    showCncSupport: true,
    cncSupportTitle: "Need Finished Plastic Parts?",
    cncSupportText:
      "CNC machined PTFE components are available when required. Share drawings, dimensions, photos, or samples so the material and manufacturing scope can be reviewed.",
    machiningCapabilities: [
      "Drawing- and sample-based component review",
      "Seals, insulators, liners, bushings, and custom industrial parts",
      "Prototype, low-volume, and repeat-order support"
    ],
    faqs: [
      {
        question: "What is PTFE plastic?",
        answer:
          "PTFE is polytetrafluoroethylene, a fluoropolymer commonly used where chemical resistance, low friction, electrical insulation, non-stick characteristics, or wide temperature performance are important."
      },
      {
        question: "Do you supply PTFE sheets and rods?",
        answer:
          "Yes. Apex PolyWorks supports virgin PTFE sheet and rod sourcing in standard and custom sizes, subject to the requested dimensions and quantity."
      },
      {
        question: "Can PTFE sheets be cut to custom sizes?",
        answer:
          "Yes. Send the target length, width, thickness, quantity, and application requirements for a cut-to-size review."
      },
      {
        question: "What are PTFE sheets used for?",
        answer:
          "Common industrial uses include chemical-resistant liners, electrical insulation parts, low-friction components, seals, gaskets, valve components, and process-equipment parts."
      },
      {
        question: "What information is needed for a PTFE quotation?",
        answer:
          "Provide the required form, dimensions, quantity, grade if known, application details, and any drawings or samples. These details help clarify material supply, cutting, and optional machining requirements."
      }
    ]
  };
}

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return materialsData.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "peek") return peekSEOMetadata;
  if (slug === "pom-acetal") return pomMetadata;
  if (slug === "uhmwpe") return uhmwpeMetadata;
  if (slug === "ptfe") return ptfeMetadata;

  const material = getMaterialBySlug(slug);
  if (!material) return { title: "Material Not Found" };

  return {
    title: material.seoTitle,
    description: material.seoDescription,
    alternates: { canonical: `${siteConfig.url}/materials/${material.slug}` }
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug, await getMaterialsData());
  if (!material) notFound();
  if (slug === "peek") {
    return <MaterialSEOPageTemplate material={createPeekSEOPageData(material)} />;
  }
  if (slug === "pom-acetal") {
    return (
      <>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Materials", path: "/materials" },
            { name: "POM / Acetal", path: "/materials/pom-acetal" }
          ]}
        />
        <ProductPageTemplate {...createPomPageData(material)} />
      </>
    );
  }
  if (slug === "uhmwpe") {
    return (
      <>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Materials", path: "/materials" },
            { name: "UHMWPE", path: "/materials/uhmwpe" }
          ]}
        />
        <ProductPageTemplate {...createUhmwpePageData(material)} />
      </>
    );
  }
  if (slug === "ptfe") {
    return (
      <>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Materials", path: "/materials" },
            { name: "PTFE", path: "/materials/ptfe" }
          ]}
        />
        <ProductPageTemplate {...createPtfePageData(material)} />
      </>
    );
  }

  return <MaterialTemplate material={material} />;
}
