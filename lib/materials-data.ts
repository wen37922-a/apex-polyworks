import { list } from "@vercel/blob";
import { cache } from "react";
import type { Material, MaterialImageRole, MaterialImages } from "@/lib/material-schema";
import { productImages, siteImages } from "@/lib/product-images";

const emptyImages = (): MaterialImages => ({
  hero: [], sheet: [], rod: [], cnc: [], warehouse: [], applications: [], cta: [], gallery: []
});

function images(seed: Partial<MaterialImages>): MaterialImages {
  return { ...emptyImages(), ...seed };
}

export const materialsData: Material[] = [
  {
    slug: "peek", name: "PEEK", shortName: "PEEK", aliases: ["peek"], catalogOrder: 1, showInCatalog: true,
    eyebrow: "High-performance engineering plastic",
    description: "Premium engineering plastic for high-temperature, high-strength, chemical-resistant, and precision industrial components.",
    cardDescription: "High-performance plastic for heat, strength, and chemical resistance.",
    cardApplications: "seals, insulators, pump parts, aerospace components", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["High continuous-use temperature capability", "Excellent chemical resistance", "High strength and dimensional stability", "Unfilled and reinforced grades available"],
    forms: [{ title: "PEEK Sheet", description: "Plate and cut blanks for milled components, fixtures, and insulation.", imageRole: "sheet" }, { title: "PEEK Rod", description: "Round stock for turned seals, bushings, sleeves, and precision parts.", imageRole: "rod" }],
    cncDescription: "Precision milling and turning for demanding PEEK components, with grade, tolerance, heat, and material-yield review before quoting.",
    applications: ["Aerospace components", "Valve and pump parts", "Electrical insulators", "Medical fixtures", "Semiconductor equipment"],
    images: images({ hero: [productImages.PEEK.hero], sheet: productImages.PEEK.sheet, rod: productImages.PEEK.rod, cnc: productImages.PEEK.cnc, warehouse: [siteImages.warehouse], applications: productImages.PEEK.cnc.slice(0, 4), gallery: [...productImages.PEEK.sheet, ...productImages.PEEK.rod] }),
    seoTitle: "PEEK Sheet, Rod, and Precision Machined Parts", seoDescription: "Source PEEK sheet, rod, and CNC machined PEEK parts for high-temperature, chemical-resistant industrial applications."
  },
  {
    slug: "ptfe", name: "PTFE / Polytetrafluoroethylene", shortName: "PTFE", aliases: ["ptfe", "teflon"], catalogOrder: 2, showInCatalog: true,
    eyebrow: "Industrial fluoropolymer",
    description: "Industrial-grade fluoropolymer with broad chemical resistance, very low friction, and strong electrical insulation performance.",
    cardDescription: "Low-friction fluoropolymer for chemical and electrical service.",
    cardApplications: "gaskets, valve seats, liners, electrical insulation", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["Exceptional chemical resistance", "Very low coefficient of friction", "Wide service temperature range", "Excellent electrical insulation", "Virgin and filled grades available"],
    forms: [{ title: "PTFE Sheet", description: "Sheet and plate for liners, gaskets, insulation, and machined profiles.", imageRole: "sheet" }, { title: "PTFE Rod", description: "Round stock for seals, bushings, valve parts, and turned components.", imageRole: "rod" }],
    cncDescription: "Precision PTFE turning and milling with careful review of creep, deformation, thin walls, fixturing, and inspection methods.",
    applications: ["Chemical seals", "Valve seats", "Electrical insulators", "Low-friction bearings", "Process equipment liners"],
    images: images({ hero: [productImages.PTFE.hero], sheet: [productImages.PTFE.sheet], rod: [productImages.PTFE.rod], cnc: [productImages.PTFE.machining], warehouse: [productImages.PTFE.inventory], applications: [productImages.PTFE.inventory], gallery: [productImages.PTFE.sheet, productImages.PTFE.rod] }),
    seoTitle: "PTFE Sheet, Rod, and Precision Machined Parts", seoDescription: "Buy industrial-grade PTFE sheet, rod, and precision machined parts with ready-stock support."
  },
  {
    slug: "uhmwpe-sheet", name: "UHMWPE Sheet", shortName: "UHMWPE", aliases: ["uhmwpe", "uhmw-pe"], catalogOrder: 3, showInCatalog: false,
    eyebrow: "Wear-resistant polyethylene",
    description: "Low-friction, impact-resistant sheet material for demanding wear, sliding, and material-handling applications.",
    cardDescription: "Highly wear-resistant material for sliding and impact applications.",
    cardApplications: "chute liners, chain guides, wear strips, conveyor parts", tags: ["CNC", "Sheet"],
    keyProperties: ["Excellent abrasion resistance", "Low coefficient of friction", "High impact strength", "Low moisture absorption"],
    forms: [{ title: "UHMWPE Sheet", description: "Sheet, plate, liners, wear strips, and cut blanks for industrial equipment.", imageRole: "sheet" }, { title: "Machining Blanks", description: "Cut blocks and profiles prepared for routing, drilling, and CNC machining.", imageRole: "rod" }],
    cncDescription: "Cutting, routing, drilling, and CNC machining for liners, guides, rails, wear strips, and replacement equipment parts.",
    applications: ["Chute liners", "Conveyor guides", "Wear strips", "Dock components", "Food equipment parts"],
    images: images({ hero: [productImages.UHMWPE.hero], sheet: [productImages.UHMWPE.gallery[2]], rod: [productImages.UHMWPE.gallery[1]], cnc: [productImages.UHMWPE.gallery[4]], warehouse: [productImages.UHMWPE.gallery[3]], applications: [productImages.UHMWPE.gallery[3]], gallery: [productImages.UHMWPE.gallery[1], productImages.UHMWPE.gallery[5]] }),
    seoTitle: "UHMWPE Sheet, Wear Plate, and Machined Parts", seoDescription: "Source UHMWPE sheet, liners, wear strips, and CNC fabricated parts for industrial material handling."
  },
  {
    slug: "nylon-pa", name: "Nylon PA / Polyamide", shortName: "Nylon PA", aliases: ["nylon", "polyamide", "nylon-pa", "nl-"], catalogOrder: 4, showInCatalog: true,
    eyebrow: "Wear-resistant polyamide",
    description: "Strong, wear-resistant engineering plastic for moving, rotating, and load-bearing industrial components.",
    cardDescription: "Strong polyamide with good wear and bearing performance.",
    cardApplications: "gears, rollers, bushings, wheels, wear pads", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["High mechanical strength", "Good wear and bearing performance", "Useful fatigue resistance", "Moisture movement reviewed for tight tolerances"],
    forms: [{ title: "Nylon Sheet", description: "Cast or extruded plate for wear pads, guides, and milled parts.", imageRole: "sheet" }, { title: "Nylon Rod", description: "Round bar for rollers, bushings, gears, spacers, and turned parts.", imageRole: "rod" }],
    cncDescription: "Material-aware milling, turning, drilling, threading, and finishing with moisture, stress, wall thickness, and heat buildup considered.",
    applications: ["Gears", "Rollers", "Bushings", "Wheels", "Conveyor wear parts"],
    images: images({ hero: [productImages.NYLON.hero], sheet: [productImages.NYLON.forms], rod: [productImages.NYLON.forms], cnc: [productImages.NYLON.machining], applications: [productImages.NYLON.applications], cta: [productImages.NYLON.cta], gallery: [productImages.NYLON.gallery] }),
    seoTitle: "Nylon PA Sheet, Rod, and CNC Machined Parts", seoDescription: "Source Nylon PA sheet, rod, and CNC machined polyamide parts for gears, rollers, bushings, and wear components."
  },
  {
    slug: "hdpe", name: "HDPE / High Density Polyethylene", shortName: "HDPE", aliases: ["hdpe"], catalogOrder: 5, showInCatalog: true,
    eyebrow: "Tough industrial polyethylene",
    description: "Durable, moisture-resistant polyethylene for wet, chemical, food, marine, and impact-prone industrial environments.",
    cardDescription: "Tough, moisture-resistant polyethylene for plant environments.",
    cardApplications: "cutting surfaces, tanks, guides, marine parts", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["High impact strength", "Low moisture absorption", "Good chemical resistance", "Food-contact grades available"],
    forms: [{ title: "HDPE Sheet", description: "Full sheets, plate, cut panels, liners, and fabricated assemblies.", imageRole: "sheet" }, { title: "HDPE Rod", description: "Round stock for rollers, spacers, bushings, guides, and machined parts.", imageRole: "rod" }],
    cncDescription: "CNC milling, turning, routing, and drilling with flatness, holding method, tolerance, and thermal movement reviewed before production.",
    applications: ["Food cutting surfaces", "Tank components", "Marine parts", "Conveyor guides", "Outdoor equipment"],
    images: images({ hero: [productImages.HDPE.hero], sheet: [productImages.HDPE.forms], rod: [productImages.HDPE.forms], cnc: [productImages.HDPE.machining, productImages.HDPE.services], applications: [productImages.HDPE.applications], gallery: [productImages.HDPE.properties] }),
    seoTitle: "HDPE Sheet, Rod, and CNC Machined Parts", seoDescription: "Buy HDPE sheets, rods, liners, and CNC machined parts for food processing and industrial applications."
  },
  {
    slug: "pp", name: "Polypropylene PP", shortName: "PP", aliases: ["polypropylene", "pp-"], catalogOrder: 6, showInCatalog: true,
    eyebrow: "Chemical-resistant polyolefin",
    description: "Lightweight, weldable plastic for chemical handling, wet processing, laboratory, and industrial equipment components.",
    cardDescription: "Lightweight, weldable plastic with useful chemical resistance.",
    cardApplications: "tanks, trays, lab fixtures, process equipment", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["Good resistance to many chemicals", "Low moisture absorption", "Low density", "Machinable, bendable, and weldable"],
    forms: [{ title: "PP Sheet", description: "Sheet and plate for tanks, trays, guards, and welded assemblies.", imageRole: "sheet" }, { title: "PP Rod", description: "Round stock for fittings, spacers, rollers, and machined components.", imageRole: "rod" }],
    cncDescription: "CNC routing, milling, turning, drilling, threading, and finishing for PP parts with wall thickness and thermal movement considered.",
    applications: ["Chemical tanks", "Lab trays", "Wet benches", "Packaging equipment", "Food equipment parts"],
    images: images({ hero: [productImages.POLYPROPYLENE.hero], sheet: [productImages.POLYPROPYLENE.sheet], rod: [productImages.POLYPROPYLENE.rod], cnc: [productImages.POLYPROPYLENE.machining], applications: [productImages.POLYPROPYLENE.applications], cta: [productImages.POLYPROPYLENE.cta], gallery: [productImages.POLYPROPYLENE.overview] }),
    seoTitle: "Polypropylene PP Sheet, Rod, and Machined Parts", seoDescription: "Source PP sheet, rod, fabricated assemblies, and CNC machined polypropylene parts for industrial use."
  },
  {
    slug: "polycarbonate-pc", name: "Polycarbonate PC", shortName: "PC", aliases: ["polycarbonate", "pc-"], catalogOrder: 7, showInCatalog: true,
    eyebrow: "Impact-resistant transparent plastic",
    description: "Clear, tough engineering plastic for protective glazing, machine guards, windows, shields, covers, and machined components.",
    cardDescription: "Transparent, impact-resistant plastic for protective components.",
    cardApplications: "machine guards, windows, shields, equipment covers", tags: ["CNC", "Sheet"],
    keyProperties: ["Excellent impact resistance", "High optical clarity", "UV and hard-coated grades available", "Machinable, drillable, bendable, and formable"],
    forms: [{ title: "Polycarbonate Sheet", description: "Clear, tinted, coated, and cut-to-size panels for guards and windows.", imageRole: "sheet" }, { title: "Machining Blanks", description: "Blocks and cut blanks for routed, drilled, and milled components.", imageRole: "rod" }],
    cncDescription: "CNC routing, milling, drilling, countersinking, edge finishing, bending, and forming with optical and stress-cracking requirements reviewed.",
    applications: ["Machine guards", "Safety glazing", "Inspection windows", "Equipment covers", "Transparent prototypes"],
    images: images({ hero: [productImages.POLYCARBONATE.hero], sheet: [productImages.POLYCARBONATE.forms], rod: [productImages.POLYCARBONATE.forms], cnc: [productImages.POLYCARBONATE.machining], applications: [productImages.POLYCARBONATE.applications], cta: [productImages.POLYCARBONATE.cta], gallery: [productImages.POLYCARBONATE.properties] }),
    seoTitle: "Polycarbonate PC Sheet and Machined Parts", seoDescription: "Source polycarbonate PC sheet, machine guards, windows, formed covers, and CNC machined parts."
  },
  {
    slug: "abs", name: "ABS Plastic", shortName: "ABS", aliases: ["abs"], catalogOrder: 3, showInCatalog: true,
    eyebrow: "General-purpose engineering plastic",
    description: "Cost-effective engineering plastic with balanced impact strength, stiffness, machinability, and a clean appearance.",
    cardDescription: "Cost-effective engineering plastic with balanced impact strength.",
    cardApplications: "housings, panels, prototypes, interior equipment parts", tags: ["CNC", "Sheet"],
    keyProperties: ["Good impact resistance", "Easy to machine and drill", "Practical for prototypes and panels", "Natural, black, and selected colors"],
    forms: [{ title: "ABS Sheet", description: "Sheet and plate for housings, panels, guards, and thermoformed components.", imageRole: "sheet" }, { title: "Machining Blanks", description: "Cut blocks and blanks for prototypes, jigs, and CNC parts.", imageRole: "rod" }],
    cncDescription: "CNC routing, milling, drilling, and finishing for prototypes, housings, fixtures, and light-duty production parts.",
    applications: ["Equipment housings", "Interior panels", "Prototype parts", "Jigs and fixtures", "Protective covers"],
    images: images({ hero: [productImages.ABS.hero], sheet: productImages.ABS.gallery.slice(0, 4), rod: productImages.ABS.gallery.slice(1, 3), cnc: productImages.ABS.gallery.slice(-2), applications: productImages.ABS.gallery.slice(2, 5), gallery: productImages.ABS.gallery }),
    seoTitle: "ABS Sheet and CNC Machined ABS Parts", seoDescription: "Source ABS plastic sheet and CNC machined ABS parts for housings, panels, prototypes, and industrial use."
  },
  {
    slug: "acrylic-pmma", name: "Acrylic PMMA", shortName: "Acrylic", aliases: ["acrylic", "pmma"], catalogOrder: 9, showInCatalog: true,
    eyebrow: "Optical clarity and display finish",
    description: "Clear and colored plastic for polished panels, equipment covers, displays, lighting, furniture, and custom fabricated visual components.",
    cardDescription: "Clear and colored plastic for polished visual components.",
    cardApplications: "displays, covers, signs, lighting, transparent panels", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["Excellent optical clarity", "Clear, tinted, colored, mirrored, and frosted options", "Polishable edges and refined appearance", "Laser cut, routed, bent, and bonded"],
    forms: [{ title: "Acrylic Sheet", description: "Clear and colored sheet for displays, guards, panels, and lighting.", imageRole: "sheet" }, { title: "Acrylic Rod", description: "Round stock for decorative, lighting, display, and machined components.", imageRole: "rod" }],
    cncDescription: "CNC routing, drilling, engraving, laser cutting, bending, bonding, and polishing for cosmetic and industrial acrylic parts.",
    applications: ["Retail displays", "Equipment covers", "Lighting diffusers", "Furniture components", "Signs and panels"],
    images: images({ hero: [productImages.ACRYLIC.hero], sheet: productImages.ACRYLIC.sheet, rod: productImages.ACRYLIC.sheet.slice(1), cnc: productImages.ACRYLIC.display.slice(0, 2), applications: productImages.ACRYLIC.display, gallery: [...productImages.ACRYLIC.sheet, ...productImages.ACRYLIC.display] }),
    seoTitle: "Acrylic PMMA Sheet and Custom Fabricated Parts", seoDescription: "Source acrylic PMMA sheet, clear panels, displays, guards, and custom fabricated acrylic parts."
  },
  {
    slug: "pom-acetal", name: "POM / Acetal", shortName: "Acetal", aliases: ["pom", "acetal"], catalogOrder: 10, showInCatalog: false,
    eyebrow: "Dimensionally stable engineering plastic", description: "Low-friction, stable engineering plastic for gears, spacers, fixtures, valve parts, and precision machining.", cardDescription: "Dimensionally stable plastic for precision parts.", cardApplications: "gears, spacers, fixtures, valve parts", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["Excellent machinability", "Low friction", "Low moisture absorption", "Homopolymer and copolymer grades"],
    forms: [{ title: "Acetal Sheet", description: "Plate and blanks for fixtures, wear parts, and milled components.", imageRole: "sheet" }, { title: "Acetal Rod", description: "Round stock for gears, spacers, bushings, and turned parts.", imageRole: "rod" }], cncDescription: "Clean, stable CNC machining for repeat production and tight-feature mechanical parts.", applications: ["Gears", "Spacers", "Fixtures", "Valve parts", "Conveyor components"],
    images: images({ hero: [siteImages.warehouse], sheet: [siteImages.warehouse], rod: [siteImages.warehouse], cnc: productImages.PEEK.cnc.slice(0, 2) }), seoTitle: "POM Acetal Sheet, Rod, and Machined Parts", seoDescription: "Source POM acetal sheet, rod, and CNC machined parts for precision industrial applications."
  },
  {
    slug: "pvc", name: "PVC", shortName: "PVC", aliases: ["pvc"], catalogOrder: 11, showInCatalog: false,
    eyebrow: "Rigid chemical-resistant plastic", description: "Rigid sheet and rod for tanks, guards, ducts, electrical parts, and chemical handling equipment.", cardDescription: "Rigid chemical-resistant plastic for fabrication.", cardApplications: "tanks, ducts, panels, trays", tags: ["CNC", "Sheet", "Rod"],
    keyProperties: ["Good chemical resistance", "Rigid and fabrication friendly", "Machinable, formable, and weldable", "Gray, white, clear, and specialty grades"],
    forms: [{ title: "PVC Sheet", description: "Sheet and plate for tanks, panels, trays, guards, and ducting.", imageRole: "sheet" }, { title: "PVC Rod", description: "Round stock for fittings, valve parts, spacers, and machined items.", imageRole: "rod" }], cncDescription: "CNC cutting, routing, drilling, forming, and welding for chemical-resistant fabricated components.", applications: ["Chemical tanks", "Ducting", "Electrical panels", "Guards", "Trays"],
    images: images({ hero: [siteImages.warehouse], sheet: [siteImages.warehouse], rod: [siteImages.warehouse], cnc: productImages.PEEK.cnc.slice(2, 4) }), seoTitle: "PVC Sheet, Rod, and Fabricated Parts", seoDescription: "Source rigid PVC sheet, rod, and fabricated PVC components for chemical and industrial applications."
  }
];

const roleRules: Array<[MaterialImageRole, string]> = [
  ["hero", "hero"], ["sheet", "sheet"], ["rod", "rod"], ["cnc", "cnc"], ["warehouse", "warehouse"],
  ["applications", "application"], ["cta", "cta"], ["gallery", "gallery"]
];

function cloneMaterial(material: Material): Material {
  return { ...material, images: Object.fromEntries(Object.entries(material.images).map(([role, urls]) => [role, [...urls]])) as MaterialImages };
}

function findMaterialForPath(pathname: string, materials: Material[]) {
  const name = decodeURIComponent(pathname).toLowerCase();
  return materials.find((material) => material.aliases.some((alias) => name.includes(alias)));
}

function classifyImage(pathname: string): MaterialImageRole {
  const name = decodeURIComponent(pathname).toLowerCase();
  return roleRules.find(([, token]) => name.includes(token))?.[0] || "gallery";
}

export const getMaterialsData = cache(async (): Promise<Material[]> => {
  const materials = materialsData.map(cloneMaterial);
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return materials;

  try {
    const result = await list({ prefix: "admin-images/", limit: 1000, token });
    result.blobs.forEach((blob) => {
      const material = findMaterialForPath(blob.pathname, materials);
      if (!material) return;
      const role = classifyImage(blob.pathname);
      if (!material.images[role].includes(blob.url)) material.images[role].unshift(blob.url);
    });
  } catch (error) {
    console.error("Unable to classify material images from Vercel Blob.", error);
  }
  return materials;
});

export function getMaterialBySlug(slug: string, materials: Material[] = materialsData) {
  return materials.find((material) => material.slug === slug);
}

export function getCatalogMaterials(materials: Material[] = materialsData) {
  return materials.filter((material) => material.showInCatalog).sort((a, b) => a.catalogOrder - b.catalogOrder);
}

export function getMaterialPrimaryImage(material: Material) {
  return material.images.hero[0] || material.images.sheet[0] || material.images.rod[0] || material.images.gallery[0] || siteImages.warehouse;
}
