import { PageHeader } from "@/components/page-header";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Plumbing FAQ",
  description: "Find answers to common plumbing questions about emergency service, estimates, leaks, remodel plumbing, and commercial plumbing.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <PageHeader path="/faq" breadcrumb="FAQ" title="Answers to common plumbing questions." description="Get clear answers about scheduling, emergency calls, leak response, estimates, remodel plumbing, and service options." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <FaqAccordion />
      </section>
      <CtaSection />
    </>
  );
}
