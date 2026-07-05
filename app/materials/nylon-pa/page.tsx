import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nylon PA Sheet, Rod, and CNC Machined Polyamide Parts",
  description:
    "Source Nylon PA sheet, rod, cast nylon, extruded polyamide, cut blanks, and CNC machined nylon parts for gears, rollers, bushings, and wear components.",
  alternates: { canonical: `${siteConfig.url}/materials/nylon-pa` }
};

const images = productImages.NYLON;

const properties = [
  "High mechanical strength and toughness for loaded industrial components",
  "Good wear and bearing performance for sliding and rotating applications",
  "Useful fatigue resistance for gears, rollers, wheels, and moving parts",
  "Moisture absorption and dimensional change reviewed before tight-tolerance machining"
];

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function NylonPaPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "Nylon PA", path: "/materials/nylon-pa" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Wear resistant polyamide</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">Nylon PA / Polyamide</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Strong, wear-resistant plastic for moving and load-bearing components</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Apex PolyWorks supplies nylon sheet, rod, cut blanks, and CNC machined polyamide parts for gears, bushings, rollers, wear pads, spacers, wheels, and industrial equipment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={images.hero} alt="Nylon PA polyamide sheet and rod stock for industrial machining" priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key properties</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Performance for wear, load, and repeated motion</h2>
            <div className="mt-6 grid gap-3">
              {properties.map((property) => (
                <p key={property} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" /><span>{property}</span></p>
              ))}
            </div>
          </div>
          <ResponsiveImage src={images.properties} alt="Nylon PA polyamide material properties and engineering plastic structure" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.forms} alt="Available Nylon PA sheet and rod forms for industrial buyers" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Sheet and rod for machining or cut-to-size supply</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"><h3 className="text-lg font-semibold text-graphite">Nylon Sheet</h3><p className="mt-2 text-sm leading-6 text-steel">Cast or extruded plate, cut blanks, wear pads, guides, and machined profiles.</p></div>
              <div className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"><h3 className="text-lg font-semibold text-graphite">Nylon Rod</h3><p className="mt-2 text-sm leading-6 text-steel">Round bar and blanks for rollers, bushings, gears, spacers, and turned parts.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC machining capability</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Nylon parts machined with material behavior in mind</h2>
            <p className="mt-4 text-base leading-8 text-steel">We support milling, turning, drilling, threading, routing, and finishing. Tolerance, moisture conditioning, wall thickness, heat buildup, and stress are reviewed before production.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
          </div>
          <ResponsiveImage src={images.machining} alt="CNC machining Nylon PA polyamide parts for precision industrial components" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.applications} alt="Nylon PA industrial applications including gears rollers and wear components" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Wear parts for machinery and material handling</h2>
            <p className="mt-4 text-base leading-8 text-steel">Typical applications include gears, sprockets, rollers, wheels, bushings, bearings, pulleys, wear strips, conveyor components, guide blocks, and equipment replacement parts.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Discuss Your Application</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Image gallery</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Nylon stock and finished component reference</h2>
          <div className="mt-8 max-w-4xl"><ResponsiveImage src={images.gallery} alt="Nylon PA polyamide stock and finished machined component gallery" /></div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-12 text-white lg:px-10 lg:py-16">
          <Image src={images.cta} alt="Nylon PA material and machining background for quote requests" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-graphite/80" aria-hidden="true" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Ready for quote review</p><h2 className="mt-3 text-3xl font-semibold">Request Nylon PA material or machined part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/80">Send grade, color, dimensions, quantity, tolerance, conditioning, and drawing files.</p></div>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
