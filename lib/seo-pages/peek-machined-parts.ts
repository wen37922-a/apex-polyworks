import type { ProductImageLibrary } from "@/lib/product-images";
import type { ProductSEOPageData, SEOImage } from "@/lib/seo-page-types";

function image(src: string, alt: string): SEOImage {
  return {
    src,
    alt,
    width: 1200,
    height: 900
  };
}

export function createPeekMachinedPartsSEOPageData(
  images: ProductImageLibrary
): ProductSEOPageData {
  const cncImages = images.PEEK.cnc.length
    ? images.PEEK.cnc
    : [images.PEEK.hero];

  return {
    productName: "CNC Machined PEEK Parts",
    slug: "/products/peek-machined-parts",
    eyebrow: "Custom PEEK component manufacturing",
    heroTitle: "CNC Machined PEEK Parts Supplier for Custom Components",
    introduction:
      "Apex PolyWorks manufactures custom PEEK components based on customer drawings, specifications and application requirements, supporting industrial customers worldwide.",
    heroHighlights: [
      "Drawing-based production",
      "CAD file review",
      "Prototype support",
      "Worldwide industrial supply"
    ],
    heroImage: image(
      cncImages[0],
      "Custom CNC machined PEEK components for industrial applications"
    ),
    overview: {
      whatIs:
        "CNC machined PEEK parts are custom components produced from polyether ether ketone stock shapes according to customer drawings and application requirements. PEEK is a high-performance engineering plastic considered for demanding thermal, chemical, wear, electrical, and dimensional conditions. Customers choose machined PEEK components when geometry, material performance, and project-specific documentation must be reviewed together.",
      selectionReasons: [
        "Custom geometry can be produced from customer drawings or CAD files.",
        "PEEK grade selection can be discussed around the actual application environment.",
        "Prototype parts can support design, fit, and functional review.",
        "Production scope can be planned around quantity, inspection, and delivery requirements."
      ],
      image: image(
        cncImages[1] ?? cncImages[0],
        "Precision machined PEEK plastic components made from engineering drawings"
      )
    },
    sectionCopy: {
      overviewTitle: "What are CNC Machined PEEK Parts?",
      overviewReasonsTitle:
        "Why industrial buyers choose machined PEEK components",
      propertiesEyebrow: "Common components",
      propertiesTitle: "Common CNC PEEK Components",
      propertiesDescription:
        "Component geometry and material grade should be reviewed against load, temperature, chemical exposure, mating surfaces, electrical requirements, and inspection needs.",
      applicationsEyebrow: "Industrial applications",
      applicationsTitle: "Applications for CNC Machined PEEK Parts",
      applicationsDescription:
        "Custom PEEK components support industrial equipment and assemblies where application-specific performance and drawing-based manufacturing are important.",
      relatedEyebrow: "Related PEEK sourcing pages",
      relatedTitle: "Materials, stock forms, and CNC machining support",
      faqTitle: "CNC Machined PEEK Parts FAQ",
      faqDescription:
        "Answers for engineering and purchasing teams preparing a custom PEEK component quotation."
    },
    manufacturingSupport: {
      title: "Custom Manufacturing Support",
      description:
        "Projects are reviewed around the drawing, selected PEEK grade, component function, quantity, and inspection requirements before manufacturing scope is confirmed.",
      capabilities: [
        "Drawing-based production from customer specifications.",
        "Review of 2D drawings and 3D CAD files.",
        "Prototype support for design and application evaluation.",
        "Custom geometries reviewed for practical machining considerations.",
        "Application-based material discussion for PEEK grade selection."
      ],
      image: image(
        cncImages[2] ?? cncImages[0],
        "Drawing-based CNC manufacturing of a precision PEEK component"
      ),
      href: "/services/cnc-plastic-machining",
      hrefLabel: "Review CNC machining support"
    },
    supplyOptions: [],
    properties: [
      {
        title: "Bushings",
        description:
          "Custom PEEK bushings for industrial assemblies where wear, stability, or application-specific material performance requires review."
      },
      {
        title: "Wear Components",
        description:
          "Guides, pads, rollers, and sliding components designed around load, speed, mating surfaces, and operating conditions."
      },
      {
        title: "Insulating Parts",
        description:
          "Machined supports, spacers, and insulating components for electrical and semiconductor equipment."
      },
      {
        title: "Precision Fixtures",
        description:
          "Custom fixtures, nests, and handling components produced from customer drawings for industrial processes."
      },
      {
        title: "Sealing Components",
        description:
          "PEEK rings, seats, and sealing-related components reviewed against media, temperature, pressure, and geometry."
      },
      {
        title: "Custom Engineering Parts",
        description:
          "Application-specific PEEK components for replacement, prototype, and repeat industrial requirements."
      }
    ],
    applications: [
      {
        title: "Semiconductor Equipment",
        description:
          "Handling, insulation, fluid-control, and process equipment components for demanding production environments."
      },
      {
        title: "Medical Devices",
        description:
          "Equipment components and fixtures produced to customer-defined material, drawing, and documentation requirements."
      },
      {
        title: "Aerospace Applications",
        description:
          "Lightweight machined components for project-specific aerospace equipment and assembly requirements."
      },
      {
        title: "Automation Systems",
        description:
          "Guides, bushings, fixtures, spacers, and wear components for automated industrial systems."
      },
      {
        title: "Electronics",
        description:
          "Insulating, positioning, and equipment components for electronics manufacturing and test applications."
      },
      {
        title: "Industrial Machinery",
        description:
          "Custom replacement and production parts for machinery, fluid handling, and industrial assemblies."
      }
    ],
    supplierAdvantages: {
      title: "Why Choose Apex PolyWorks",
      description:
        "PEEK component inquiries are reviewed from both material and manufacturing perspectives to support a clearer quotation process.",
      items: [
        {
          title: "Engineering Plastic Expertise",
          description:
            "Application-focused discussion of PEEK stock forms, grades, component geometry, and operating conditions."
        },
        {
          title: "Custom Component Support",
          description:
            "Drawing-based review for prototypes, replacement components, and repeat production requirements."
        },
        {
          title: "Material Selection Assistance",
          description:
            "PEEK grade considerations can be discussed around the application's thermal, chemical, wear, and electrical requirements."
        },
        {
          title: "Global Industrial Supply",
          description:
            "Export packaging and shipment coordination for industrial customers worldwide."
        }
      ]
    },
    relatedLinks: [
      {
        title: "PEEK Material",
        description:
          "Review PEEK properties, common grades, applications, and available product forms.",
        href: "/materials/peek"
      },
      {
        title: "PEEK Sheet",
        description:
          "Explore PEEK sheet supply, cut-to-size options, grades, and machining support.",
        href: "/products/peek-sheet"
      },
      {
        title: "PEEK Rod",
        description:
          "Review PEEK rod supply, custom lengths, applications, and CNC machining support.",
        href: "/products/peek-rod"
      },
      {
        title: "CNC Machining Service",
        description:
          "Learn about drawing-based CNC machining support for engineering plastic components.",
        href: "/services/cnc-plastic-machining"
      }
    ],
    faqs: [
      {
        question: "What are CNC machined PEEK parts used for?",
        answer:
          "CNC machined PEEK parts are used for bushings, wear components, insulators, fixtures, sealing components, and other custom parts in demanding industrial equipment. Suitability depends on the selected grade and actual operating conditions."
      },
      {
        question: "Can you manufacture custom PEEK components from drawings?",
        answer:
          "Yes. Apex PolyWorks reviews customer drawings, specifications, quantities, material requirements, and application details before confirming the manufacturing and quotation scope."
      },
      {
        question: "What industries use CNC machined PEEK parts?",
        answer:
          "Machined PEEK components are used in semiconductor equipment, medical devices, aerospace applications, automation systems, electronics, industrial machinery, and other demanding applications."
      },
      {
        question: "Can you produce prototype PEEK components?",
        answer:
          "Prototype PEEK components can be reviewed for design, fit, and functional evaluation before larger production requirements. Provide the drawing, grade, quantity, and intended application."
      },
      {
        question: "What files are needed for a PEEK machining quotation?",
        answer:
          "Provide a 2D drawing or 3D CAD file together with the requested PEEK grade, quantity, inspection requirements, delivery location, and relevant application information."
      },
      {
        question: "Do you ship CNC PEEK parts worldwide?",
        answer:
          "Yes. Apex PolyWorks supports industrial customers worldwide and can coordinate export packaging and shipment requirements for custom machined PEEK components."
      }
    ],
    quoteCta: {
      title: "Request a CNC PEEK Quote",
      description:
        "Send your drawing, PEEK grade, quantity, application requirements, and delivery location for quotation review.",
      primaryLabel: "Request CNC PEEK Quote",
      primaryHref:
        "/request-a-quote?material=CNC%20Machined%20PEEK%20Parts",
      secondaryLabel: "Upload Your Drawing",
      secondaryHref:
        "/request-a-quote?material=CNC%20Machined%20PEEK%20Parts"
    }
  };
}
