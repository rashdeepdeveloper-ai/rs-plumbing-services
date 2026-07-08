import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <div className="mb-4 flex gap-1 text-orange-500" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star aria-hidden className="h-5 w-5 fill-current" key={index} />
        ))}
      </div>
      <blockquote className="leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <div className="mt-6">
        <p className="font-bold text-navy-900">{testimonial.name}</p>
        <p className="text-sm text-slate-500">{testimonial.location}</p>
      </div>
    </Card>
  );
}
