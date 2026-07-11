import { PageHeader } from "@/components/page-header";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Customer Testimonials",
  description: "Read customer reviews for Gurkirpa Plumbing Services from local homeowners and businesses.",
  path: "/testimonials"
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader path="/testimonials" breadcrumb="Testimonials" title="Customer reviews from homeowners and businesses." description="These realistic sample testimonials show the professional, responsive service experience Gurkirpa Plumbing Services is designed to provide." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
