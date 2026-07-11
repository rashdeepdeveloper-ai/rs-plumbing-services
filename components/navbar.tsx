"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company, whatsappUrl } from "@/lib/company";
import { navLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="focus-ring flex items-center rounded text-navy-900">
          <Image src="/logo-transparent.png" alt={company.name} width={176} height={120} className="h-12 w-auto sm:h-14" priority />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded text-sm font-semibold transition hover:text-orange-600 ${
                pathname === link.href ? "text-orange-600" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-navy-900 hover:text-orange-600" href={whatsappUrl("Hi Gurkirpa Plumbing Services, I need plumbing help.")}>
            <Phone aria-hidden className="h-4 w-4" />
            {company.phone}
          </a>
          <Button href={whatsappUrl("Hi Gurkirpa Plumbing Services, I want a plumbing quote.")}>Get a Quote</Button>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy-100 text-navy-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-navy-100 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`focus-ring rounded-lg px-3 py-3 text-sm font-semibold ${
                  pathname === link.href ? "bg-navy-50 text-orange-600" : "text-slate-700 hover:bg-navy-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-3 w-full" href={whatsappUrl("Hi Gurkirpa Plumbing Services, I want a plumbing quote.")}>
              Get a Quote
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
