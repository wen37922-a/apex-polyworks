import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "PTFE Sheet, Rod, and Precision Machined Teflon Parts",
  description:
    "Source industrial-grade PTFE sheet, rod, cut blanks, seals, insulators, liners, and precision machined fluoropolymer parts with ready-stock support.",
  alternates: { canonical: `${siteConfig.url}/materials/ptfe` }
};

const images = productImages.PTFE;

const properties = [
  "Exceptional resistance to a broad range of industrial chemicals",
  "Very low coefficient of friction for sliding, sealing, and bearing surfaces",
  "Wide service temperature capability subject to grade and load conditions",
  "Excellent electrical insulation and very low moisture absorption",
  "Virgin, filled, modified, and application-specific PTFE grades available"
];

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function PtfePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "PTFE", path: "/materials/ptfe" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Industrial fluoropolymer</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">PTFE / Polytetrafluoroethylene</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Industrial-grade chemical resistance with exceptionally low friction</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Apex PolyWorks supplies PTFE sheet, rod, cut blanks, and machined fluoropolymer components for seals, insulators, liners, bearings, chemical equipment, and demanding process applications.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={images.hero} alt="Industrial grade PTFE sheet and rod for chemical resistant components" priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key properties</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-graphite">Material performance for corrosive, low-friction, and electrical applications</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => <p key={property} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-5 text-sm leading-6 text-ink"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" /><span>{property}</span></p>)}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">PTFE rod and sheet for stock supply or machining</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { title: "PTFE Rod", src: images.rod, alt: "PTFE rod stock for precision turned seals bushings and insulators", text: "Round rod and cut blanks for seals, bushings, spacers, valve parts, and turned components." },
              { title: "PTFE Sheet", src: images.sheet, alt: "PTFE sheet stock for chemical resistant liners gaskets and insulation", text: "Sheet, plate, skived material, cut panels, liners, gaskets, electrical insulation, and machined profiles." }
            ].map((form) => (
              <div key={form.title} className="overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={form.src} alt={form.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-300 hover:scale-[1.02]" /></div>
                <div className="p-5"><h3 className="text-xl font-semibold text-graphite">{form.title}</h3><p className="mt-2 text-sm leading-6 text-steel">{form.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Precision CNC machining</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">PTFE components machined with deformation control in mind</h2>
            <p className="mt-4 text-base leading-8 text-steel">We support CNC turning, milling, drilling, boring, threading, and profile machining. Fixturing, dimensional stability, creep, thin walls, and inspection method are reviewed before quoting tight-tolerance PTFE parts.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
          </div>
          <ResponsiveImage src={images.machining} alt="Precision CNC machining of PTFE rod for custom fluoropolymer components" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.inventory} alt="Ready stock PTFE rods in warehouse inventory for fast industrial delivery" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Inventory and warehouse</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Ready stock supports faster delivery</h2>
            <p className="mt-4 text-base leading-8 text-steel">Common PTFE rod and sheet sizes can be reviewed for stock availability, cut-to-size release, consolidated material orders, and faster delivery to US industrial buyers.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Check Stock and Lead Time</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Fast quote response</p><h2 className="mt-3 text-3xl font-semibold">Request PTFE stock or machined part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">Send grade, dimensions, quantity, tolerance, application temperature, chemical exposure, and drawing files.</p></div>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
