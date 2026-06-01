import Link from "next/link";
import { ChevronDown, Menu, Quote } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Apex Polymer Works home">
          <span className="grid size-10 place-items-center rounded-md bg-teal text-white">
            <Quote className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-semibold leading-none text-graphite">
              {siteConfig.name}
            </span>
            <span className="mt-1 block text-xs font-medium text-steel">
              Engineering Plastics and Fabrication
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-slate-100 hover:text-teal"
                >
                  {item.title}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-md border border-graphite/10 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-mint hover:text-teal"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-slate-100 hover:text-teal"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-steel hover:text-teal">
            {siteConfig.email}
          </Link>
          <Link
            href="/request-a-quote"
            className="inline-flex min-h-10 items-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber/90"
          >
            Request a Quote
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-graphite/15 text-graphite">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-14 max-h-[75vh] w-[min(88vw,24rem)] overflow-auto rounded-md border border-graphite/10 bg-white p-3 shadow-soft">
            {primaryNav.map((item) =>
              item.children ? (
                <details key={item.title} className="border-b border-graphite/10 py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-graphite">
                    {item.title}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </summary>
                  <div className="mt-1 grid gap-1 pl-3">
                    <Link className="rounded-md px-3 py-2 text-sm text-steel hover:bg-slate-100" href={item.href}>
                      View all {item.title}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        className="rounded-md px-3 py-2 text-sm text-steel hover:bg-slate-100"
                        href={child.href}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  className="block rounded-md px-3 py-3 text-sm font-semibold text-graphite hover:bg-slate-100"
                  href={item.href}
                >
                  {item.title}
                </Link>
              )
            )}
            <Link
              href="/request-a-quote"
              className="mt-3 flex min-h-11 items-center justify-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
