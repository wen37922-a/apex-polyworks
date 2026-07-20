import Link from "next/link";
import {
  CheckCircle2,
  CircuitBoard,
  Factory,
  Gauge,
  HeartPulse,
  Settings2
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import {
  FAQAccordion,
  QuoteCTASection,
  RelatedContentSection,
  SEOImagePanel
} from "@/components/seo/SEOPageSections";
import type {
  ProductSEOPageData,
  SEOContentCard
} from "@/lib/seo-page-types";

const applicationIcons = [
  CircuitBoard,
  HeartPulse,
  Settings2,
  Gauge,
  Factory
];

function ContentCard({
  card,
  index
}: {
  card: SEOContentCard;
  index: number;
}) {
  const Icon = applicationIcons[index % applicationIcons.length];

  return (
    <article className="h-full rounded-md border border-graphite/10 bg-white p-6 shadow-sm">
      <Icon className="size-6 text-teal" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-graphite">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel">{card.description}</p>
    </article>
  );
}

export function ProductSEOPageTemplate({
  product
}: {
  product: ProductSEOPageData;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.productName, path: product.slug }
        ]}
      />
      <FaqJsonLd items={product.faqs} />

      <main>
        <section className="border-b border-graphite/10 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                {product.eyebrow ?? "Engineering Plastic Product"}
              </p>
              <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-graphite sm:text-5xl">
                {product.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-steel sm:text-lg sm:leading-8">
                {product.introduction}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm font-semibold text-graphite">
                {product.heroHighlights.map((highlight) => (
                  <li key={highlight} className="border-l-2 border-amber pl-3">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/request-a-quote?material=PEEK%20Rod">
                  Request PEEK Rod Quote
                </ButtonLink>
                <ButtonLink
                  href="/request-a-quote?material=PEEK%20Rod"
                  variant="secondary"
                >
                  Upload Your Drawing
                </ButtonLink>
              </div>
            </div>
            <SEOImagePanel
              image={product.heroImage}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </section>

        <section className="border-b border-graphite/10 bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Product overview"
                title="What is PEEK Rod?"
                text={product.overview.whatIs}
              />
              <h3 className="mt-7 text-lg font-semibold text-graphite">
                Why industrial buyers choose PEEK rod
              </h3>
              <ul className="mt-4 grid gap-3">
                {product.overview.selectionReasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex gap-3 text-sm leading-7 text-steel"
                  >
                    <CheckCircle2
                      className="mt-1 size-5 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            {product.overview.image ? (
              <SEOImagePanel
                image={product.overview.image}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            ) : null}
          </div>
        </section>

        <section className="border-b border-graphite/10 bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="Supply options"
              title="PEEK Rod Supply Options"
              text="Supply scope is reviewed against the requested grade, cut length, quantity, machining requirements, and end-use conditions."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {product.supplyOptions.map((option, index) => (
                <ContentCard key={option.title} card={option} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-graphite/10 bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="Material performance"
              title="PEEK Rod Properties"
              text="Final material and grade selection should be based on the operating environment, component geometry, and project documentation requirements."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {product.properties.map((property, index) => (
                <ContentCard key={property.title} card={property} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-graphite/10 bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="Industrial uses"
              title="PEEK Rod Applications"
              text="PEEK rod is commonly selected for machined components that require a combination of performance, stability, and application-specific material properties."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {product.applications.map((application, index) => (
                <ContentCard
                  key={application.title}
                  card={application}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-graphite/10 bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:px-8">
            {product.machiningCapability.image ? (
              <SEOImagePanel
                image={product.machiningCapability.image}
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            ) : null}
            <div>
              <SectionHeader
                eyebrow="Drawing-based production"
                title="CNC Machining Support for PEEK Rod"
                text={product.machiningCapability.description}
              />
              <ul className="mt-6 grid gap-3">
                {product.machiningCapability.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex gap-3 text-sm leading-7 text-steel"
                  >
                    <CheckCircle2
                      className="mt-1 size-5 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={product.machiningCapability.href}
                className="mt-7 inline-flex text-sm font-semibold text-teal hover:text-graphite"
              >
                Explore CNC plastic machining
              </Link>
            </div>
          </div>
        </section>

        <RelatedContentSection
          eyebrow="Related PEEK products"
          title="Continue your PEEK sourcing review"
          links={product.relatedLinks}
        />

        <FAQAccordion
          items={product.faqs}
          title="PEEK Rod FAQ"
          text="Answers to common sourcing and machining questions from engineering and purchasing teams."
        />

        <QuoteCTASection
          quoteCta={product.quoteCta}
          defaultTitle="Request a PEEK Rod Quote"
          defaultDescription="Send the required grade, rod dimensions, quantity, application notes, and drawing files for quotation review."
        />
      </main>
    </>
  );
}
