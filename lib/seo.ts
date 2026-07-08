import type { Metadata } from "next";
import { company } from "@/lib/company";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: SeoOptions): Metadata {
  const canonical = new URL(path, company.url).toString();
  const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: company.name,
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: company.name,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    description: company.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.coordinates.latitude,
      longitude: company.coordinates.longitude
    },
    openingHours: company.hours,
    areaServed: company.serviceAreas
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, company.url).toString()
    }))
  };
}
