export const company = {
  name: "RS Plumbing Services",
  shortName: "RS Plumbing",
  tagline: "Reliable plumbing solutions for homes and businesses.",
  description:
    "RS Plumbing Services provides responsive leak repairs, installations, drain cleaning, bathroom plumbing, kitchen plumbing, and commercial plumbing support.",
  url: "https://www.rsplumbingservices.com",
  phone: "+91 99151 72075",
  whatsappNumber: "919915172075",
  email: "hello@rsplumbingservices.com",
  address: {
    street: "VPO: Thuha",
    city: "Rajpura",
    region: "Punjab",
    postalCode: "",
    country: "IN"
  },
  formattedAddress: "VPO: Thuha, Rajpura, Punjab",
  coordinates: {
    latitude: "30.4830",
    longitude: "76.5940"
  },
  hours: ["Monday-Saturday 8:00 AM - 8:00 PM", "Sunday Emergency Support"],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com"
  },
  serviceAreas: ["Mohali", "Zirakpur", "Rajpura", "Banur"]
} as const;

export type Company = typeof company;

export function whatsappUrl(message = "Hi RS Plumbing Services, I need plumbing help.") {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
