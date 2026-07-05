import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { firstImage, getProductImages, selectProductImages } from "@/lib/product-images";
import { engineeringPlasticPlaceholder, materialVisuals } from "@/lib/materialVisuals";
import { materials, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Plastic Materials: ABS, PC, Nylon, Acetal, PEEK, PTFE, PVC, HDPE, PP, Acrylic",
  description:
    "Compare engineering plastic materials including ABS, polycarbonate, nylon, acetal, PEEK, PTFE, PVC, HDPE, PP, and acrylic for custom parts.",
  alternates: {
    canonical: `${siteConfig.url}/materials`
  }
};

export const dynamic = "force-dynamic";

export default async function MaterialsPage() {
  const images = await getProductImages();
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
              const baseVisual = materialVisuals[material.slug] || engineeringPlasticPlaceholder;
              const visual = material.slug === "abs"
                ? { ...baseVisual, image: { src: images.ABS.hero || firstImage(images.ABS.gallery, baseVisual.image.src), alt: "ABS plastic sheet and manufactured component samples" } }
                : material.slug === "peek"
                  ? { ...baseVisual, image: { ...baseVisual.image, src: firstImage(images.PEEK.sheet, baseVisual.image.src) } }
                  : material.slug === "hdpe" && images.UHMWPE.gallery.length
                    ? { ...baseVisual, image: { src: images.UHMWPE.hero || images.UHMWPE.gallery[0], alt: "UHMWPE sheet material for industrial wear applications" } }
                  : material.slug === "acrylic-pmma"
                    ? { ...baseVisual, image: { src: firstImage(images.ACRYLIC.sheet, baseVisual.image.src), alt: "Acrylic PMMA colored sheet samples" } }
                    : baseVisual;
              const cardImages = material.slug === "abs"
                ? selectProductImages(images.ABS.gallery, ["abs-1", "abs-2"])
                : [visual.image.src];

              return (
                <div
                  key={material.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                >
                  <div className={`grid aspect-[4/3] overflow-hidden bg-slate-50 ${cardImages.length > 1 ? "grid-cols-2 gap-px" : "grid-cols-1"}`}>
                    {cardImages.map((src, index) => (
                      <div key={src} className="relative overflow-hidden">
                        <Image
                          src={src}
                          alt={material.slug === "abs" ? `ABS plastic sheet sample ${index + 1}` : visual.image.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{material.eyebrow}</p>
                    <h3 className="mt-3 text-xl font-semibold text-graphite">{material.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-steel">{material.summary}</p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      <Link
                        href={material.slug === "hdpe" ? "/materials/uhmwpe-sheet" : `/materials/${material.slug}`}
                        className="inline-flex min-h-10 items-center justify-center rounded-md border border-graphite/15 bg-white px-4 py-2 text-sm font-semibold text-graphite hover:border-teal hover:text-teal"
                      >
                        View Details
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
