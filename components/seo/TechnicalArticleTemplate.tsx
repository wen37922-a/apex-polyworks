import { Fragment } from "react";
import Link from "next/link";
import { CheckCircle2, Clock3, FileText } from "lucide-react";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import { ArticleJsonLd } from "@/components/seo/SEOJsonLd";
import {
  FAQAccordion,
  QuoteCTASection,
  RelatedContentSection,
  SEOImagePanel
} from "@/components/seo/SEOPageSections";
import type {
  TechnicalArticleData,
  TechnicalComparisonTable
} from "@/lib/seo-page-types";

function ComparisonTableSection({
  table,
  tableIndex
}: {
  table: TechnicalComparisonTable;
  tableIndex: number;
}) {
  return (
    <section
      id={`comparison-${tableIndex + 1}`}
      className="min-w-0 scroll-mt-28"
    >
      <h2 className="text-3xl font-semibold leading-tight text-graphite">
        {table.title}
      </h2>
      {table.description ? (
        <p className="mt-4 text-base leading-8 text-steel">
          {table.description}
        </p>
      ) : null}
      <div className="mt-6 min-w-0 max-w-full overflow-x-auto rounded-md border border-graphite/10">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <thead className="bg-graphite text-white">
            <tr>
              <th scope="col" className="px-4 py-4 font-semibold">
                Comparison factor
              </th>
              {table.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-4 py-4 font-semibold"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-graphite/10 even:bg-slate-50"
              >
                <th
                  scope="row"
                  className="px-4 py-4 font-semibold text-graphite"
                >
                  {row.label}
                </th>
                {table.columns.map((column, valueIndex) => (
                  <td
                    key={`${row.label}-${column}`}
                    className="px-4 py-4 leading-6 text-steel"
                  >
                    {row.values[valueIndex] ?? "Review by grade"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function TechnicalArticleTemplate({
  article
}: {
  article: TechnicalArticleData;
}) {
  const canonicalPath = `/blog/${article.slug}`;
  const comparisonTableAfterSectionId =
    article.comparisonTableAfterSectionId;
  const comparisonTables = article.comparisonTables ?? [];
  const tocItems = article.sections.flatMap((section) => {
    const sectionItem = {
      id: section.id,
      title: section.title
    };

    if (
      section.id === comparisonTableAfterSectionId &&
      comparisonTables.length
    ) {
      return [
        sectionItem,
        ...comparisonTables.map((table, tableIndex) => ({
          id: `comparison-${tableIndex + 1}`,
          title: table.title
        }))
      ];
    }

    return [sectionItem];
  });

  if (!comparisonTableAfterSectionId) {
    tocItems.push(
      ...comparisonTables.map((table, tableIndex) => ({
        id: `comparison-${tableIndex + 1}`,
        title: table.title
      }))
    );
  }

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: "/blog" },
          { name: article.title, path: canonicalPath }
        ]}
      />
      <ArticleJsonLd
        headline={article.title}
        description={article.introduction}
        canonicalPath={canonicalPath}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        authorName={article.authorName}
        image={article.heroImage}
        articleSection={article.category}
      />
      {article.faqs?.length ? <FaqJsonLd items={article.faqs} /> : null}

      <article className="bg-white">
        <header className="border-b border-graphite/10 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-20">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                {article.category}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite [overflow-wrap:anywhere] sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
                {article.introduction}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-steel">
                <span className="inline-flex items-center gap-2">
                  <FileText className="size-4 text-teal" aria-hidden="true" />
                  Published <time dateTime={article.datePublished}>{article.datePublished}</time>
                </span>
                {article.readTime ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="size-4 text-amber" aria-hidden="true" />
                    {article.readTime}
                  </span>
                ) : null}
              </div>
            </div>
            {article.heroImage ? (
              <SEOImagePanel image={article.heroImage} priority />
            ) : (
              <aside className="grid min-h-[18rem] place-items-center rounded-md bg-graphite p-8 text-center text-white shadow-soft">
                <div>
                  <FileText className="mx-auto size-11 text-citrus" aria-hidden="true" />
                  <p className="mt-5 text-xl font-semibold">Technical material guidance</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Application-focused information for engineering and purchasing review.
                  </p>
                </div>
              </aside>
            )}
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.28fr_0.72fr] lg:items-start lg:px-8 lg:py-20">
          <nav
            aria-label="Table of contents"
            className="rounded-md border border-graphite/10 bg-slate-50 p-6 lg:sticky lg:top-28"
          >
            <h2 className="text-lg font-semibold text-graphite">Table of contents</h2>
            <ol className="mt-5 grid gap-3">
              {tocItems.map((item, index) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-sm leading-6 text-steel transition hover:text-teal"
                  >
                    {index + 1}. {item.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0">
            <div className="grid min-w-0 gap-14">
              {article.sections.map((section) => (
                <Fragment key={section.id}>
                  <section id={section.id} className="min-w-0 scroll-mt-28">
                    <h2 className="text-3xl font-semibold leading-tight text-graphite">
                      {section.title}
                    </h2>
                    <div className="mt-5 grid gap-5 text-base leading-8 text-ink">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets?.length ? (
                      <ul className="mt-6 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm leading-7 text-steel"
                          >
                            <CheckCircle2
                              className="mt-1 size-5 shrink-0 text-teal"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.links?.length ? (
                      <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-md border border-graphite/10 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-sm"
                          >
                            <span className="font-semibold text-graphite">
                              {link.title}
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-steel">
                              {link.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                    {section.image ? (
                      <div className="mt-8">
                        <SEOImagePanel
                          image={section.image}
                          sizes="(min-width: 1024px) 62vw, 100vw"
                        />
                      </div>
                    ) : null}
                  </section>
                  {section.id === comparisonTableAfterSectionId
                    ? comparisonTables.map((table, tableIndex) => (
                        <ComparisonTableSection
                          key={table.title}
                          table={table}
                          tableIndex={tableIndex}
                        />
                      ))
                    : null}
                </Fragment>
              ))}
            </div>

            {!comparisonTableAfterSectionId && comparisonTables.length ? (
              <div className="mt-14 grid gap-12">
                {comparisonTables.map((table, tableIndex) => (
                  <ComparisonTableSection
                    key={table.title}
                    table={table}
                    tableIndex={tableIndex}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </article>

      {article.faqs?.length ? (
        <FAQAccordion
          items={article.faqs}
          title="Technical Article FAQ"
          text="Concise answers to common material and manufacturing questions."
        />
      ) : null}

      <RelatedContentSection
        eyebrow="Related products"
        title="Continue from research to sourcing"
        links={article.relatedProducts}
      />

      <QuoteCTASection
        quoteCta={article.quoteCta}
        defaultTitle="Need material or machining support?"
        defaultDescription="Send application conditions, material preferences, dimensions, quantity, and drawing files for engineering and quotation review."
      />
    </main>
  );
}
