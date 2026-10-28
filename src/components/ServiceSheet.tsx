import { useEffect, useState } from "react";
import { AnimatePresence, motion, useDragControls, type PanInfo } from "framer-motion";
import { X, Check, Clock, ShieldCheck, Hourglass, Calculator, MessageCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BRAND, INDUSTRIES, SERVICES, SERVICE_EVENT, goToService, inSentence, industryUrl, serviceUrl, type ServiceEventDetail } from "../data";
import { SERVICE_DETAILS } from "../details";
import { accentClass } from "./ui";
import { tierRows } from "../pricing";

const GRADIENT = {
  cyan: "from-cyan/25 via-cyan/5",
  magenta: "from-magenta/25 via-magenta/5",
  yellow: "from-yellow/25 via-yellow/5",
};

function useIsDesktop() {
  const q = "(min-width: 768px)";
  const [d, setD] = useState(() => typeof window !== "undefined" && window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const on = () => setD(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return d;
}

/** Detail panel for one service. Opens from menus, search, cards and footer links. */
export default function ServiceSheet() {
  const [title, setTitle] = useState<string | null>(null);
  const desktop = useIsDesktop();
  const drag = useDragControls();

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<ServiceEventDetail>).detail;
      if (d.target === "detail") setTitle(d.title);
    };
    window.addEventListener(SERVICE_EVENT, on);
    return () => window.removeEventListener(SERVICE_EVENT, on);
  }, []);

  const idx = title ? SERVICES.findIndex((s) => s.title === title) : -1;
  const step = (n: number) => setTitle(SERVICES[(idx + n + SERVICES.length) % SERVICES.length].title);

  useEffect(() => {
    if (!title) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTitle(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  });

  const close = () => setTitle(null);
  const s = idx >= 0 ? SERVICES[idx] : null;
  const d = s ? SERVICE_DETAILS[s.title] : null;

  const onDragEnd = (_: unknown, info: PanInfo) => { if (info.offset.y > 120 || info.velocity.y > 600) close(); };

  return (
    <AnimatePresence>
      {s && d && (
          <motion.div key="backdrop" className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm light:bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} />
      )}
      {s && d && (
          <motion.aside
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-label={s.title}
            initial={desktop ? { x: "100%" } : { y: "100%" }}
            animate={desktop ? { x: 0 } : { y: 0 }}
            exit={desktop ? { x: "100%" } : { y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            drag={desktop ? false : "y"}
            dragControls={drag}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={onDragEnd}
            className="fixed z-[95] flex flex-col overflow-hidden border-line bg-ink-2 shadow-2xl
              inset-x-0 bottom-0 max-h-[92dvh] rounded-t-3xl border-t
              md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[560px] md:rounded-none md:border-l md:border-t-0"
          >
            {/* Header banner */}
            {/* Phones: drag the header down to close */}
            <div onPointerDown={(e) => !desktop && drag.start(e)} className={`relative shrink-0 touch-none overflow-hidden bg-gradient-to-br ${GRADIENT[s.accent]} to-transparent px-5 pb-6 pt-3 sm:px-7 md:touch-auto md:pt-6`}>
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
              <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-fg/20 md:hidden" aria-hidden />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-line bg-ink/60 px-3 py-1 text-xs text-mute backdrop-blur">{s.category}</span>
                <div className="flex items-center gap-1">
                  <button onClick={() => step(-1)} className="grid h-9 w-9 place-items-center rounded-full text-mute transition hover:bg-fg/10 hover:text-fg" aria-label="Previous service"><ChevronLeft className="h-5 w-5" /></button>
                  <span className="text-xs tabular-nums text-mute">{idx + 1}/{SERVICES.length}</span>
                  <button onClick={() => step(1)} className="grid h-9 w-9 place-items-center rounded-full text-mute transition hover:bg-fg/10 hover:text-fg" aria-label="Next service"><ChevronRight className="h-5 w-5" /></button>
                  <button onClick={close} className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-line bg-ink/60 text-fg transition hover:bg-fg hover:text-ink" aria-label="Close"><X className="h-4 w-4" /></button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="relative mt-5 flex items-start gap-4">
                  <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-ink/70 ${accentClass[s.accent].text}`}><s.icon className="h-7 w-7" /></div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-bold leading-tight text-fg sm:text-3xl">{s.title}</h2>
                    <p className="mt-1 text-sm text-mute sm:text-base">{d.tagline}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={s.title}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
                className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 sm:px-7"
              >
                {/* Quick facts */}
                <dl className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: Clock, k: "Ready in", v: d.turnaround },
                    { icon: ShieldCheck, k: "Warranty", v: d.warranty },
                    { icon: Hourglass, k: "Lasts", v: d.life },
                  ].map((f) => (
                    <div key={f.k} className="rounded-2xl border border-line bg-ink/50 p-3">
                      <f.icon className={`h-4 w-4 ${accentClass[s.accent].text}`} />
                      <dt className="mt-2 text-[11px] uppercase tracking-wider text-mute">{f.k}</dt>
                      <dd className="mt-0.5 text-sm font-semibold leading-tight text-fg">{f.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 leading-relaxed text-fg/85">{d.overview}</p>

                <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">What you get</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {d.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-fg/90">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${accentClass[s.accent].bg} ${accentClass[s.accent].text}`}><Check className="h-3 w-3" strokeWidth={3} /></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">Bulk pricing</h3>
                <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
                  {tierRows(s.from, s.unit).map((r) => (
                    <div key={r.size} className={`shrink-0 rounded-xl border px-3 py-2 ${r.offValue ? "border-[#22c55e]/30 bg-[#22c55e]/5" : "border-line"}`}>
                      <div className="text-[11px] text-mute">{r.size}</div>
                      <div className="text-sm font-semibold text-fg">{r.rate}</div>
                      {r.offValue > 0 && <div className="text-[11px] font-medium text-[#4ade80] light:text-[#15803d]">{r.off}</div>}
                    </div>
                  ))}
                </div>

                <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">Materials & finishes</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.materials.map((m) => <span key={m} className="rounded-full border border-line px-3 py-1.5 text-sm text-fg/85">{m}</span>)}
                </div>

                <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">Perfect for</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.idealFor.map((m) => <span key={m} className="rounded-full bg-fg/5 px-3 py-1.5 text-sm text-fg/85">{m}</span>)}
                </div>

                {/* Industries that use it */}
                {(() => {
                  const inds = INDUSTRIES.filter((i) => i.products.includes(s.title));
                  if (!inds.length) return null;
                  return (
                    <>
                      <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">Popular with</h3>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {inds.map((i) => (
                          <a key={i.title} href={industryUrl(i.title)} className="group flex items-center gap-3 rounded-xl border border-line p-3 text-left text-sm text-fg transition hover:border-fg/30">
                            <i.icon className="h-4 w-4 shrink-0 text-cyan" /> <span className="flex-1">{i.title}</span>
                            <ArrowRight className="h-4 w-4 text-mute transition group-hover:translate-x-0.5 group-hover:text-fg" />
                          </a>
                        ))}
                      </div>
                    </>
                  );
                })()}

                {/* Related services */}
                <a href={serviceUrl(s.title)} className="mt-7 flex items-center justify-between rounded-2xl border border-cyan/30 bg-cyan/5 p-4 text-sm font-medium text-fg transition hover:border-cyan/60">
                  <span>Read the full {inSentence(s.title)} guide: pricing factors, process & FAQs</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-cyan" />
                </a>

                <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-wider text-mute">Also in {s.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.filter((x) => x.category === s.category && x.title !== s.title).map((x) => (
                    <button key={x.title} onClick={() => setTitle(x.title)} className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-fg/85 transition hover:border-fg/40 hover:text-fg">
                      <x.icon className={`h-3.5 w-3.5 ${accentClass[x.accent].text}`} /> {x.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Sticky footer CTA */}
            <div className="shrink-0 border-t border-line bg-ink-2/95 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur sm:px-7">
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-sm text-mute">Starting from</span>
                <span className="font-display text-2xl font-bold text-fg">₹{s.from.toLocaleString("en-IN")}<span className="text-sm font-normal text-mute">/{s.unit} + GST</span></span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(`Hi! I'm interested in ${s.title}. Can you share options and pricing?`)}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-fg transition hover:bg-fg/5"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" /> Ask on WhatsApp
                </a>
                <button
                  onClick={() => { close(); setTimeout(() => goToService(s.title, "quote"), 250); }}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta to-yellow py-3 text-sm font-semibold text-onaccent transition hover:brightness-110"
                >
                  <Calculator className="h-4 w-4" /> Get exact price
                </button>
              </div>
            </div>
          </motion.aside>
      )}
    </AnimatePresence>
  );
}
