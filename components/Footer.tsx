import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  industryLinks,
  materialLinks,
  productLinks,
  serviceLinks,
  siteConfig
} from "@/lib/site";

export function Footer() {
  const groups = [
    ["Services", serviceLinks.slice(0, 5)],
    ["Materials", materialLinks.slice(0, 6)],
    ["Products", productLinks],
    ["Industries", industryLinks]
  ] as const;

  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-xl font-semibold">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Engineering plastic materials, cut-to-size stock, CNC machined parts, and custom fabrication support for US industrial buyers.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/75">
              <Link className="flex items-center gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.email}
              </Link>
              <Link className="flex items-center gap-3 hover:text-white" href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}>
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.phone}
              </Link>
              <span className="flex items-center gap-3">
                <MapPin className="size-4" aria-hidden="true" />
                {siteConfig.address}
              </span>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map(([title, links]) => (
              <div key={title}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-citrus">
                  {title}
                </p>
                <div className="mt-4 grid gap-2">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/robots.txt" className="hover:text-white">Robots</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms</Link>
            <Link href="/request-a-quote" className="hover:text-white">Request a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
