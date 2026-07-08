import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";
import { company, whatsappUrl } from "@/lib/company";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact RS Plumbing Services for plumbing quotes, emergency repairs, service scheduling, and general questions.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader path="/contact" breadcrumb="Contact" title="Request a plumbing quote or schedule service." description="Share a few details about your plumbing issue and our team will follow up with practical next steps." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <ContactForm />
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold text-navy-900">Contact Details</h2>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <Phone aria-hidden className="mt-1 h-5 w-5 text-orange-500" />
                  <a className="focus-ring rounded hover:text-orange-600" href={whatsappUrl("Hi RS Plumbing Services, I need plumbing help.")}>{company.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden className="mt-1 h-5 w-5 text-orange-500" />
                  <a className="focus-ring rounded hover:text-orange-600" href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden className="mt-1 h-5 w-5 text-orange-500" />
                  <span>{company.formattedAddress}</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-navy-900">Business Hours</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {company.hours.map((hour) => (
                  <li className="flex gap-3" key={hour}>
                    <Clock3 aria-hidden className="mt-0.5 h-5 w-5 text-orange-500" />
                    {hour}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-navy-50 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-80 items-center justify-center rounded-lg border border-dashed border-navy-200 bg-white p-8 text-center shadow-soft">
            <div>
              <MapPin aria-hidden className="mx-auto h-10 w-10 text-orange-500" />
              <h2 className="mt-4 text-2xl font-bold text-navy-900">Google Maps Placeholder</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Replace this block with an embedded Google Map when the final business profile and map location are ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
