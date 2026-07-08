import Image from "next/image";
import { projects } from "@/lib/site-data";

export function Gallery({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <figure className="group overflow-hidden rounded-lg border border-navy-100 bg-white shadow-soft" key={project.title}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} completed plumbing project`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="p-5 font-bold text-navy-900">{project.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
