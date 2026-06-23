import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export type ProductPageProps = {
  title: string;
  description: string;
  heroImage: string;
  productImages: string[];
  applicationImages?: string[];
  warehouseImage?: string;
  productGalleryTitle?: string;
  applicationsTitle?: string;
  warehouseTitle?: string;
  warehouseEyebrow?: string;
  warehouseText?: string;
};

function productAlt(title: string, index: number) {
  return `${title} engineering plastic stock image ${index + 1}`;
}

function applicationAlt(title: string, index: number) {
  return `${title} CNC machined plastic application image ${index + 1}`;
}

export function ProductPageTemplate({
  title,
  description,
  heroImage,
  productImages,
  applicationImages = [],
  warehouseImage,
  productGalleryTitle,
  applicationsTitle,
  warehouseTitle,
  warehouseEyebrow = "Industry Use",
  warehouseText = "Share dimensions, grade, quantity, tolerance, and end-use details so Apex PolyWorks can review availability, machining fit, and quote assumptions."
}: ProductPageProps) {
  return (
    <main>
      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Product / Engineering Plastic
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request Quote</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact Sales</ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[24rem]">
            <Image
              src={heroImage}
              alt={`${title} product hero image for industrial buyers`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Product Gallery
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">{productGalleryTitle || `${title} stock forms`}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              Review product surfaces, available stock formats, and machining-ready material options before sending an RFQ.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {productImages.map((image, index) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
                <Image
                  src={image}
                  alt={productAlt(title, index)}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {applicationImages.length > 0 ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Applications
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {applicationsTitle || "CNC machining and finished plastic parts"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                Use these application images to evaluate machining quality, edge detail, and finished part suitability for industrial assemblies.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {applicationImages.map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                  <Image
                    src={image}
                    alt={applicationAlt(title, index)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {warehouseImage ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
              <Image
                src={warehouseImage}
                alt={`${title} warehouse stock and industrial inventory image`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                {warehouseEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {warehouseTitle || "Stock support for engineering and purchasing teams"}
              </h2>
              <p className="mt-4 text-base leading-8 text-steel">
                {warehouseText}
              </p>
              <div className="mt-8">
                <ButtonLink href="/request-a-quote">Check Stock and Lead Time</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                  Ready for quote review
                </p>
                <h2 className="mt-3 text-3xl font-semibold">Request Quote</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                  Send material, size, quantity, drawing files, tolerances, and application notes for a clear purchasing-ready quote.
                </p>
              </div>
              <ButtonLink href="/request-a-quote" variant="primary">Start RFQ</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
