import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Apex Polymer Works, including how RFQ, contact, and project information may be collected and used.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`
  }
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information we collect",
      text: "When you submit a quote request or contact form, we may collect your name, company, email, phone number, country, material requirements, service needs, quantity, drawings, and project description."
    },
    {
      title: "How we use information",
      text: "We use submitted information to review RFQs, respond to technical questions, estimate pricing and lead time, coordinate project details, and improve our website and customer communication."
    },
    {
      title: "Drawings and project files",
      text: "Uploaded drawings, specifications, images, and related files are used only for quote review, manufacturability review, and project communication unless another use is agreed in writing."
    },
    {
      title: "Analytics and website data",
      text: "The website may later use analytics tools to understand page performance, traffic sources, and conversion activity. Analytics should be configured to support business measurement without selling personal information."
    },
    {
      title: "Information sharing",
      text: "We do not sell personal information. We may share project details with manufacturing, logistics, technology, or professional service providers when needed to respond to your request or fulfill a project."
    },
    {
      title: "Contact",
      text: `Questions about this policy can be sent to ${siteConfig.email}.`
    }
  ];

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" }
        ]}
      />
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        text="This policy explains how Apex Polymer Works handles RFQ, contact, and project information submitted through the website."
        primaryCta="Request a Quote"
        secondaryCta="Contact Sales"
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
