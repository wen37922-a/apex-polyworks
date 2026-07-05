import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polycarbonate PC Sheet, Guards, and Custom Machined Parts",
  description:
    "Source clear polycarbonate PC sheet, machine guards, windows, cut panels, formed covers, and CNC machined polycarbonate parts for industrial applications.",
  alternates: { canonical: `${siteConfig.url}/materials/polycarbonate-pc` }
};

const properties = [
  "Excellent impact resistance for protective panels and machine guards",
  "High optical clarity for windows, shields, and equipment visibility",
  "Available in clear, tinted, UV-stable, hard-coated, and specialty grades",
  "Suitable for cutting, drilling, routing, machining, bending, and forming"
];

const forms = [
  "Clear and tinted polycarbonate sheet",
  "Cut-to-size panels and blanks",
  "Polycarbonate film and thin gauge sheet",
  "CNC machined, routed, drilled, bent, and formed components"
];

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

export const dynamic = "force-dynamic";

export default async function PolycarbonatePcPage() {
  const { POLYCARBONATE: images } = await getProductImages();
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "Polycarbonate PC", path: "/materials/polycarbonate-pc" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Impact resistant clarity</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">Polycarbonate PC</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Tough, transparent plastic for guards, windows, covers, and machined parts</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Apex PolyWorks supplies polycarbonate sheet, cut panels, formed covers, and made-to-drawing PC components for US industrial buyers who need visibility with high impact resistance.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={images.hero} alt="Clear polycarbonate PC sheets for industrial guards and transparent panels" priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key properties</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Clear protection built for industrial environments</h2>
            <div className="mt-6 grid gap-3">
              {properties.map((property) => (
                <p key={property} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{property}</span>
                </p>
              ))}
            </div>
          </div>
          <ResponsiveImage src={images.properties} alt="Polycarbonate PC sheet structure and transparent material properties" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.applications} alt="Polycarbonate PC used for industrial machine guards and protective applications" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Protective visibility for equipment and work areas</h2>
            <p className="mt-4 text-base leading-8 text-steel">Common uses include machine guards, safety glazing, inspection windows, equipment covers, shields, enclosures, lighting parts, and transparent prototypes.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Discuss Your Application</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC and machining</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Machined and fabricated to drawing</h2>
            <p className="mt-4 text-base leading-8 text-steel">We support CNC routing, milling, drilling, countersinking, edge finishing, bending, and forming. Share coating, optical, tolerance, and stress-cracking requirements before production.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
          </div>
          <ResponsiveImage src={images.machining} alt="CNC machining and fabrication of custom polycarbonate PC parts" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.forms} alt="Available polycarbonate PC sheet forms and fabricated product options" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Stock formats and production-ready options</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {forms.map((form) => <div key={form} className="rounded-md border border-graphite/10 bg-white p-5 text-sm font-semibold leading-6 text-graphite shadow-sm">{form}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-12 text-white lg:px-10 lg:py-16">
          <Image src={images.cta} alt="Polycarbonate PC material and fabrication background for quote requests" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-graphite/80" aria-hidden="true" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Ready for quote review</p><h2 className="mt-3 text-3xl font-semibold">Request polycarbonate sheet or custom part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/80">Send grade, thickness, dimensions, quantity, finish, coating, and drawing files for a purchasing-ready quote.</p></div>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
