import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsappUrl } from "@/lib/company";
import { services } from "@/lib/site-data";

type Service = (typeof services)[number];

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const Icon = service.icon;

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {detailed ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg">
          <Image src={service.image} alt={`${service.title} service by RS Plumbing Services`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
          <Icon aria-hidden className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{service.description}</p>
        {detailed ? (
          <ul className="mt-5 space-y-3">
            {service.features.map((feature) => (
              <li className="flex gap-3 text-sm text-slate-700" key={feature}>
                <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
        <Button
          className="mt-6"
          href={whatsappUrl(`Hi RS Plumbing Services, I need ${service.title}.`)}
          variant={detailed ? "primary" : "outline"}
        >
          Request Service
        </Button>
      </div>
    </Card>
  );
}
