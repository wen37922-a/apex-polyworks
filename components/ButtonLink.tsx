import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-amber text-white hover:bg-amber/90 focus-visible:outline-amber/40 shadow-sm",
  secondary:
    "border border-graphite/15 bg-white text-graphite hover:border-teal hover:text-teal focus-visible:outline-teal/30",
  dark: "bg-teal text-white hover:bg-teal/90 focus-visible:outline-teal/30"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-4 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
