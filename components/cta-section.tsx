import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/company";

export function CtaSection() {
  return (
    <section className="bg-navy-900 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-300">Need a Professional Plumber?</p>
          <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">Get dependable plumbing help without the guesswork.</h2>
          <p className="mt-4 max-w-2xl text-navy-100">Call for urgent repairs or request a free quote for your next plumbing project.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="gap-2" href={whatsappUrl("Hi Gurkirpa Plumbing Services, I need plumbing help.")}>
            <PhoneCall aria-hidden className="h-4 w-4" />
            Call Now
          </Button>
          <Button href={whatsappUrl("Hi Gurkirpa Plumbing Services, I want a free plumbing quote.")} variant="outline">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
