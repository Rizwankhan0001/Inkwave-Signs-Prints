/* Details for each of the 6 services, shown on the home page and service pages.
   "types" are the specific products under each service. */

export type ServiceType = { name: string; note: string };

export type ServiceDetail = {
  tagline: string;
  overview: string;
  types: ServiceType[];
  features: string[];
  materials: string[];
  idealFor: string[];
  turnaround: string;
  warranty: string;
  life: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "LED & Neon Sign Boards": {
    tagline: "Be seen from across the road — day and night.",
    overview: "Shop and office sign boards built on rust-free aluminium or ACP frames with bright, even LED lighting. Choose a classic backlit board, a layered ACP sandwich board, or a custom neon sign. We design, make and install it.",
    types: [
      { name: "LED backlit sign board", note: "Bright box board with acrylic or flex face" },
      { name: "ACP sandwich board", note: "Layered, edge-lit, premium look" },
      { name: "Glow sign box", note: "Budget lit board for small shops" },
      { name: "Custom neon sign", note: "Any text or logo, for cafés, salons & events" },
    ],
    features: ["IP65 water-proof LED modules", "Rust-free aluminium or ACP frame", "Free mock-up on your shop photo", "Optional timer to save power"],
    materials: ["ACP", "Acrylic", "Backlit flex", "LED neon flex"],
    idealFor: ["Shops & showrooms", "Restaurants & cafés", "Clinics & pharmacies", "Offices"],
    turnaround: "4–6 days", warranty: "1 yr LEDs & driver", life: "7+ yrs outdoor",
  },
  "3D Letter Signs": {
    tagline: "Raised lettering that makes your brand look premium.",
    overview: "Individually cut letters in acrylic, stainless steel or brass, mounted off the wall so they cast a soft shadow. Add a warm LED halo glow behind each letter, or front-lit faces for maximum brightness.",
    types: [
      { name: "Acrylic 3D letters", note: "Any colour, light and affordable" },
      { name: "LED halo-lit letters", note: "Soft glow behind each letter" },
      { name: "Stainless steel letters", note: "Mirror or brushed finish" },
      { name: "Brass & PVD gold letters", note: "Luxury finish for hotels & showrooms" },
    ],
    features: ["CNC & laser-cut for sharp edges", "Exact brand colours & fonts", "Hidden fixings, no visible screws", "Indoor and outdoor builds"],
    materials: ["Acrylic", "SS 304", "Brass", "PVD gold & rose gold"],
    idealFor: ["Office receptions", "Showroom façades", "Hotels", "Cafés"],
    turnaround: "5–7 days", warranty: "1 yr lighting", life: "10+ yrs",
  },
  "Name Plates": {
    tagline: "A smart welcome for your home or office.",
    overview: "Name plates in modern acrylic, rust-free stainless steel or luxurious golden finishes. Text is UV-printed or laser-etched so it never peels, and we fit it for you.",
    types: [
      { name: "Acrylic name plate", note: "Glossy, frosted or layered designs" },
      { name: "LED acrylic name plate", note: "Warm glow at night" },
      { name: "Stainless steel name plate", note: "Etched, rust-free outdoors" },
      { name: "Golden (PVD) name plate", note: "Premium gold finish for villas" },
      { name: "Office & cabin plates", note: "Matching sets for every room" },
    ],
    features: ["100+ ready designs or custom", "Engraved or UV-printed text", "Stand-off steel fixings", "Weather-proof outdoor options"],
    materials: ["Acrylic", "SS 304", "PVD gold", "Brass", "Wood"],
    idealFor: ["Homes & flats", "Villa gates", "Office cabins", "Clinics"],
    turnaround: "2–5 days", warranty: "1–5 yrs (by material)", life: "5–15 yrs",
  },
  "Flex & Vinyl Printing": {
    tagline: "Big, bright prints for any wall, window or event.",
    overview: "Large-format printing up to 3.2 m wide: flex banners and hoardings, vinyl stickers and wall graphics, frosted glass film, rigid sunboard prints and UV prints on acrylic or wood. Fade-resistant inks, with fitting available.",
    types: [
      { name: "Flex banners & hoardings", note: "Shopfronts, sales, construction sites" },
      { name: "Vinyl stickers & wall graphics", note: "Windows, walls, vehicles" },
      { name: "Frosted glass film", note: "Office privacy with your logo" },
      { name: "Sunboard prints", note: "Exhibitions & in-store displays" },
      { name: "UV printing on acrylic/wood", note: "Vivid, scratch-resistant panels" },
    ],
    features: ["Up to 3.2 m seamless width", "Eco-solvent & UV inks", "Lamination & contour cutting", "24–48 hr express option"],
    materials: ["Star flex", "Vinyl", "Frosted film", "Sunboard", "Acrylic"],
    idealFor: ["Shops & sales", "Offices", "Events & exhibitions", "Builders"],
    turnaround: "24–48 hrs", warranty: "6 months – 2 yrs", life: "1–5 yrs",
  },
  "Digital & Office Printing": {
    tagline: "Everyday business printing, fast and sharp.",
    overview: "Visiting cards, brochures, flyers, letterheads, menus and catalogues on premium paper, plus printed T-shirts, mugs and corporate gift kits. Short runs can be ready the same day.",
    types: [
      { name: "Visiting cards", note: "Matte, gloss, velvet or textured" },
      { name: "Brochures & flyers", note: "Single sheets to multi-page" },
      { name: "Letterheads, bills & envelopes", note: "Matching stationery sets" },
      { name: "Menus & catalogues", note: "Laminated, ready to use" },
      { name: "T-shirts, mugs & gifts", note: "Uniforms, events, Diwali gifting" },
    ],
    features: ["Same-day short runs", "Lamination, spot UV & foil", "Free design touch-ups", "Better rates for large runs"],
    materials: ["Art paper 130–350 gsm", "Textured stocks", "Cotton & dri-fit tees"],
    idealFor: ["Startups & offices", "Restaurants", "Events", "Schools"],
    turnaround: "Same day – 3 days", warranty: "Reprint guarantee", life: "—",
  },
  "Safety Signs & Display Stands": {
    tagline: "Help people find their way — and stay safe.",
    overview: "Safety, exit and fire signs (including glow-in-the-dark), directional wayfinding boards, plus roll-up standees and snap poster frames for events, lobbies and shops.",
    types: [
      { name: "Safety & exit signs", note: "Fire, PPE, glow-in-the-dark exits" },
      { name: "Wayfinding & direction boards", note: "Offices, hospitals, societies" },
      { name: "Roll-up standees", note: "With carry bag, 24 hr delivery" },
      { name: "Clip-on poster frames", note: "Change posters in seconds" },
    ],
    features: ["Standard safety colours & symbols", "Photoluminescent exit signs", "Bulk sets in one style", "Reusable display bases"],
    materials: ["ACP", "Acrylic", "Sunboard", "Aluminium"],
    idealFor: ["Factories", "Hospitals & clinics", "Offices", "Events"],
    turnaround: "1–4 days", warranty: "1 yr", life: "5+ yrs",
  },
};

export const SERVICES_INTRO = "Six services, everything made in our Gurugram workshop and installed by our own team.";
