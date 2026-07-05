import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { productImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "HDPE Sheet, Rod, and CNC Machined Polyethylene Parts",
  description:
    "Source HDPE sheet, rod, cut-to-size blanks, liners, guides, tanks, food equipment parts, and CNC machined high density polyethylene components.",
  alternates: { canonical: `${siteConfig.url}/materials/hdpe` }
};

const images = productImages.HDPE;

const properties = [
  "High impact strength with useful toughness at low temperatures",
  "Low moisture absorption for wet, washdown, and outdoor environments",
  "Good resistance to many chemicals, cleaners, and process fluids",
  "Food-contact grades and color options available subject to specification"
];

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

export default function HdpePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: "HDPE", path: "/materials/hdpe" }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / Tough polyethylene</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">HDPE / High Density Polyethylene</h1>
            <p className="mt-4 text-lg font-semibold text-teal">Durable sheet and rod for wet, chemical, food, and impact-prone applications</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Apex PolyWorks supplies HDPE sheet, rod, cut blanks, liners, guides, tanks, and CNC machined components for industrial equipment, food processing, maintenance, and OEM projects.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={images.hero} alt="HDPE sheet and rod stock for industrial machining and fabrication" priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key properties</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Reliable performance in demanding plant environments</h2>
            <div className="mt-6 grid gap-3">
              {properties.map((property) => <p key={property} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" /><span>{property}</span></p>)}
            </div>
          </div>
          <ResponsiveImage src={images.properties} alt="HDPE material properties for impact chemical and moisture resistance" />
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.forms} alt="Available HDPE sheet and rod forms for industrial supply" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Sheet and rod for stock supply or fabrication</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"><h3 className="text-lg font-semibold text-graphite">HDPE Sheet</h3><p className="mt-2 text-sm leading-6 text-steel">Full sheets, cut panels, plate, liners, cutting surfaces, tanks, and fabricated assemblies.</p></div>
              <div className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"><h3 className="text-lg font-semibold text-graphite">HDPE Rod</h3><p className="mt-2 text-sm leading-6 text-steel">Round bar and blanks for rollers, spacers, bushings, guides, and machined components.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC machining capability</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Machined HDPE components from drawing to production</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-steel">Our team reviews wall thickness, flatness, holding method, tolerance, and thermal movement before milling, turning, routing, drilling, or finishing HDPE parts.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ResponsiveImage src={images.machining} alt="CNC machining HDPE parts for custom industrial components" />
            <ResponsiveImage src={images.services} alt="Plastic CNC machining service for HDPE sheets rods and finished parts" />
          </div>
          <div className="mt-8"><ButtonLink href="/request-a-quote">Send Drawing for Quote</ButtonLink></div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={images.applications} alt="HDPE industrial applications in food processing material handling and equipment" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Industrial parts for wet, impact, and chemical exposure</h2>
            <p className="mt-4 text-base leading-8 text-steel">Typical uses include food cutting surfaces, tank components, marine parts, liners, wear strips, guides, rollers, conveyor parts, outdoor equipment, packaging machinery, and maintenance replacements.</p>
            <div className="mt-8"><ButtonLink href="/request-a-quote">Discuss Your Application</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Fast quote response</p><h2 className="mt-3 text-3xl font-semibold">Request HDPE sheet, rod, or machined part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">Send grade, color, dimensions, quantity, tolerance, application, and drawing files for a fast purchasing-ready response.</p></div>
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
