import Link from "next/link";
import {
  CheckCircle2,
  CircuitBoard,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Plane,
  Settings2,
  Utensils
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
import {
  materialApplicationKeys,
  materialFormKeys,
  materialPropertyKeys,
  type MaterialApplicationKey,
  type MaterialFormKey,
  type MaterialPropertyKey,
  type MaterialSEOPageData,
  type SEOContentCard
} from "@/lib/seo-page-types";

const propertyLabels: Record<MaterialPropertyKey, string> = {
  temperatureResistance: "Temperature Resistance",
  chemicalResistance: "Chemical Resistance",
  mechanicalStrength: "Mechanical Strength",
  wearResistance: "Wear Resistance",
  electricalProperties: "Electrical Properties"
};

const formLabels: Record<MaterialFormKey, string> = {
  sheet: "Sheet",
  rod: "Rod",
  tube: "Tube",
  customMachinedParts: "Custom Machined Parts"
};

const applicationLabels: Record<MaterialApplicationKey, string> = {
  semiconductor: "Semiconductor",
  medical: "Medical",
  automation: "Automation",
  electronics: "Electronics",
  foodProcessing: "Food Processing",
  aerospace: "Aerospace"
};

const applicationIcons: Record<
  MaterialApplicationKey,
  typeof CircuitBoard
> = {
  semiconductor: CircuitBoard,
  medical: HeartPulse,
  automation: Settings2,
  electronics: Gauge,
  foodProcessing: Utensils,
  aerospace: Plane
};

function SupplyCard({
  card,
  label
}: {
  card: Omit<SEOContentCard, "title">;
  label: string;
}) {
  const content = (
    <>
      {card.image ? (
        <SEOImagePanel
          image={card.image}
          aspect="standard"
          embedded
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-graphite">{label}</h3>
        <p className="mt-3 text-sm leading-7 text-steel">{card.description}</p>
        {card.href ? (
          <span className="mt-auto pt-5 text-sm font-semibold text-teal">
            View {label}
          </span>
        ) : null}
      </div>
    </>
  );

  const className =
    "flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft";

  return card.href ? (
    <Link href={card.href} className={className}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
}

export function MaterialSEOPageTemplate({
  material
}: {
  material: MaterialSEOPageData;
}) {
  const heroTitle =
    material.heroTitle ?? `${material.materialName} Supplier for Industrial Applications`;
  const primaryQuoteHref = material.quoteCta?.primaryHref ?? "/request-a-quote";
  const secondaryQuoteHref = material.quoteCta?.secondaryHref ?? "/request-a-quote";

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" },
          { name: material.materialName, path: `/materials/${material.slug}` }
        ]}
      />
      <FaqJsonLd items={material.faqs} />

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {material.eyebrow ?? "Industrial engineering plastic"}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite [overflow-wrap:anywhere] sm:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              {material.introduction}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {material.primaryApplications.map((application) => (
                <span
                  key={application}
                  className="rounded-md border border-graphite/10 bg-white px-3 py-2 text-sm font-semibold text-ink"
                >
                  {application}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryQuoteHref}>
                {material.quoteCta?.primaryLabel ?? "Request a Quote"}
              </ButtonLink>
              <ButtonLink href={secondaryQuoteHref} variant="secondary">
                {material.quoteCta?.secondaryLabel ?? "Upload Your Drawing"}
              </ButtonLink>
            </div>
          </div>

          {material.heroImage ? (
            <SEOImagePanel image={material.heroImage} priority />
          ) : (
            <aside className="flex min-h-[20rem] flex-col justify-center rounded-md bg-graphite p-8 text-white shadow-soft">
              <FlaskConical className="size-9 text-citrus" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                Application review
              </p>
              <p className="mt-3 text-2xl font-semibold">
                Match material performance to operating conditions
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Include temperature, chemical exposure, mechanical load, wear,
                electrical, and documentation requirements with the RFQ.
              </p>
            </aside>
          )}
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Material overview"
              title={`What is ${material.materialName}?`}
              text={material.overview.whatIs}
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-graphite">
                  Key characteristics
                </h3>
                <ul className="mt-4 grid gap-3">
                  {material.overview.keyCharacteristics.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-steel">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-graphite">
                  Typical industries
                </h3>
                <ul className="mt-4 grid gap-3">
                  {material.overview.typicalIndustries.map((industry) => (
                    <li key={industry} className="flex gap-3 text-sm leading-6 text-steel">
                      <Factory
                        className="mt-0.5 size-5 shrink-0 text-amber"
                        aria-hidden="true"
                      />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {material.overview.image ? (
            <SEOImagePanel image={material.overview.image} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {material.overview.keyCharacteristics.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
                >
                  <CheckCircle2 className="size-5 text-teal" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Material properties"
            title={`${material.materialName} performance considerations`}
            text="Review each property against the actual operating environment and selected grade before final material approval."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {materialPropertyKeys.map((key) => (
              <article
                key={key}
                className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-graphite">
                  {material.propertyLabels?.[key] ?? propertyLabels[key]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {material.properties[key]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="available-forms" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Available forms"
            title={`${material.materialName} stock and custom part options`}
            text="Confirm grade, dimensions, quantity, and documentation requirements when requesting availability."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materialFormKeys.map((key) => (
              <SupplyCard
                key={key}
                card={material.availableForms[key]}
                label={material.formLabels?.[key] ?? formLabels[key]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/10 bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Applications"
            title={`${material.materialName} applications by industry`}
            text="Final material and grade selection should reflect the component design, operating conditions, and applicable documentation requirements."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materialApplicationKeys.map((key) => {
              const card = material.applications[key];
              const Icon = applicationIcons[key];
              const content = (
                <>
                  <Icon className="size-6 text-teal" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-graphite">
                    {applicationLabels[key]}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{card.description}</p>
                  {card.href ? (
                    <span className="mt-auto pt-5 text-sm font-semibold text-teal">
                      Explore application
                    </span>
                  ) : null}
                </>
              );

              return card.href ? (
                <Link
                  key={key}
                  href={card.href}
                  className="flex h-full flex-col rounded-md border border-graphite/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={key}
                  className="flex h-full flex-col rounded-md border border-graphite/10 bg-white p-6 shadow-sm"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          {material.machiningCapability.image ? (
            <SEOImagePanel image={material.machiningCapability.image} />
          ) : (
            <div className="grid min-h-[20rem] place-items-center rounded-md bg-graphite p-8 text-center text-white shadow-soft">
              <div>
                <Settings2 className="mx-auto size-10 text-citrus" aria-hidden="true" />
                <p className="mt-5 text-xl font-semibold">
                  Drawing-based plastic part production
                </p>
              </div>
            </div>
          )}
          <div>
            <SectionHeader
              eyebrow="Machining capability"
              title={`Custom CNC machining support for ${material.materialName}`}
              text={material.machiningCapability.description}
            />
            <ul className="mt-7 grid gap-4">
              {material.machiningCapability.capabilities.map((capability) => (
                <li key={capability} className="flex gap-3 text-sm leading-7 text-steel">
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-amber"
                    aria-hidden="true"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
                Explore CNC Machining
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <RelatedContentSection
        eyebrow={`Related ${material.materialName} resources`}
        title="Products, machining, and application guidance"
        links={material.relatedLinks}
      />

      <FAQAccordion items={material.faqs} />

      <QuoteCTASection
        id="material-rfq"
        quoteCta={material.quoteCta}
        defaultTitle={`Request a ${material.materialName} quote`}
        defaultDescription="Send grade, dimensions, quantity, application notes, and drawing files for material availability and manufacturing review."
      />
    </main>
  );
}
