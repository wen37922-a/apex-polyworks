import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ListingCard } from "@/components/ListingCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { firstImage, getProductImages, selectProductImages } from "@/lib/product-images";
import { serviceMaterialCarousel } from "@/lib/materialVisuals";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plastic CNC Machining, Cutting, Molding, Bending, Welding, and Finishing",
  description:
    "Explore plastic manufacturing services including CNC machining, laser cutting, cut-to-size sheets, injection molding, bending, welding, and finishing.",
  alternates: {
    canonical: `${siteConfig.url}/services`
  }
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const images = await getProductImages();
  const carouselMaterials = serviceMaterialCarousel.map((material) => {
    let image = material.image;
    let galleryImages = [material.image.src];

    if (material.slug === "abs") {
      galleryImages = selectProductImages(images.ABS.gallery, ["abs-3", "abs-4", "abs-6"]);
      image = { src: firstImage(galleryImages, images.ABS.hero || material.image.src), alt: "ABS plastic sheet and custom manufactured parts" };
    } else if (material.slug === "peek") {
      image = { ...material.image, src: firstImage(images.PEEK.sheet, material.image.src) };
      galleryImages = [image.src];
    } else if (material.slug === "acrylic-pmma") {
      image = { src: firstImage(images.ACRYLIC.sheet, material.image.src), alt: "Acrylic PMMA colored sheet samples" };
      galleryImages = [image.src];
    }

    return { ...material, image, galleryImages };
  });
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Plastic manufacturing services for material buyers and custom part RFQs"
        text="Combine CNC machining, cutting, bending, welding, molding, finishing, and stock material supply into one practical sourcing path."
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="Choose the service that matches your drawings, material, and order volume"
            text="Every service page includes quote inputs, practical use cases, and material-aware notes for industrial purchasing teams."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ListingCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow={service.eyebrow}
                title={service.title}
                text={service.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Materials"
            title="Engineering Plastic Materials We Work With"
            text="PEEK, PTFE, UHMWPE, Nylon, Acetal, Acrylic, PVC, HDPE and more materials for machining, cutting, welding, and fabrication."
          />
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {carouselMaterials.map((material) => (
              <div
                key={`${material.slug}-${material.title}`}
                className="group flex w-[17rem] shrink-0 snap-start flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <div className={`grid aspect-[4/3] overflow-hidden bg-slate-100 ${material.galleryImages.length > 1 ? "grid-cols-2 gap-px" : "grid-cols-1"}`}>
                  {material.galleryImages.map((src, index) => (
                    <div key={src} className={`relative overflow-hidden ${material.galleryImages.length === 3 && index === 0 ? "row-span-2" : ""}`}>
                      <Image
                        src={src}
                        alt={material.slug === "abs" ? `ABS engineering plastic material example ${index + 1}` : material.image.alt}
                        fill
                        sizes="272px"
                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-semibold text-graphite">{material.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-steel">{material.description}</p>
                  <Link
                    href={material.href}
                    className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md border border-graphite/15 bg-white px-4 py-2 text-sm font-semibold text-graphite hover:border-teal hover:text-teal"
                  >
                    View Material
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
