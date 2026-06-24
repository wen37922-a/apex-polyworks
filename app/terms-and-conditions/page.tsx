import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using the Apex PolyWorks website and submitting RFQs for plastic materials and custom parts.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`
  }
};

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Website use",
      text: "The website provides general information about plastic materials, services, products, and RFQ support. Website content is for planning and sourcing purposes and is not a substitute for buyer validation."
    },
    {
      title: "Quotes and availability",
      text: "Quotes, lead times, material availability, and manufacturing recommendations are subject to review of drawings, specifications, quantity, tolerance, finish, compliance needs, and production conditions."
    },
    {
      title: "Technical information",
      text: "Material descriptions and application notes are general guidance. Buyers are responsible for testing and approving materials and parts for their final application, regulatory requirements, and operating environment."
    },
    {
      title: "Drawings and intellectual property",
      text: "Drawings and project files submitted for RFQ review should be provided by authorized representatives. Submission does not transfer ownership of buyer drawings or proprietary project information."
    },
    {
      title: "Orders and production",
      text: "Final order terms, tolerances, inspection requirements, packaging, shipping, payment, and cancellation terms should be confirmed in writing before production begins."
    },
    {
      title: "Contact",
      text: `Questions about these terms can be sent to ${siteConfig.email}.`
    }
  ];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-and-conditions" }
        ]}
      />
      <PageHero
        eyebrow="Terms"
        title="Terms and Conditions"
        text="These terms outline the general conditions for using this website and submitting RFQs for plastic materials and custom plastic parts."
        primaryCta="Request a Quote"
        secondaryCta="Request a Quote"
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Last updated {siteConfig.lastModified}
          </p>
          <div className="mt-8 grid gap-6">
            {sections.map((section) => (
              <section key={section.title} className="rounded-md border border-graphite/10 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-graphite">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{section.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
