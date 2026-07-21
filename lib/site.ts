import { productImages, siteImages } from "@/lib/product-images";
import { getCatalogMaterials, materialsData } from "@/lib/materials-data";

export type DetailItem = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: string[];
  applications: string[];
  heroImage?: {
    src: string;
    alt: string;
  };
  featureImage?: {
    src: string;
    alt: string;
    title: string;
    text: string;
  };
  galleryImages?: {
    src: string;
    alt: string;
  }[];
  galleryTitle?: string;
  galleryText?: string;
  seoTitle: string;
  seoDescription: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  body: string[];
};

export const siteConfig = {
  name: "Apex PolyWorks",
  url: "https://apexpolyworks.com",
  lastModified: "2026-07-18",
  description:
    "Worldwide supplier of engineering plastics, cut-to-size plastic sheets, plastic rods, films, CNC machined plastic parts, and custom fabrication.",
  email: "sales@apexpolyworks.com",
  phone: "+852 6555 0970",
  whatsapp: "+852 6555 0970",
  whatsappUrl: "https://wa.me/85265550970",
  address: "Shenzhen, China"
};

const peekSheetImages = {
  hero: {
    src: productImages.PEEK.sheet[0],
    alt: "Natural PEEK sheet stock for precision machining"
  },
  gallery: productImages.PEEK.sheet.slice(1).map((src, index) => ({
    src,
    alt: `PEEK sheet stock and plate material example ${index + 1}`
  })),
  warehouse: {
    src: siteImages.warehouse,
    alt: "PEEK plastic warehouse inventory and stock material"
  }
};

const peekRodImages = {
  hero: {
    src: productImages.PEEK.rod[0],
    alt: "Natural PEEK rod stock for CNC turning"
  },
  gallery: productImages.PEEK.rod.slice(1).map((src, index) => ({
    src,
    alt: `PEEK round rod stock for precision machining example ${index + 1}`
  }))
};

const peekCncImages = productImages.PEEK.cnc.map((src, index) => ({
  src,
  alt: `CNC machined PEEK plastic component example ${index + 1}`
}));

export const services: DetailItem[] = [
  {
    title: "CNC Plastic Machining",
    slug: "cnc-plastic-machining",
    eyebrow: "Precision machining",
    summary:
      "Milled and turned plastic parts from prototypes to repeat production, with material guidance before quote release.",
    description:
      "Apex PolyWorks machines engineering plastics for fixtures, wear parts, housings, insulators, fluid handling components, guards, and replacement parts. Our team reviews material behavior, tolerance needs, edge finish, and production volume before quoting so buyers get a practical manufacturing path instead of a generic price.",
    highlights: [
      "CNC milling for plates, blocks, pockets, and complex profiles",
      "CNC turning for bushings, rollers, spacers, sleeves, and threaded parts",
      "Prototype, bridge, repair, and low-volume production orders",
      "Material-aware machining for PEEK, PTFE, acetal, nylon, PC, HDPE, PVC, and acrylic"
    ],
    specs: [
      "Typical tolerances reviewed by geometry and material",
      "Deburring, chamfering, countersinking, tapping, and engraving available",
      "Buyer drawings accepted as PDF, STEP, DXF, DWG, or sample reference",
      "Material documentation and inspection reports may be available depending on the material and project requirements"
    ],
    applications: [
      "Machine guards",
      "Insulators",
      "Bearing surfaces",
      "Medical and lab fixtures",
      "Conveyor change parts"
    ],
    heroImage: {
      src: productImages.PEEK.hero,
      alt: "PEEK plastic stock and CNC machining setup for custom parts"
    },
    galleryImages: peekCncImages,
    galleryTitle: "PEEK CNC machining gallery",
    galleryText:
      "Examples of machined PEEK components, milled features, clean edges, and finished plastic parts for high-performance applications.",
    seoTitle: "CNC Plastic Machining Services for US Buyers",
    seoDescription:
      "Request CNC machined plastic parts in PEEK, PTFE, acetal, nylon, PC, HDPE, PVC, and more for prototype and production requirements."
  },
  {
    title: "Laser Cutting",
    slug: "laser-cutting",
    eyebrow: "Clean profiles",
    summary:
      "Fast laser-cut plastic panels, guards, tags, inserts, and acrylic components from DXF or production drawings.",
    description:
      "Laser cutting is well suited for plastic sheet parts where clean edges, repeatable profiles, and quick turnaround matter. We help buyers confirm whether the selected plastic is suitable for laser cutting or should move to CNC routing, sawing, or waterjet alternatives.",
    highlights: [
      "Sharp profile cutting for acrylic, select PC, PETG, and thin sheet materials",
      "Nested layouts for efficient sheet yield",
      "Protective masking support for cosmetic surfaces",
      "Fast sampling for display, equipment, and panel applications"
    ],
    specs: [
      "DXF and DWG files preferred for flat profile parts",
      "Edge quality depends on resin, thickness, and color",
      "Part marking and protective film options available",
      "Routing recommended when material chemistry is not laser friendly"
    ],
    applications: [
      "Clear guards",
      "Control panel windows",
      "Display fixtures",
      "Spacers",
      "Templates"
    ],
    seoTitle: "Plastic Laser Cutting Services for Sheet Parts",
    seoDescription:
      "Request laser-cut acrylic and plastic sheet parts for industrial panels, guards, displays, tags, and fixtures."
  },
  {
    title: "Cut-to-Size Plastic Sheets",
    slug: "cut-to-size-plastic-sheets",
    eyebrow: "Sheet supply",
    summary:
      "Plastic sheets cut to buyer dimensions for fabrication, maintenance, prototyping, and production use.",
    description:
      "Order engineering plastic sheets in practical cut sizes instead of overbuying full sheets. We support single pieces, mixed-material kits, recurring blanks, and production-ready sheet packs for CNC shops and industrial maintenance teams.",
    highlights: [
      "Prototype and low-volume cut-to-size orders are welcome",
      "ABS, acrylic, polycarbonate, PVC, HDPE, PP, nylon, acetal, PTFE, and PEEK",
      "Saw-cut, routed, polished, drilled, or masked options",
      "Mixed material orders consolidated for simpler procurement"
    ],
    specs: [
      "Thickness, sheet size, color, grade, and finish confirmed before quote",
      "Tolerance depends on saw, router, and finishing route",
      "Protective film and packing options for cosmetic materials",
      "Recurring blanket order support for repeat buyers"
    ],
    applications: [
      "Equipment panels",
      "Machine guards",
      "Wear strips",
      "Workholding plates",
      "Electrical insulation"
    ],
    seoTitle: "Cut-to-Size Engineering Plastic Sheets",
    seoDescription:
      "Buy cut-to-size ABS, acrylic, PC, PVC, HDPE, PP, nylon, acetal, PTFE, and PEEK sheets for US industrial projects."
  },
  {
    title: "Injection Molding",
    slug: "injection-molding",
    eyebrow: "Molded parts",
    summary:
      "Prototype and production injection molding support for plastic components that are ready to move beyond machining.",
    description:
      "For projects with repeat demand, injection molding can reduce unit cost and improve consistency. We help buyers compare molded and machined routes, review resin options, and prepare mold-ready details before committing to tooling.",
    highlights: [
      "DFM review for wall thickness, draft, ribs, bosses, and gate planning",
      "Prototype tooling and production tooling sourcing",
      "Engineering resin selection aligned with functional needs",
      "Post-mold machining, assembly, and packaging support"
    ],
    specs: [
      "3D files required for mold review",
      "Tooling approach depends on volume, tolerance, resin, and life target",
      "Color matching, inserts, and texture options reviewed by project",
      "First article review and production sampling support available"
    ],
    applications: [
      "Housings",
      "Caps",
      "Medical device components",
      "Electrical parts",
      "Production assemblies"
    ],
    seoTitle: "Custom Plastic Injection Molding Services",
    seoDescription:
      "Plan prototype or production injection molded plastic parts with resin selection, DFM review, tooling support, and quote guidance."
  },
  {
    title: "Plastic Bending",
    slug: "plastic-bending",
    eyebrow: "Formed sheets",
    summary:
      "Heat bending and forming for plastic sheet guards, covers, trays, shields, and display components.",
    description:
      "Plastic bending turns flat sheet into functional covers, guards, brackets, and formed panels without the cost of molds. We review bend radius, material choice, thickness, cosmetic expectations, and quantity to select the right forming process.",
    highlights: [
      "Line bending for acrylic, polycarbonate, PVC, PETG, and other sheet plastics",
      "Simple covers, guards, trays, display parts, and bracket forms",
      "Prototype and repeat production batches",
      "Bending plus drilling, cutting, polishing, and assembly"
    ],
    specs: [
      "Bend radius depends on material, thickness, and geometry",
      "Flat patterns accepted as DXF, PDF, or dimensioned sketches",
      "Cosmetic handling available for clear and display-grade materials",
      "Fixtures recommended for repeat formed shapes"
    ],
    applications: [
      "Machine covers",
      "Point-of-use bins",
      "Transparent shields",
      "Equipment trays",
      "Display fixtures"
    ],
    seoTitle: "Plastic Sheet Bending and Forming Services",
    seoDescription:
      "Custom plastic bending for acrylic, PC, PVC, PETG, and other sheets used in guards, covers, trays, and display parts."
  },
  {
    title: "Plastic Welding",
    slug: "plastic-welding",
    eyebrow: "Joined assemblies",
    summary:
      "Fabricated plastic tanks, ducts, trays, guards, and assemblies joined by material-compatible welding methods.",
    description:
      "Plastic welding is useful when assemblies need chemical resistance, leak control, or strong joined panels without metal fasteners. We help match weld method, filler material, and inspection needs to the application.",
    highlights: [
      "Hot air, extrusion, and material-compatible welding options",
      "PVC, PP, HDPE, and select engineering plastics",
      "Fabricated tanks, splash guards, hoods, bins, trays, and ducting",
      "Welded assemblies combined with CNC cut panels and formed parts"
    ],
    specs: [
      "Material compatibility confirmed before quoting",
      "Leak checks and visual inspection available by requirement",
      "Panel thickness and weld access drive fixture planning",
      "Drawings, dimensions, and use environment improve quote accuracy"
    ],
    applications: [
      "Chemical handling",
      "Food processing guards",
      "Water treatment parts",
      "Industrial trays",
      "Ventilation components"
    ],
    seoTitle: "Custom Plastic Welding and Fabrication",
    seoDescription:
      "Plastic welding for PVC, PP, HDPE, tanks, trays, ducts, guards, and chemical-resistant assemblies for industrial buyers."
  },
  {
    title: "Surface Finishing",
    slug: "surface-finishing",
    eyebrow: "Final details",
    summary:
      "Finishing options for machined and fabricated plastic parts, including edge polishing, deburring, marking, and assembly.",
    description:
      "The last details often decide whether a part is ready for production use. We offer practical finishing choices for cosmetic, functional, and assembly needs, with recommendations based on resin behavior and part geometry.",
    highlights: [
      "Deburring, chamfering, edge polishing, flame polishing, and sanding",
      "Tapping, countersinking, inserts, bonding, and hardware installation",
      "Laser marking, engraved labels, and part identification",
      "Cleaning, masking, packaging, and kitting for production orders"
    ],
    specs: [
      "Finish method depends on plastic type and cosmetic requirements",
      "Clear parts can be packed with protective film or separated layers",
      "Threads, inserts, and hardware are quoted by drawing requirement",
      "Assembly and kitting available for buyer-ready deliveries"
    ],
    applications: [
      "Acrylic displays",
      "Finished machine guards",
      "Panel assemblies",
      "Labeled fixtures",
      "Production kits"
    ],
    seoTitle: "Plastic Part Finishing, Polishing, and Assembly",
    seoDescription:
      "Finish machined plastic parts with edge polishing, deburring, marking, tapping, inserts, assembly, cleaning, and kitting."
  }
];

export const materials: DetailItem[] = materialsData.map((material) => ({
  title: material.name,
  slug: material.slug,
  eyebrow: material.eyebrow,
  summary: material.cardDescription,
  description: material.description,
  highlights: material.keyProperties,
  specs: material.forms.map(
    (form) => `${form.title}: ${form.description}`
  ),
  applications: material.applications,
  seoTitle: material.seoTitle,
  seoDescription: material.seoDescription
}));


export const products: DetailItem[] = [
  {
    title: "PEEK Sheet",
    slug: "peek-sheet",
    eyebrow: "High-performance sheet",
    summary:
      "Natural PEEK sheets and cut-to-size PEEK plates for high-temperature, chemical-resistant, and precision machined parts.",
    description:
      "PEEK sheet is selected when a plastic plate must combine heat resistance, mechanical strength, chemical stability, and dimensional performance. Apex PolyWorks supplies PEEK sheet stock, cut-to-size blanks, and CNC-ready plates for engineers and purchasing teams working on demanding industrial projects.",
    highlights: [
      "Natural PEEK sheets, plates, and CNC-ready cut blanks",
      "Suitable for high-temperature, chemical, wear, and insulation applications",
      "Cut-to-size support for prototypes, replacement parts, and production blanks",
      "Material documentation may be available depending on the grade and project requirements"
    ],
    specs: [
      "Confirm thickness, sheet size, grade, tolerance, and quantity before quote",
      "Premium material yield planning helps control project cost",
      "Unfilled, glass-filled, carbon-filled, and bearing grades reviewed by requirement",
      "Best RFQ inputs include drawing, final dimensions, application, and operating temperature"
    ],
    applications: ["Insulators", "Valve plates", "Fixtures", "Wear pads", "Aerospace parts"],
    heroImage: peekSheetImages.hero,
    featureImage: {
      ...peekSheetImages.warehouse,
      title: "PEEK sheet inventory and cut-to-size supply",
      text: "Stock availability, thickness, cut size, and packing requirements can be reviewed together before quote release."
    },
    galleryImages: peekSheetImages.gallery,
    galleryTitle: "PEEK sheet gallery",
    galleryText:
      "Review PEEK sheet surfaces, plate formats, stocked material, and cut-to-size supply options for CNC machining or fabrication.",
    seoTitle: "PEEK Sheet and Cut-to-Size PEEK Plate",
    seoDescription:
      "Buy PEEK sheet and cut-to-size PEEK plate for high-temperature, chemical-resistant, precision machined industrial parts."
  },
  {
    title: "PEEK Rod",
    slug: "peek-rod",
    eyebrow: "High-performance round stock",
    summary:
      "PEEK rod stock for CNC turned parts, bushings, spacers, seals, sleeves, and high-performance round components.",
    description:
      "PEEK rod is used for precision turned plastic parts that need strength, heat resistance, chemical resistance, and dimensional stability. Apex PolyWorks supports PEEK rod supply, cut blanks, and made-to-print CNC turned components for demanding industrial applications.",
    highlights: [
      "Natural PEEK rods for CNC turning and precision machining",
      "Cut rod blanks for prototype, maintenance, and production orders",
      "Useful for bushings, spacers, sleeves, seals, and small mechanical parts",
      "Material guidance for grade, diameter, tolerance, and operating environment"
    ],
    specs: [
      "Confirm diameter, length, grade, tolerance, quantity, and lead time",
      "Saw-cut blanks can be paired with CNC turning or milling",
      "Filled PEEK grades can be reviewed for wear, stiffness, or bearing performance",
      "Share temperature, load, chemical exposure, and mating surface details"
    ],
    applications: ["Bushings", "Spacers", "Sleeves", "Seals", "Pump components"],
    heroImage: peekRodImages.hero,
    galleryImages: peekRodImages.gallery,
    galleryTitle: "PEEK rod gallery",
    galleryText:
      "See natural PEEK round stock and cut rod material commonly used for CNC turning and precision plastic components.",
    seoTitle: "PEEK Rod Stock and CNC Machined PEEK Rod Parts",
    seoDescription:
      "Source PEEK rod stock, cut PEEK rod blanks, and CNC machined PEEK round parts for high-performance industrial use."
  },
  {
    title: "Plastic Sheets",
    slug: "plastic-sheets",
    eyebrow: "Stock and cut blanks",
    summary:
      "Engineering plastic sheets in full-size, cut-to-size, masked, drilled, routed, bent, or polished formats.",
    description:
      "Apex PolyWorks supplies plastic sheets for machining, fabrication, guarding, maintenance, and production. Buyers can request exact dimensions, mixed material kits, recurring blanks, or finished panel work.",
    highlights: [
      "ABS, PC, acrylic, PVC, HDPE, PP, nylon, acetal, PEEK, PTFE, and more",
      "Cut-to-size, drilled, routed, bent, polished, and masked options",
      "Full sheet or small-quantity orders",
      "Packed for industrial handling or cosmetic protection"
    ],
    specs: [
      "Thickness, grade, color, and finish confirmed before quote",
      "Tolerance depends on cutting method and material behavior",
      "Material documentation may be available depending on the grade and project requirements",
      "Recurring production blank programs available"
    ],
    applications: ["Machine guards", "Panels", "Fixtures", "Liners", "Displays"],
    seoTitle: "Engineering Plastic Sheets Cut to Size",
    seoDescription:
      "Order engineering plastic sheets cut to size in ABS, PC, acrylic, PVC, HDPE, PP, nylon, acetal, PTFE, PEEK, and more."
  },
  {
    title: "Plastic Rods",
    slug: "plastic-rods",
    eyebrow: "Round stock",
    summary:
      "Plastic rods for CNC turning, bushings, rollers, spacers, seals, sleeves, and custom round components.",
    description:
      "Plastic rod stock helps buyers produce turned components quickly without sourcing full bar lengths from multiple suppliers. We support standard lengths, cut pieces, and machined-to-print round parts.",
    highlights: [
      "Acetal, nylon, PTFE, PEEK, PVC, HDPE, PP, acrylic, and more",
      "Cut rod blanks for turning, prototyping, and repair",
      "Custom machined round components available",
      "Small orders and recurring production releases supported"
    ],
    specs: [
      "Diameter, length, grade, color, and tolerance confirmed before quote",
      "Saw-cut blanks can be paired with CNC turning",
      "Filled and specialty grades available by request",
      "Packing supports mixed diameter orders"
    ],
    applications: ["Bushings", "Rollers", "Spacers", "Sleeves", "Seals"],
    seoTitle: "Plastic Rod Stock and Machined Plastic Rod Parts",
    seoDescription:
      "Source plastic rods and machined round parts in acetal, nylon, PTFE, PEEK, PVC, HDPE, PP, acrylic, and more."
  },
  {
    title: "Plastic Films",
    slug: "plastic-films",
    eyebrow: "Thin-gauge plastics",
    summary:
      "Plastic films and thin sheets for insulation, shielding, gaskets, barriers, packaging, and technical components.",
    description:
      "Thin plastic materials support applications where thickness, flexibility, dielectric performance, barrier behavior, or chemical compatibility matters. We help buyers specify film type, gauge, finish, and converting needs.",
    highlights: [
      "PTFE, PC, PET, PP, PVC, HDPE, and specialty films by request",
      "Sheets, rolls, slit widths, and cut blanks",
      "Gasket, insulation, separator, and barrier applications",
      "Material guidance for thickness and functional fit"
    ],
    specs: [
      "Gauge, width, roll length, surface finish, and color drive quote details",
      "Die cutting, laser cutting, and CNC knife cutting reviewed by material",
      "Protective liners and clean packing available by project",
      "Compliance requirements should be shared up front"
    ],
    applications: ["Insulators", "Gaskets", "Barriers", "Separators", "Packaging parts"],
    seoTitle: "Plastic Films and Thin Plastic Sheet Materials",
    seoDescription:
      "Buy PTFE, PC, PET, PP, PVC, HDPE, and specialty plastic films for insulation, gaskets, barriers, and technical parts."
  },
  {
    title: "Custom Plastic Parts",
    slug: "custom-plastic-parts",
    eyebrow: "Made to print",
    summary:
      "Custom CNC machined, cut, bent, welded, finished, and assembled plastic parts from drawings or samples.",
    description:
      "When stock material is only the starting point, we help turn it into production-ready plastic components. Send a drawing, STEP file, DXF, sample photo, or requirement list and our team will recommend the best manufacturing route.",
    highlights: [
      "CNC machining, routing, laser cutting, forming, welding, and finishing",
      "One-off repair parts through low-volume production",
      "Material selection support for function, cost, and availability",
      "RFQs are typically reviewed within 24 hours on business days"
    ],
    specs: [
      "Best quote inputs: drawing, 3D model, material, quantity, and use environment",
      "Material documentation and inspection reports may be available depending on the material and project requirements",
      "Assemblies can include fasteners, inserts, labels, and kitting",
      "Minimum order requirements depend on material, size and manufacturing process"
    ],
    applications: ["Fixtures", "Guards", "Wear parts", "Insulators", "Production assemblies"],
    seoTitle: "Custom Plastic Parts for Industrial Buyers",
    seoDescription:
      "Request custom plastic parts made by CNC machining, cutting, bending, welding, finishing, and assembly for prototype or production needs."
  }
];

export const industries: DetailItem[] = [
  {
    title: "Automotive",
    slug: "automotive",
    eyebrow: "Mobility supply",
    summary:
      "Plastic materials and machined parts for fixtures, testing equipment, EV systems, interior tools, and assembly lines.",
    description:
      "Automotive teams need quick, practical plastic components for test stands, assembly fixtures, protective panels, lightweight prototypes, and production support. We help choose materials that match wear, heat, chemical, and dimensional needs.",
    highlights: [
      "Assembly fixtures, poka-yoke tools, guards, and checking aids",
      "Battery and electronics insulators",
      "Wear strips, rollers, bushings, and conveyor components",
      "Prototype and service replacement parts"
    ],
    specs: [
      "Material selection based on heat, load, chemical exposure, and friction",
      "CNC machining and cut-to-size sheet orders available",
      "Labeling and kitting support for plant delivery",
      "Fast RFQ review for maintenance and engineering buyers"
    ],
    applications: ["EV fixtures", "Line guards", "Conveyor parts", "Insulators", "Test equipment"],
    seoTitle: "Plastic Materials and Parts for Automotive Manufacturing",
    seoDescription:
      "Engineering plastics, CNC machined plastic parts, guards, fixtures, and wear components for automotive and EV buyers."
  },
  {
    title: "Medical Devices",
    slug: "medical-devices",
    eyebrow: "Clean functional parts",
    summary:
      "Engineering plastics for device fixtures, lab equipment, imaging components, insulators, housings, and prototypes.",
    description:
      "Medical device suppliers often require clean machining, stable materials, traceability, and practical communication during development. We support prototypes, fixtures, tooling components, and selected production plastic parts.",
    highlights: [
      "PEEK, PC, acetal, PTFE, acrylic, and nylon options",
      "Prototype and bridge production support",
      "Lab fixtures, device housings, insulators, and imaging parts",
      "Material documentation available on request"
    ],
    specs: [
      "Application requirements should define grade and documentation needs",
      "Cleaning, bagging, and protective packing options available",
      "Tolerances reviewed by geometry and material behavior",
      "Not a substitute for buyer validation or regulatory approval"
    ],
    applications: ["Lab fixtures", "Device housings", "Insulators", "Imaging parts", "Test jigs"],
    seoTitle: "Engineering Plastic Parts for Medical Device Suppliers",
    seoDescription:
      "CNC machined medical device plastics, lab fixtures, PEEK, PC, acetal, PTFE, acrylic, and prototype support."
  },
  {
    title: "Electronics",
    slug: "electronics",
    eyebrow: "Insulation and protection",
    summary:
      "Plastic sheets, films, and machined parts for insulators, enclosures, trays, standoffs, and assembly fixtures.",
    description:
      "Electronics manufacturers use engineering plastics to manage insulation, spacing, protection, handling, and thermal constraints. We supply stock forms and custom parts for test, assembly, packaging, and equipment builds.",
    highlights: [
      "Electrical insulation sheets, films, and spacers",
      "ESD and static-dissipative material options by request",
      "Machined housings, trays, fixtures, and standoffs",
      "Transparent covers and device protection panels"
    ],
    specs: [
      "Share dielectric, ESD, heat, and flammability requirements early",
      "Thin films and rigid sheets can be converted to drawing",
      "Marking and kitting support available",
      "Material documentation may be available depending on the grade and project requirements"
    ],
    applications: ["Insulators", "Trays", "Standoffs", "Enclosures", "Assembly fixtures"],
    seoTitle: "Plastic Materials and CNC Parts for Electronics",
    seoDescription:
      "Engineering plastics, films, insulators, ESD options, machined enclosures, trays, standoffs, and fixtures for electronics."
  },
  {
    title: "Aerospace",
    slug: "aerospace",
    eyebrow: "Lightweight performance",
    summary:
      "High-performance plastics for lightweight brackets, fixtures, insulators, interior components, and tooling.",
    description:
      "Aerospace buyers often need strong, lightweight, traceable plastic materials for demanding environments. We support PEEK, polycarbonate, PTFE, nylon, acetal, and specialty engineering plastics for parts and tooling.",
    highlights: [
      "High-performance PEEK and filled engineering plastics",
      "CNC machined insulators, brackets, tooling, and fixtures",
      "Lightweight alternatives to metal for selected applications",
      "Material documentation and careful packing available"
    ],
    specs: [
      "Grade, traceability, flammability, and documentation needs must be defined",
      "Tolerances reviewed by material, thickness, and geometry",
      "Prototype and low-volume production support",
      "Buyer validation required for flight-critical applications"
    ],
    applications: ["Fixtures", "Brackets", "Insulators", "Interior tooling", "Test components"],
    seoTitle: "High-Performance Plastic Parts for Aerospace Buyers",
    seoDescription:
      "PEEK, PTFE, PC, nylon, acetal, and custom CNC machined plastic parts for aerospace fixtures, tooling, and components."
  },
  {
    title: "Industrial Equipment",
    slug: "industrial-equipment",
    eyebrow: "Plant-ready plastics",
    summary:
      "Plastic wear parts, guards, panels, guides, rollers, liners, and replacement parts for industrial machinery.",
    description:
      "Industrial equipment teams rely on plastic parts to reduce weight, protect operators, handle wear, and solve maintenance problems quickly. We support made-to-print parts, stock material, and recurring replacement components.",
    highlights: [
      "Machine guards, panels, covers, and windows",
      "Wear strips, guide rails, rollers, bushings, and liners",
      "CNC machined replacement parts from drawings or samples",
      "Mixed material sourcing for maintenance buyers"
    ],
    specs: [
      "Material selection based on load, speed, abrasion, temperature, and fluids",
      "Prototype and low-volume replacement part orders are welcome",
      "Finished assemblies, labels, and kitting available",
      "RFQs are typically reviewed within 24 hours on business days"
    ],
    applications: ["Machine guards", "Wear strips", "Rollers", "Liners", "Repair parts"],
    seoTitle: "Plastic Parts for Industrial Equipment and Machinery",
    seoDescription:
      "Custom plastic wear parts, guards, panels, guides, rollers, bushings, liners, and CNC machined replacement parts."
  },
  {
    title: "Food Processing",
    slug: "food-processing",
    eyebrow: "Sanitary production support",
    summary:
      "Food-grade plastic materials and custom parts for conveyors, guides, cutting surfaces, guards, and handling systems.",
    description:
      "Food processing environments need plastic materials that are durable, cleanable, and compatible with production conditions. We help specify HDPE, UHMW-PE, acetal, PP, nylon, and other grades for line components and maintenance parts.",
    highlights: [
      "FDA-compliant material options by request",
      "Conveyor guides, wear strips, rollers, cutting boards, and guards",
      "Moisture-resistant and cleanable material choices",
      "Replacement parts made from drawings, samples, or dimensions"
    ],
    specs: [
      "Share washdown, temperature, food contact, and chemical exposure needs",
      "HDPE, UHMW-PE, acetal, PP, and nylon frequently reviewed",
      "Color options can support line identification",
      "Fast quoting for maintenance and plant engineering teams"
    ],
    applications: ["Conveyor guides", "Cutting boards", "Wear strips", "Rollers", "Guards"],
    seoTitle: "Food-Grade Plastic Materials and Custom Parts",
    seoDescription:
      "Food processing plastics, HDPE, UHMW, acetal, PP, nylon, conveyor guides, cutting boards, wear strips, and guards."
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "How to Choose Between Acetal, Nylon, and HDPE for Wear Parts",
    slug: "choose-acetal-nylon-hdpe-wear-parts",
    category: "Material selection",
    readTime: "6 min read",
    excerpt:
      "A practical comparison for buyers specifying guides, rollers, bushings, and wear strips.",
    seoTitle: "Acetal vs Nylon vs HDPE for Plastic Wear Parts",
    seoDescription:
      "Compare acetal, nylon, and HDPE for wear parts, including friction, moisture behavior, machining, cost, and common uses.",
    body: [
      "Acetal is usually the starting point when the part needs low friction, stable dimensions, and clean machining. It works well for gears, spacers, valve parts, fixtures, and conveyor components with moderate loads.",
      "Nylon is often chosen when toughness and load-bearing behavior are more important than moisture stability. It is strong and durable, but it can absorb moisture and move dimensionally, so it deserves a closer tolerance review.",
      "HDPE is a cost-effective option for impact-resistant liners, guides, food equipment parts, and moisture-heavy environments. It is not as dimensionally precise as acetal, but it is tough, economical, and easy to fabricate.",
      "A good RFQ should include load, speed, contact surface, temperature, chemicals, washdown needs, drawing tolerance, and expected quantity. Those details help avoid a material that looks right on a datasheet but fails in service."
    ]
  },
  {
    title: "What to Send With a CNC Plastic Machining RFQ",
    slug: "cnc-plastic-machining-rfq-checklist",
    category: "RFQ tips",
    readTime: "5 min read",
    excerpt:
      "The files and details that help suppliers quote faster and reduce back-and-forth.",
    seoTitle: "CNC Plastic Machining RFQ Checklist",
    seoDescription:
      "Send better CNC plastic machining RFQs with drawings, material notes, quantities, tolerances, finishes, and use conditions.",
    body: [
      "A complete RFQ helps the supplier quote quickly and recommend a practical manufacturing route. The best starting package is a 2D drawing, a 3D model when available, the material or use environment, quantity, and required lead time.",
      "If the material is not fixed, describe the job the part must do. Load, wear, chemicals, temperature, color, food contact, electrical behavior, and cosmetic expectations all influence the material choice.",
      "Tolerance should be tied to function. Plastic expands, creeps, absorbs moisture, and behaves differently from aluminum or steel, so blanket tight tolerances can add cost without improving the part.",
      "Finishing details matter as well. Include edge breaks, threads, inserts, polish level, protective film, labeling, bagging, kitting, and inspection needs when they affect fit or delivery."
    ]
  },
  {
    title: "When Cut-to-Size Plastic Sheets Beat Full Sheet Purchasing",
    slug: "cut-to-size-vs-full-plastic-sheets",
    category: "Procurement",
    readTime: "4 min read",
    excerpt:
      "How custom sheet blanks can reduce scrap, storage, handling, and project delays.",
    seoTitle: "Cut-to-Size Plastic Sheets vs Full Sheets",
    seoDescription:
      "Learn when cut-to-size plastic sheets reduce scrap, simplify procurement, and speed up industrial projects.",
    body: [
      "Full sheets are efficient when a shop has the equipment, storage, and repeated demand to use the material. For many maintenance, prototyping, and mixed-material projects, full sheets create unnecessary scrap and handling work.",
      "Cut-to-size orders help buyers pay for the dimensions they need and receive blanks that move straight into machining, forming, assembly, or installation.",
      "They are especially useful when the order includes several materials, colors, thicknesses, or grades. Consolidating those items into one shipment can be more valuable than chasing the lowest square-foot price.",
      "The best quote request includes material, thickness, final size, quantity, tolerance, edge finish, masking, and packing requirements."
    ]
  },
  {
    title: "PEEK, PTFE, and Polycarbonate: Three Plastics for Demanding Jobs",
    slug: "peek-ptfe-polycarbonate-demanding-applications",
    category: "Engineering plastics",
    readTime: "7 min read",
    excerpt:
      "A quick guide to three very different materials often used when commodity plastics are not enough.",
    seoTitle: "PEEK vs PTFE vs Polycarbonate for Engineering Applications",
    seoDescription:
      "Compare PEEK, PTFE, and polycarbonate for high-performance plastic parts in heat, chemical, friction, and impact applications.",
    body: [
      "PEEK is the premium choice when heat, strength, chemical resistance, and dimensional stability must work together. It is expensive, so design and material yield deserve careful attention before production.",
      "PTFE solves low-friction and chemical-resistance problems that many other plastics cannot handle. It is excellent for seals, gaskets, liners, and insulating parts, but creep and tolerance behavior must be considered.",
      "Polycarbonate is the impact-resistant clear material many buyers choose for guards, windows, covers, and shields. It is tougher than acrylic but may need coatings or grade review for scratching, UV exposure, or chemical contact.",
      "The right choice depends on the failure mode you are trying to prevent. Share the application details with your supplier before locking the resin."
    ]
  }
];

export const trustBadges = [
  "Typical RFQ review within 24 business hours",
  "Prototype and low-volume orders are welcome",
  "Engineering plastics and specialty grades",
  "Inspection and material traceability",
  "US-focused buyer support"
];

export const faq = [
  {
    question: "Do you have a minimum order quantity?",
    answer:
      "Minimum order requirements depend on material, size and manufacturing process. Prototype and low-volume orders are welcome."
  },
  {
    question: "How fast can you respond to an RFQ?",
    answer:
      "RFQs are typically reviewed within 24 hours on business days. Drawings, material, quantity, tolerance, finish, and use environment help us review the request efficiently."
  },
  {
    question: "Can you help choose the plastic material?",
    answer:
      "Yes. Share temperature, load, chemicals, wear, electrical, food contact, color, and compliance needs, and we will recommend suitable options."
  },
  {
    question: "What file formats do you accept?",
    answer:
      "PDF, STEP, DXF, DWG, and common image files are accepted. For CNC machining, a 2D drawing plus a 3D model is the best quote package."
  },
  {
    question: "Do you supply both materials and finished parts?",
    answer:
      "Yes. We can supply stock plastic sheets, rods, and films, or turn those materials into machined, cut, bent, welded, finished, and assembled parts."
  }
];

export const processSteps = [
  {
    title: "Send drawings or specs",
    text: "Upload a drawing, STEP file, DXF, sample photo, or material list with quantity and delivery needs."
  },
  {
    title: "Review material and route",
    text: "We confirm resin choice, tolerance risks, manufacturing method, finishing details, and packing requirements."
  },
  {
    title: "Receive a clear quote",
    text: "You get pricing, lead time, assumptions, and options so the purchasing decision is easy to defend."
  },
  {
    title: "Approve production",
    text: "Parts, blanks, or stock materials are produced, checked, packed, and prepared for shipment."
  }
];

export const serviceLinks = services.map((item) => ({
  title: item.title,
  href: `/services/${item.slug}`
}));

export const materialLinks = getCatalogMaterials(materialsData).map((material) => ({
  title: material.slug === "pom-acetal"
    ? "POM / Acetal"
    : material.slug === "polycarbonate-pc"
      ? "Polycarbonate PC"
      : material.shortName,
  href: `/materials/${material.slug}`
}));

export const productLinks = products.map((item) => ({
  title: item.title,
  href: `/products/${item.slug}`
}));

export const industryLinks = industries.map((item) => ({
  title: item.title,
  href: `/industries/${item.slug}`
}));

export const primaryNav = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services", children: serviceLinks },
  { title: "Materials", href: "/materials", children: materialLinks },
  { title: "Industries", href: "/industries" },
  { title: "Knowledge Center", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" }
];

export const allStaticRoutes = [
  "/",
  "/services",
  "/materials",
  "/products",
  "/industries",
  "/blog",
  "/about",
  "/request-a-quote",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/products/peek-machined-parts",
  "/blog/peek-vs-ptfe",
  "/blog/how-to-machine-peek",
  ...services.map((item) => `/services/${item.slug}`),
  ...materialsData.map((item) => `/materials/${item.slug}`),
  ...products.map((item) => `/products/${item.slug}`),
  ...industries.map((item) => `/industries/${item.slug}`),
  ...blogPosts.map((item) => `/blog/${item.slug}`)
];

export const routeLastModified: Partial<Record<(typeof allStaticRoutes)[number], string>> = {
  "/materials/peek": "2026-07-21",
  "/products/peek-sheet": "2026-07-18",
  "/products/peek-rod": "2026-07-21",
  "/products/peek-machined-parts": "2026-07-21",
  "/blog/peek-vs-ptfe": "2026-07-21",
  "/blog/how-to-machine-peek": "2026-07-21"
};

export function findBySlug(items: DetailItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}

export function findPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
