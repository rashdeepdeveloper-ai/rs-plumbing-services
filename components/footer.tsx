import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Twitter } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";
import { navLinks } from "@/lib/site-data";

const socialIcons = [
  { href: company.social.facebook, label: "Facebook", icon: Facebook },
  { href: company.social.instagram, label: "Instagram", icon: Instagram },
  { href: company.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: company.social.x, label: "X", icon: Twitter }
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xl font-extrabold">{company.name}</p>
          <p className="mt-4 leading-7 text-navy-100">{company.description}</p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ href, label, icon: Icon }) => (
              <a key={label} aria-label={label} className="focus-ring rounded-lg bg-white/10 p-2 transition hover:bg-orange-500" href={href}>
                <Icon aria-hidden className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-base font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="focus-ring rounded text-navy-100 hover:text-orange-300" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">Contact Details</h2>
          <ul className="mt-4 space-y-4 text-navy-100">
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-1 h-5 w-5 text-orange-400" />
              <a className="focus-ring rounded hover:text-orange-300" href={whatsappUrl("Hi RS Plumbing Services, I need plumbing help.")}>{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-1 h-5 w-5 text-orange-400" />
              <a className="focus-ring rounded hover:text-orange-300" href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-1 h-5 w-5 text-orange-400" />
              <span>{company.formattedAddress}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base font-bold">Business Hours</h2>
          <ul className="mt-4 space-y-3 text-navy-100">
            {company.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-navy-100">
        Copyright © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
