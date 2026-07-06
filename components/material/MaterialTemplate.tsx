import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Material } from "@/lib/material-schema";
import { getMaterialPrimaryImage } from "@/lib/materials-data";

function imageForRole(material: Material, role: keyof Material["images"]) {
  return material.images[role][0] || getMaterialPrimaryImage(material);
}

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
    </div>
  );
}

function RfqLink({ children }: { children: React.ReactNode }) {
  return <Link href="/request-a-quote" className="inline-flex min-h-11 items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">{children}</Link>;
}

export function MaterialTemplate({ material }: { material: Material }) {
  const heroImage = getMaterialPrimaryImage(material);
  const cncImages = material.images.cnc.length ? material.images.cnc.slice(0, 2) : [heroImage];
  const applicationImage = material.images.applications[0] || material.images.warehouse[0] || material.images.gallery[0] || heroImage;
  const ctaImage = material.images.cta[0] || heroImage;

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: material.shortName, path: `/materials/${material.slug}` }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Materials / {material.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-graphite [overflow-wrap:anywhere] sm:text-5xl">{material.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">{material.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RfqLink>Request a Quote</RfqLink>
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Ask a Material Question</Link>
            </div>
          </div>
          <ResponsiveImage src={heroImage} alt={`${material.name} industrial material stock for machining and fabrication`} priority />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Key properties</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-graphite">Performance characteristics for engineering review</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {material.keyProperties.map((property) => (
              <div key={property} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                <p className="mt-3 text-sm leading-6 text-ink">{property}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Available forms</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Sheet and rod for stock supply or custom production</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {material.forms.map((form) => (
              <article key={form.title} className="overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={imageForRole(material, form.imageRole)} alt={`${material.name} ${form.title.toLowerCase()} stock for industrial buyers`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-300 hover:scale-[1.03]" />
                </div>
                <div className="p-5"><h3 className="text-xl font-semibold text-graphite">{form.title}</h3><p className="mt-2 text-sm leading-6 text-steel">{form.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">CNC machining capability</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Material-aware machining from prototype to production</h2>
            <p className="mt-4 text-base leading-8 text-steel">{material.cncDescription}</p>
            <div className="mt-8"><RfqLink>Send Drawing for Quote</RfqLink></div>
          </div>
          <div className={`grid gap-4 ${cncImages.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {cncImages.map((src, index) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
                <Image src={src} alt={`CNC machined ${material.name} component example ${index + 1}`} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={applicationImage} alt={`${material.name} industrial application and finished component example`} />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Industrial applications and buyer fit</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {material.applications.map((application) => <div key={application} className="rounded-md border border-graphite/10 bg-white px-4 py-5 text-sm font-semibold text-graphite shadow-sm">{application}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-12 text-white lg:px-10 lg:py-16">
          <Image src={ctaImage} alt={`${material.name} background for industrial quote requests`} fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-graphite/85" aria-hidden="true" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">Fast RFQ response</p><h2 className="mt-3 text-3xl font-semibold">Request {material.shortName} material or machined part pricing</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-white/80">Send grade, dimensions, quantity, tolerance, application conditions, and drawing files for a purchasing-ready quote.</p></div>
            <RfqLink>Request RFQ</RfqLink>
          </div>
        </div>
      </section>
    </main>
  );
}
