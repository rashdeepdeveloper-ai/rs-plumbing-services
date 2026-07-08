import { Breadcrumbs } from "@/components/breadcrumbs";

type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumb: string;
  path: string;
};

export function PageHeader({ title, description, breadcrumb, path }: PageHeaderProps) {
  return (
    <>
      <section className="bg-navy-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-300">{breadcrumb}</p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-navy-100">{description}</p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: breadcrumb, path }]} />
    </>
  );
}
