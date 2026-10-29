import { SERVICE_SLUGS } from "./data";

/* Localities we serve. Each one gets an area page (/areas/<slug>) and
   local service pages (/<service>-in-<slug>) for the services in LOCAL_SERVICES.
   Distances are approximate road distance from our Udyog Vihar workshop. */

export type Area = {
  name: string;
  slug: string;
  region: "Gurugram" | "Delhi" | "Faridabad" | "Noida";
  km: number;
  /** Two sentences that are specific to this locality */
  blurb: string;
  landmarks: string[];
  /** What kinds of businesses we usually work with here */
  mix: string;
  nearby: string[];
};

export const AREAS_LOCAL: Area[] = [
  { name: "Gurugram", slug: "gurugram", region: "Gurugram", km: 0,
    blurb: "Our workshop is in Udyog Vihar, so Gurugram is home ground. Most jobs here get a site visit the same day.",
    landmarks: ["Udyog Vihar", "Cyber Hub", "Sadar Bazaar"], mix: "shops, offices, clinics and homes across every sector",
    nearby: ["udyog-vihar", "dlf-cyber-city", "sector-29-gurugram"] },
  { name: "Udyog Vihar", slug: "udyog-vihar", region: "Gurugram", km: 1,
    blurb: "Our own workshop sits in Udyog Vihar Phase 4, minutes from most factories and offices in the area. You can visit to see material samples in person.",
    landmarks: ["Phase 1–5", "Dundahera", "NH-48 service road"], mix: "factories, export houses and corporate offices",
    nearby: ["dlf-cyber-city", "palam-vihar", "aerocity"] },
  { name: "DLF Cyber City", slug: "dlf-cyber-city", region: "Gurugram", km: 4,
    blurb: "Cyber City towers have strict facility rules, so we handle approvals and install after hours or on weekends. Cyber Hub restaurants often ask for neon and glowing façades.",
    landmarks: ["Cyber Hub", "DLF Phase 2 & 3", "Ambience Mall"], mix: "corporate offices, restaurants and bars",
    nearby: ["mg-road-gurugram", "udyog-vihar", "golf-course-road"] },
  { name: "MG Road", slug: "mg-road-gurugram", region: "Gurugram", km: 6,
    blurb: "MG Road's malls and showrooms compete for attention from heavy traffic. Bright LED and 3D letter signs are what work here.",
    landmarks: ["MGF Metropolitan", "Sikanderpur", "Guru Dronacharya metro"], mix: "showrooms, mall stores and clinics",
    nearby: ["dlf-cyber-city", "sushant-lok", "sector-29-gurugram"] },
  { name: "Sector 29", slug: "sector-29-gurugram", region: "Gurugram", km: 7,
    blurb: "Sector 29 is Gurugram's café and nightlife hub, where a sign has to look good at night and in photos. Halo-lit letters and neon are our most common jobs here.",
    landmarks: ["Leisure Valley", "Kingdom of Dreams", "IFFCO Chowk"], mix: "cafés, bars, restaurants and studios",
    nearby: ["mg-road-gurugram", "sector-14-gurugram", "sushant-lok"] },
  { name: "Sector 14", slug: "sector-14-gurugram", region: "Gurugram", km: 9,
    blurb: "Sector 14's busy market has shopfronts packed side by side, so visibility from the street is everything. Most owners here choose LED boards and flex for sales.",
    landmarks: ["Sector 14 Market", "Old Delhi Road", "Rajiv Chowk"], mix: "retail shops, coaching centres and clinics",
    nearby: ["sadar-bazar-gurugram", "sector-29-gurugram", "palam-vihar"] },
  { name: "Sadar Bazaar", slug: "sadar-bazar-gurugram", region: "Gurugram", km: 9,
    blurb: "Gurugram's oldest market needs signs that read clearly through crowds and narrow lanes. We work around market hours to install with no disruption.",
    landmarks: ["Sadar Bazaar", "Jacobpura", "Old Gurgaon"], mix: "jewellers, garment stores and wholesalers",
    nearby: ["sector-14-gurugram", "palam-vihar", "gurugram"] },
  { name: "Palam Vihar", slug: "palam-vihar", region: "Gurugram", km: 7,
    blurb: "Palam Vihar is mostly residential, with busy local markets. Name plates for homes and boards for neighbourhood shops make up most of our work here.",
    landmarks: ["Palam Vihar market", "Carterpuri", "Dwarka border"], mix: "homes, local shops and clinics",
    nearby: ["udyog-vihar", "dwarka", "sector-14-gurugram"] },
  { name: "Sushant Lok", slug: "sushant-lok", region: "Gurugram", km: 8,
    blurb: "Sushant Lok mixes homes, clinics and small offices along busy inner roads. Clean acrylic boards and cabin signage are popular here.",
    landmarks: ["Galleria Market", "Sushant Lok 1–3", "Sector 43"], mix: "clinics, boutiques and small offices",
    nearby: ["golf-course-road", "mg-road-gurugram", "south-city-gurugram"] },
  { name: "Golf Course Road", slug: "golf-course-road", region: "Gurugram", km: 9,
    blurb: "Premium salons, clinics and high-rise homes line Golf Course Road, so finish quality matters more than size. We often match signs to brass, wood or marble interiors.",
    landmarks: ["DLF Phase 5", "Sector 42–54", "Rapid Metro"], mix: "salons, clinics, showrooms and luxury homes",
    nearby: ["dlf-cyber-city", "sushant-lok", "golf-course-extension-road"] },
  { name: "South City", slug: "south-city-gurugram", region: "Gurugram", km: 10,
    blurb: "South City's markets and residential blocks need both shop signs and home name plates. Our crew is in the area most days of the week.",
    landmarks: ["South City 1 & 2", "Sector 41", "Unitech Arcadia"], mix: "local retail, schools and homes",
    nearby: ["sushant-lok", "sohna-road", "sector-29-gurugram"] },
  { name: "Sohna Road", slug: "sohna-road", region: "Gurugram", km: 14,
    blurb: "New showrooms keep opening along Sohna Road, and they need signs readable from a moving car. Large LED fascias and sale hoardings are our main work here.",
    landmarks: ["Subhash Chowk", "Vatika City", "Badshahpur"], mix: "showrooms, car dealers and new retail",
    nearby: ["south-city-gurugram", "golf-course-extension-road", "gurugram"] },
  { name: "Golf Course Extension Road", slug: "golf-course-extension-road", region: "Gurugram", km: 16,
    blurb: "Fast-growing sectors along Golf Course Extension Road mean new societies, clinics and shops every month. We often handle complete signage for new projects.",
    landmarks: ["Sector 56–66", "Badshahpur", "Sector 65 market"], mix: "housing societies, clinics and new retail",
    nearby: ["golf-course-road", "sohna-road", "south-city-gurugram"] },
  { name: "Dwarka Expressway", slug: "dwarka-expressway", region: "Gurugram", km: 13,
    blurb: "New sectors along the Dwarka Expressway need society signage, tower numbering and shop boards as residents move in. Bulk orders here qualify for our lower rates.",
    landmarks: ["Sector 102–113", "Bajghera", "Kherki Daula"], mix: "housing societies, builders and new shops",
    nearby: ["dwarka", "palam-vihar", "manesar"] },
  { name: "Manesar", slug: "manesar", region: "Gurugram", km: 22,
    blurb: "Manesar's IMT plants need durable, compliant signage in bulk, from gate boards to hundreds of safety signs. We survey with your EHS team and supply one consistent set.",
    landmarks: ["IMT Manesar", "Sector 3–8", "Pataudi Road"], mix: "factories, warehouses and plants",
    nearby: ["dwarka-expressway", "udyog-vihar", "gurugram"] },
  { name: "Dwarka", slug: "dwarka", region: "Delhi", km: 10,
    blurb: "Dwarka is just across the border from our workshop, so delivery is quick. Housing societies, sector markets and clinics are our regular clients here.",
    landmarks: ["Dwarka Sector 6–12", "Dwarka Mor", "Vegas Mall"], mix: "societies, clinics and sector-market shops",
    nearby: ["palam-vihar", "janakpuri", "aerocity"] },
  { name: "Aerocity & Mahipalpur", slug: "aerocity", region: "Delhi", km: 8,
    blurb: "Hotels and event venues around Aerocity need elegant signage and fast event branding. We often deliver standees and backdrops overnight for conferences.",
    landmarks: ["Aerocity hospitality district", "Mahipalpur", "IGI Airport"], mix: "hotels, event venues and travel businesses",
    nearby: ["udyog-vihar", "vasant-kunj", "dwarka"] },
  { name: "Janakpuri", slug: "janakpuri", region: "Delhi", km: 16,
    blurb: "Janakpuri's district centre and busy markets keep shop owners upgrading their boards. LED fascias and acrylic signs are the most requested here.",
    landmarks: ["Janakpuri District Centre", "C-Block market", "Uttam Nagar"], mix: "retail shops, hospitals and coaching centres",
    nearby: ["dwarka", "rajouri-garden", "palam-vihar"] },
  { name: "Rajouri Garden", slug: "rajouri-garden", region: "Delhi", km: 21,
    blurb: "Rajouri Garden's main market is one of West Delhi's busiest shopping streets. Brands here want bold, bright signs that stand out at night.",
    landmarks: ["Rajouri Garden main market", "Tagore Garden", "Ring Road"], mix: "fashion stores, jewellers and restaurants",
    nearby: ["janakpuri", "dwarka", "vasant-kunj"] },
  { name: "Vasant Kunj", slug: "vasant-kunj", region: "Delhi", km: 14,
    blurb: "Malls, embassies and upscale homes in Vasant Kunj call for premium finishes. Steel name plates and halo-lit lettering are common orders here.",
    landmarks: ["Ambience & DLF Promenade", "Vasant Kunj sectors", "Nelson Mandela Marg"], mix: "mall stores, residences and clinics",
    nearby: ["aerocity", "saket", "mg-road-gurugram"] },
  { name: "Saket", slug: "saket", region: "Delhi", km: 20,
    blurb: "Saket's malls and PVR Anupam market draw big crowds, and signage there has to be sharp up close. We also do a lot of clinic and hospital signage nearby.",
    landmarks: ["Select Citywalk", "PVR Anupam market", "Max Hospital"], mix: "mall stores, hospitals and restaurants",
    nearby: ["vasant-kunj", "nehru-place", "aerocity"] },
  { name: "Nehru Place", slug: "nehru-place", region: "Delhi", km: 25,
    blurb: "Nehru Place is packed with IT offices and showrooms that need clear office signage and storefront boards. We schedule installs around the market's working hours.",
    landmarks: ["Nehru Place market", "Kalkaji", "Okhla"], mix: "IT offices, electronics showrooms and agencies",
    nearby: ["saket", "faridabad", "noida"] },
  { name: "Faridabad", slug: "faridabad", region: "Faridabad", km: 35,
    blurb: "We serve Faridabad with scheduled installation runs, so you get workshop quality without paying extra for travel. Markets and industrial units are our main clients here.",
    landmarks: ["NIT market", "Sector 15–16", "Sector 24–25 industrial"], mix: "markets, factories and schools",
    nearby: ["ballabhgarh", "nehru-place", "gurugram"] },
  { name: "Ballabhgarh", slug: "ballabhgarh", region: "Faridabad", km: 42,
    blurb: "Ballabhgarh's growing markets and industrial belt order shop boards and safety signage. We combine trips with Faridabad installs to keep costs down.",
    landmarks: ["Ballabhgarh market", "Sector 55–65", "Mathura Road"], mix: "local shops, factories and schools",
    nearby: ["faridabad", "nehru-place", "gurugram"] },
  { name: "Noida", slug: "noida", region: "Noida", km: 40,
    blurb: "Many of our corporate clients have offices in both Gurugram and Noida, and we match signage across both. Sector 18's market and the IT hubs are regular stops for us.",
    landmarks: ["Sector 18 market", "Sector 62", "Sector 125–135"], mix: "IT offices, showrooms and malls",
    nearby: ["nehru-place", "faridabad", "saket"] },
];

/** Every service gets a local page in every area, using the phrase people search for. */
export const LOCAL_SERVICES: { title: string; keyword: string; slug: string }[] = [
  { title: "LED & Neon Sign Boards", keyword: "LED Sign Board", slug: "led-sign-board" },
  { title: "3D Letter Signs", keyword: "3D Letter Sign Board", slug: "3d-letter-sign-board" },
  { title: "Name Plates", keyword: "Name Plate", slug: "name-plate" },
  { title: "Flex & Vinyl Printing", keyword: "Flex & Vinyl Printing", slug: "flex-vinyl-printing" },
  { title: "Digital & Office Printing", keyword: "Digital Printing", slug: "digital-printing" },
  { title: "Safety Signs & Display Stands", keyword: "Safety Signage & Standees", slug: "safety-signage" },
];

export const areaBySlug = (slug: string) => AREAS_LOCAL.find((a) => a.slug === slug)!;
export const areaUrl = (slug: string) => `/areas/${slug}`;
/** The city-wide "Gurugram" version of each service is its main service page, so it doesn't compete with it. */
export const MAIN_AREA = "gurugram";
export const localUrl = (serviceSlug: string, areaSlug: string) => {
  if (areaSlug === MAIN_AREA) {
    const title = LOCAL_SERVICES.find((l) => l.slug === serviceSlug)?.title ?? "";
    return `/services/${SERVICE_SLUGS[title]}`;
  }
  return `/${serviceSlug}-in-${areaSlug}`;
};
export const localFor = (title: string) => LOCAL_SERVICES.find((l) => l.title === title);

/** How fast we can visit, based on distance. */
export function visitTime(km: number) {
  if (km <= 12) return { visit: "Same-day site visit", extraDays: 0 };
  if (km <= 25) return { visit: "Next-day site visit", extraDays: 0 };
  return { visit: "Site visit within 48 hours", extraDays: 1 };
}

/** Area label with its city, e.g. "Sector 29, Gurugram" (no repeat for the city itself). */
export const areaLabel = (a: Area) => (a.name === a.region || a.name.includes(a.region) ? a.name : `${a.name}, ${a.region}`);
