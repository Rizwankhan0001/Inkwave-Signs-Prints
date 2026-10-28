import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { SERVICES, SERVICE_EVENT, goToService, serviceUrl, type Category, type ServiceEventDetail } from "../data";
import { SectionHeading, accentClass } from "./ui";
import { CATEGORY_INFO, SERVICE_DETAILS } from "../details";

const TABS: ("All" | Category)[] = ["All", "Signage", "Printing", "Name Plates", "Display"];
const slug = (t: string) => "svc-" + t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Services() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [highlight, setHighlight] = useState<string | null>(null);
  const list = tab === "All" ? SERVICES : SERVICES.filter((s) => s.category === tab);

  // Menu / search picked a service: filter to it, scroll to it, flash it
  useEffect(() => {
    const on = (e: Event) => {
      const { title, target } = (e as CustomEvent<ServiceEventDetail>).detail;
      if (target !== "services") return;
      const s = SERVICES.find((x) => x.title === title);
      if (!s) return;
      setTab(s.category);
      setHighlight(title);
      setTimeout(() => document.getElementById(slug(title))?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
      setTimeout(() => setHighlight(null), 2600);
    };
    window.addEventListener(SERVICE_EVENT, on);
    return () => window.removeEventListener(SERVICE_EVENT, on);
  }, []);

  return (
    <section id="services" className="relative scroll-mt-24 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we make"
            title={<>Everything your brand needs, <span className="text-gradient">under one roof.</span></>}
            sub="From a single cabin name plate to a full retail rollout — 16+ product lines, all produced in our Gurugram workshop."
          />
          <div className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:rounded-full sm:border sm:border-line sm:bg-fg/[0.03] sm:p-1" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${tab === t ? "text-ink" : "text-mute hover:text-fg"}`}
              >
                {tab === t && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                <span className="relative">{t}</span>
                <span className={`relative ml-1.5 text-xs ${tab === t ? "text-ink/50" : "text-mute/60"}`}>
                  {t === "All" ? SERVICES.length : SERVICES.filter((s) => s.category === t).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="mt-8 flex max-w-3xl items-start gap-2 text-sm text-mute sm:mt-10 sm:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            <span><b className="font-semibold text-fg">{tab === "All" ? "All services" : tab}:</b> {CATEGORY_INFO[tab]}</span>
          </motion.p>
        </AnimatePresence>

        <motion.div layout className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((s) => {
              const a = accentClass[s.accent];
              const Icon = s.icon;
              const lit = highlight === s.title;
              return (
                <motion.article
                  layout
                  id={slug(s.title)}
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${s.title} — view details`}
                  onClick={() => goToService(s.title)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), goToService(s.title))}
                  className={`card group relative flex cursor-pointer flex-col outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-3xl p-5 transition sm:p-6 duration-300 hover:-translate-y-1 ${a.ring} ${a.glow} ${lit ? "!border-cyan shadow-[0_0_0_4px_rgb(0_194_255/.2),0_0_60px_-10px_var(--color-cyan)]" : ""}`}
                >
                  <div className="flex items-center gap-3 sm:items-start sm:justify-between">
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${a.bg} ${a.text}`}><Icon className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                    {/* Phones: title sits beside the icon */}
                    <h3 className="min-w-0 flex-1 font-display text-lg font-semibold leading-tight text-fg sm:hidden">{s.title}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-mute sm:hidden" />
                    <span className="hidden rounded-full border border-line px-2.5 py-1 text-[11px] text-mute sm:inline">{s.category}</span>
                  </div>
                  <h3 className="mt-6 hidden font-display text-xl font-semibold text-fg sm:block">{s.title}</h3>
                  <p className="mt-3 text-sm font-medium text-fg/80 sm:mt-1">{SERVICE_DETAILS[s.title]?.tagline}</p>
                  <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-mute sm:block">{s.desc}</p>
                  {/* Real link to the service page (quick view opens on card click) */}
                  <a href={serviceUrl(s.title)} onClick={(e) => e.stopPropagation()} className="mt-4 hidden w-fit items-center gap-1 text-sm font-medium text-cyan hover:underline sm:inline-flex">
                    Full details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-sm sm:mt-6 sm:pt-4">
                    <span className="text-fg">from <span className={`font-semibold ${a.text}`}>₹{s.from.toLocaleString("en-IN")}</span><span className="text-mute">/{s.unit}</span></span>
                    <button
                      onClick={(e) => { e.stopPropagation(); goToService(s.title, "quote"); }}
                      className="flex items-center gap-1 rounded-full bg-fg/5 px-3 py-1.5 text-xs font-medium text-fg transition hover:bg-fg hover:text-ink"
                    >
                      <Calculator className="h-3.5 w-3.5" /> Price it
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
