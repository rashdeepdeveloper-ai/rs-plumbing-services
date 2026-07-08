"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FaqAccordion({ items = faqs }: { items?: typeof faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-navy-100 rounded-lg border border-navy-100 bg-white shadow-soft">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-navy-900"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-orange-600" : ""}`} />
            </button>
            {isOpen ? <div className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
