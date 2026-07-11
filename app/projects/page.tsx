import { Gallery } from "@/components/gallery";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects and Gallery",
  description: "View recent plumbing project examples including bathroom upgrades, kitchen plumbing, water heater replacement, and pipe repairs.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader path="/projects" breadcrumb="Projects" title="Recent plumbing projects and gallery." description="Browse sample project images that show the kind of clean repair, installation, and upgrade work Gurkirpa Plumbing Services provides." />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Gallery />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
