import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND, INDUSTRIES, INDUSTRY_EVENT, SERVICES, goToService, industryUrl } from "../data";
import { INDUSTRY_DETAILS } from "../details";
import { SectionHeading, accentClass } from "./ui";

export default function Industries() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Menus / search can select an industry
  useEffect(() => {
    const on = (e: Event) => {
      const i = INDUSTRIES.findIndex((x) => x.title === (e as CustomEvent<string>).detail);
      if (i < 0) return;
      setActive(i);
      document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener(INDUSTRY_EVENT, on);
    return () => window.removeEventListener(INDUSTRY_EVENT, on);
  }, []);

  // Keep the selected chip visible in the mobile tab row
  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLElement>(`[data-i="${active}"]`);
    const row = tabsRef.current;
    if (el && row && row.scrollWidth > row.clientWidth) {
      row.scrollTo({ left: el.offsetLeft - row.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const ind = INDUSTRIES[active];
  const d = INDUSTRY_DETAILS[ind.title];
  const products = ind.products.map((t) => SERVICES.find((s) => s.title === t)!).filter(Boolean);

  return (
    <section id="industries" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries we serve"
          title={<>Made for the way <span className="text-gradient">your business works.</span></>}
          sub="Every industry has its own rules: visibility, safety codes, durability, deadlines. Pick yours to see what we usually make and why."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-[300px_1fr] lg:gap-6">
          {/* Tabs: swipe row on phones, vertical list on desktop */}
          <div ref={tabsRef} role="tablist" aria-label="Industries" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
            {INDUSTRIES.map((x, i) => {
              const on = i === active;
              return (
                <button
                  key={x.title}
                  data-i={i}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 text-left text-sm transition lg:rounded-2xl lg:border-transparent lg:px-4 lg:py-3.5 ${on ? "border-fg/20 text-fg" : "border-line text-mute hover:text-fg"}`}
                >
                  {on && <motion.span layoutId="industry-pill" className="absolute inset-0 rounded-full bg-fg/[0.07] lg:rounded-2xl lg:border lg:border-line lg:bg-ink-2" transition={{ type: "spring", bounce: 0.15, duration: 0.45 }} />}
                  <x.icon className={`relative h-4 w-4 shrink-0 lg:h-5 lg:w-5 ${on ? "text-cyan" : ""}`} />
                  <span className="relative whitespace-nowrap font-medium">{x.title}</span>
                  <ArrowRight className={`relative ml-auto hidden h-4 w-4 transition lg:block ${on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="card relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="relative p-5 sm:p-8 lg:p-10"
              >
                <ind.icon className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 text-fg/[0.035] sm:h-72 sm:w-72" strokeWidth={1} aria-hidden />

                <div className="relative grid gap-8 xl:grid-cols-[1fr_220px]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan"><ind.icon className="h-6 w-6" /></span>
                      <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">{ind.title}</h3>
                    </div>
                    <p className="mt-5 max-w-2xl leading-relaxed text-fg/80 sm:text-lg">{d.overview}</p>

                    <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-mute">What we handle</h4>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {d.handles.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-fg/90">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-magenta/10 text-magenta"><Check className="h-3 w-3" strokeWidth={3} /></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stat */}
                  <div className="flex flex-row items-center gap-4 self-start rounded-2xl border border-line bg-ink/60 p-5 backdrop-blur xl:flex-col xl:items-start xl:gap-2">
                    <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">{d.stat.value}</div>
                    <p className="text-sm text-mute">{d.stat.label}</p>
                  </div>
                </div>

                {/* Recommended products */}
                <h4 className="relative mt-8 font-display text-sm font-semibold uppercase tracking-wider text-mute">Recommended for {ind.title.toLowerCase()}</h4>
                <div className="relative mt-3 grid gap-3 sm:grid-cols-3">
                  {products.map((p) => {
                    const a = accentClass[p.accent];
                    return (
                      <button key={p.title} onClick={() => goToService(p.title)} className="group flex items-center gap-3 rounded-2xl border border-line bg-ink/40 p-3.5 text-left transition hover:-translate-y-0.5 hover:border-fg/25">
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${a.bg} ${a.text}`}><p.icon className="h-5 w-5" /></span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-fg">{p.title}</span>
                          <span className="block text-xs text-mute">from ₹{p.from.toLocaleString("en-IN")}/{p.unit}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-mute transition group-hover:text-fg" />
                      </button>
                    );
                  })}
                </div>

                <div className="relative mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <a href={industryUrl(ind.title)} className="group flex items-center gap-1.5 text-sm font-medium text-cyan">More on {ind.title.toLowerCase()} signage <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                  <div className="grid grid-cols-2 gap-2 sm:flex">
                    <a href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(`Hi! I need signage/printing for my ${ind.title.toLowerCase()} business.`)}`} target="_blank" rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-fg transition hover:bg-fg/5">
                      <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
                    </a>
                    <a href="/#quote" className="flex items-center justify-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent">
                      Plan project <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
