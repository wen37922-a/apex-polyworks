import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-steel">
          The page may have moved, or the link may no longer be active. You can return to the homepage or send a quote request for plastic materials and custom parts.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/request-a-quote" variant="secondary">Request a Quote</ButtonLink>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm font-semibold text-steel">
          <Link href="/services" className="hover:text-teal">Services</Link>
          <Link href="/materials" className="hover:text-teal">Materials</Link>
          <Link href="/products" className="hover:text-teal">Products</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
        </div>
      </section>
    </main>
  );
}
