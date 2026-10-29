import type { LucideIcon } from "lucide-react";
import { Lightbulb, Type, BadgeCheck, PanelTop, Printer, Signpost } from "lucide-react";

export const BRAND = {
  name: "Inkwave",
  full: "Inkwave Signs & Prints",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "hello@inkwaveprints.in",
  address: "Plot 24, Udyog Vihar Phase 4, Gurugram, Haryana 122015",
  hours: "Mon–Sat · 9:30 AM – 8:00 PM",
};

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  /** Starting price in ₹ and the unit it's priced by (sq.ft / inch / piece / copy) */
  from: number;
  unit: string;
  accent: "cyan" | "magenta" | "yellow";
};

/** Our 6 main services. Specific products under each are in src/details.ts (types). */
export const SERVICES: Service[] = [
  { title: "LED & Neon Sign Boards", desc: "Backlit LED boards, ACP sandwich boards, neon and glow signs that keep your shop visible day and night.", icon: Lightbulb, from: 450, unit: "sq.ft", accent: "cyan" },
  { title: "3D Letter Signs", desc: "Raised letters in acrylic, steel or brass, with optional LED halo glow, for façades and receptions.", icon: Type, from: 180, unit: "inch", accent: "magenta" },
  { title: "Name Plates", desc: "Acrylic, steel and golden name plates for homes, offices and cabins, with optional LED.", icon: BadgeCheck, from: 799, unit: "piece", accent: "yellow" },
  { title: "Flex & Vinyl Printing", desc: "Flex banners and hoardings, vinyl stickers, glass frosting, sunboard and UV prints in any size.", icon: PanelTop, from: 25, unit: "sq.ft", accent: "cyan" },
  { title: "Digital & Office Printing", desc: "Visiting cards, brochures, flyers, menus, letterheads, T-shirts and corporate gifts.", icon: Printer, from: 2, unit: "copy", accent: "magenta" },
  { title: "Safety Signs & Display Stands", desc: "Safety and exit signs, wayfinding boards, roll-up standees and poster frames.", icon: Signpost, from: 350, unit: "piece", accent: "yellow" },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years in business" },
  { value: 4800, suffix: "+", label: "Projects delivered" },
  { value: 48, suffix: "h", label: "Express turnaround" },
  { value: 98, suffix: "%", label: "Repeat clients" },
];

export const PROCESS = [
  { step: "01", title: "Share your idea", desc: "Send a sketch, logo or photo of your space on WhatsApp — or tell us what you need." },
  { step: "02", title: "Free design & quote", desc: "Our designers send a mock-up on your actual storefront with a clear, itemised price." },
  { step: "03", title: "Precision production", desc: "CNC routing, laser cutting and UV printing done in-house for exact colour and finish." },
  { step: "04", title: "Install & support", desc: "Our crew installs on site, wires it safely and backs it with a service warranty." },
];

export type Project = {
  title: string;
  client: string;
  tag: string;
  /** Which illustration to draw (until real photos are added) */
  style: "neon" | "letters" | "plate" | "flex" | "standee" | "glass";
};

export const PROJECTS: Project[] = [
  { title: "Halo-lit 3D façade", client: "Brew & Bean Café, Sector 29", tag: "3D LED Letters", style: "letters" },
  { title: "Custom neon wall", client: "Glow Salon, Golf Course Rd", tag: "Neon Sign", style: "neon" },
  { title: "Golden name plate", client: "Private residence, DLF Phase 2", tag: "SS Golden", style: "plate" },
  { title: "Frosted glass branding", client: "Nimbus Tech, Cyber City", tag: "Frosted Film", style: "glass" },
  { title: "Expo roll-up kit", client: "FinEdge Summit, Aerocity", tag: "Standees", style: "standee" },
  { title: "Retail sale hoarding", client: "UrbanKart, Sohna Road", tag: "Flex Printing", style: "flex" },
];

export const TESTIMONIALS = [
  { name: "Rohit Malhotra", role: "Owner, Brew & Bean Café", text: "They mocked up the sign on a photo of our shop before making it — what we saw is exactly what went up. Footfall went up noticeably in the first month.", rating: 5 },
  { name: "Priya Sharma", role: "Admin Head, Nimbus Tech", text: "Frosted films, cabin plates and wayfinding for three floors, done over one weekend with zero disruption. Very professional team.", rating: 5 },
  { name: "Aman Verma", role: "Event Manager, FinEdge", text: "Needed 40 standees and backdrops in 36 hours. Delivered on time, colours were spot on. Our go-to vendor now.", rating: 5 },
  { name: "Neha Kapoor", role: "Homeowner, DLF Phase 2", text: "The golden SS name plate looks stunning at our entrance. Great finishing and they installed it the same day.", rating: 5 },
];

export const FAQS = [
  { q: "How long does a typical sign board take?", a: "Most flex, vinyl and name plate orders are ready in 24–48 hours. LED and 3D letter signs usually take 4–7 working days including installation." },
  { q: "Do you provide design support?", a: "Yes. Design and a realistic mock-up on your storefront photo are free with every signage order. You approve before we produce anything." },
  { q: "Do you install outside Gurugram?", a: "We install across Delhi NCR — Gurugram, Delhi, Faridabad, Noida and Manesar. For bulk orders we also ship pan-India." },
  { q: "What warranty do LED signs come with?", a: "LED modules and drivers carry a 1-year replacement warranty, and we offer annual maintenance contracts for retail chains." },
  { q: "Can I order just one piece?", a: "Absolutely. There is no minimum order for most products — from a single name plate to a 500-unit retail rollout." },
  { q: "How can I get an exact price?", a: "Send us the size, a photo of your space or just what you need on WhatsApp or the quote form. We reply with an exact price within 10 minutes during working hours, and bigger orders get better rates." },
];

export const SOCIALS = {
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  youtube: "#",
};

/* ───────── Service page URLs ───────── */

export const SERVICE_SLUGS: Record<string, string> = {
  "LED & Neon Sign Boards": "led-neon-sign-boards",
  "3D Letter Signs": "3d-letter-signs",
  "Name Plates": "name-plates",
  "Flex & Vinyl Printing": "flex-vinyl-printing",
  "Digital & Office Printing": "digital-printing",
  "Safety Signs & Display Stands": "safety-signs-display-stands",
};
export const serviceUrl = (title: string) => `/services/${SERVICE_SLUGS[title]}`;

/** Lower-cases a title for use mid-sentence but keeps abbreviations like LED, UV, SS, 3D. */
export const inSentence = (title: string) =>
  title.split(" ").map((w) => (/^[A-Z0-9]{2,}$/.test(w) ? w : w.toLowerCase())).join(" ");
