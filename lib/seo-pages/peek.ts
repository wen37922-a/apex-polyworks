import type { Material } from "@/lib/material-schema";
import { getMaterialPrimaryImage } from "@/lib/materials-data";
import { productImages } from "@/lib/product-images";
import { createSEOMetadata } from "@/lib/seo-metadata";
import type { MaterialSEOPageData, SEOImage } from "@/lib/seo-page-types";

const peekMetadataTitle = "PEEK Supplier | PEEK Material & CNC Machined PEEK Parts";
const peekMetadataDescription =
  "Apex PolyWorks supplies PEEK materials and custom CNC machined PEEK components for industrial applications worldwide.";

function image(src: string, alt: string): SEOImage {
  return { src, alt };
}

export const peekSEOMetadata = createSEOMetadata({
  title: peekMetadataTitle,
  description: peekMetadataDescription,
  keywords: [
    "PEEK supplier",
    "PEEK material",
    "PEEK CNC machining",
    "custom PEEK parts",
    "PEEK sheet",
    "PEEK rod"
  ],
  canonicalPath: "/materials/peek",
  openGraphImage: image(
    productImages.PEEK.hero,
    "PEEK material and CNC machined PEEK components for industrial applications"
  ),
  appendBrand: false
});

export function createPeekSEOPageData(material: Material): MaterialSEOPageData {
  const hero = getMaterialPrimaryImage(material);
  const sheet = material.images.sheet[0] || productImages.PEEK.sheet[0] || hero;
  const rod = material.images.rod[0] || productImages.PEEK.rod[0] || hero;
  const machining =
    material.images.cnc[0] || productImages.PEEK.cnc[0] || hero;
  const machiningDetail =
    material.images.cnc[1] || productImages.PEEK.cnc[1] || machining;

  return {
    materialName: "PEEK",
    slug: "peek",
    eyebrow: "Global PEEK material and machining supplier",
    heroTitle: "PEEK Supplier for High Performance Industrial Applications",
    introduction:
      "Apex PolyWorks supplies PEEK materials and custom CNC machined PEEK components for industrial manufacturers worldwide. Send stock dimensions, grade requirements, application details, or drawings for sourcing and manufacturing review.",
    primaryApplications: [
      "Semiconductor equipment",
      "Medical and laboratory fixtures",
      "Aerospace components",
      "Industrial automation"
    ],
    heroImage: image(
      hero,
      "PEEK material stock and CNC machined PEEK components supplied worldwide"
    ),
    overview: {
      whatIs:
        "PEEK is the common abbreviation for polyether ether ketone, a high-performance engineering plastic selected for demanding industrial components. It combines useful thermal, chemical, mechanical, wear, and electrical performance, making grade and application review important before production.",
      keyCharacteristics: [
        "High-performance thermoplastic for demanding operating environments",
        "Available in virgin and selected reinforced or functional grades",
        "Suitable for stock-shape supply and precision CNC machining",
        "Used where conventional engineering plastics may not meet application needs"
      ],
      typicalIndustries: [
        "Semiconductor equipment",
        "Medical and laboratory equipment",
        "Aerospace systems",
        "Industrial automation",
        "Electronics manufacturing",
        "Fluid-handling equipment"
      ],
      image: image(
        sheet,
        "Natural PEEK sheet material for high-performance industrial components"
      )
    },
    propertyLabels: {
      temperatureResistance: "High Temperature Performance",
      chemicalResistance: "Chemical Resistance",
      wearResistance: "Wear Resistance",
      mechanicalStrength: "Dimensional Stability",
      electricalProperties: "Electrical Insulation"
    },
    properties: {
      temperatureResistance:
        "PEEK is considered for components that must retain useful performance in elevated-temperature industrial environments. Confirm the operating cycle and selected grade during material review.",
      chemicalResistance:
        "PEEK offers resistance to many industrial chemicals. Compatibility should be reviewed against the actual chemical, concentration, temperature, and exposure time.",
      wearResistance:
        "Virgin and filled PEEK grades can support sliding, bearing, and wear-component applications when load, speed, mating surface, and lubrication are considered.",
      mechanicalStrength:
        "PEEK offers useful stiffness and dimensional behavior for precision components. Geometry, residual stress, temperature, and machining sequence should be reviewed for critical parts.",
      electricalProperties:
        "PEEK is used for insulating components in electrical and semiconductor equipment. Grade, wall thickness, environment, and documentation requirements should be specified."
    },
    grades: [
      {
        title: "Virgin PEEK",
        description:
          "Virgin PEEK is an unfilled grade selected for a balanced combination of mechanical, thermal, chemical, and electrical performance in demanding components."
      },
      {
        title: "Glass Filled PEEK",
        description:
          "Glass filled PEEK is considered when higher stiffness and dimensional control are important. Fiber content, machining behavior, and the application environment should be reviewed."
      },
      {
        title: "Carbon Filled PEEK",
        description:
          "Carbon filled PEEK can provide increased stiffness and grade-dependent wear or electrical characteristics for precision industrial components."
      },
      {
        title: "Bearing Grade PEEK",
        description:
          "Bearing grade PEEK uses application-specific fillers for sliding, friction, and wear components. Load, speed, mating surface, and lubrication should be included in the review."
      }
    ],
    formLabels: {
      sheet: "PEEK Sheet",
      rod: "PEEK Rod",
      tube: "PEEK Tube",
      customMachinedParts: "CNC Machined PEEK Parts"
    },
    availableForms: {
      sheet: {
        description:
          "PEEK sheet and plate for cut blanks, fixtures, insulators, structural components, and CNC milled parts.",
        href: "/products/peek-sheet",
        image: image(sheet, "Natural PEEK sheet and plate stock for CNC machining")
      },
      rod: {
        description:
          "PEEK rod for turned seals, bushings, sleeves, spacers, valve components, and precision round parts.",
        href: "/products/peek-rod",
        image: image(rod, "Natural PEEK rod stock for CNC turned components")
      },
      tube: {
        description:
          "PEEK tube and hollow stock may be sourced by grade, wall thickness, dimensions, and required order quantity.",
        image: image(
          material.images.rod[1] || rod,
          "PEEK round stock for tube and hollow component sourcing"
        )
      },
      customMachinedParts: {
        description:
          "Drawing-based PEEK milling and turning support for prototypes, replacement parts, and repeat production requirements.",
        href: "/services/cnc-plastic-machining",
        image: image(
          machining,
          "Custom CNC machined PEEK precision components made from drawings"
        )
      }
    },
    applications: {
      semiconductor: {
        description:
          "Insulators, handling fixtures, process components, and precision parts for semiconductor equipment.",
        href: "/industries/electronics"
      },
      medical: {
        description:
          "Fixtures, instrument components, equipment parts, and application-specific prototypes.",
        href: "/industries/medical-devices"
      },
      automation: {
        description:
          "Wear parts, guides, rollers, fixtures, and precision components for automated equipment.",
        href: "/industries/industrial-equipment"
      },
      electronics: {
        description:
          "Electrical insulation, test fixtures, connectors, and production equipment components.",
        href: "/industries/electronics"
      },
      foodProcessing: {
        description:
          "Grade-dependent equipment components where heat, wear, or chemical exposure must be reviewed.",
        href: "/industries/food-processing"
      },
      aerospace: {
        description:
          "Lightweight precision components, insulators, brackets, and application-specific machined parts.",
        href: "/industries/aerospace"
      }
    },
    machiningCapability: {
      description:
        "Apex PolyWorks provides custom PEEK machining support for components made from customer drawings, CAD files, and application requirements. The manufacturing review considers grade, geometry, wall thickness, inspection needs, and production quantity.",
      capabilities: [
        "CNC milling and turning support for custom PEEK components",
        "Drawing-based manufacturing from 2D drawings and 3D CAD files",
        "Prototype support before repeat or larger production requirements",
        "Material grade, geometry, and inspection review before quotation"
      ],
      image: image(
        machiningDetail,
        "CNC machining of a custom PEEK component from an engineering drawing"
      )
    },
    supplierAdvantages: [
      {
        title: "Engineering Plastic Expertise",
        description:
          "Application-focused review of PEEK grades, stock forms, operating conditions, component geometry, and manufacturing considerations."
      },
      {
        title: "Custom CNC Machining Support",
        description:
          "Milling and turning support for drawing-based PEEK prototypes, replacement components, and repeat production requirements."
      },
      {
        title: "Material Verification",
        description:
          "Requested PEEK grade and project documentation requirements are reviewed before material and production scope are confirmed."
      },
      {
        title: "Global Industrial Supply",
        description:
          "Material sourcing, export packaging, and logistics coordination for industrial customers worldwide."
      }
    ],
    midPageCta: {
      title: "Need Custom PEEK Components?",
      description:
        "Send your drawings, specifications or application requirements. Our team will review your project and provide quotation support.",
      primaryLabel: "Request a PEEK Quote",
      primaryHref: "/request-a-quote",
      secondaryLabel: "Upload Your Drawing",
      secondaryHref: "/request-a-quote"
    },
    faqs: [
      {
        question: "What is PEEK material?",
        answer:
          "PEEK is polyether ether ketone, a high-performance engineering thermoplastic used for demanding industrial components that require a combination of thermal, chemical, mechanical, wear, or electrical performance."
      },
      {
        question: "What is PEEK used for?",
        answer:
          "PEEK is used for insulators, seals, bushings, valve and pump parts, semiconductor equipment components, medical and laboratory fixtures, aerospace parts, and industrial automation components."
      },
      {
        question: "Can PEEK be CNC machined?",
        answer:
          "Yes. PEEK can be CNC milled and turned into custom components. The drawing, selected grade, wall thickness, geometry, inspection requirements, and production quantity should be reviewed before machining."
      },
      {
        question: "Do you supply PEEK sheet and PEEK rod?",
        answer:
          "Yes. Apex PolyWorks supplies PEEK sheet, plate, rod, cut blanks, and custom CNC machined PEEK components. Availability depends on grade, dimensions, quantity, and project requirements."
      },
      {
        question: "What PEEK grades are available?",
        answer:
          "Virgin PEEK and selected reinforced or functional grades, including glass-filled, carbon-filled, bearing, and application-specific options, may be available. Contact us with the required grade or operating conditions."
      },
      {
        question: "Can you manufacture prototype PEEK parts?",
        answer:
          "Yes. Prototype PEEK parts can be produced from drawings or CAD files for design, fit, and manufacturing review before repeat production requirements."
      },
      {
        question: "Which industries use PEEK components?",
        answer:
          "PEEK components are used in semiconductor equipment, medical and laboratory equipment, aerospace systems, electronics manufacturing, fluid handling, and industrial automation."
      },
      {
        question: "How can I request a PEEK quotation?",
        answer:
          "Send the PEEK grade, stock form or part dimensions, quantity, application requirements, and available 2D or 3D drawings. Our team will review material availability and the manufacturing scope."
      }
    ],
    relatedLinks: [
      {
        title: "PEEK Sheet",
        description:
          "Review PEEK sheet, plate, cut-to-size supply, grades, and purchasing requirements.",
        href: "/products/peek-sheet"
      },
      {
        title: "PEEK Rod",
        description:
          "Review PEEK rod stock and turned-part sourcing for seals, bushings, spacers, and sleeves.",
        href: "/products/peek-rod"
      },
      {
        title: "PEEK CNC Machining",
        description:
          "Send drawings for custom milled and turned PEEK components from prototype through repeat production.",
        href: "/services/cnc-plastic-machining"
      }
    ],
    quoteCta: {
      title: "Request a PEEK material or machining quote",
      description:
        "Send the required PEEK grade, dimensions, quantity, application details, and drawing files for sourcing and manufacturing review.",
      primaryLabel: "Request PEEK Quote",
      primaryHref: "/request-a-quote",
      secondaryLabel: "Upload Your Drawing",
      secondaryHref: "/request-a-quote"
    }
  };
}
