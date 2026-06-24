import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { materials, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastic Materials: ABS, PC, Nylon, Acetal, PEEK, PTFE, PVC, HDPE, PP, Acrylic",
  description:
    "Compare engineering plastic materials including ABS, polycarbonate, nylon, acetal, PEEK, PTFE, PVC, HDPE, PP, and acrylic for custom parts.",
  alternates: {
    canonical: `${siteConfig.url}/materials`
  }
};

const materialImages: Record<string, { src: string; alt: string }> = {
  abs: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
    alt: "ABS plastic material stock placeholder in engineering plastics warehouse"
  },
  "polycarbonate-pc": {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134654887-peek-sheet-3-pcMOr4FbUGq6WQ6ZtFiCa5SKtMUktT.webp",
    alt: "Polycarbonate PC plastic sheet stock placeholder for industrial material supply"
  },
  "nylon-pa": {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134612579-peek-rod-3-OM1NQs4ciiZfLIROtEkqifGcZ68EIU.webp",
    alt: "Nylon PA engineering plastic rod stock placeholder for machined parts"
  },
  "pom-acetal": {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134520033-peek-cnc%E5%9B%BE2-pOGRYOEvQjuysSzVXbwUCb4nja5wKA.webp",
    alt: "POM acetal precision machined plastic part placeholder for material card"
  },
  peek: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134683304-peek-sheet-4-WqAf6XEcfIWq45uAg3Pg2DA9ffnojb.webp",
    alt: "PEEK sheet stock for high performance engineering plastic applications"
  },
  ptfe: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134533843-peek-cnc%E5%9B%BE3-xKzrkB27J9mnmwy46lW2jaKrC8JS60.webp",
    alt: "PTFE low friction engineering plastic part placeholder for material card"
  },
  pvc: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
    alt: "PVC plastic sheet and rod warehouse stock placeholder for chemical resistant materials"
  },
  hdpe: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
    alt: "HDPE and UHMWPE industrial plastic stock placeholder in warehouse inventory"
  },
  pp: {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134571749-peek-cnc%E5%9B%BE7-xR5UUCtJAT5PAh8FecTuBRp1MfrGmR.webp",
    alt: "PP polypropylene machined plastic component placeholder for material supply"
  },
  "acrylic-pmma": {
    src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134669577-peek-sheet-2-UPAhf4gpr557LSvihX9sZ2d7eQ1rJQ.webp",
    alt: "Acrylic PMMA plastic sheet stock placeholder for clear material applications"
  }
};

const fallbackMaterialImage = {
  src: "https://gzsev9bufcsq0twb.public.blob.vercel-storage.com/admin-images/1782134731423-peek-warehouse-inventory-main-1200-4a8D9c8UbXM3znrcKy6Ke1KD4ILxtq.webp",
  alt: "Engineering plastic warehouse inventory placeholder for material supply"
};

const materialBuyerNotes: Record<string, string[]> = {
  abs: ["Properties: tough, economical, impact resistant", "Applications: housings, covers, panels", "Machinability: easy to cut, drill, and machine"],
  "polycarbonate-pc": ["Properties: clear, tough, high impact strength", "Applications: guards, windows, shields", "Machinability: cuts, drills, and forms well"],
  "nylon-pa": ["Properties: wear resistant and mechanically tough", "Applications: bushings, rollers, gears", "Machinability: good for bearing-grade parts"],
  "pom-acetal": ["Properties: low friction and dimensionally stable", "Applications: gears, spacers, valve parts", "Machinability: excellent for tight detail work"],
  peek: ["Properties: high heat and chemical resistance", "Applications: aerospace, medical, sealing parts", "Machinability: premium material for precision parts"],
  ptfe: ["Properties: very low friction and chemical resistant", "Applications: seals, gaskets, liners", "Machinability: requires material-aware tolerances"],
  pvc: ["Properties: chemical resistant and rigid", "Applications: tanks, panels, ducting", "Machinability: suitable for cutting and fabrication"],
  hdpe: ["Properties: tough, moisture resistant, economical", "Applications: liners, guides, food equipment", "Machinability: practical for wear and utility parts"],
  pp: ["Properties: lightweight and chemical resistant", "Applications: trays, tanks, lab components", "Machinability: good for fabricated industrial parts"],
  "acrylic-pmma": ["Properties: clear, rigid, polishable", "Applications: displays, windows, covers", "Machinability: cuts and polishes for cosmetic parts"]
};

export default function MaterialsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" }
        ]}
      />
      <PageHero
        eyebrow="Materials"
        title="Engineering plastic sheets, rods, films, and machinable stock"
        text="Find practical material options for impact resistance, wear, clarity, chemical resistance, food processing, electrical insulation, and high-performance applications."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material library"
            title="50+ plastic options, with the core industrial grades organized here"
            text="If a drawing lists a trade name or an unclear material, send it with your RFQ and we will help match a practical equivalent."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => {
              const image = materialImages[material.slug] || fallbackMaterialImage;
              const notes = materialBuyerNotes[material.slug] || [
                "Properties: engineering plastic performance by grade",
                "Applications: industrial parts and material stock",
                "Machinability: reviewed by drawing and tolerance"
              ];

              return (
                <div
                  key={material.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{material.eyebrow}</p>
                    <h3 className="mt-3 text-xl font-semibold text-graphite">{material.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-steel">{material.summary}</p>
                    <div className="mt-5 grid gap-2">
                      {notes.map((note) => (
                        <p key={note} className="flex gap-2 text-sm leading-6 text-ink">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
                          <span>{note}</span>
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      <Link
                        href={`/materials/${material.slug}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-graphite/15 bg-white px-4 py-2 text-sm font-semibold text-graphite hover:border-teal hover:text-teal"
                      >
                        View Material
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                      <Link
                        href="/request-a-quote"
                        className="inline-flex min-h-10 items-center justify-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-white hover:bg-amber/90"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
