import {
  Bath,
  Building2,
  CircleDollarSign,
  Clock3,
  Droplets,
  Hammer,
  HeartHandshake,
  Home,
  LifeBuoy,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Trophy,
  Wrench
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const whyChooseUs = [
  { title: "Experienced Team", description: "Licensed technicians who diagnose problems clearly and complete work with care.", icon: Trophy },
  { title: "Fast Service", description: "Responsive scheduling and arrival windows that respect your day.", icon: Clock3 },
  { title: "Affordable Pricing", description: "Straightforward estimates before work begins, with options for your budget.", icon: CircleDollarSign },
  { title: "Emergency Support", description: "Priority help for leaks, backups, and plumbing issues that cannot wait.", icon: LifeBuoy },
  { title: "Quality Work", description: "Durable materials, neat installations, and repairs built for everyday use.", icon: ShieldCheck },
  { title: "Customer Satisfaction", description: "Friendly communication from first call through final cleanup.", icon: HeartHandshake }
];

export const services = [
  {
    slug: "leak-repair",
    title: "Leak Repair",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
    description: "Quick leak detection and repairs for pipes, fixtures, valves, and hidden water damage risks.",
    features: ["Pipe leak diagnosis", "Fixture leak repair", "Water pressure checks", "Preventive recommendations"]
  },
  {
    slug: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    description: "Complete bathroom plumbing support for remodels, repairs, fixture replacement, and upgrades.",
    features: ["Toilet repairs", "Shower valves", "Vanity hookups", "Bathroom remodel plumbing"]
  },
  {
    slug: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    icon: Home,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=80",
    description: "Reliable kitchen plumbing for sinks, garbage disposals, dishwashers, and water lines.",
    features: ["Sink installation", "Disposal replacement", "Dishwasher connections", "Supply line repairs"]
  },
  {
    slug: "water-tank-installation",
    title: "Water Tank Installation",
    icon: ShowerHead,
    image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=900&q=80",
    description: "Professional water tank installation and replacement with correct sizing and safe connections.",
    features: ["Tank replacement", "Safety checks", "Pressure testing", "Maintenance guidance"]
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    description: "Pipe repair and replacement for corrosion, burst lines, low pressure, and recurring leaks.",
    features: ["Copper and PEX repair", "Burst pipe response", "Repiping estimates", "Insulation support"]
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
    description: "Drain clearing for sinks, tubs, showers, and main lines using clean, effective methods.",
    features: ["Clog removal", "Main line cleaning", "Odor troubleshooting", "Drain maintenance tips"]
  },
  {
    slug: "pump-installation",
    title: "Pump Installation",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&w=900&q=80",
    description: "Sump, booster, and utility pump installation to help protect water flow and property.",
    features: ["Sump pump installs", "Backup pump options", "Float switch checks", "Discharge testing"]
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    description: "Plumbing maintenance, repairs, and installations for offices, shops, and local facilities.",
    features: ["Fixture maintenance", "Scheduled repairs", "Code-aware work", "Tenant improvement support"]
  }
];

export const projects = [
  { title: "Modern Bathroom Fixture Upgrade", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" },
  { title: "Kitchen Sink and Dishwasher Hookup", image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=900&q=80" },
  { title: "Commercial Restroom Refresh", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=80" },
  { title: "Water Heater Replacement", image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80" },
  { title: "Basement Pump Installation", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80" },
  { title: "Pipe Repair and Pressure Test", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80" }
];

export const testimonials = [
  {
    name: "Maya Thompson",
    location: "Mohali",
    quote: "Gurkirpa Plumbing Services found a slow leak behind our vanity, explained the repair clearly, and left the bathroom spotless.",
    rating: 5
  },
  {
    name: "Daniel Brooks",
    location: "Zirakpur",
    quote: "The team replaced our old water tank without any pressure tactics. The quote was fair and the work was tidy.",
    rating: 5
  },
  {
    name: "Priya Raman",
    location: "Rajpura",
    quote: "Fast, polite, and professional. They cleared our kitchen drain and helped us prevent the same issue from coming back.",
    rating: 5
  },
  {
    name: "Jordan Ellis",
    location: "Banur",
    quote: "We use Gurkirpa Plumbing for our small office. They are reliable, easy to schedule, and communicate well with our staff.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How quickly can you respond to a plumbing emergency?",
    answer: "Emergency availability depends on the day and current schedule, but urgent leak, backup, and no-water calls receive priority."
  },
  {
    question: "Do you provide estimates before starting work?",
    answer: "Yes. A technician explains the issue, reviews repair options, and provides a clear estimate before approved work begins."
  },
  {
    question: "Can you help with bathroom and kitchen remodel plumbing?",
    answer: "Yes. Gurkirpa Plumbing Services handles fixture rough-ins, supply and drain lines, valves, sinks, showers, tubs, and appliance connections."
  },
  {
    question: "What should I do if I find a leak?",
    answer: "Shut off the nearest valve or main water supply if safe, move valuables away from the area, and call a plumber for diagnosis."
  },
  {
    question: "Do you service commercial properties?",
    answer: "Yes. We support offices, retail spaces, small facilities, and property managers with repairs, maintenance, and installations."
  },
  {
    question: "Are your images and contact details final?",
    answer: "The current site uses realistic placeholder content and centralized dummy contact details that can be replaced in one configuration file."
  }
];

export const values = [
  "Clear communication",
  "Respect for your property",
  "Durable repair methods",
  "Honest recommendations"
];

export const team = [
  { name: "Ryan Stone", role: "Lead Plumbing Technician" },
  { name: "Sofia Martinez", role: "Service Coordinator" },
  { name: "Caleb Wright", role: "Installation Specialist" }
];
