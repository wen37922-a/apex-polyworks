import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryCta?: string;
  secondaryCta?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  primaryCta = "Request a Quote",
  secondaryCta = "Request a Quote"
}: PageHeroProps) {
  return (
    <section className="border-b border-graphite/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request-a-quote">{primaryCta}</ButtonLink>
            <ButtonLink href="/request-a-quote" variant="secondary">
              {secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-3 rounded-md border border-graphite/10 bg-slate-50 p-4">
          {[
            ["RFQ review", "12-hour response for complete quote packages"],
            ["Order flexibility", "No MOQ on many custom and cut-size requests"],
            ["Material range", "50+ engineering plastics and specialty grades"]
          ].map(([titleItem, textItem]) => (
            <div key={titleItem} className="rounded-md bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-graphite">{titleItem}</p>
              <p className="mt-2 text-sm leading-6 text-steel">{textItem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
