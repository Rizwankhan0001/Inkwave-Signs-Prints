import type { LucideIcon } from "lucide-react";
import {
  Lightbulb, Box, Type, Layers, Printer, Sparkles, Sticker, Square,
  BadgeCheck, Signpost, RectangleVertical, Zap, PanelTop, Shirt,
} from "lucide-react";

export const BRAND = {
  name: "Inkwave",
  full: "Inkwave Signs & Prints",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "hello@inkwaveprints.in",
  address: "Plot 24, Udyog Vihar Phase 4, Gurugram, Haryana 122015",
  hours: "Mon–Sat · 9:30 AM – 8:00 PM",
};

export type Category = "Signage" | "Printing" | "Name Plates" | "Display";

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  category: Category;
  from: number; // starting price in ₹
  unit: string;
  accent: "cyan" | "magenta" | "yellow";
};

export const SERVICES: Service[] = [
  { title: "LED Sign Boards", desc: "Bright, energy-efficient backlit and front-lit LED signs that stay visible day and night.", icon: Lightbulb, category: "Signage", from: 450, unit: "sq.ft", accent: "cyan" },
  { title: "3D Letter Signs", desc: "Acrylic, SS and brass 3D letters with optional LED halo or front glow.", icon: Type, category: "Signage", from: 180, unit: "inch", accent: "magenta" },
  { title: "Sandwich Boards", desc: "Layered ACP and acrylic boards with a premium edge-lit finish.", icon: Layers, category: "Signage", from: 650, unit: "sq.ft", accent: "yellow" },
  { title: "Neon & Glow Signs", desc: "Custom flexible neon for cafés, salons, events and feature walls.", icon: Zap, category: "Signage", from: 2500, unit: "piece", accent: "magenta" },
  { title: "Flex & Fabric Boards", desc: "Large-format flex, star flex and fabric frames for shopfronts and hoardings.", icon: PanelTop, category: "Signage", from: 25, unit: "sq.ft", accent: "cyan" },
  { title: "Indication Boards", desc: "Directional, safety and wayfinding signs for offices, factories and societies.", icon: Signpost, category: "Signage", from: 350, unit: "piece", accent: "yellow" },

  { title: "Vinyl Printing", desc: "High-resolution vinyl for walls, glass, vehicles and one-way vision.", icon: Sticker, category: "Printing", from: 45, unit: "sq.ft", accent: "magenta" },
  { title: "UV Printing", desc: "Direct-to-surface UV prints on acrylic, wood, glass, metal and sunboard.", icon: Sparkles, category: "Printing", from: 120, unit: "sq.ft", accent: "cyan" },
  { title: "Digital Printing", desc: "Brochures, visiting cards, flyers and catalogues with fast turnaround.", icon: Printer, category: "Printing", from: 2, unit: "copy", accent: "yellow" },
  { title: "Frosted Film", desc: "Etched-look frosted glass films with logos and privacy patterns.", icon: Square, category: "Printing", from: 85, unit: "sq.ft", accent: "cyan" },
  { title: "Sunboard Printing", desc: "Lightweight foam-board prints for exhibitions, stalls and in-store displays.", icon: Box, category: "Printing", from: 60, unit: "sq.ft", accent: "magenta" },
  { title: "Merch & Apparel", desc: "Printed T-shirts, mugs, diaries and corporate gift kits.", icon: Shirt, category: "Printing", from: 199, unit: "piece", accent: "yellow" },

  { title: "Acrylic Name Plates", desc: "Glossy, frosted and layered acrylic name plates for homes and cabins.", icon: BadgeCheck, category: "Name Plates", from: 799, unit: "piece", accent: "cyan" },
  { title: "SS & Golden Plates", desc: "Etched stainless steel and PVD-gold plates with a timeless finish.", icon: BadgeCheck, category: "Name Plates", from: 1499, unit: "piece", accent: "yellow" },

  { title: "Roll-up Standees", desc: "Portable roll-up and X-banners with carry bags for events and launches.", icon: RectangleVertical, category: "Display", from: 1450, unit: "piece", accent: "magenta" },
  { title: "Clip-on Frames", desc: "Snap frames and poster displays for lobbies, lifts and retail.", icon: PanelTop, category: "Display", from: 650, unit: "piece", accent: "cyan" },
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
  span: string;
  style: "neon" | "letters" | "plate" | "flex" | "standee" | "glass" | "wayfinding" | "uv";
  /** Short case study shown when a project is opened */
  brief: string;
  did: string;
  result: string;
  time: string;
};

export const PROJECTS: Project[] = [
  { title: "Halo-lit 3D façade", client: "Brew & Bean Café, Sector 29", tag: "3D LED Letters", span: "md:col-span-2 md:row-span-2", style: "letters",
    brief: "A new café on a busy street was invisible after sunset behind a row of brighter shops.",
    did: "Brushed-brass 3D letters with warm-white halo LEDs, mounted 40 mm off a dark textured wall so the glow outlines every letter.",
    result: "Evening walk-ins up ~35% in the first month. The façade now shows up in customers' Instagram posts.", time: "6 days" },
  { title: "Custom neon wall", client: "Glow Salon, Golf Course Rd", tag: "Neon Sign", span: "", style: "neon",
    brief: "The salon wanted a signature photo spot that clients would share.",
    did: "Hand-drawn script logo in pink LED neon on clear acrylic, with a dimmer so staff can set the mood through the day.",
    result: "Became the salon's most-tagged spot. Organic Instagram mentions doubled.", time: "4 days" },
  { title: "Golden name plate", client: "Private residence, DLF Phase 2", tag: "SS Golden", span: "", style: "plate",
    brief: "Homeowners wanted an entrance plate to match new brass door hardware.",
    did: "PVD-gold stainless plate with deep-etched serif lettering and concealed stand-off fixings.",
    result: "Weather-proof finish, installed the same day as delivery.", time: "3 days" },
  { title: "Frosted glass branding", client: "Nimbus Tech, Cyber City", tag: "Frosted Film", span: "md:col-span-2", style: "glass",
    brief: "An open-plan office needed meeting-room privacy without losing daylight.",
    did: "Dusted-crystal film with a cut logo band at eye level across 22 glass panels on three floors.",
    result: "Fitted over one weekend with zero work disruption.", time: "2 days" },
  { title: "Expo roll-up kit", client: "FinEdge Summit, Aerocity", tag: "Standees", span: "", style: "standee",
    brief: "40 standees and two stage backdrops were needed with only 36 hours' notice.",
    did: "Overnight production on two printers, with colour-matched prints and on-venue setup by our crew.",
    result: "Delivered 8 hours early. Re-booked for the next two events.", time: "36 hrs" },
  { title: "Retail hoarding", client: "UrbanKart, Sohna Road", tag: "Flex Printing", span: "", style: "flex",
    brief: "A 40-ft sale hoarding had to go up before the weekend.",
    did: "Seamless 3.2 m star-flex print on an MS frame, installed at night to avoid traffic.",
    result: "The sale weekend hit 1.8× the previous year's footfall.", time: "48 hrs" },
  { title: "Hospital wayfinding", client: "Medicare+ Clinic, Sector 56", tag: "Indication Boards", span: "", style: "wayfinding",
    brief: "Patients kept getting lost between OPD, labs and pharmacy.",
    did: "A colour-coded wayfinding system: overhead blades, floor directories and glow-in-the-dark exit signs.",
    result: "Front-desk direction queries dropped by more than half.", time: "5 days" },
  { title: "UV-printed wall art", client: "Saffron Kitchen, Cyber Hub", tag: "UV Printing", span: "", style: "uv",
    brief: "The restaurant wanted textured wall art to match its spice-market theme.",
    did: "UV prints with raised texture on 12 mm birch ply panels, sealed for kitchen-side humidity.",
    result: "A signature interior on budget, delivered in 3 days.", time: "3 days" },
];

export const TESTIMONIALS = [
  { name: "Rohit Malhotra", role: "Owner, Brew & Bean Café", text: "They mocked up the sign on a photo of our shop before making it — what we saw is exactly what went up. Footfall went up noticeably in the first month.", rating: 5 },
  { name: "Priya Sharma", role: "Admin Head, Nimbus Tech", text: "Frosted films, cabin plates and wayfinding for three floors, done over one weekend with zero disruption. Very professional team.", rating: 5 },
  { name: "Aman Verma", role: "Event Manager, FinEdge", text: "Needed 40 standees and backdrops in 36 hours. Delivered on time, colours were spot on. Our go-to vendor now.", rating: 5 },
  { name: "Neha Kapoor", role: "Homeowner, DLF Phase 2", text: "The golden SS name plate looks stunning at our entrance. Great finishing and they installed it the same day.", rating: 5 },
];

export const AREAS = [
  "Gurugram", "Cyber City", "Golf Course Road", "Sohna Road", "Udyog Vihar", "DLF Phases 1–5",
  "Sector 14–57", "Manesar", "New Delhi", "Dwarka", "Janakpuri", "Vasant Kunj",
  "Faridabad", "Ballabhgarh", "Noida", "Aerocity",
];

export const FAQS = [
  { q: "How long does a typical sign board take?", a: "Most flex, vinyl and name plate orders are ready in 24–48 hours. LED and 3D letter signs usually take 4–7 working days including installation." },
  { q: "Do you provide design support?", a: "Yes. Design and a realistic mock-up on your storefront photo are free with every signage order. You approve before we produce anything." },
  { q: "Do you install outside Gurugram?", a: "We install across Delhi NCR — Gurugram, Delhi, Faridabad, Noida and Manesar. For bulk orders we also ship pan-India." },
  { q: "What warranty do LED signs come with?", a: "LED modules and drivers carry a 1-year replacement warranty, and we offer annual maintenance contracts for retail chains." },
  { q: "Can I order just one piece?", a: "Absolutely. There is no minimum order for most products — from a single name plate to a 500-unit retail rollout." },
];

import {
  Store, Building2, UtensilsCrossed, Stethoscope, Home, PartyPopper, GraduationCap, Hotel,
} from "lucide-react";

export const OFFERS = [
  "Diwali offer · Flat 15% off LED & 3D letter signs till 15 Nov",
  "Free storefront mock-up with every signage order",
  "Express 24h delivery on flex, vinyl & standees",
  "GST invoice · Free site visit anywhere in Gurugram",
];

export const SOCIALS = {
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  youtube: "#",
};

export type Industry = { title: string; desc: string; icon: LucideIcon; products: string[] };

export const INDUSTRIES: Industry[] = [
  { title: "Retail & Showrooms", desc: "Shopfront signs, window graphics and in-store displays that pull people in.", icon: Store, products: ["LED Sign Boards", "Vinyl Printing", "Clip-on Frames"] },
  { title: "Corporate Offices", desc: "Reception logos, cabin plates, wayfinding and frosted glass branding.", icon: Building2, products: ["3D Letter Signs", "Frosted Film", "Indication Boards"] },
  { title: "Cafés & Restaurants", desc: "Neon feature walls, menu boards and glowing façades for late-night crowds.", icon: UtensilsCrossed, products: ["Neon & Glow Signs", "Sandwich Boards", "UV Printing"] },
  { title: "Clinics & Hospitals", desc: "Compliant safety signage, department boards and patient wayfinding.", icon: Stethoscope, products: ["Indication Boards", "Acrylic Name Plates", "Frosted Film"] },
  { title: "Homes & Societies", desc: "Premium name plates, society boards and gate signage built to last.", icon: Home, products: ["SS & Golden Plates", "Acrylic Name Plates", "Indication Boards"] },
  { title: "Events & Exhibitions", desc: "Stall branding, backdrops and standees delivered overnight.", icon: PartyPopper, products: ["Roll-up Standees", "Sunboard Printing", "Flex & Fabric Boards"] },
  { title: "Schools & Coaching", desc: "Campus boards, classroom signs and admission-season hoardings.", icon: GraduationCap, products: ["Flex & Fabric Boards", "Indication Boards", "Digital Printing"] },
  { title: "Hotels & Hospitality", desc: "Elegant room numbers, lobby signage and brass-finish lettering.", icon: Hotel, products: ["3D Letter Signs", "SS & Golden Plates", "UV Printing"] },
];

export const CLIENTS = ["UrbanKart", "Nimbus Tech", "Brew&Bean", "FinEdge", "Glow Salon", "Medicare+", "Skyline Realty", "FreshMart", "Orbit Gyms", "Saffron Kitchen"];

/** Lets menus / search jump to a service card or preselect it in the estimator. */
export const SERVICE_EVENT = "inkwave:service";
export type ServiceEventDetail = { title: string; target: "detail" | "services" | "quote" };
/** detail = open the service panel, services = highlight its card, quote = preselect it in the estimator */
export function goToService(title: string, target: ServiceEventDetail["target"] = "detail") {
  window.dispatchEvent(new CustomEvent<ServiceEventDetail>(SERVICE_EVENT, { detail: { title, target } }));
}

export const INDUSTRY_EVENT = "inkwave:industry";
/** Scroll to the Industries section and select this industry. */
export function goToIndustry(title: string) {
  window.dispatchEvent(new CustomEvent<string>(INDUSTRY_EVENT, { detail: title }));
}

/* ───────── URLs for the individual pages ───────── */

export const SERVICE_SLUGS: Record<string, string> = {
  "LED Sign Boards": "led-sign-board",
  "3D Letter Signs": "3d-letter-signage",
  "Sandwich Boards": "acp-sandwich-sign-board",
  "Neon & Glow Signs": "neon-glow-sign-board",
  "Flex & Fabric Boards": "flex-fabric-board-printing",
  "Indication Boards": "indication-safety-signage",
  "Vinyl Printing": "vinyl-printing",
  "UV Printing": "uv-printing",
  "Digital Printing": "digital-printing",
  "Frosted Film": "frosted-glass-film",
  "Sunboard Printing": "sunboard-printing",
  "Merch & Apparel": "corporate-merchandise-printing",
  "Acrylic Name Plates": "acrylic-name-plate",
  "SS & Golden Plates": "steel-golden-name-plate",
  "Roll-up Standees": "roll-up-standee",
  "Clip-on Frames": "clip-on-poster-frame",
};
export const serviceUrl = (title: string) => `/services/${SERVICE_SLUGS[title]}`;

export const INDUSTRY_SLUGS: Record<string, string> = {
  "Retail & Showrooms": "retail-showroom-signage",
  "Corporate Offices": "corporate-office-signage",
  "Cafés & Restaurants": "restaurant-cafe-signage",
  "Clinics & Hospitals": "hospital-clinic-signage",
  "Homes & Societies": "home-society-name-plates",
  "Events & Exhibitions": "event-exhibition-branding",
  "Schools & Coaching": "school-institute-signage",
  "Hotels & Hospitality": "hotel-hospitality-signage",
};
export const industryUrl = (title: string) => `/industries/${INDUSTRY_SLUGS[title]}`;

/** Area chips that have their own page. */
export const AREA_SLUGS: Record<string, string> = {
  Gurugram: "gurugram",
  "Cyber City": "dlf-cyber-city",
  "Golf Course Road": "golf-course-road",
  "Sohna Road": "sohna-road",
  Manesar: "manesar",
  Dwarka: "dwarka",
  Faridabad: "faridabad",
  Noida: "noida",
};
export const areaUrl = (name: string) => (AREA_SLUGS[name] ? `/areas/${AREA_SLUGS[name]}` : "/#areas");

/** Lower-cases a title for use mid-sentence but keeps abbreviations like LED, UV, SS, 3D. */
export const inSentence = (title: string) =>
  title.split(" ").map((w) => (/^[A-Z0-9]{2,}$/.test(w) ? w : w.toLowerCase())).join(" ");
