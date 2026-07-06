import Image from "next/image";
import Link from "next/link";

export type MaterialCardProps = {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  applications: string;
  tags: string[];
};

export function MaterialCard({ title, href, image, alt, description, applications, tags }: MaterialCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-graphite/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-soft">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-graphite/0 px-4 text-center text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:bg-graphite/65 group-hover:opacity-100">
          View {title}
        </span>
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
