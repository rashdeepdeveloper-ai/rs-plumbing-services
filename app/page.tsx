import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/service-card";
import { Gallery } from "@/components/gallery";
import { TestimonialCard } from "@/components/testimonial-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { company, whatsappUrl } from "@/lib/company";
import { createMetadata } from "@/lib/seo";
import { faqs, services, testimonials, whyChooseUs } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Professional Local Plumbing Services",
  description: "Fast leak repair, drain cleaning, bathroom plumbing, kitchen plumbing, and commercial plumbing from RS Plumbing Services.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-50 bg-hero-grid bg-[length:32px_32px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <MotionReveal>
            <div>
              <p className="mb-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow-sm">
                Trusted residential and commercial plumbing
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-normal text-navy-900 sm:text-6xl">
                Reliable plumbing services when your home or business needs them most.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                {company.name} helps local property owners solve leaks, clogs, installations, and plumbing upgrades with clear pricing and professional workmanship.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2" href={whatsappUrl("Hi RS Plumbing Services, I need plumbing help.")}>
                  <PhoneCall aria-hidden className="h-4 w-4" />
                  Call Now
                </Button>
                <Button href={whatsappUrl("Hi RS Plumbing Services, I want a free plumbing quote.")} variant="secondary">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional plumber repairing pipes under a sink"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-lg bg-white p-5 shadow-soft sm:left-auto sm:w-72">
                <p className="text-sm font-bold text-navy-900">Same-day help available</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Call for leaks, backups, fixture failures, and urgent repairs.</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Why choose us" title="Plumbing service built around trust, speed, and clean workmanship." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal delay={index * 0.04} key={item.title}>
                  <Card>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-orange-600">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our services" title="Full-service plumbing support for everyday problems and planned upgrades." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="About RS Plumbing"
              title="Local plumbers focused on dependable repairs and respectful service."
              description="From first call to final cleanup, our team keeps the process simple. We explain what is happening, recommend practical solutions, and complete plumbing work with the level of care your property deserves."
            />
            <ul className="space-y-3">
              {["Licensed service mindset", "Clean job sites", "Repair and installation expertise"].map((item) => (
                <li className="flex gap-3 text-slate-700" key={item}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-7 gap-2" href="/about" variant="secondary">
              Learn More
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=80"
              alt="Plumbing technician reviewing repair work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Recent projects" title="Clean installs, careful repairs, and plumbing upgrades." />
          <Gallery limit={3} />
          <div className="mt-10 text-center">
            <Button href="/projects" variant="secondary">View Gallery</Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Customer testimonials" title="Homeowners and business owners count on us for practical plumbing help." />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Service areas" title="Serving nearby communities with responsive plumbing support." />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {company.serviceAreas.map((area) => (
              <Link className="focus-ring rounded-lg border border-navy-100 bg-white px-5 py-4 font-semibold text-navy-900 shadow-sm transition hover:border-orange-500 hover:text-orange-600" href="/contact" key={area}>
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Quick answers before you book a plumber." />
        <FaqAccordion items={faqs.slice(0, 4)} />
      </section>

      <section className="bg-navy-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionTitle align="left" eyebrow="Contact" title="Tell us what is happening and we will help you plan the next step." />
            <p className="leading-7 text-slate-600">Use the form for quotes, scheduling, remodel planning, or general plumbing questions.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
