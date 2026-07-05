import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { getProductImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const keyProperties = [
  "Excellent optical clarity for transparent guards, covers, windows, and displays",
  "Available in clear, frosted, tinted, colored, mirrored, and light-diffusing sheet options",
  "Good weatherability and polished edge appearance for visual-facing components",
  "Lighter than glass and easier to machine, cut, bend, bond, and polish"
];

const availableForms = [
  "Acrylic sheet and PMMA plate",
  "Clear, colored, frosted, mirrored, and specialty acrylic",
  "Cut-to-size acrylic panels and blanks",
  "CNC routed, laser cut, polished, bent, or bonded acrylic parts"
];

const customFabrication = [
  "CNC routing, drilling, engraving, and profile cutting",
  "Laser cutting for clean display-grade profiles",
  "Edge polishing, flame polishing, and surface finishing",
  "Heat bending, bonding, assembly, and packed-to-order acrylic components"
];

export const metadata: Metadata = {
  title: "Acrylic (PMMA) Sheet and Custom Acrylic Parts",
  description:
    "Source Acrylic (PMMA) sheets, cut-to-size acrylic panels, display-grade acrylic parts, CNC routed PMMA, laser cut acrylic, and custom fabricated acrylic components.",
  alternates: {
    canonical: `${siteConfig.url}/materials/acrylic-pmma`
  }
};

export const dynamic = "force-dynamic";

export default async function AcrylicPmmaPage() {
  const images = await getProductImages();
  const heroImage = images.ACRYLIC.display[0] || images.ACRYLIC.sheet[0];
  const applicationImages = images.ACRYLIC.display.slice(1).map((src, index) => ({
    src,
    alt: `Custom acrylic PMMA display and fabrication application ${index + 1}`
  }));
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" },
          { name: "Acrylic (PMMA)", path: "/materials/acrylic-pmma" }
        ]}
      />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Materials / Optical clarity
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              Acrylic (PMMA)
            </h1>
            <p className="mt-4 text-lg font-semibold text-teal">
              Clear and colored acrylic sheet for displays, guards, covers, and custom fabrication.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Apex PolyWorks supplies Acrylic (PMMA) sheets, cut-to-size panels, polished blanks, and custom fabricated acrylic parts for US industrial, retail, equipment, and display buyers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[24rem]">
            <Image
              src={heroImage}
              alt="Acrylic PMMA gradient cube display showing optical clarity and colored material"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Key properties
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Why buyers choose Acrylic (PMMA)
            </h2>
            <div className="mt-6 grid gap-3">
              {keyProperties.map((item) => (
                <p key={item} className="flex gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4 text-sm leading-6 text-ink">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Available forms
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Stock and fabrication-ready options
            </h2>
            <div className="mt-6 grid gap-3">
              {availableForms.map((item) => (
                <p key={item} className="flex gap-3 rounded-md border border-graphite/10 bg-white p-4 text-sm leading-6 text-ink shadow-sm">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Applications
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Acrylic display, furniture, lighting, and equipment applications
            </h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              PMMA is commonly used when optical clarity, color, polished edges, and clean fabricated appearance matter.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {applicationImages.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Custom fabrication
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Acrylic parts made from drawings, dimensions, or samples
            </h2>
            <p className="mt-4 text-base leading-8 text-steel">
              Send dimensions, thickness, color, finish, bend requirements, edge quality, quantity, and drawing files so our team can review a practical fabrication route.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {customFabrication.map((item) => (
              <div key={item} className="rounded-md border border-graphite/10 bg-slate-50 p-5">
                <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                <p className="mt-3 text-sm leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                  Ready for quote review
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Request pricing for Acrylic (PMMA) sheet or custom parts
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                  Send material color, thickness, dimensions, quantity, edge finish, and drawing files for a clear RFQ response.
                </p>
              </div>
              <ButtonLink href="/request-a-quote" variant="primary">Request a Quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
