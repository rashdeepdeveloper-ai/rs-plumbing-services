import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const fullItems = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="bg-navy-50">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          {fullItems.map((item, index) => (
            <li className="flex items-center gap-2" key={item.path}>
              {index > 0 ? <ChevronRight aria-hidden className="h-4 w-4 text-slate-400" /> : null}
              {index === fullItems.length - 1 ? (
                <span aria-current="page" className="font-semibold text-navy-900">
                  {item.name}
                </span>
              ) : (
                <Link className="focus-ring rounded text-slate-600 hover:text-orange-600" href={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
