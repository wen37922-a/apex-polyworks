import Image from "next/image";
import { CheckCircle2, Gauge, Ruler, Send, Settings2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { DetailItem } from "@/lib/site";

type DetailTemplateProps = {
  item: DetailItem;
  parentLabel: string;
};

export function DetailTemplate({ item, parentLabel }: DetailTemplateProps) {
  const parentPath = `/${parentLabel.toLowerCase()}`;
  const isCncPage = item.slug === "cnc-plastic-machining";
  const showQuickRfq = parentLabel === "Materials" || parentLabel === "Products";
  const cncCapabilities = [
    [Settings2, "5-axis machining", "Complex plastic parts, fixtures, pockets, profiles, and multi-sided features."],
    [Ruler, "Tight tolerance +/-0.01mm", "Tolerance is reviewed by material, geometry, wall thickness, and application."],
    [Gauge, "Prototype + mass production", "One-off repair parts, samples, bridge orders, and repeat production batches."]
  ] as const;

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: parentLabel, path: parentPath },
          { name: item.title, path: `${parentPath}/${item.slug}` }
        ]}
      />
      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {parentLabel} / {item.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              {item.title}
            </h1>
            {(parentLabel === "Materials" || parentLabel === "Products") ? (
              <p className="mt-4 text-lg font-semibold text-teal">
                High-performance engineering plastic for demanding environments
              </p>
            ) : null}
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">{item.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/request-a-quote" variant="secondary">Send Drawing</ButtonLink>
            </div>
          </div>
          {item.heroImage ? (
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[24rem]">
              <Image
                src={item.heroImage.src}
                alt={item.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {showQuickRfq ? (
        <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Quick RFQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                Request price, lead time, and stock availability
              </h2>
              <p className="mt-4 text-base leading-8 text-steel">
                Send material type, quantity, drawing, or application notes. Our team responds within 12 hours when the RFQ is complete.
              </p>
            </div>
            <QuoteForm compact showQuantity title={`Quick RFQ for ${item.title}`} description="Start with name, email, material type, quantity, and drawing upload." />
          </div>
        </section>
      ) : null}

      {isCncPage ? (
        <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {cncCapabilities.map(([Icon, title, text]) => (
                <div key={title} className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm">
                  <Icon className="size-6 text-teal" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-graphite">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-graphite">Capabilities and buyer fit</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="rounded-md border border-graphite/10 bg-slate-50 p-4">
                  <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-ink">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-md border border-graphite/10 bg-graphite p-6 text-white">
            <p className="text-lg font-semibold">Quote notes</p>
            <div className="mt-5 grid gap-4">
              {item.specs.map((spec) => (
                <div key={spec} className="border-l-2 border-amber pl-4 text-sm leading-6 text-white/75">
                  {spec}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {item.galleryImages?.length ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Product photos
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {item.galleryTitle || `${item.title} gallery`}
              </h2>
              {item.galleryText ? (
                <p className="mt-4 text-sm leading-7 text-steel">{item.galleryText}</p>
              ) : null}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {item.galleryImages.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isCncPage && item.galleryImages?.length ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Process images
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                Workshop, machining parts, and inspection examples
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {item.galleryImages.slice(0, 3).map((image) => (
                <div key={`process-${image.src}`} className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {item.featureImage ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
            <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
              <Image
                src={item.featureImage.src}
                alt={item.featureImage.alt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Inventory support
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">{item.featureImage.title}</h2>
              <p className="mt-4 text-base leading-8 text-steel">{item.featureImage.text}</p>
              <div className="mt-8">
                <ButtonLink href="/request-a-quote">Request Stock Availability</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-graphite/10 bg-mint/45 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-graphite">Common applications</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {item.applications.map((application) => (
              <div key={application} className="rounded-md bg-white px-4 py-5 text-sm font-semibold text-graphite shadow-sm">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Industries served
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Aerospace", "Automotive", "Electronics", "Medical"].map((industry) => (
              <div key={industry} className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-5 text-sm font-semibold text-graphite">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCncPage ? (
        <ButtonLink
          href="/request-a-quote"
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 shadow-soft lg:inline-flex"
        >
          <Send className="size-4" aria-hidden="true" />
          Send Drawing for Quote
        </ButtonLink>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                Ready for quote review
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Send drawings, dimensions, or a material list.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                Include quantity, deadline, finish, tolerance, and the end-use environment so our team can recommend the right manufacturing path.
              </p>
            </div>
            <ButtonLink href="/request-a-quote" variant="primary">Start RFQ</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
