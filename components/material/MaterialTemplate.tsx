import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Factory, Globe2, PackageCheck, Settings2, Truck } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import type { Material } from "@/lib/material-schema";
import { getMaterialPrimaryImage } from "@/lib/materials-data";
import { siteImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

function imageForRole(material: Material, role: keyof Material["images"]) {
  return material.images[role][0] || getMaterialPrimaryImage(material);
}

function ResponsiveImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative min-h-[18rem] min-w-0 overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function RfqLink({ children, href = "#material-rfq" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="inline-flex min-h-11 items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
      {children}
    </Link>
  );
}

export function MaterialTemplate({ material }: { material: Material }) {
  const heroImage = getMaterialPrimaryImage(material);
  const applicationImage = material.images.applications[0] || material.images.gallery[0] || heroImage;
  const stockImage = material.images.warehouse[0] || siteImages.warehouse;
  const cncImages = material.images.cnc.length ? material.images.cnc.slice(0, 2) : [heroImage];
  const productTypes = [
    { title: "Sheet & Plate", text: "Full-size stock, cut blanks, and production-ready plate.", image: imageForRole(material, "sheet") },
    { title: "Rod & Bar", text: "Round stock for turning, bushings, seals, and mechanical parts.", image: imageForRole(material, "rod") },
    { title: "Tube & Profile", text: "Grade-dependent tube, profile, and custom extrusion sourcing.", image: imageForRole(material, "rod") },
    { title: "CNC Parts", text: "Milled and turned components made to drawing and tolerance.", image: imageForRole(material, "cnc") }
  ];

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }, { name: material.shortName, path: `/materials/${material.slug}` }]} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Industrial material supplier</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-graphite [overflow-wrap:anywhere] sm:text-5xl">{material.name}</h1>
            <p className="mt-4 text-lg font-semibold text-ink">{material.eyebrow} for stock supply and precision manufacturing</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-steel">{material.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RfqLink>Get {material.shortName} Pricing</RfqLink>
              <Link href="#product-types" className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">View Product Types</Link>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-600 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">WhatsApp</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-steel">
              <span>Typical RFQ review within 24 business hours</span><span>OEM custom machining</span><span>Global shipping</span><span>Factory-direct support</span>
            </div>
          </div>
          <ResponsiveImage src={heroImage} alt={`${material.name} industrial material supplied for machining and fabrication`} priority />
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Why this material</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-graphite">Engineering properties for demanding industrial programs</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {material.keyProperties.slice(0, 5).map((property) => (
              <div key={property} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                <p className="mt-3 text-sm leading-6 text-ink">{property}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
          <ResponsiveImage src={applicationImage} alt={`${material.name} industrial application and finished component example`} />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Applications</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Built for real equipment and operating conditions</h2>
            <p className="mt-4 text-base leading-8 text-steel">Review temperature, load, chemical exposure, wear, compliance, and tolerance requirements before grade selection.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {material.applications.map((application) => <div key={application} className="rounded-md border border-graphite/10 bg-white px-4 py-5 text-sm font-semibold text-graphite shadow-sm">{application}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="product-types" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Product types</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Rod, sheet, tube, and CNC machined parts</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productTypes.map((product) => (
              <article key={product.title} className="flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={product.image} alt={`${material.name} ${product.title.toLowerCase()} for industrial buyers`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5"><h3 className="text-lg font-semibold text-graphite">{product.title}</h3><p className="mt-2 text-sm leading-6 text-steel">{product.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {material.slug === "peek" ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Related PEEK sourcing pages
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { href: "/products/peek-sheet", label: "PEEK Sheet", text: "Sheet, plate, and cut-to-size PEEK blanks for CNC milled parts." },
                { href: "/products/peek-rod", label: "PEEK Rod", text: "Round stock and cut blanks for turned seals, bushings, spacers, and sleeves." },
                { href: "/services/cnc-plastic-machining", label: "PEEK CNC Machining", text: "Made-to-print PEEK components from drawings, STEP files, or samples." }
              ].map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                  <span className="text-base font-semibold text-graphite">{link.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-steel">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-graphite/10 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative min-h-[22rem] overflow-hidden rounded-md border border-graphite/10 shadow-sm">
            <Image src={stockImage} alt={`${material.name} warehouse inventory for bulk industrial supply`} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/15 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold text-white">Stock planning and production capacity for bulk orders</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Stock & capability</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Bulk supply with fast export delivery</h2>
            <p className="mt-4 text-base leading-8 text-steel">Apex PolyWorks coordinates stock selection, cutting, machining, inspection, export packing, and shipment for prototype through repeat-production requirements.</p>
            <div className="mt-6 grid gap-3">
              {["Stock and mill-order sourcing", "Cut-to-size and CNC production", "Export packing and global logistics"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink"><PackageCheck className="size-5 text-teal" aria-hidden="true" />{item}</div>)}
            </div>
            <div className="mt-8"><RfqLink>Check Stock & Lead Time</RfqLink></div>
          </div>
        </div>
      </section>

      <section id="material-rfq" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Fast material RFQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">Get purchasing-ready {material.shortName} pricing</h2>
            <p className="mt-4 text-base leading-8 text-steel">Send size, quantity, grade, and drawing files. Our team will review material availability, manufacturing scope, lead time, and shipping requirements.</p>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-600 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">WhatsApp {siteConfig.whatsapp}</a>
          </div>
          <QuoteForm compact showQuantity showSize defaultMaterial={material.shortName} title={`Request a ${material.shortName} quote`} description="Add dimensions, quantity, and a drawing for an efficient technical review." />
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Supplier trust</p>
          <h2 className="mt-3 text-3xl font-semibold text-graphite">Manufacturing support beyond material supply</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Settings2, title: "CNC machining capability", text: material.cncDescription },
              { icon: Factory, title: "Production coordination", text: "Prototype, low-volume, and repeat production planning with inspection and material traceability support." },
              { icon: Globe2, title: "Export experience", text: "Commercial documentation, protective packing, and coordinated delivery for US and international industrial buyers." }
            ].map((item) => <article key={item.title} className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm"><item.icon className="size-6 text-teal" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h3><p className="mt-3 text-sm leading-7 text-steel">{item.text}</p></article>)}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cncImages.map((src, index) => <div key={src} className="relative aspect-[16/9] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm"><Image src={src} alt={`CNC machined ${material.name} production capability ${index + 1}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /></div>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-steel"><Truck className="size-5 text-amber" aria-hidden="true" /><span>Fast delivery planning</span><span>Drawing review</span><span>US buyer support</span></div>
        </div>
      </section>
    </main>
  );
}
