import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, PhoneCall, Check } from "lucide-react";
import { BRAND } from "../data";
import { useOpenStatus } from "../hours";
import { leadsEnabled, saveLead } from "../leads";
import { Reveal, SectionHeading } from "./ui";

const MAP_Q = encodeURIComponent(BRAND.address);

export function OpenBadge({ className = "" }: { className?: string }) {
  const s = useOpenStatus();
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="relative flex h-2 w-2">
        {s.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />}
        <span className={`relative h-2 w-2 rounded-full ${s.open ? "bg-[#22c55e]" : "bg-mute"}`} />
      </span>
      {s.label}
    </span>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("As soon as possible");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // With a form key set, the request goes straight to the business inbox; otherwise via WhatsApp
    if (leadsEnabled) {
      saveLead("Callback request", { name, phone, best_time: when });
    } else {
      const msg = `Hi ${BRAND.name}! Please call me back.\nName: ${name}\nPhone: ${phone}\nBest time: ${when}`;
      window.open(`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    }
    setSent(true);
  };

  const cards = [
    { icon: Phone, label: "Call us", value: BRAND.phone, href: `tel:${BRAND.phoneRaw}`, tone: "text-cyan bg-cyan/10" },
    { icon: MessageCircle, label: "WhatsApp", value: "Replies in ~15 min", href: `https://wa.me/${BRAND.phoneRaw}`, tone: "text-[#22c55e] bg-[#22c55e]/10" },
    { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}`, tone: "text-yellow bg-yellow/10" },
    { icon: Navigation, label: "Directions", value: "Udyog Vihar Ph 4", href: `https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`, tone: "text-magenta bg-magenta/10" },
  ];

  const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-base text-fg outline-none transition placeholder:text-mute/60 focus:border-cyan focus:ring-2 focus:ring-cyan/20 sm:text-sm";

  return (
    <section id="contact" className="border-t border-line py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Contact" title={<>Let's make something <span className="text-gradient">people notice.</span></>} sub="Visit the workshop, see material samples in person, or just send us a photo of your space." />
          <OpenBadge className="shrink-0 rounded-full border border-line bg-fg/[0.03] px-4 py-2 text-sm text-fg" />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          {/* Map + address */}
          <Reveal className="card relative overflow-hidden rounded-3xl">
            <div className="map-frame relative h-64 bg-ink-3 sm:h-80 lg:h-[calc(100%-112px)] lg:min-h-[340px]">
              {/* Shown until the map loads */}
              <div className="grid-bg absolute inset-0 grid place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-magenta/15 text-magenta"><MapPin className="h-6 w-6" /></span>
                  <p className="mt-3 text-sm text-mute">Loading map…</p>
                </div>
              </div>
              <iframe
                title="Map to Inkwave workshop"
                src={`https://maps.google.com/maps?q=${MAP_Q}&z=15&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-magenta" />
                <div>
                  <div className="font-semibold text-fg">{BRAND.full} — Workshop</div>
                  <div className="text-sm text-mute">{BRAND.address}</div>
                </div>
              </div>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`} target="_blank" rel="noreferrer" className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent">
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {/* Quick contact cards */}
            <div className="grid grid-cols-2 gap-3">
              {cards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.05}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card group flex h-full flex-col gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-fg/25 sm:p-5">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.tone}`}><c.icon className="h-5 w-5" /></span>
                    <span>
                      <span className="block text-xs text-mute">{c.label}</span>
                      <span className="block break-words text-sm font-semibold text-fg">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Callback form */}
            <Reveal className="card rounded-3xl p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/10 text-cyan"><PhoneCall className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">Request a callback</h3>
                  <p className="flex items-center gap-1.5 text-xs text-mute"><Clock className="h-3.5 w-3.5" /> {BRAND.hours}</p>
                </div>
              </div>
              <form onSubmit={submit} className="mt-5 grid gap-3 sm:grid-cols-2">
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Your name" className={field} />
                <input required type="tel" pattern="[0-9+\s-]{10,}" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" aria-label="Phone number" className={field} />
                <select value={when} onChange={(e) => setWhen(e.target.value)} aria-label="Best time to call" className={`${field} sm:col-span-2`}>
                  {["As soon as possible", "Morning (10 AM – 1 PM)", "Afternoon (1 – 5 PM)", "Evening (5 – 8 PM)"].map((o) => <option key={o}>{o}</option>)}
                </select>
                <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-magenta px-5 py-3 text-sm font-semibold text-onaccent transition hover:brightness-110 sm:col-span-2">
                  {sent ? <><Check className="h-4 w-4" /> Request sent — we'll call you</> : <><PhoneCall className="h-4 w-4" /> Call me back</>}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
