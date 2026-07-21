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

export function createPeekRodSEOPageData(
  images: ProductImageLibrary
): ProductSEOPageData {
  const rodImages = images.PEEK.rod.length
    ? images.PEEK.rod
    : [images.PEEK.hero];
  const cncImages = images.PEEK.cnc.length
    ? images.PEEK.cnc
    : [images.PEEK.hero];

  return {
    productName: "PEEK Rod",
    slug: "/products/peek-rod",
    eyebrow: "PEEK stock shapes and machined components",
    heroTitle: "PEEK Rod Supplier for Industrial Applications",
    introduction:
      "Apex PolyWorks supplies high-performance PEEK rods for precision industrial applications, with custom lengths and CNC machining support available worldwide.",
    heroHighlights: [
      "PEEK rod supply",
      "Custom lengths reviewed",
      "CNC machining support",
      "Worldwide industrial supply"
    ],
    heroImage: image(
      rodImages[0],
      "Natural PEEK rods supplied for precision industrial applications"
    ),
    overview: {
      whatIs:
        "PEEK rod is a solid stock form of polyether ether ketone, a high-performance engineering plastic used to produce precision components for demanding industrial environments. Customers choose rod stock for turned and milled parts where the selected grade must support the application's thermal, chemical, wear, electrical, or dimensional requirements.",
      selectionReasons: [
        "Suitable for drawing-based turned and milled component production.",
        "Available for applications where standard plastics may not provide the required performance.",
        "Supports prototype, replacement-part, and repeat-production purchasing requirements.",
        "Can be reviewed by grade, quantity, machining scope, and end-use environment."
      ],
      image: image(
        rodImages[1] ?? rodImages[0],
        "PEEK plastic rod stock for CNC turning and industrial component production"
      )
    },
    supplyOptions: [
      {
        title: "Standard PEEK Rod Supply",
        description:
          "PEEK rod stock supplied according to requested grade, quantity, application, and documentation requirements."
      },
      {
        title: "Cut-to-Length Service",
        description:
          "Cut lengths can be reviewed to support machining preparation, prototype work, maintenance requirements, and production planning."
      },
      {
        title: "Custom Machined PEEK Components",
        description:
          "Drawing-based turning and milling support for bushings, sleeves, spacers, seals, and other custom PEEK components."
      }
    ],
    properties: [
      {
        title: "High Temperature Performance",
        description:
          "PEEK rod is considered for components exposed to elevated operating temperatures. Grade and service conditions should be reviewed for each project."
      },
      {
        title: "Chemical Resistance",
        description:
          "PEEK can support demanding chemical environments, subject to verification against the actual media, concentration, temperature, and exposure cycle."
      },
      {
        title: "Wear Resistance",
        description:
          "Selected PEEK grades can support sliding and wear components when load, speed, mating surface, and lubrication conditions are understood."
      },
      {
        title: "Dimensional Stability",
        description:
          "PEEK rod is used for precision components where geometry, machining sequence, wall thickness, and operating conditions require careful review."
      },
      {
        title: "Electrical Insulation",
        description:
          "Unfilled and application-specific PEEK grades are used for insulating components in electrical and semiconductor equipment."
      }
    ],
    applications: [
      {
        title: "Semiconductor Equipment",
        description:
          "Machined handling, insulation, fluid-control, and equipment components for demanding process environments."
      },
      {
        title: "Medical Equipment",
        description:
          "Precision equipment parts, fixtures, and components produced to project-specific material and documentation requirements."
      },
      {
        title: "Automation Systems",
        description:
          "Bushings, guides, spacers, rollers, and wear components for automated industrial equipment."
      },
      {
        title: "Electrical Components",
        description:
          "Insulators, supports, connectors, and machined parts where electrical behavior is part of the material review."
      },
      {
        title: "Precision Machinery",
        description:
          "Turned and milled replacement or production components for industrial assemblies and machinery."
      }
    ],
    machiningCapability: {
      description:
        "Apex PolyWorks supports drawing-based manufacturing of PEEK components from rod stock. The machining scope is reviewed against geometry, grade, quantity, inspection requirements, and the intended operating environment.",
      capabilities: [
        "CNC turning and milling based on customer drawings or CAD files.",
        "Prototype support for fit, function, and design review before larger orders.",
        "Custom component production for repeat industrial requirements.",
        "Machining and inspection planning aligned with project specifications."
      ],
      image: image(
        cncImages[0],
        "CNC machining of a custom PEEK component from PEEK rod stock"
      ),
      href: "/services/cnc-plastic-machining"
    },
    relatedLinks: [
      {
        title: "PEEK Sheet",
        description:
          "Review PEEK sheet supply, cut-to-size options, grades, and machining support.",
        href: "/products/peek-sheet"
      },
      {
        title: "CNC Machined PEEK Parts",
        description:
          "Explore drawing-based CNC machining support for custom PEEK components.",
        href: "/products/peek-machined-parts"
      },
      {
        title: "PEEK Material Page",
        description:
          "Compare PEEK properties, grades, applications, and available product forms.",
        href: "/materials/peek"
      }
    ],
    faqs: [
      {
        question: "What is PEEK rod used for?",
        answer:
          "PEEK rod is machined into industrial components such as bushings, sleeves, spacers, seals, insulators, guides, and precision equipment parts. The final use depends on the selected grade and operating conditions."
      },
      {
        question: "Do you supply custom PEEK rods?",
        answer:
          "Apex PolyWorks can review custom cut lengths, grade requirements, quantities, and machining needs. Send the required specifications so availability and supply scope can be confirmed."
      },
      {
        question: "Can PEEK rods be CNC machined?",
        answer:
          "Yes. PEEK rods can be CNC turned and milled into custom components. Drawings, tolerances, geometry, quantity, and application details help define an appropriate machining and inspection plan."
      },
      {
        question: "What industries use PEEK rods?",
        answer:
          "PEEK rods are used in semiconductor equipment, medical equipment, automation systems, electrical assemblies, precision machinery, fluid handling, and other demanding industrial applications."
      },
      {
        question: "What information is needed for a PEEK rod quotation?",
        answer:
          "Provide the requested grade, rod diameter, cut length, quantity, delivery location, and any documentation requirements. For machined parts, include a drawing or CAD file with the relevant specifications."
      },
      {
        question: "Do you ship PEEK rods worldwide?",
        answer:
          "Yes. Apex PolyWorks supports international industrial customers and can coordinate export packaging and shipment requirements for PEEK rod and custom machined components."
      }
    ],
    quoteCta: {
      title: "Request a PEEK Rod Quote",
      description:
        "Send your grade, rod requirements, quantity, delivery location, or component drawing for quotation review.",
      primaryLabel: "Request PEEK Rod Quote",
      primaryHref: "/request-a-quote?material=PEEK%20Rod",
      secondaryLabel: "Upload Your Drawing",
      secondaryHref: "/request-a-quote?material=PEEK%20Rod"
    }
  };
}
