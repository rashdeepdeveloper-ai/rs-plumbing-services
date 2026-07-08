import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";
import { team, values } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn about RS Plumbing Services, our mission, values, and professional plumbing team.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHeader path="/about" breadcrumb="About Us" title="A plumbing team built on clear answers and reliable workmanship." description="RS Plumbing Services helps local homes and businesses solve plumbing problems with professionalism, respect, and practical recommendations." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-navy-900">Company Story</h2>
            <p className="mt-5 leading-7 text-slate-600">
              RS Plumbing Services was created to make plumbing repairs feel less stressful for property owners. Our approach is simple: arrive prepared, inspect carefully, explain the options, and complete the approved work with attention to detail.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Today, we support homeowners, landlords, shops, and small offices with repairs, installations, preventive maintenance, and emergency plumbing needs.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-navy-900">Our Values</h2>
            <ul className="mt-5 space-y-3">
              {values.map((value) => (
                <li className="flex gap-3 text-slate-700" key={value}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 text-orange-500" />
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      <section className="bg-navy-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-navy-900">Mission</h2>
            <p className="mt-4 leading-7 text-slate-600">To deliver dependable plumbing service that protects properties, saves time, and gives customers confidence in every repair.</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-navy-900">Vision</h2>
            <p className="mt-4 leading-7 text-slate-600">To become the trusted first call for local plumbing support through honest service, strong workmanship, and long-term customer relationships.</p>
          </Card>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Meet the team" title="Friendly professionals ready to help." />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card className="text-center" key={member.name}>
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 text-2xl font-bold text-white">
                  {member.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
                <p className="mt-2 text-slate-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
