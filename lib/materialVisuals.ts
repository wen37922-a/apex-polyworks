export type MaterialVisual = {
  title: string;
  slug: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
};

const placeholderImage = {
  src: productImages.PEEK.hero[0],
  alt: "Engineering plastic material stock and machined parts placeholder"
};

export const materialVisuals: Record<string, MaterialVisual> = {
  peek: {
    title: "PEEK",
    slug: "peek",
    href: "/materials/peek",
    image: {
      src: productImages.PEEK.sheet[0],
      alt: "PEEK sheet and rod engineering plastic stock for high performance parts"
    },
    description: "High-performance plastic for heat, strength, chemical resistance, and precision machining."
  },
  ptfe: {
    title: "PTFE",
    slug: "ptfe",
    href: "/materials/ptfe",
    image: {
      src: productImages.PEEK.rod[1],
      alt: "PTFE sheet and rod material placeholder for low friction plastic applications"
    },
    description: "Low-friction fluoropolymer for seals, gaskets, liners, bearings, and chemical service."
  },
  hdpe: {
    title: "UHMWPE / HDPE",
    slug: "hdpe",
    href: "/materials/hdpe",
    image: {
      src: productImages.PEEK.cnc[3],
      alt: "UHMWPE and HDPE wear resistant plastic part placeholder for guides and liners"
    },
    description: "Tough, moisture-resistant plastics for liners, guides, food equipment, and wear parts."
  },
  "nylon-pa": {
    title: "Nylon PA",
    slug: "nylon-pa",
    href: "/materials/nylon-pa",
    image: {
      src: productImages.PEEK.rod[2],
      alt: "Nylon PA rod and plate material placeholder for machined plastic parts"
    },
    description: "Wear-resistant engineering plastic for bushings, rollers, gears, and load-bearing components."
  },
  "pom-acetal": {
    title: "POM / Acetal",
    slug: "pom-acetal",
    href: "/materials/pom-acetal",
    image: {
      src: productImages.PEEK.cnc[1],
      alt: "POM acetal rod and plate material placeholder for dimensionally stable parts"
    },
    description: "Low-friction, dimensionally stable plastic for gears, spacers, valve parts, and fixtures."
  },
  "acrylic-pmma": {
    title: "Acrylic / PMMA",
    slug: "acrylic-pmma",
    href: "/materials/acrylic-pmma",
    image: {
      src: productImages.ACRYLIC.sheet[0],
      alt: "Acrylic PMMA colored sheet samples"
    },
    description: "Clear and colored PMMA for displays, guards, covers, polished panels, and fabrication."
  },
  "polycarbonate-pc": {
    title: "PC",
    slug: "polycarbonate-pc",
    href: "/materials/polycarbonate-pc",
    image: {
      src: productImages.PEEK.sheet[1],
      alt: "Polycarbonate PC transparent sheet placeholder for guards and windows"
    },
    description: "Clear, impact-resistant plastic for machine guards, windows, shields, and covers."
  },
  pvc: {
    title: "PVC",
    slug: "pvc",
    href: "/materials/pvc",
    image: {
      src: productImages.PEEK.sheet[2],
      alt: "PVC sheet and rod material placeholder for chemical resistant fabrication"
    },
    description: "Rigid, chemical-resistant plastic for tanks, ducting, panels, guards, and fabricated parts."
  },
  pp: {
    title: "PP",
    slug: "pp",
    href: "/materials/pp",
    image: {
      src: productImages.PEEK.cnc[6],
      alt: "PP polypropylene sheet and rod material placeholder for lightweight chemical resistant parts"
    },
    description: "Lightweight chemical-resistant plastic for trays, tanks, lab parts, and fabricated components."
  },
  abs: {
    title: "ABS",
    slug: "abs",
    href: "/materials/abs",
    image: {
      src: productImages.ABS.sheet[0] || productImages.PEEK.cnc[4],
      alt: "ABS plastic sheet and molded part placeholder for housings and panels"
    },
    description: "Cost-effective plastic for housings, panels, prototypes, and light-duty machined parts."
  }
};

export const engineeringPlasticPlaceholder: MaterialVisual = {
  title: "Engineering Plastic",
  slug: "placeholder",
  href: "/request-a-quote",
  image: placeholderImage,
  description: "Engineering plastic material option reviewed by application, drawing, and tolerance."
};

export const serviceMaterialCarousel = [
  materialVisuals.peek,
  materialVisuals.ptfe,
  materialVisuals.hdpe,
  materialVisuals["nylon-pa"],
  materialVisuals["pom-acetal"],
  materialVisuals["acrylic-pmma"],
  materialVisuals["polycarbonate-pc"],
  materialVisuals.pvc,
  {
    ...materialVisuals.hdpe,
    title: "HDPE"
  },
  materialVisuals.pp,
  materialVisuals.abs
];
import { productImages } from "@/lib/images";
