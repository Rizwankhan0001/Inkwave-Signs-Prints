/* Long-form content for the individual SEO pages.
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
  "LED Sign Boards": {
    seoTitle: "LED Sign Board in Gurugram — Price from ₹450/sq.ft | Inkwave",
    seoDescription: "Backlit & front-lit LED sign boards made in-house in Gurugram. IP65 modules, ACP frames, 1-year warranty, free mock-up & installation across Delhi NCR.",
    h1: "LED Sign Boards in Gurugram",
    body: [
      "An LED sign board is the most dependable way to keep a shop visible after sunset. We build each board on a rust-free aluminium or ACP box, fit it with IP65-rated LED modules spaced for even light, and finish the face in acrylic or backlit flex, so your logo glows cleanly without dark patches.",
      "Every order starts with a free mock-up on a photo of your actual storefront, so you see the size, colours and brightness before anything is made. Production happens in our Udyog Vihar workshop, and our own crew installs, wires and tests the board on site.",
    ],
    priceFactors: ["Board size (priced per sq.ft)", "Face material: flex, acrylic or ACP-cut letters", "Single or double-sided", "Height and access needed for installation"],
    faqs: [
      { q: "Is an LED board better than a normal flex board?", a: "For anything you want seen after 6 PM, yes. A lit board is visible from roughly three times the distance and lasts 7+ years, against 1–2 years for an unlit flex print." },
      { q: "How much electricity does an LED sign board use?", a: "A typical 6×3 ft board uses about as much as one or two tube lights. Adding a timer cuts this further by switching the board off after closing." },
    ],
  },
  "3D Letter Signs": {
    seoTitle: "3D Letter Signage in Gurugram — Acrylic, SS & Brass | Inkwave",
    seoDescription: "Premium 3D letter signs in acrylic, stainless steel and brass with LED halo or front-lit glow. Made and installed in Gurugram & Delhi NCR.",
    h1: "3D Letter Signage",
    body: [
      "3D letters are the quickest way to make a reception, façade or showroom look premium. Each letter is cut separately on our CNC router or laser, finished in your exact brand colour, and mounted on hidden spacers so it stands off the wall and casts a soft shadow.",
      "Add halo lighting for a warm glow behind each letter, or front-lit faces for maximum brightness on busy roads. Stainless steel and PVD-gold letters suit offices and hotels, and coloured acrylic suits retail and cafés.",
    ],
    priceFactors: ["Letter height and number of letters", "Material: acrylic, SS, brass or PVD gold", "Lighting: non-lit, halo-lit or front-lit", "Wall type and mounting height"],
    faqs: [
      { q: "What size should my 3D letters be?", a: "A simple rule: each 1 inch of letter height is readable from about 10 ft away. Most shopfronts use 12–24 inch letters, and receptions use 6–10 inch letters." },
      { q: "Can 3D letters be fixed on glass?", a: "Yes. We use clear acrylic backing panels or stand-off fixings on glass, so the letters look like they float." },
    ],
  },
  "Sandwich Boards": {
    seoTitle: "ACP Sandwich Sign Board — Layered Edge-Lit Signs | Inkwave Gurugram",
    seoDescription: "Layered acrylic & ACP sandwich sign boards with edge-lit LED glow. A premium upgrade from flat boards. Made in Gurugram.",
    h1: "ACP & Acrylic Sandwich Sign Boards",
    body: [
      "A sandwich board stacks two to four layers of acrylic and ACP, with the logo cut through the front layer and LEDs lighting it from the edge. The result has real depth and a crisp glow, at a lower cost than full 3D letters.",
      "Sandwich boards are slim enough for corridors and cabin walls, and strong enough for outdoor fascia when built with ACP backs.",
    ],
    priceFactors: ["Overall board size", "Number of layers", "Edge-lit vs backlit", "Indoor or outdoor build"],
    faqs: [{ q: "Is a sandwich board suitable outdoors?", a: "Yes, when built with an ACP back and sealed edges. For fully exposed walls we usually recommend a full LED box board instead." }],
  },
  "Neon & Glow Signs": {
    seoTitle: "Custom Neon Sign in Gurugram & Delhi — LED Neon from ₹2,500 | Inkwave",
    seoDescription: "Custom LED neon signs for cafés, salons, weddings and homes. Any text or logo, 16 colours or RGB, safe and low-power. Made in Gurugram.",
    h1: "Custom Neon & Glow Signs",
    body: [
      "Our neon signs use flexible LED neon instead of old glass tubes. They're shatter-proof, cool to the touch, safe indoors and use up to 80% less power, while giving the same bright, saturated glow.",
      "Send us any word, logo or doodle. We'll send a free digital preview, then bend and mount it on clear or coloured acrylic, with wall, hanging or tabletop options.",
    ],
    priceFactors: ["Overall width of the design", "Number of colours or RGB", "Complexity of the lettering", "Backing: cut-to-shape or rectangle"],
    faqs: [
      { q: "Can I use a neon sign at a wedding or event?", a: "Yes. Neon signs are a favourite for wedding backdrops and photo walls. They plug into a normal socket and can be reused at home afterwards." },
      { q: "Are LED neon signs safe for kids' rooms?", a: "Yes. They run on low voltage through an adapter and stay cool to the touch." },
    ],
  },
  "Flex & Fabric Boards": {
    seoTitle: "Flex Board Printing in Gurugram — from ₹25/sq.ft | Inkwave",
    seoDescription: "Star flex, backlit flex and fabric frame printing for shops, hoardings and sites. Up to 3.2 m seamless, 24–48 hr delivery in Gurugram.",
    h1: "Flex & Fabric Board Printing",
    body: [
      "Flex is still the most affordable way to go big: shop fascias, shutters, hoardings and site barricades. We print up to 3.2 m wide in one seamless piece with eco-solvent inks that resist fading in the sun.",
      "For brands that change campaigns often, tensioned fabric frames give a premium wrinkle-free finish, and only the fabric needs replacing next time.",
    ],
    priceFactors: ["Print area in sq.ft", "Material: star flex, black-back, backlit or fabric", "Frame: none, MS or aluminium", "Installation height"],
    faqs: [{ q: "How long does a flex board last outdoors?", a: "About 1–2 years in Delhi NCR sun before colours start to fade. For longer life, choose an LED board or ACP letters." }],
  },
  "Indication Boards": {
    seoTitle: "Safety & Indication Signage in Gurugram — Exit, Fire, Wayfinding | Inkwave",
    seoDescription: "Safety signs, glow-in-the-dark exit signs, directional and wayfinding boards for offices, factories, hospitals and societies in Gurugram.",
    h1: "Indication, Safety & Wayfinding Signage",
    body: [
      "Good indication signage keeps people safe and saves your staff from answering the same question all day. We supply standard safety signs (fire, exit, PPE and electrical) plus custom directional systems that match your brand.",
      "Photoluminescent exit and fire signs glow during a power cut, which is often required in fire audits. For large sites we survey the floor plan and propose a complete sign schedule.",
    ],
    priceFactors: ["Quantity (bulk sets cost less per sign)", "Material: ACP, acrylic or sunboard", "Glow-in-the-dark requirement", "Custom vs standard symbols"],
    faqs: [{ q: "Do you supply signs for fire safety audits?", a: "Yes. We supply photoluminescent exit, fire extinguisher, assembly point and electrical hazard signs, and can match a list from your fire consultant." }],
  },
  "Vinyl Printing": {
    seoTitle: "Vinyl Printing in Gurugram — Walls, Glass & Vehicles | Inkwave",
    seoDescription: "High-resolution vinyl printing and installation for shop windows, office walls, one-way vision and vehicle branding in Gurugram.",
    h1: "Vinyl Printing & Installation",
    body: [
      "Printed vinyl turns any smooth surface into a billboard: shop windows, office walls, lift doors, counters and vehicles. We print at up to 1440 dpi, laminate for scratch resistance, and contour-cut around your logo.",
      "One-way vision vinyl lets you brand a whole window while still seeing out. When you rebrand, it peels off cleanly.",
    ],
    priceFactors: ["Area in sq.ft", "Vinyl type: standard, one-way, reflective or cast wrap", "Lamination", "Surface prep and installation complexity"],
    faqs: [{ q: "Will vinyl damage my wall paint?", a: "On properly cured paint, our removable vinyls come off cleanly. We test a small patch first on older or textured walls." }],
  },
  "UV Printing": {
    seoTitle: "UV Printing on Acrylic, Wood, Glass & Metal — Gurugram | Inkwave",
    seoDescription: "Direct UV flatbed printing on acrylic, wood, glass, metal and sunboard. Vivid, scratch-resistant prints with raised texture. Gurugram.",
    h1: "UV Printing on Rigid Surfaces",
    body: [
      "UV printing puts ink straight onto rigid materials and cures it instantly with UV light. Colours stay vivid, the surface resists scratches, and we can build up raised texture for a tactile finish.",
      "It's ideal for premium name plates, award plaques, wall art, signage panels and short runs of detailed pieces where vinyl would look flat.",
    ],
    priceFactors: ["Print area", "Material supplied by us or by you", "White underbase or raised texture", "Quantity"],
    faqs: [{ q: "Can you UV print on my own material?", a: "Yes, as long as it's flat and fits our bed. Bring a sample and we'll do a test print first." }],
  },
  "Digital Printing": {
    seoTitle: "Digital Printing in Gurugram — Visiting Cards, Brochures, Menus | Inkwave",
    seoDescription: "Same-day digital printing for visiting cards, brochures, flyers, letterheads and menus. Premium papers, lamination, spot UV & foil.",
    h1: "Digital Printing for Business",
    body: [
      "From 100 visiting cards to 5,000 brochures, we print on premium stocks with matte, gloss or velvet lamination and spot-UV or foil highlights. Short runs can be ready the same day.",
      "Our designers fix small issues with your artwork for free before printing, such as bleed, low-resolution images and colour mode.",
    ],
    priceFactors: ["Quantity", "Paper weight and finish", "Lamination, spot UV or foil", "Folding and binding"],
    faqs: [{ q: "Do you design visiting cards?", a: "Yes. Send your logo and details and we'll share two layout options, free with the printing order." }],
  },
  "Frosted Film": {
    seoTitle: "Frosted Glass Film in Gurugram — Office Privacy & Logo Frosting | Inkwave",
    seoDescription: "Frosted and printed glass films for office cabins, conference rooms and clinics. Custom logos, safety bands, bubble-free fitting.",
    h1: "Frosted Glass Film for Offices",
    body: [
      "Frosted film gives glass the look of sandblasting at a fraction of the cost. It adds privacy to cabins and meeting rooms while still letting daylight through.",
      "We cut logos, stripes and patterns into the film and add the manifestation bands that stop people walking into glass doors. Installation is bubble-free and usually done after office hours.",
    ],
    priceFactors: ["Glass area in sq.ft", "Plain, cut-design or printed frost", "Number of panels", "After-hours installation"],
    faqs: [{ q: "Can frosted film be removed later?", a: "Yes. It peels off without residue, which is ideal for rented offices." }],
  },
  "Sunboard Printing": {
    seoTitle: "Sunboard Printing in Gurugram — Exhibition & Display Boards | Inkwave",
    seoDescription: "Lightweight printed sunboard for exhibitions, in-store displays and events. 3–10 mm, custom shapes, 24–48 hr delivery.",
    h1: "Sunboard Printing",
    body: [
      "Sunboard (foam PVC) is light enough to hang from a ceiling and stiff enough to stand on its own. That makes it the go-to material for exhibition stalls, retail displays and event signage.",
      "We print directly with UV or mount laminated vinyl, then cut to any shape with easel backs or hanging kits.",
    ],
    priceFactors: ["Size and thickness", "Direct UV vs mounted print", "Custom die-cut shape", "Stands and accessories"],
    faqs: [{ q: "Is sunboard waterproof?", a: "The board itself is water-resistant, but it's best used indoors or for short outdoor events." }],
  },
  "Merch & Apparel": {
    seoTitle: "Corporate Merchandise & T-shirt Printing in Gurugram | Inkwave",
    seoDescription: "Custom printed T-shirts, mugs, diaries, caps and corporate gift kits for onboarding, events and Diwali gifting in Gurugram.",
    h1: "Corporate Merchandise & Apparel Printing",
    body: [
      "Branded merchandise only works if people actually use it. We help you choose products that fit your budget, from T-shirts and hoodies to steel bottles and diaries, and print them with DTF, screen printing, sublimation or embroidery.",
      "For onboarding kits and festive gifting we handle personalisation with individual names, packing and delivery to multiple offices.",
    ],
    priceFactors: ["Product and quantity", "Print method and number of colours", "Personalisation", "Packaging"],
    faqs: [{ q: "What's the minimum order for T-shirts?", a: "There's no hard minimum. Prices drop noticeably from about 25 pieces upward." }],
  },
  "Acrylic Name Plates": {
    seoTitle: "Acrylic Name Plate for Home & Office — from ₹799 | Inkwave Gurugram",
    seoDescription: "Modern acrylic name plates for homes, flats and office cabins. Glossy, frosted or layered designs with optional LED. Made in Gurugram.",
    h1: "Acrylic Name Plates for Home & Office",
    body: [
      "An acrylic name plate is a modern, budget-friendly way to welcome guests. We offer single-sheet minimalist designs, multi-layer plates with depth, and backlit versions with a warm LED glow.",
      "Text is UV-printed or laser-engraved so it never peels, and stand-off steel fixings give a floating look.",
    ],
    priceFactors: ["Size", "Number of layers", "LED backlight", "Printed vs engraved text"],
    faqs: [{ q: "Will an acrylic name plate fade in the sun?", a: "UV-printed acrylic holds its colour for years outdoors. For fully exposed gates we also offer steel or brass." }],
  },
  "SS & Golden Plates": {
    seoTitle: "Stainless Steel & Golden Name Plates in Gurugram | Inkwave",
    seoDescription: "Laser-etched SS 304 and PVD gold name plates for villas, gates and corporate entrances. Rust-free, 5-year anti-rust warranty.",
    h1: "Stainless Steel & Golden Name Plates",
    body: [
      "Metal name plates suit villas, gates, temples and corporate entrances. We use 304-grade stainless steel, which stays rust-free outdoors, and PVD gold, rose-gold or black finishes that don't tarnish like plating.",
      "Lettering is deep-etched and paint-filled for contrast, then mounted with concealed fixings.",
    ],
    priceFactors: ["Plate size", "Finish: mirror, brushed, PVD gold or brass", "Etching depth and detail", "Fixing type"],
    faqs: [{ q: "Is PVD gold real gold?", a: "No. PVD is a hard, vacuum-bonded coating on steel. It looks like gold and is far more durable than ordinary gold plating." }],
  },
  "Roll-up Standees": {
    seoTitle: "Roll-up Standee Printing in Gurugram — 24 hr Delivery | Inkwave",
    seoDescription: "Roll-up standees and X-banners with carry bags for expos, launches and lobbies. 24-hour delivery in Gurugram & Delhi NCR.",
    h1: "Roll-up Standees & X-Banners",
    body: [
      "A roll-up standee sets up in 30 seconds and packs into a carry bag, which makes it the most cost-effective branding for events, launches and reception areas.",
      "We print on anti-curl matte material that doesn't reflect stage lights, and can supply replacement prints so you can reuse the base for every campaign.",
    ],
    priceFactors: ["Base quality: economy, premium or wide", "Print material", "Quantity", "Express delivery"],
    faqs: [{ q: "What size is a standard roll-up standee?", a: "The most common size is 33×79 inches (about 2.75×6.5 ft). Wider 47 and 59 inch bases are also available." }],
  },
  "Clip-on Frames": {
    seoTitle: "Clip-on Poster Frames & LED Light Boxes | Inkwave Gurugram",
    seoDescription: "Aluminium snap frames and LED light boxes for menus, lifts, lobbies and retail offers. Change posters in seconds.",
    h1: "Clip-on Poster Frames & Light Boxes",
    body: [
      "Snap frames have spring-loaded edges, so anyone on your team can swap a poster in seconds without tools. They're perfect for lift notices, menus and changing retail offers.",
      "The LED light-box version backlights the poster for a premium, high-visibility display.",
    ],
    priceFactors: ["Frame size", "Plain or LED light box", "Quantity", "Wall or hanging mount"],
    faqs: [{ q: "Do you print the posters too?", a: "Yes. We print the posters and can supply extra sets for future campaigns." }],
  },
};

/* ───────────────────────── Areas ───────────────────────── */

export type AreaPage = {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  detail: string;
  localities: string[];
  popular: string[];
  visit: string;
};

export const AREA_PAGES: AreaPage[] = [
  {
    name: "Gurugram", slug: "gurugram",
    seoTitle: "Sign Board Maker in Gurugram — LED, 3D Letters & Printing | Inkwave",
    seoDescription: "Gurugram-based sign board maker with in-house production in Udyog Vihar. LED boards, 3D letters, name plates & printing with free site visits.",
    intro: "Our workshop is in Udyog Vihar Phase 4, so Gurugram is home turf. We can usually visit your site within a day, measure, and send a mock-up the same evening.",
    detail: "From the shopfronts of Sector 14 and Sadar Bazaar to the corporate towers on NH-48, Gurugram mixes busy retail streets with large offices. Retail clients mostly want bright LED boards that compete for attention. Corporate clients want reception logos, frosted glass and wayfinding that follow brand guidelines.",
    localities: ["Sector 14 & 15", "Sadar Bazaar", "Sector 29", "Udyog Vihar", "Palam Vihar", "South City", "Sushant Lok", "Sector 56–57"],
    popular: ["LED Sign Boards", "3D Letter Signs", "Acrylic Name Plates", "Flex & Fabric Boards"],
    visit: "Free site visit & measurement, usually within 24 hours",
  },
  {
    name: "DLF Cyber City", slug: "dlf-cyber-city",
    seoTitle: "Office Signage in DLF Cyber City Gurugram — Reception & Glass | Inkwave",
    seoDescription: "Corporate signage for DLF Cyber City & Cyber Hub: reception 3D logos, frosted glass, wayfinding and café neon. Weekend installs.",
    intro: "Cyber City offices run on tight building rules and weekday schedules. We handle facility-team approvals and install over weekends or after hours.",
    detail: "Most Cyber City work is corporate interiors: brushed-steel or acrylic reception logos, frosted manifestation on glass partitions, floor directories and cabin plates. Around Cyber Hub, restaurants and bars ask for neon feature walls and glowing façades that look good in photos.",
    localities: ["Cyber City towers", "Cyber Hub", "DLF Phase 2 & 3", "Ambience Mall area", "NH-48 corridor"],
    popular: ["3D Letter Signs", "Frosted Film", "Indication Boards", "Neon & Glow Signs"],
    visit: "After-hours & weekend installation available",
  },
  {
    name: "Golf Course Road", slug: "golf-course-road",
    seoTitle: "Premium Signage on Golf Course Road Gurugram | Inkwave",
    seoDescription: "Premium signage for Golf Course Road salons, clinics, showrooms and residences: halo-lit letters, neon, SS & golden name plates.",
    intro: "Golf Course Road and its extension are home to premium salons, clinics, showrooms and high-end residences, where finish quality matters more than size.",
    detail: "Here we mostly make halo-lit brass and steel lettering, custom neon for salons and studios, and PVD-gold name plates for villas and apartments. We often match signage to existing interior materials such as brass, wood or marble.",
    localities: ["DLF Phase 5", "Sector 42–43", "Sector 53–54", "Golf Course Extension Road", "Sector 65–66"],
    popular: ["3D Letter Signs", "Neon & Glow Signs", "SS & Golden Plates", "Acrylic Name Plates"],
    visit: "Material samples brought to your site",
  },
  {
    name: "Sohna Road", slug: "sohna-road",
    seoTitle: "Shop Sign Boards on Sohna Road Gurugram — LED & Flex | Inkwave",
    seoDescription: "Shop and showroom sign boards along Sohna Road: LED boards, flex hoardings, sale banners and window vinyl with fast installation.",
    intro: "Sohna Road's fast-growing retail strips and showrooms need signs that stand out from a moving car. Bright LED boards and big flex hoardings do most of the work here.",
    detail: "We regularly install LED fascia boards for new showrooms, sale hoardings for retailers, and window vinyl for clinics and coaching centres along the road and in the new sectors behind it.",
    localities: ["Sector 47–49", "Badshahpur", "Sector 67–72", "Vatika City", "Subhash Chowk"],
    popular: ["LED Sign Boards", "Flex & Fabric Boards", "Vinyl Printing", "Roll-up Standees"],
    visit: "Night installation for main-road hoardings",
  },
  {
    name: "Manesar", slug: "manesar",
    seoTitle: "Factory & Industrial Signage in Manesar — Safety Signs | Inkwave",
    seoDescription: "Industrial safety signage, factory wayfinding, gate boards and compliance signs for Manesar & IMT plants. Bulk sets, fast delivery.",
    intro: "Manesar's IMT plants and warehouses need durable, compliant signage in bulk, from main-gate boards to hundreds of safety and PPE signs.",
    detail: "We survey the plant with your EHS team, prepare a sign schedule, and supply photoluminescent exit routes, hazard and PPE signs, floor markings and visitor wayfinding, all in one consistent style.",
    localities: ["IMT Manesar", "Sector 3–8", "Binola", "Pataudi Road", "Dharuhera border"],
    popular: ["Indication Boards", "LED Sign Boards", "Flex & Fabric Boards", "Clip-on Frames"],
    visit: "On-site survey for plant-wide sign schedules",
  },
  {
    name: "Dwarka", slug: "dwarka",
    seoTitle: "Sign Boards & Name Plates in Dwarka, Delhi | Inkwave",
    seoDescription: "LED shop boards, society signage and home name plates for Dwarka sectors. Made in nearby Gurugram, installed across Dwarka.",
    intro: "Dwarka is just across the border from our workshop, so delivery and installation are quick. Our Dwarka clients are mainly housing societies, clinics and neighbourhood shops.",
    detail: "Popular jobs include acrylic and steel name plates for flats, society gate and tower signage for RWAs, and LED boards for shops in the sector markets.",
    localities: ["Sector 6–12", "Sector 19–23", "Dwarka Mor", "Palam", "Dwarka Expressway"],
    popular: ["Acrylic Name Plates", "SS & Golden Plates", "LED Sign Boards", "Indication Boards"],
    visit: "Installation across all Dwarka sectors",
  },
  {
    name: "Faridabad", slug: "faridabad",
    seoTitle: "Sign Board Maker for Faridabad — LED, Flex & Safety Signs | Inkwave",
    seoDescription: "LED sign boards, flex printing and industrial safety signage delivered and installed across Faridabad and Ballabhgarh.",
    intro: "We serve Faridabad's markets and industrial areas with scheduled installation runs, so you get Gurugram workshop quality without the extra travel cost.",
    detail: "Retailers in the NIT and Sector 15 markets order LED boards and flex, while industrial units in Sector 24–25 and Ballabhgarh need safety signage and gate boards.",
    localities: ["NIT", "Sector 15–16", "Sector 24–25 industrial", "Ballabhgarh", "Surajkund"],
    popular: ["LED Sign Boards", "Flex & Fabric Boards", "Indication Boards", "Digital Printing"],
    visit: "Weekly installation runs to Faridabad",
  },
  {
    name: "Noida", slug: "noida",
    seoTitle: "Office & Retail Signage for Noida — 3D Letters, Glass Film | Inkwave",
    seoDescription: "Corporate and retail signage for Noida offices and showrooms: 3D logos, frosted film, LED boards, multi-site rollouts.",
    intro: "Many of our corporate clients have offices in both Gurugram and Noida. We match signage across both locations and install in Noida on scheduled runs.",
    detail: "Typical Noida jobs are reception logos and glass branding for IT offices in Sector 62 and 125–135, and LED boards for showrooms along the main roads.",
    localities: ["Sector 18", "Sector 62", "Sector 125–135", "Film City", "Greater Noida West"],
    popular: ["3D Letter Signs", "Frosted Film", "LED Sign Boards", "Merch & Apparel"],
    visit: "Multi-location brand matching",
  },
];

/* ───────────────────────── Price guides (blog) ───────────────────────── */

export type GuideSection = { h: string; p?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } };
export type Guide = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMins: number;
  related: string[];
  sections: GuideSection[];
  faqs: QA[];
};

export const GUIDES: Guide[] = [
  {
    slug: "led-sign-board-price-gurugram",
    title: "LED Sign Board Price in Gurugram (2026 Guide)",
    description: "What an LED sign board really costs in Gurugram in 2026: per sq.ft rates, size examples, what changes the price, and how to avoid paying twice.",
    date: "2026-10-20",
    readMins: 6,
    related: ["LED Sign Boards", "3D Letter Signs", "Sandwich Boards"],
    sections: [
      { h: "Quick answer", p: ["Most LED sign boards in Gurugram cost between ₹450 and ₹900 per sq.ft, including the frame, LEDs, face and standard installation. A typical 8×3 ft shop board lands between ₹11,000 and ₹22,000 + GST, depending on the face material and lighting."] },
      {
        h: "Typical prices by type",
        table: {
          head: ["Board type", "Approx. rate", "Best for"],
          rows: [
            ["Backlit flex face on ACP box", "₹450–550 / sq.ft", "Budget shopfronts"],
            ["Acrylic face, backlit", "₹600–750 / sq.ft", "Clinics, pharmacies, retail"],
            ["ACP-cut letters, front-lit", "₹700–900 / sq.ft", "Showrooms, restaurants"],
            ["3D acrylic letters, LED", "₹180–350 / inch height", "Premium façades"],
          ],
        },
      },
      { h: "Size examples", list: ["6×2 ft (small shop): ₹6,000–11,000", "8×3 ft (standard shop): ₹11,000–22,000", "12×4 ft (showroom): ₹24,000–43,000", "20×4 ft (wide frontage): ₹40,000–72,000"] },
      { h: "What changes the price", list: ["Face material: flex is cheapest, acrylic and cut-ACP cost more but last longer", "LED quality: branded IP65 modules cost a little more but don't fail in the monsoon", "Double-sided boards (projecting signs) cost about 1.7× a single-sided one", "Height and access: scaffolding or a crane for upper floors adds to installation", "Electrical work: a new point or timer adds a small amount"] },
      { h: "How to avoid paying twice", p: ["The most common mistake is buying the cheapest unbranded LEDs and a thin MS frame. Within one monsoon, rust and dead patches appear and the board has to be rebuilt. Ask for IP65 modules, an aluminium or ACP frame, and a written warranty on LEDs and driver.", "Also ask for a mock-up on a photo of your shop. A board that looks right on paper can look small from across the road."] },
    ],
    faqs: [
      { q: "Is GST included in sign board prices?", a: "Usually not. Most quotes in Gurugram are + 18% GST. Ask for a GST invoice so you can claim input credit." },
      { q: "Do I need permission for a shop sign board in Gurugram?", a: "Rules depend on size, location and whether the sign faces a public road. Check with your landlord or market association and the municipal corporation for large or projecting signs. We can share the drawings you'll need." },
    ],
  },
  {
    slug: "name-plate-price-guide",
    title: "Name Plate Price Guide: Acrylic vs Steel vs Gold (2026)",
    description: "Compare acrylic, stainless steel, PVD gold and brass name plates for homes and offices: prices, durability and which suits your entrance.",
    date: "2026-10-12",
    readMins: 5,
    related: ["Acrylic Name Plates", "SS & Golden Plates", "UV Printing"],
    sections: [
      { h: "Quick answer", p: ["A good home name plate costs ₹799–₹3,500. Acrylic is the most affordable and modern option, stainless steel is the most durable outdoors, and PVD gold or brass gives the most premium look."] },
      {
        h: "Price & durability comparison",
        table: {
          head: ["Material", "Typical price", "Outdoor life", "Look"],
          rows: [
            ["Acrylic (printed)", "₹799–1,800", "5+ years", "Modern, colourful"],
            ["Acrylic with LED", "₹1,800–3,500", "5+ years", "Glows at night"],
            ["Stainless steel (etched)", "₹1,499–3,000", "15+ years", "Clean, timeless"],
            ["PVD gold / rose gold", "₹2,200–4,500", "15+ years", "Luxurious"],
            ["Brass", "₹3,000–6,000", "20+ years (patina)", "Traditional, heritage"],
          ],
        },
      },
      { h: "Which one should you choose?", list: ["Flat entrance inside a society corridor: acrylic, layered or with LED", "Villa gate exposed to rain and sun: stainless steel or PVD gold", "Heritage or traditional home: brass with deep engraving", "Office cabins: frosted acrylic with stand-offs, ordered as a matching set"] },
      { h: "Tips for a name plate that lasts", list: ["Choose engraved or UV-printed text, never sticker vinyl", "Use stand-off or concealed fixings so water doesn't collect behind the plate", "Ask for 304-grade steel, since cheaper 202 grade can rust"] },
    ],
    faqs: [{ q: "How long does a name plate take to make?", a: "Acrylic plates take 2–3 days. Steel and gold plates take 3–5 days, including design approval." }],
  },
  {
    slug: "flex-vs-vinyl-vs-sunboard",
    title: "Flex vs Vinyl vs Sunboard: Which Print Should You Choose?",
    description: "A plain-English comparison of flex, vinyl and sunboard printing: cost per sq.ft, durability, indoor vs outdoor use, and when to use each.",
    date: "2026-09-28",
    readMins: 5,
    related: ["Flex & Fabric Boards", "Vinyl Printing", "Sunboard Printing"],
    sections: [
      { h: "Quick answer", p: ["Use flex for large, cheap, temporary outdoor graphics, vinyl to brand an existing surface like glass, walls or vehicles, and sunboard for rigid indoor displays and exhibitions."] },
      {
        h: "Side-by-side comparison",
        table: {
          head: ["", "Flex", "Vinyl", "Sunboard"],
          rows: [
            ["Typical rate", "₹25–45 / sq.ft", "₹45–90 / sq.ft", "₹60–120 / sq.ft"],
            ["Rigid?", "No (needs frame)", "No (sticks to surface)", "Yes"],
            ["Outdoor life", "1–2 years", "3–5 years", "Short-term"],
            ["Best for", "Hoardings, shutters, banners", "Glass, walls, vehicles", "Exhibitions, displays"],
          ],
        },
      },
      { h: "When flex is the right choice", p: ["Choose flex for big sizes on a budget: site hoardings, sale banners, shop shutters and event backdrops. Star flex is the standard, and black-back flex stops light showing through."] },
      { h: "When vinyl is the right choice", p: ["Choose vinyl when the surface already exists. It sticks directly to glass, painted walls, lifts and vehicles. One-way vision vinyl brands a window while you still see out."] },
      { h: "When sunboard is the right choice", p: ["Choose sunboard for anything that must stand or hang on its own indoors: exhibition panels, standees, ceiling danglers and in-store displays. It's light, rigid and can be cut to any shape."] },
    ],
    faqs: [{ q: "Which is cheapest for a one-day event?", a: "Flex banners are cheapest for large backdrops. For anything people see up close, sunboard looks much better." }],
  },
  {
    slug: "shop-sign-board-checklist",
    title: "Shop Sign Board Checklist: Size, Lighting & Readability",
    description: "A practical checklist before ordering a shop sign board: how big the letters should be, lit vs unlit, colours that read from the road, and what to ask your sign maker.",
    date: "2026-09-10",
    readMins: 4,
    related: ["LED Sign Boards", "3D Letter Signs", "Flex & Fabric Boards"],
    sections: [
      { h: "1. Work out your viewing distance", p: ["Stand where your customers will first see the shop, usually across the road or at the nearest turn. Each inch of letter height is readable from about 10 ft. If people see you from 100 ft away, your main name needs letters of about 10 inches or more."] },
      { h: "2. Keep the message short", list: ["Business name plus 3–5 words about what you do", "A phone number only if people will call from the road", "Skip long lists of services; use window vinyl for those"] },
      { h: "3. Choose contrast over colour", p: ["Light letters on a dark background, or dark on light, read best. Avoid red on green, blue on black and thin script fonts for the main name."] },
      { h: "4. Decide: lit or unlit?", p: ["If you're open after 6 PM, a lit sign pays for itself. Halo-lit letters look premium, backlit boards are brightest, and a simple timer saves electricity."] },
      { h: "5. Questions to ask your sign maker", list: ["Can I see a mock-up on a photo of my shop?", "Which LED brand and IP rating are you using?", "Is the frame aluminium/ACP or mild steel?", "What does the warranty cover, and for how long?", "Is installation and wiring included in the price?"] },
    ],
    faqs: [{ q: "What's the best colour for a shop sign?", a: "Whatever matches your brand, as long as there's strong contrast between letters and background. White or warm-white lighting reads best at night." }],
  },
];

/** Default FAQs added to every service page, built from its data. */
export function serviceFaqs(title: string, from: number, unit: string, turnaround: string, warranty: string): QA[] {
  const t = inSentence(title);
  return [
    { q: `How much does ${t} cost in Gurugram?`, a: `${title} start from ₹${from.toLocaleString("en-IN")} per ${unit} + GST. The final price depends on size, materials and installation. Use the instant estimator or send us a photo for an exact quote.` },
    { q: `How long does it take?`, a: `Typical turnaround is ${turnaround} after you approve the design, including installation in Gurugram. Express options are available.` },
    { q: `What warranty do you give?`, a: `${warranty}. We also offer maintenance plans for retail chains and offices.` },
    { q: `Do you install outside Gurugram?`, a: `Yes. We install across Delhi NCR, including Delhi, Dwarka, Faridabad, Noida and Manesar, and ship bulk orders across India.` },
  ];
}
