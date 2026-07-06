import Image from "next/image";
import Link from "next/link";

export type MaterialCardProps = {
  title: string;
  href: string;
  images: {
    product: string;
    application: string;
    capability?: string;
  };
  description: string;
  applications: string;
  tags: string[];
};

function CardImage({ src, alt, label, className = "" }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <div className={`relative min-h-0 overflow-hidden bg-slate-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized={src.toLowerCase().endsWith(".png")}
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 34vw, 67vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/65 via-transparent to-transparent" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 rounded-sm bg-graphite/75 px-2 py-1 text-[10px] font-semibold uppercase text-white">
        {label}
      </span>
    </div>
  );
}

export function MaterialCard({ title, href, images, description, applications, tags }: MaterialCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-soft">
      <Link href={href} className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-px overflow-hidden bg-white" aria-label={`View ${title} material details`}>
        <CardImage
          src={images.product}
          alt={`${title} sheet rod or machined plastic product`}
          label="Product"
          className="row-span-2"
        />
        <CardImage
          src={images.application}
          alt={`${title} plastic in an industrial application`}
          label="Application"
          className={images.capability ? "" : "row-span-2"}
        />
        {images.capability ? (
          <CardImage
            src={images.capability}
            alt={`${title} material supply and manufacturing capability`}
            label="Capability"
          />
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-graphite">{title}</h3>
        <p className="mt-3 truncate text-sm text-steel" title={description}>{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-sm bg-teal/10 px-2 py-1 text-[11px] font-semibold uppercase text-teal">{tag}</span>)}
        </div>
        <p className="mt-4 truncate border-t border-graphite/10 pt-4 text-sm text-ink" title={applications}>
          <span className="font-semibold">Typical Applications:</span> {applications}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <Link href={href} className="inline-flex min-h-10 items-center justify-center rounded-md bg-slate-700 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800">
            View Details
          </Link>
          <Link href="/request-a-quote" className="inline-flex min-h-10 items-center justify-center rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-red-700">
            Request RFQ
          </Link>
        </div>
      </div>
    </article>
  );
}
