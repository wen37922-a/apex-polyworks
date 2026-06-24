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
  src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134584794-peek-hero1-bAHaI9sBsvIbVEUrE3AnDA9YeM3bPP.webp",
  alt: "Engineering plastic material stock and machined parts placeholder"
};

export const materialVisuals: Record<string, MaterialVisual> = {
  peek: {
    title: "PEEK",
    slug: "peek",
    href: "/materials/peek",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134683304-peek-sheet-4-WqAf6XEcfIWq45uAg3Pg2DA9ffnojb.webp",
      alt: "PEEK sheet and rod engineering plastic stock for high performance parts"
    },
    description: "High-performance plastic for heat, strength, chemical resistance, and precision machining."
  },
  ptfe: {
    title: "PTFE",
    slug: "ptfe",
    href: "/materials/ptfe",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134605963-peek-rod-2-sfOEzAPNwhBOxaB9THtphEeQT8QtTv.webp",
      alt: "PTFE sheet and rod material placeholder for low friction plastic applications"
    },
    description: "Low-friction fluoropolymer for seals, gaskets, liners, bearings, and chemical service."
  },
  hdpe: {
    title: "UHMWPE / HDPE",
    slug: "hdpe",
    href: "/materials/hdpe",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134539239-peek-cnc%E5%9B%BE4-KgyoVQeDflchuKrcKsmOsx1YSiC59f.webp",
      alt: "UHMWPE and HDPE wear resistant plastic part placeholder for guides and liners"
    },
    description: "Tough, moisture-resistant plastics for liners, guides, food equipment, and wear parts."
  },
  "nylon-pa": {
    title: "Nylon PA",
    slug: "nylon-pa",
    href: "/materials/nylon-pa",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134612579-peek-rod-3-OM1NQs4ciiZfLIROtEkqifGcZ68EIU.webp",
      alt: "Nylon PA rod and plate material placeholder for machined plastic parts"
    },
    description: "Wear-resistant engineering plastic for bushings, rollers, gears, and load-bearing components."
  },
  "pom-acetal": {
    title: "POM / Acetal",
    slug: "pom-acetal",
    href: "/materials/pom-acetal",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134520033-peek-cnc%E5%9B%BE2-pOGRYOEvQjuysSzVXbwUCb4nja5wKA.webp",
      alt: "POM acetal rod and plate material placeholder for dimensionally stable parts"
    },
    description: "Low-friction, dimensionally stable plastic for gears, spacers, valve parts, and fixtures."
  },
  "acrylic-pmma": {
    title: "Acrylic / PMMA",
    slug: "acrylic-pmma",
    href: "/materials/acrylic-pmma",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782310308684-acrylic-sheet-sample-board-1200x1200-QhwXrfWHnftFj4c4fIDey7HDf6ss6a.webp",
      alt: "Acrylic PMMA sheet sample board for clear and colored plastic materials"
    },
    description: "Clear and colored PMMA for displays, guards, covers, polished panels, and fabrication."
  },
  "polycarbonate-pc": {
    title: "PC",
    slug: "polycarbonate-pc",
    href: "/materials/polycarbonate-pc",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134654887-peek-sheet-3-pcMOr4FbUGq6WQ6ZtFiCa5SKtMUktT.webp",
      alt: "Polycarbonate PC transparent sheet placeholder for guards and windows"
    },
    description: "Clear, impact-resistant plastic for machine guards, windows, shields, and covers."
  },
  pvc: {
    title: "PVC",
    slug: "pvc",
    href: "/materials/pvc",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134669577-peek-sheet-2-UPAhf4gpr557LSvihX9sZ2d7eQ1rJQ.webp",
      alt: "PVC sheet and rod material placeholder for chemical resistant fabrication"
    },
    description: "Rigid, chemical-resistant plastic for tanks, ducting, panels, guards, and fabricated parts."
  },
  pp: {
    title: "PP",
    slug: "pp",
    href: "/materials/pp",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134571749-peek-cnc%E5%9B%BE7-xR5UUCtJAT5PAh8FecTuBRp1MfrGmR.webp",
      alt: "PP polypropylene sheet and rod material placeholder for lightweight chemical resistant parts"
    },
    description: "Lightweight chemical-resistant plastic for trays, tanks, lab parts, and fabricated components."
  },
  abs: {
    title: "ABS",
    slug: "abs",
    href: "/materials/abs",
    image: {
      src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134544516-peek-cnc%E5%9B%BE5-r0FcLiF4dfAdiV3DAuBZGmejsq72Lx.webp",
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
