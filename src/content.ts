/* Long-form content for the service pages.
   Edit freely — pages are generated from this file at build time. */

import { inSentence } from "./data";

export type QA = { q: string; a: string };

/* ───────────────────────── Services ───────────────────────── */

export type ServiceGuide = {
  /** Page <title> and meta description */
  seoTitle: string;
  seoDescription: string;
  /** Main heading (h1) */
  h1: string;
  body: string[];
  priceFactors: string[];
  faqs: QA[];
};

export const SERVICE_GUIDES: Record<string, ServiceGuide> = {
  "LED & Neon Sign Boards": {
    seoTitle: "LED Sign Board Maker in Gurugram | Inkwave",
    seoDescription: "LED backlit boards, ACP sandwich boards, glow and neon signs from ₹450/sq.ft. Made in Gurugram, 1-year warranty, free mock-up and installation.",
    h1: "LED & Neon Sign Boards in Gurugram",
    body: [
      "A lit sign board is the most dependable way to keep your shop visible after sunset. We use IP65 LED modules spaced for even light, so your logo glows cleanly without dark patches, and build the frame from aluminium or ACP so it doesn't rust in the monsoon.",
      "Every order starts with a free mock-up on a photo of your actual shopfront, so you see the size, colours and brightness before anything is made.",
    ],
    priceFactors: ["Board size", "Type: backlit, ACP sandwich, glow box or neon", "Single or double-sided", "Height and access for installation"],
    faqs: [
      { q: "Which is better: LED board, ACP sandwich board or neon?", a: "LED backlit boards are the brightest and best value for shopfronts. ACP sandwich boards look more premium with layered, edge-lit letters. Neon suits cafés, salons and feature walls where style matters more than reading distance." },
      { q: "How much electricity does an LED sign board use?", a: "A typical 6×3 ft board uses about as much as one or two tube lights. A timer switches it off after closing to save more." },
    ],
  },
  "3D Letter Signs": {
    seoTitle: "3D Letter Sign Boards in Gurugram | Inkwave",
    seoDescription: "3D letters in acrylic, steel and brass with LED halo glow, from ₹180/inch. Made in-house and installed across Gurugram & Delhi NCR.",
    h1: "3D Letter Signs",
    body: [
      "3D letters are the quickest way to make a reception, façade or showroom look premium. Each letter is cut separately on our CNC router or laser, finished in your exact brand colour, and mounted on hidden spacers.",
      "Acrylic letters are affordable and come in any colour. Steel and brass suit offices and hotels, and halo-lit letters give a soft, elegant glow at night.",
    ],
    priceFactors: ["Letter height", "Number of letters", "Material: acrylic, steel or brass", "Lighting: none, halo or front-lit"],
    faqs: [
      { q: "What size should my 3D letters be?", a: "Each 1 inch of letter height is readable from about 10 ft away. Shopfronts usually use 12–24 inch letters, receptions 6–10 inch." },
      { q: "Can 3D letters be fixed on glass?", a: "Yes. We use clear acrylic backing or stand-off fixings so the letters appear to float on the glass." },
    ],
  },
  "Name Plates": {
    seoTitle: "Name Plates for Home & Office in Gurugram | Inkwave",
    seoDescription: "Acrylic, LED, steel and golden name plates from ₹799. 100+ designs or custom, made and fitted in 2–5 days across Gurugram & Delhi NCR.",
    h1: "Name Plates for Home & Office",
    body: [
      "A good name plate is the first thing guests notice. Acrylic is modern and affordable, stainless steel stays rust-free on outdoor gates for years, and PVD gold gives a luxurious finish without tarnishing.",
      "Choose from 100+ ready designs or send us your idea. We'll share a preview before making it and fit it at your door or gate.",
    ],
    priceFactors: ["Size", "Material and finish", "LED backlight", "Number of plates (office sets cost less each)"],
    faqs: [
      { q: "Which name plate is best for an outdoor gate?", a: "Stainless steel (304 grade) or PVD gold. Both stay rust-free in rain and sun for 15+ years. Acrylic works best in covered entrances." },
      { q: "Is PVD gold real gold?", a: "No. PVD is a hard coating bonded onto steel. It looks like gold and lasts far longer than ordinary gold plating." },
    ],
  },
  "Flex & Vinyl Printing": {
    seoTitle: "Flex & Vinyl Printing in Gurugram | Inkwave",
    seoDescription: "Flex banners, hoardings, vinyl stickers, frosted film, sunboard and UV prints from ₹25/sq.ft. 24–48 hr delivery and fitting in Gurugram.",
    h1: "Flex & Vinyl Printing",
    body: [
      "From a single sale banner to a 40-ft hoarding, we print in-house on wide-format printers up to 3.2 m with fade-resistant inks. Vinyl turns any window, wall or vehicle into an advert, and frosted film adds privacy to glass offices.",
      "For exhibitions and shops we print on rigid sunboard, and our UV printer prints straight onto acrylic, wood and metal for premium panels.",
    ],
    priceFactors: ["Print area", "Material: flex, vinyl, film, sunboard or acrylic", "Frame or fitting needed", "Express delivery"],
    faqs: [
      { q: "Flex, vinyl or sunboard: which should I choose?", a: "Flex for big, low-cost outdoor banners. Vinyl to stick on glass, walls or vehicles. Sunboard for rigid indoor displays and exhibitions." },
      { q: "How long does a flex banner last outdoors?", a: "About 1–2 years in Delhi NCR sun. For longer life, choose an LED board or vinyl on ACP." },
    ],
  },
  "Digital & Office Printing": {
    seoTitle: "Digital Printing & Visiting Cards in Gurugram | Inkwave",
    seoDescription: "Visiting cards, brochures, flyers, letterheads, menus, T-shirts and gifts. Same-day printing for short runs and better rates for bulk orders.",
    h1: "Digital & Office Printing",
    body: [
      "All your everyday business printing in one place: visiting cards, brochures, flyers, letterheads, bill books, menus and catalogues on premium paper, with lamination, spot UV or foil.",
      "We also print T-shirts, mugs, diaries and complete gift kits for uniforms, events and festive gifting, with individual names if you need them.",
    ],
    priceFactors: ["Quantity", "Paper and finish", "Single or double-sided", "Folding, binding or personalisation"],
    faqs: [
      { q: "Can you print visiting cards the same day?", a: "Yes. Standard visiting cards and flyers in small quantities can usually be ready the same day if you approve the design before noon." },
      { q: "Do you design visiting cards and brochures?", a: "Yes. Send your logo and details and we'll share layout options, free with the printing order." },
    ],
  },
  "Safety Signs & Display Stands": {
    seoTitle: "Safety Signs & Roll-up Standees in Gurugram | Inkwave",
    seoDescription: "Fire, exit and PPE signs, glow-in-the-dark signage, wayfinding boards, roll-up standees and poster frames for offices, factories and events.",
    h1: "Safety Signs & Display Stands",
    body: [
      "Good signage keeps people safe and stops them getting lost. We supply standard fire, exit, PPE and electrical signs, glow-in-the-dark exit routes for fire audits, and custom wayfinding that matches your brand.",
      "For events and shops, our roll-up standees set up in 30 seconds and snap frames let you change posters in seconds. Both are reusable for every campaign.",
    ],
    priceFactors: ["Quantity (bulk sets cost less each)", "Material", "Glow-in-the-dark requirement", "Custom design vs standard symbols"],
    faqs: [
      { q: "Do you supply signs for fire safety audits?", a: "Yes. Photoluminescent exit, fire extinguisher, assembly point and hazard signs, and we can match the list from your fire consultant." },
      { q: "How fast can I get roll-up standees?", a: "Usually within 24 hours, with a carry bag. Replacement prints are available so you can reuse the stand." },
    ],
  },
};

/** Default FAQs added to every service page, built from its data. */
export function serviceFaqs(title: string, from: number, unit: string, turnaround: string, warranty: string): QA[] {
  const t = inSentence(title);
  return [
    { q: `How much does ${t} cost in Gurugram?`, a: `${title} start from ₹${from.toLocaleString("en-IN")} per ${unit} + GST. The exact price depends on size, materials and installation. Send us your details on WhatsApp and we'll share your price within 10 minutes.` },
    { q: `How long does it take?`, a: `Typical turnaround is ${turnaround} after you approve the design, including installation in Gurugram. Express options are available.` },
    { q: `What warranty do you give?`, a: `${warranty}. We also offer maintenance plans for retail chains and offices.` },
    { q: `Do you install outside Gurugram?`, a: `Yes. We install across Delhi NCR, including Delhi, Dwarka, Faridabad, Noida and Manesar, and ship bulk orders across India.` },
  ];
}
