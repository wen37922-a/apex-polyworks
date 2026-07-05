import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polypropylene PP Sheet, Rod, and Custom Machined Parts",
  description:
    "Source polypropylene PP sheet, rod, cut-to-size blanks, CNC machined parts, tanks, trays, and chemical-resistant fabricated components.",
  alternates: { canonical: `${siteConfig.url}/materials/pp` }
};

const images = productImages.POLYPROPYLENE;

const properties = [
  "Excellent resistance to many acids, bases, and cleaning chemicals",
  "Low moisture absorption for wet and washdown environments",
  "Lightweight with useful fatigue resistance for repeated flexing",
  "Suitable for machining, cutting, bending, welding, and fabrication"
];

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function PolypropylenePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "Polypropylene PP", path: "/materials/pp" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Chemical resistant polyolefin</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">Polypropylene PP</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Lightweight material for chemical handling, fabrication, and machined parts</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Apex PolyWorks supplies PP sheet, rod, cut blanks, welded assemblies, and made-to-drawing components for industrial equipment, tanks, trays, lab fixtures, and food processing applications.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={images.hero} alt="Polypropylene PP material stock for industrial fabrication and machining" priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.overview} alt="Polypropylene PP sheet and rod material overview for industrial buyers" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Material overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">A practical choice for chemical and moisture exposure</h2>
            <p className="mt-4 text-base leading-8 text-steel">Polypropylene combines low density, chemical resistance, weldability, and low water absorption. Grade, temperature, stiffness, and regulatory requirements should be confirmed before production.</p>
            <div className="mt-6 grid gap-3">
              {properties.map((property) => (
                <p key={property} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" /><span>{property}</span></p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Sheet and rod ready for cutting or machining</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { title: "Polypropylene Sheet", src: images.sheet, alt: "Polypropylene PP sheet stock for cut-to-size and fabricated components", text: "Sheet, plate, cut panels, welded tanks, trays, guards, and routed profiles." },
              { title: "Polypropylene Rod", src: images.rod, alt: "Polypropylene PP rod stock for CNC turned industrial parts", text: "Round rod and cut blanks for spacers, bushings, fittings, rollers, and machined parts." }
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC machining</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">PP parts machined to drawing</h2>
            <p className="mt-4 text-base leading-8 text-steel">We support CNC routing, milling, turning, drilling, threading, and finishing for PP components. Tolerances are reviewed against wall thickness, geometry, stress, and temperature.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
          </div>
          <ResponsiveImage src={images.machining} alt="CNC machined polypropylene PP parts for custom industrial equipment" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.applications} alt="Polypropylene PP used in chemical handling and industrial application environments" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Chemical handling, processing, and equipment components</h2>
            <p className="mt-4 text-base leading-8 text-steel">Typical uses include tanks, trays, ducting, lab fixtures, pump components, food equipment parts, plating equipment, chemical handling assemblies, and lightweight guards.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Discuss Your Application</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-12 text-white lg:px-10 lg:py-16">
          <Image src={images.cta} alt="Polypropylene PP material background for industrial quote requests" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-graphite/80" aria-hidden="true" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Ready for quote review</p><h2 className="mt-3 text-3xl font-semibold">Request PP sheet, rod, or custom part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/80">Send grade, color, dimensions, quantity, tolerance, welding requirements, and drawing files.</p></div>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
