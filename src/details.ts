import type { Category } from "./data";

/* Longer copy for each service, shown in the detail panel. Keyed by service title. */

export type ServiceDetail = {
  tagline: string;
  overview: string;
  features: string[];
  materials: string[];
  idealFor: string[];
  turnaround: string;
  warranty: string;
  life: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "LED Sign Boards": {
    tagline: "Be seen from across the road — day and night.",
    overview: "Backlit and front-lit boards built on a weather-proof ACP or aluminium frame with high-brightness LED modules. The light is spread evenly, so your logo glows cleanly without dark patches or hotspots.",
    features: ["IP65 water-proof LED modules", "Even, hotspot-free illumination", "Rust-free aluminium or ACP box frame", "Optional timer & dimmer to save power"],
    materials: ["ACP", "Acrylic face", "Backlit flex", "Aluminium channel"],
    idealFor: ["Shops & showrooms", "Restaurants", "Clinics", "Pharmacies"],
    turnaround: "4–6 days", warranty: "1 yr LEDs & driver", life: "7+ yrs outdoor",
  },
  "3D Letter Signs": {
    tagline: "Raised lettering that makes your brand look premium.",
    overview: "Individually cut letters in acrylic, stainless steel or brass, mounted with spacers so they stand off the wall. Add LED halo-lighting for a soft glow behind each letter, or front-lit faces for maximum brightness.",
    features: ["CNC & laser-cut for razor-sharp edges", "Halo-lit, front-lit or non-lit options", "Exact brand colours & fonts", "Hidden fixings — no visible screws"],
    materials: ["Acrylic", "SS mirror / matte", "Brass", "PVD gold & rose gold"],
    idealFor: ["Office receptions", "Showroom façades", "Hotels", "Cafés"],
    turnaround: "5–7 days", warranty: "1 yr lighting", life: "10+ yrs",
  },
  "Sandwich Boards": {
    tagline: "Layered depth with a clean, edge-lit finish.",
    overview: "Multiple layers of acrylic and ACP stacked together, with LEDs lighting the edges for a modern, high-end look. A popular upgrade from flat boards for brands that want depth without full 3D letters.",
    features: ["2–4 layer construction", "Edge-lit or backlit glow", "Slim profile, wall-hugging", "Gloss or frosted finishes"],
    materials: ["Clear & opal acrylic", "ACP", "Vinyl graphics"],
    idealFor: ["Boutiques", "Salons", "Corporate cabins", "Clinics"],
    turnaround: "5–6 days", warranty: "1 yr lighting", life: "7+ yrs",
  },
  "Neon & Glow Signs": {
    tagline: "Instagram-ready signs with personality.",
    overview: "Flexible LED neon bent into any word, logo or doodle you can draw. Unlike old glass neon, it's shatter-proof, runs cool to the touch and uses up to 80% less power.",
    features: ["Any text, logo or custom artwork", "16 colours + RGB colour-changing", "Low-voltage & safe for indoors", "Wall-mount, hanging or table stand"],
    materials: ["Silicone LED neon", "Clear acrylic backing", "Coloured acrylic"],
    idealFor: ["Cafés & bars", "Salons", "Weddings & events", "Bedrooms & studios"],
    turnaround: "3–5 days", warranty: "1 yr", life: "50,000 hrs",
  },
  "Flex & Fabric Boards": {
    tagline: "The most affordable way to go big.",
    overview: "Large-format prints on flex or fabric for shopfronts, hoardings and site barricades. Fabric frames are stretched tight in slim aluminium profiles, so they stay wrinkle-free and can be re-skinned for every campaign.",
    features: ["Up to 3.2 m seamless width", "Eco-solvent inks, fade-resistant", "Star, black-back & backlit flex", "Re-usable fabric frames"],
    materials: ["Star flex", "Black-back flex", "SEG fabric", "MS / aluminium frame"],
    idealFor: ["Hoardings", "Shop shutters", "Construction sites", "Seasonal sales"],
    turnaround: "24–48 hrs", warranty: "6 months print", life: "1–2 yrs outdoor",
  },
  "Indication Boards": {
    tagline: "Help people find their way — and stay safe.",
    overview: "Directional, safety and information signs for offices, factories, hospitals and housing societies. We follow standard safety colour codes, and can supply glow-in-the-dark versions for emergency exits.",
    features: ["Standard safety colours & symbols", "Glow-in-the-dark exit signs", "Floor maps & directories", "Bulk sets with matching design"],
    materials: ["ACP", "Acrylic", "Sunboard", "Photoluminescent vinyl"],
    idealFor: ["Factories", "Hospitals", "Offices", "Societies & parking"],
    turnaround: "2–4 days", warranty: "1 yr", life: "5+ yrs",
  },
  "Vinyl Printing": {
    tagline: "Turn any wall, window or vehicle into a billboard.",
    overview: "High-resolution printed vinyl that sticks to almost any smooth surface. Use it for wall murals, glass branding, one-way vision windows or vehicle wraps, and peel it off cleanly when you rebrand.",
    features: ["Up to 1440 dpi photo quality", "Matte, gloss or lamination", "One-way vision for windows", "Precision contour cutting"],
    materials: ["Gloss / matte vinyl", "One-way vision", "Reflective vinyl", "Cast wrap vinyl"],
    idealFor: ["Shop windows", "Office walls", "Vehicle branding", "Retail promos"],
    turnaround: "24–48 hrs", warranty: "1 yr print", life: "3–5 yrs",
  },
  "UV Printing": {
    tagline: "Print straight onto rigid surfaces — vivid and scratch-resistant.",
    overview: "Our UV flatbed prints directly onto acrylic, wood, glass, metal and sunboard. The ink cures instantly under UV light, giving rich colour, raised textures and a finish that doesn't scratch or fade easily.",
    features: ["Prints up to 8 mm raised texture", "White ink for clear & dark surfaces", "No lamination needed", "Ideal for small, detailed runs"],
    materials: ["Acrylic", "Wood & MDF", "Glass", "Aluminium", "Sunboard"],
    idealFor: ["Premium name plates", "Award plaques", "Wall art", "Retail displays"],
    turnaround: "2–3 days", warranty: "1 yr print", life: "5+ yrs indoor",
  },
  "Digital Printing": {
    tagline: "Everyday business printing, done fast and sharp.",
    overview: "Visiting cards, brochures, flyers, letterheads, catalogues and menus on premium paper stocks. Get same-day printing on short runs, and offset-quality colour on bulk orders.",
    features: ["Same-day short runs", "Matte, gloss & velvet lamination", "Spot UV & foil finishes", "Free design touch-ups"],
    materials: ["Art paper 130–350 gsm", "Textured stocks", "Synthetic paper"],
    idealFor: ["Startups", "Restaurants (menus)", "Events", "Real estate"],
    turnaround: "Same day–2 days", warranty: "Reprint guarantee", life: "—",
  },
  "Frosted Film": {
    tagline: "Privacy and branding for glass — at a fraction of etched-glass cost.",
    overview: "Frosted films give glass the look of sandblasting while still letting light through. We cut logos, stripes and patterns into them, and add the safety bands that building codes require on glass doors.",
    features: ["Custom logo & pattern cutting", "Gradient & printed frosts", "Bubble-free installation", "Removable without residue"],
    materials: ["Frosted vinyl", "Dusted crystal", "Printed frost", "Coloured tint"],
    idealFor: ["Office cabins", "Conference rooms", "Clinics", "Glass façades"],
    turnaround: "1–2 days", warranty: "2 yrs", life: "5–7 yrs",
  },
  "Sunboard Printing": {
    tagline: "Lightweight, rigid prints that go up in minutes.",
    overview: "Foam-PVC sunboard printed in full colour. It's light enough to hang from a ceiling and stiff enough to stand on its own, which makes it ideal for exhibitions, retail standees and temporary signage.",
    features: ["3 mm – 10 mm thickness", "Custom die-cut shapes", "Easel backs & hanging kits", "Direct UV or vinyl-mounted"],
    materials: ["Sunboard (foam PVC)", "Foam board", "Vinyl lamination"],
    idealFor: ["Exhibition stalls", "In-store displays", "Events", "School projects"],
    turnaround: "24–48 hrs", warranty: "6 months", life: "1–3 yrs indoor",
  },
  "Merch & Apparel": {
    tagline: "Branded gear your team and clients will actually use.",
    overview: "Custom printed T-shirts, hoodies, caps, mugs, diaries and complete corporate gift kits. We help you choose products that fit your budget and deliver them packed and ready to hand out.",
    features: ["DTF, screen & sublimation print", "Embroidery on polos & caps", "Individual name personalisation", "Gift-box packaging"],
    materials: ["Cotton & dri-fit tees", "Ceramic & steel mugs", "PU diaries", "Jute & canvas bags"],
    idealFor: ["Corporate onboarding", "Events & marathons", "Diwali gifting", "Team uniforms"],
    turnaround: "3–7 days", warranty: "Quality guarantee", life: "—",
  },
  "Acrylic Name Plates": {
    tagline: "A modern welcome at your door or desk.",
    overview: "Glossy, frosted or layered acrylic name plates with crisp UV-printed or laser-engraved text. Choose from minimalist single sheets to multi-layer designs with an optional soft LED glow.",
    features: ["Single or multi-layer designs", "Optional warm LED backlight", "Stand-off steel mounting", "100+ ready designs to choose"],
    materials: ["Clear acrylic", "Frosted acrylic", "Mirror acrylic", "Wood-acrylic combo"],
    idealFor: ["Homes & flats", "Office cabins", "Doctor clinics", "Hotel rooms"],
    turnaround: "2–3 days", warranty: "1 yr", life: "5+ yrs",
  },
  "SS & Golden Plates": {
    tagline: "Timeless metal finishes that never go out of style.",
    overview: "Laser-etched stainless steel and PVD-gold plates that stay rust-free, even outdoors. The metal finish suits villa gates, corporate entrances and heritage-style homes.",
    features: ["304-grade stainless steel", "PVD gold, rose gold & black", "Deep etching with paint fill", "Weather-proof for outdoor gates"],
    materials: ["SS 304 mirror", "SS brushed", "PVD gold", "Brass"],
    idealFor: ["Villa gates", "Corporate entrances", "Temples", "Society plaques"],
    turnaround: "3–5 days", warranty: "5 yr anti-rust", life: "15+ yrs",
  },
  "Roll-up Standees": {
    tagline: "Your brand, set up in 30 seconds — anywhere.",
    overview: "Portable roll-up and X-banner stands that pack into a carry bag. Swap the print for a new campaign while reusing the stand. They're the most cost-effective event branding there is.",
    features: ["Aluminium roll-up base", "Anti-curl, non-reflective print", "Padded carry bag included", "Replacement prints available"],
    materials: ["Matte PVC", "Fabric", "Star flex (X-banner)"],
    idealFor: ["Expos & conferences", "Store launches", "College fests", "Bank & clinic lobbies"],
    turnaround: "24 hrs", warranty: "1 yr stand", life: "Reusable",
  },
  "Clip-on Frames": {
    tagline: "Change your posters in seconds — no tools needed.",
    overview: "Aluminium snap frames with spring-loaded edges, so you can update posters and offers in seconds. Add an LED light box version to make menus and promotions stand out.",
    features: ["Snap-open aluminium profile", "Anti-glare protective cover", "LED light-box option", "Wall or lift-mount"],
    materials: ["Aluminium profile", "PET cover", "Backlit film"],
    idealFor: ["Lifts & lobbies", "Restaurant menus", "Retail offers", "Notice boards"],
    turnaround: "2–3 days", warranty: "1 yr", life: "5+ yrs",
  },
};

export const CATEGORY_INFO: Record<Category | "All", string> = {
  All: "Signage, printing, name plates and display systems — everything designed, produced and installed by one team.",
  Signage: "Lit and non-lit boards that make your business visible from the road, built to survive Delhi's heat, dust and monsoon.",
  Printing: "Large-format and small-format printing on almost any surface, from vinyl and glass film to apparel and brochures.",
  "Name Plates": "Durable, handsome name plates for homes, cabins and entrances, in acrylic, steel and gold finishes.",
  Display: "Portable and re-usable display systems for events, lobbies and retail promotions.",
};

/* Longer copy for each industry, keyed by industry title. */

export type IndustryDetail = {
  overview: string;
  handles: string[];
  stat: { value: string; label: string };
};

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  "Retail & Showrooms": {
    overview: "Shoppers decide in seconds whether to walk in. We design the full journey: a façade that stops traffic, window graphics that tease the offer, and in-store displays that guide people to the till.",
    handles: ["Façade & fascia signage", "Window & glass graphics", "Sale & seasonal campaigns", "Multi-store rollouts with matching colours"],
    stat: { value: "+30%", label: "avg. footfall lift after a façade upgrade" },
  },
  "Corporate Offices": {
    overview: "Your office should feel like your brand from the lobby to the last cabin. We handle reception logos, wayfinding, glass manifestation and cabin plates as one consistent system, installed over a weekend.",
    handles: ["Reception 3D logos", "Glass frosting & manifestation", "Floor wayfinding & directories", "Cabin & meeting-room plates"],
    stat: { value: "48 hrs", label: "typical weekend fit-out turnaround" },
  },
  "Cafés & Restaurants": {
    overview: "Food businesses live on atmosphere and late-night visibility. We make glowing façades, neon feature walls for photos, menu boards and printed table collateral, all in one style.",
    handles: ["Glowing façades & 3D letters", "Neon selfie walls", "Menu boards & light boxes", "Table tents, menus & packaging"],
    stat: { value: "200+", label: "cafés & restaurants branded" },
  },
  "Clinics & Hospitals": {
    overview: "In healthcare, clear signage reduces stress and keeps people safe. We provide fire-code exit signs, department boards and patient wayfinding that are easy to read and easy to clean.",
    handles: ["Department & OPD boards", "Fire-safety & exit signage", "Doctor name plates", "Privacy frosting for consult rooms"],
    stat: { value: "100%", label: "safety-code compliant signage" },
  },
  "Homes & Societies": {
    overview: "Your home's name plate is the first thing guests see. We craft premium plates for flats and villas, plus tower, gate and parking signage for RWAs and builders.",
    handles: ["Designer name plates", "Gate & villa signage", "Tower & block numbering", "Parking & society notice boards"],
    stat: { value: "2,500+", label: "homes with an Inkwave name plate" },
  },
  "Events & Exhibitions": {
    overview: "Event deadlines don't move. We produce stall branding, backdrops, standees and directional signs overnight, then deliver and set them up at the venue.",
    handles: ["Stall & booth branding", "Stage backdrops & photo walls", "Standees & directional signs", "On-site setup & teardown"],
    stat: { value: "24 hrs", label: "express production for events" },
  },
  "Schools & Coaching": {
    overview: "From admission-season hoardings to classroom labels, we help institutes look trustworthy and organised, with designs that are durable, child-safe and on budget.",
    handles: ["Admission hoardings & banners", "Campus & classroom signage", "Notice & achievement boards", "Certificates, ID cards & prospectus"],
    stat: { value: "60+", label: "schools & institutes served" },
  },
  "Hotels & Hospitality": {
    overview: "Guests notice the details. We make elegant room numbers, lobby lettering, brass-finish directional signs and printed in-room collateral that match your interiors.",
    handles: ["Lobby & façade lettering", "Room numbers & door plates", "Brass & gold directional signs", "In-room & F&B print collateral"],
    stat: { value: "35+", label: "hotels & banquet halls" },
  },
};
