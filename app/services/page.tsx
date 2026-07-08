import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Plumbing Services",
  description: "Explore leak repair, drain cleaning, bathroom plumbing, kitchen plumbing, pipe repair, pump installation, and commercial plumbing services.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader path="/services" breadcrumb="Services" title="Plumbing services for urgent repairs, installations, and maintenance." description="Choose a service below to request help with leaks, drains, fixtures, water tanks, pumps, and commercial plumbing needs." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard detailed key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
