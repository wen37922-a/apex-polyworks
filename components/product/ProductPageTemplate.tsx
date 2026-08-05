import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqJsonLd } from "@/components/StructuredData";

type ContentCard = {
  title: string;
  text: string;
};

type SpecificationItem = {
  label: string;
  value: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type ProductPageProps = {
  title: string;
  description: string;
  materialName?: string;
  materialCategory?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroSupportingText?: string;
  heroHighlights?: string[];
  heroImage: string;
  productImages: string[];
  applicationImages?: string[];
  warehouseImage?: string;
  quoteCtaLabel?: string;
  secondaryQuoteCtaLabel?: string;
  quoteHref?: string;
  defaultMaterial?: string;
  overviewTitle?: string;
  overviewText?: string;
  forms?: string[];
  availableForms?: string[];
  supplyOptions?: ContentCard[];
  supplyOptionsTitle?: string;
  supplyOptionsDescription?: string;
  specifications?: SpecificationItem[];
  sizeInformation?: string;
  customOptions?: string;
  applications?: Array<string | ContentCard>;
  typicalGrades?: string[];
  machiningCapabilities?: string[];
  buyerApplications?: string[];
  showCutToSizeSupport?: boolean;
  cutToSizeTitle?: string;
  cutToSizeText?: string;
  cutToSizeCtaLabel?: string;
  showCncSupport?: boolean;
  cncSupportTitle?: string;
  cncSupportText?: string;
  quoteRequirements?: string[];
  quoteChecklist?: string[];
  trustItems?: ContentCard[];
  certificateNote?: string;
  faqs?: FaqItem[];
  relatedLinks?: {
    href: string;
    label: string;
    text: string;
  }[];
  productGalleryTitle?: string;
  applicationsTitle?: string;
  warehouseTitle?: string;
  warehouseEyebrow?: string;
  warehouseText?: string;
};

function productAlt(materialName: string, index: number) {
  return `${materialName} engineering plastic form image ${index + 1}`;
}

function applicationAlt(materialName: string, index: number) {
  return `${materialName} industrial application image ${index + 1}`;
}

function normalizeApplications(
  applications: Array<string | ContentCard>,
  buyerApplications: string[]
) {
  const items = applications.length ? applications : buyerApplications;

  return items.map((item) =>
    typeof item === "string"
      ? { title: item, text: `Discuss ${item.toLowerCase()} requirements with our material team.` }
      : item
  );
}

export function ProductPageTemplate({
  title,
  description,
  materialName = title,
  materialCategory = "Engineering Plastic",
  heroTitle = title,
  heroDescription,
  heroSupportingText = "Engineering plastic supply for demanding industrial applications",
  heroHighlights = [],
  heroImage,
  productImages,
  applicationImages = [],
  warehouseImage,
  quoteCtaLabel = "Request a Material Quote",
  secondaryQuoteCtaLabel = "Send Material Requirements",
  quoteHref = "/request-a-quote",
  defaultMaterial = materialName,
  overviewTitle,
  overviewText,
  forms = [],
  availableForms = [],
  supplyOptions = [],
  supplyOptionsTitle,
  supplyOptionsDescription,
  specifications = [],
  sizeInformation = "Available in standard and custom sizes",
  customOptions = "Cut-to-size and downstream processing options can be reviewed for each requirement.",
  applications = [],
  typicalGrades = [],
  machiningCapabilities = [],
  buyerApplications = [],
  showCutToSizeSupport = true,
  cutToSizeTitle,
  cutToSizeText,
  cutToSizeCtaLabel = "Request a Cut-to-Size Quote",
  showCncSupport,
  cncSupportTitle = "Need Finished Plastic Parts?",
  cncSupportText = "CNC machining can be reviewed as secondary support when a project requires finished components instead of stock material or cut blanks.",
  quoteRequirements = [],
  quoteChecklist = [],
  trustItems = [],
  certificateNote,
  faqs = [],
  relatedLinks = [],
  productGalleryTitle,
  applicationsTitle,
  warehouseTitle,
  warehouseEyebrow = "Cut-to-size support",
  warehouseText
}: ProductPageProps) {
  const resolvedForms = forms.length ? forms : availableForms;
  const resolvedApplications = normalizeApplications(applications, buyerApplications);
  const resolvedShowCncSupport = showCncSupport ?? machiningCapabilities.length > 0;
  const resolvedSupplyOptions = supplyOptions.length
    ? supplyOptions
    : [
        {
          title: "Full Sheet / Rod Supply",
          text: "Request full stock shapes in the material form required for your purchasing or production program."
        },
        {
          title: "Cut-to-Size",
          text: "Share target dimensions and quantity for a review of custom-cut blanks or pieces."
        },
        ...(resolvedShowCncSupport
          ? [
              {
                title: "CNC Support",
                text: "Finished plastic components can be reviewed from drawings, specifications, or application requirements."
              }
            ]
          : [])
      ];
  const resolvedSpecifications: SpecificationItem[] = [
    { label: "Material", value: materialName },
    {
      label: "Available forms",
      value: resolvedForms.length
        ? resolvedForms.join(", ")
        : "Available forms are confirmed against each request."
    },
    { label: "Size information", value: sizeInformation },
    { label: "Custom options", value: customOptions },
    ...typicalGrades.map((grade) => ({ label: "Grade option", value: grade })),
    ...specifications
  ];
  const resolvedCutToSizeText =
    cutToSizeText ??
    warehouseText ??
    `Share the required ${materialName} form, dimensions, quantity, and application details. Availability and cutting scope are confirmed during quote review.`;
  const resolvedQuoteRequirements = quoteRequirements.length
    ? quoteRequirements
    : quoteChecklist;

  return (
    <main>
      {faqs.length ? <FaqJsonLd items={faqs} /> : null}

      <section className="border-b border-graphite/10 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {materialCategory} Supply
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-4 text-lg font-semibold text-teal">
              {heroSupportingText}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              {heroDescription ?? description}
            </p>
            {heroHighlights.length ? (
              <ul className="mt-6 grid gap-2 text-sm font-semibold text-graphite sm:grid-cols-2">
                {heroHighlights.map((highlight) => (
                  <li key={highlight} className="border-l-2 border-amber pl-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={quoteHref}>{quoteCtaLabel}</ButtonLink>
              <ButtonLink href={quoteHref} variant="secondary">
                {secondaryQuoteCtaLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-soft sm:min-h-[24rem]">
            <Image
              src={heroImage}
              alt={`${materialName} material supply for industrial buyers`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Material overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              {overviewTitle ?? `About ${materialName}`}
            </h2>
            <p className="mt-4 text-base leading-8 text-steel">
              {overviewText ??
                `Apex PolyWorks supports ${materialName} sourcing in requested forms, sizes, and downstream processing options. Material requirements are reviewed against the application before quotation.`}
            </p>
          </div>
          <QuoteForm
            compact
            showQuantity
            showSize
            defaultMaterial={defaultMaterial}
            title={`Quick RFQ for ${materialName}`}
            description="Name, email, material type, size, quantity, and drawing upload are enough to start."
          />
        </div>
      </section>

      {resolvedForms.length ? (
        <section className="border-b border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Available forms
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {materialName} Forms
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                Form availability is based on the material grade, requested dimensions, and project quantity.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {resolvedForms.map((form) => (
                <div
                  key={form}
                  className="rounded-md border border-graphite/10 bg-white px-5 py-6 text-base font-semibold text-graphite shadow-sm"
                >
                  {form}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Supply options
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              {supplyOptionsTitle ?? `${materialName} Supply Options`}
            </h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              {supplyOptionsDescription ??
                "Choose the supply route that matches your purchasing, fabrication, or finished-component requirements."}
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedSupplyOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-graphite">{option.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-graphite/10 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Specifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-graphite">
              Information for Material Review
            </h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              Exact grade, form, dimensions, and custom requirements are confirmed during quote review.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {resolvedSpecifications.map((item, index) => (
              <div
                key={`${item.label}-${item.value}-${index}`}
                className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
                  {item.label}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-steel">{item.value}</dd>
              </div>
            ))}
          </dl>
          {certificateNote ? (
            <div className="mt-5 rounded-md border border-graphite/10 bg-graphite p-5 text-white shadow-sm">
              <h3 className="text-lg font-semibold">Documentation and traceability note</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{certificateNote}</p>
            </div>
          ) : null}
        </div>
      </section>

      {productImages.length ? (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Product gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {productGalleryTitle ?? `${materialName} Material Forms`}
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                Review representative material forms and surface appearance before sending an RFQ.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {productImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm"
                >
                  <Image
                    src={image}
                    alt={productAlt(materialName, index)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {resolvedApplications.length || applicationImages.length ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Applications
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {applicationsTitle ?? `${materialName} Applications`}
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                Material suitability depends on operating conditions, component design, and project requirements.
              </p>
            </div>
            {resolvedApplications.length ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resolvedApplications.map((application) => (
                  <article
                    key={application.title}
                    className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-graphite">{application.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">{application.text}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {applicationImages.length ? (
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                {applicationImages.map((image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={applicationAlt(materialName, index)}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {showCutToSizeSupport ? (
        <section className="bg-white py-16 lg:py-20">
          <div
            className={`mx-auto grid max-w-7xl gap-8 px-6 lg:items-center lg:px-8 ${
              warehouseImage ? "lg:grid-cols-[0.95fr_1fr]" : "lg:grid-cols-[0.8fr_1.2fr]"
            }`}
          >
            {warehouseImage ? (
              <div className="relative min-h-[18rem] overflow-hidden rounded-md border border-graphite/10 bg-slate-50 shadow-sm sm:min-h-[24rem]">
                <Image
                  src={warehouseImage}
                  alt={`${materialName} cut-to-size material supply support`}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {["Requested dimensions", "Project quantities", "Material and grade review"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-md border border-graphite/10 bg-slate-50 px-5 py-4 text-sm font-semibold text-graphite"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                {warehouseEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                {cutToSizeTitle ?? warehouseTitle ?? `Cut-to-Size ${materialName} Support`}
              </h2>
              <p className="mt-4 text-base leading-8 text-steel">{resolvedCutToSizeText}</p>
              <div className="mt-8">
                <ButtonLink href={quoteHref}>{cutToSizeCtaLabel}</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {resolvedShowCncSupport ? (
        <section className="border-y border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Optional CNC support
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">{cncSupportTitle}</h2>
              <p className="mt-4 text-base leading-8 text-steel">{cncSupportText}</p>
              <div className="mt-8">
                <ButtonLink href="/services/cnc-plastic-machining" variant="secondary">
                  Explore CNC Support
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {(machiningCapabilities.length
                ? machiningCapabilities
                : [
                    "Drawing-based component review",
                    "Prototype and repeat production support",
                    "Material-focused machining discussion"
                  ]
              ).map((capability) => (
                <div
                  key={capability}
                  className="rounded-md border border-graphite/10 bg-white px-5 py-5 text-sm font-semibold text-graphite shadow-sm"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {resolvedQuoteRequirements.length ? (
        <section className="border-b border-graphite/10 bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Purchasing checklist
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">Quote Requirements</h2>
              <p className="mt-4 text-base leading-8 text-steel">
                These details help clarify material, cutting, processing, lead-time, and freight assumptions.
              </p>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {resolvedQuoteRequirements.map((requirement) => (
                  <div
                    key={requirement}
                    className="rounded-md border border-graphite/10 bg-slate-50 px-4 py-5 text-sm font-semibold text-graphite shadow-sm"
                  >
                    {requirement}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={quoteHref}>{quoteCtaLabel}</ButtonLink>
                <ButtonLink href={quoteHref} variant="secondary">
                  {secondaryQuoteCtaLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {trustItems.length ? (
        <section className="border-b border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                Supply confidence
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                Support for Industrial Purchasing Programs
              </h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-graphite">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedLinks.length ? (
        <section className="border-b border-graphite/10 bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
              Related sourcing pages
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-graphite/10 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
                >
                  <span className="text-base font-semibold text-graphite">{link.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-steel">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faqs.length ? (
        <section className="border-b border-graphite/10 bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Material FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-graphite">
                Frequently Asked Questions About {materialName}
              </h2>
            </div>
            <div className="mt-8 divide-y divide-graphite/10 border-y border-graphite/10 bg-white">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-5 py-5 open:bg-white sm:px-6">
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-graphite">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-steel">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-md bg-graphite px-6 py-10 text-white lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
                  Ready for quote review
                </p>
                <h2 className="mt-3 text-3xl font-semibold">Request {materialName} Quote</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
                  Send the material form, size, quantity, application details, and any drawing files for review.
                </p>
              </div>
              <ButtonLink href={quoteHref} variant="primary">
                {quoteCtaLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
