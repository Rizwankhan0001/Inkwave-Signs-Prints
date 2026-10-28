import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube, ArrowRight, FileDown, Check, ArrowUp } from "lucide-react";
import { BRAND, SERVICES, SOCIALS, serviceUrl } from "../data";
import { leadsEnabled, saveLead } from "../leads";
import { Logo } from "./Navbar";

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6">
      <div className="theme-dark relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-magenta via-[#ff6a4d] to-yellow p-7 sm:rounded-[2rem] sm:p-10 md:p-16">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-5xl">Ready to light up your brand?</h2>
            <p className="mt-3 max-w-lg text-ink/75">Send us a photo of your space. Get a free mock-up and quote within 2 hours.</p>
          </div>
          <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-row">
            <a href={`tel:${BRAND.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-fg transition hover:bg-ink-3"><Phone className="h-4 w-4" /> Call now</a>
            <a href="/#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-fg/90 px-7 py-4 font-semibold text-ink transition hover:bg-fg">Get estimate <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceList() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (leadsEnabled) saveLead("Price list request", { email });
    else window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent("Please send the 2026 price list")}&body=${encodeURIComponent(`Please send the price list to ${email}`)}`;
    setDone(true);
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 border-b border-line py-10 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow/10 text-yellow"><FileDown className="h-6 w-6" /></span>
          <div>
            <h3 className="font-display text-xl font-semibold text-fg">Get the 2026 price list</h3>
            <p className="text-sm text-mute">Rates for 60+ materials & finishes, plus festive offers. No spam.</p>
          </div>
        </div>
        <form onSubmit={submit} className="flex w-full max-w-md gap-2">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" aria-label="Email"
            className="min-w-0 flex-1 rounded-full border border-line bg-ink px-5 py-3 text-base sm:text-sm text-fg outline-none placeholder:text-mute/60 focus:border-cyan" />
          <button className="flex shrink-0 items-center gap-1.5 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent">
            {done ? <><Check className="h-4 w-4" /> Sent</> : <>Send <ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2 pb-24 lg:pb-0">
      <PriceList />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-mute">Signage, printing and branding studio in Gurugram. Designing, producing and installing for 12+ years.</p>
          <div className="mt-6 flex gap-2">
            {([[Instagram, SOCIALS.instagram, "Instagram"], [Facebook, SOCIALS.facebook, "Facebook"], [Linkedin, SOCIALS.linkedin, "LinkedIn"], [Youtube, SOCIALS.youtube, "YouTube"]] as const).map(([I, href, label]) => (
              <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition hover:border-fg hover:text-fg"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-fg">Signage</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-mute">
            {SERVICES.filter((s) => s.category === "Signage").map((s) => <li key={s.title}><a href={serviceUrl(s.title)} className="transition hover:text-fg">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-fg">Printing & more</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-mute">
            {SERVICES.filter((s) => s.category !== "Signage").slice(0, 7).map((s) => <li key={s.title}><a href={serviceUrl(s.title)} className="transition hover:text-fg">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-fg">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-mute">
            {[["Our work", "/#work"], ["All services", "/services"], ["Industries", "/industries"], ["Price guides", "/guides"], ["How it works", "/#process"], ["FAQ", "/#faq"], ["Contact", "/#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="transition hover:text-fg">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h4 className="font-display font-semibold text-fg">Visit the workshop</h4>
          <ul className="mt-4 space-y-4 text-sm text-mute">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-magenta" /> {BRAND.address}</li>
            <li><a href={`tel:${BRAND.phoneRaw}`} className="flex gap-3 hover:text-fg"><Phone className="h-4 w-4 shrink-0 text-cyan" /> {BRAND.phone}</a></li>
            <li><a href={`mailto:${BRAND.email}`} className="flex gap-3 hover:text-fg"><Mail className="h-4 w-4 shrink-0 text-yellow" /> {BRAND.email}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-fg" /> {BRAND.hours}</li>
          </ul>
        </div>
      </div>
      {/* Big outlined brand name */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden px-4">
        <div className="footer-wordmark mx-auto max-w-7xl text-center font-display text-[24vw] font-bold leading-none tracking-tighter lg:text-[15rem]">INKWAVE</div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-mute sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} {BRAND.full}. All rights reserved.</p>
          <p>GSTIN: 06XXXXXXXXXXXZX · *Free installation on orders above ₹10,000</p>
          <span className="flex items-center gap-4"><a href="/privacy" className="transition hover:text-fg">Privacy</a><a href="/terms" className="transition hover:text-fg">Terms</a><a href="#" className="flex items-center gap-1.5 transition hover:text-fg">Top <ArrowUp className="h-3.5 w-3.5" /></a></span>
        </div>
      </div>
    </footer>
  );
}
