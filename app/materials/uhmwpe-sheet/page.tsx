import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { getProductImages, selectProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "UHMWPE Sheet, Wear Plate, and Custom Fabricated Parts",
  description:
    "Source UHMWPE sheet, wear plate, cut-to-size blanks, liners, guides, and CNC fabricated UHMWPE parts for industrial equipment and material handling.",
  alternates: { canonical: `${siteConfig.url}/materials/uhmwpe-sheet` }
};

export const dynamic = "force-dynamic";

const features = [
  "Excellent abrasion and impact resistance for demanding wear applications",
  "Low coefficient of friction for guides, liners, rails, and conveyor components",
  "Low moisture absorption and good resistance to many industrial chemicals",
  "Available as sheet, plate, cut blanks, profiles, and made-to-drawing parts"
];

function MaterialImage({ src, alt, sizes = "(min-width: 1024px) 48vw, 100vw" }: { src: string; alt: string; sizes?: string }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export default async function UhmwpeSheetPage() {
  const images = await getProductImages();
  const named = (stems: string[]) => selectProductImages(images.UHMWPE.gallery, stems);
  const hero = named(["uhmwpe1"])[0] || images.UHMWPE.hero;
  const specsImage = named(["uhmwpe3"])[0];
  const applicationImage = named(["uhmwpe4"])[0];
  const fabricationImage = named(["uhmwpe5"])[0];
  const gallery = named(["uhmwpe2", "uhmwpe6"]);

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "UHMWPE Sheet", path: "/materials/uhmwpe-sheet" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Wear resistant polyolefin</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">UHMWPE Sheet</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Low-friction, impact-resistant sheet for industrial wear parts</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Source UHMWPE sheets, cut blanks, liners, guides, rails, and fabricated components for material handling, food equipment, maintenance, and OEM applications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          {hero ? <MaterialImage src={hero} alt="UHMWPE sheet stock for industrial wear and material handling applications" /> : null}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key features and specs</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Built for sliding, impact, and abrasion</h2>
            <div className="mt-6 grid gap-3">
              {features.map((feature) => (
                <p key={feature} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{feature}</span>
                </p>
              ))}
            </div>
          </div>
          {specsImage ? <MaterialImage src={specsImage} alt="Uniform UHMWPE sheet and plate stock showing available industrial material structure" /> : null}
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          {applicationImage ? <MaterialImage src={applicationImage} alt="UHMWPE sheet used in warehouse and industrial material handling applications" /> : null}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Wear components for equipment and material flow</h2>
            <p className="mt-4 text-base leading-8 text-steel">Common uses include conveyor guides, chute liners, dock components, wear strips, chain guides, star wheels, cutting surfaces, and replacement parts.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Check Material Fit</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC and fabrication</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Cut, routed, drilled, and machined to drawing</h2>
            <p className="mt-4 text-base leading-8 text-steel">Send thickness, dimensions, quantity, tolerances, hole patterns, edge details, and application loads for a practical machining and fabrication review.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
          </div>
          {fabricationImage ? <MaterialImage src={fabricationImage} alt="UHMWPE sheet cutting and CNC fabrication for custom industrial plastic parts" /> : null}
        </div>
      </section>

      {gallery.length ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Product gallery</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">UHMWPE sheet forms and product details</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:gap-5">
              {gallery.map((src, index) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                  <Image src={src} alt={`UHMWPE sheet product combination and material detail ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 50vw" className="object-cover transition duration-300 hover:scale-[1.02]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Ready for quote review</p><h2 className="mt-3 text-3xl font-semibold">Request UHMWPE sheet pricing and lead time</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">Include sheet size, thickness, color, quantity, machining details, and delivery requirements.</p></div>
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
