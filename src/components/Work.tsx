import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Clock, ChevronLeft, ChevronRight, ArrowRight, Plus } from "lucide-react";
import { BRAND, PROJECTS, type Project } from "../data";
import { SectionHeading } from "./ui";

function Visual({ style }: { style: Project["style"] }) {
  switch (style) {
    case "letters":
      return (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,#3a2a10,#0e0b07_70%)]">
          <div className="text-center">
            <div className="font-display text-3xl font-bold tracking-tight text-[#ffe8b0] sm:text-5xl md:text-7xl" style={{ textShadow: "0 0 30px rgb(255 184 0 / .8), 0 0 80px rgb(255 184 0 / .5)" }}>BREW&BEAN</div>
            <div className="mt-3 text-xs uppercase tracking-[0.5em] text-yellow/70">coffee roasters</div>
          </div>
        </div>
      );
    case "neon":
      return (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,#2a0a1a,#0a0509_70%)]">
          <div className="animate-flicker font-display text-4xl font-bold italic neon">glow</div>
        </div>
      );
    case "plate":
      return (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#3b3b44] to-[#1c1c22]">
          <div className="rounded-md bg-gradient-to-br from-[#f7e19a] via-[#c9a13b] to-[#7c5e14] px-6 py-4 text-center shadow-2xl">
            <div className="font-display text-lg font-bold text-ink">The Kapoors</div>
            <div className="text-[10px] uppercase tracking-widest text-ink/70">Villa 21</div>
          </div>
        </div>
      );
    case "glass":
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e2a3a] to-[#07131b]">
          <div className="absolute inset-y-6 left-6 right-1/2 rounded-lg border border-fg/20 bg-fg/10 backdrop-blur-md" />
          <div className="absolute inset-y-6 left-1/2 right-6 ml-2 rounded-lg border border-fg/20 bg-fg/10 backdrop-blur-md" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="font-display text-3xl font-bold tracking-[0.3em] text-fg/80 md:text-4xl">NIMBUS</div>
          </div>
          <div className="absolute inset-x-6 top-1/2 h-6 -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgb(255_255_255/.12)_0_6px,transparent_6px_12px)]" />
        </div>
      );
    case "standee":
      return (
        <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-b from-[#101a33] to-[#080b14] pb-6">
          {["from-cyan to-[#0050ff]", "from-magenta to-[#7a00ff]", "from-yellow to-[#ff5a00]"].map((g, i) => (
            <div key={i} className={`h-[70%] w-14 rounded-t-sm bg-gradient-to-b ${g} p-1.5 shadow-xl`}>
              <div className="h-2 w-full rounded-sm bg-fg/70" />
              <div className="mt-1 h-1 w-2/3 rounded-sm bg-fg/50" />
            </div>
          ))}
        </div>
      );
    case "flex":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff3d7f,#ffb800)]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-display text-4xl font-black uppercase text-ink">MEGA SALE</div>
              <div className="font-display text-lg font-bold text-ink/80">upto 60% off</div>
            </div>
          </div>
        </div>
      );
    case "wayfinding":
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9eef3] to-[#cfd8e0]">
          <div className="absolute left-1/2 top-[18%] w-[78%] -translate-x-1/2 space-y-1.5">
            {[["#00a3e0", "OPD", "←"], ["#2bb673", "Pharmacy", "→"], ["#ff3d7f", "Labs", "↑"]].map(([c, t, arr]) => (
              <div key={t} className="flex items-center justify-between rounded-md px-3 py-1.5 text-xs font-bold text-white shadow" style={{ background: c }}>
                <span>{t}</span><span>{arr}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[34%] right-[10%] rounded bg-[#1fae5b] px-2 py-1 text-[10px] font-black tracking-wider text-white shadow-[0_0_14px_#1fae5b]">EXIT ⇢</div>
        </div>
      );
    case "uv":
      return (
        <div className="absolute inset-0 grid place-items-center bg-[#2a1a12]">
          <div className="grid h-[70%] w-[80%] grid-cols-3 gap-1.5">
            {["#e2722b", "#c8462c", "#f1b23b", "#7a3e1d", "#e89a3c", "#b5301f"].map((c, i) => (
              <div key={i} className="rounded-sm shadow-inner" style={{ background: `radial-gradient(circle at ${30 + i * 8}% 40%, ${c}, #3b2316)` }} />
            ))}
          </div>
        </div>
      );
  }
}

function CaseStudy({ p, onClose, onStep }: { p: Project; onClose: () => void; onStep: (n: number) => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [onClose, onStep]);

  return (
    <motion.div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 backdrop-blur-sm light:bg-black/40 sm:items-center sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog" aria-modal="true" aria-label={p.title}
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-line bg-ink-2 shadow-2xl sm:grid sm:max-h-[80vh] sm:grid-cols-2 sm:rounded-3xl"
      >
        <div className="theme-dark relative h-56 shrink-0 sm:h-auto">
          <AnimatePresence mode="wait">
            <motion.div key={p.title} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Visual style={p.style} /></motion.div>
          </AnimatePresence>
          <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur sm:hidden"><X className="h-4 w-4" /></button>
        </div>
        <div className="flex min-h-0 flex-col">
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-line px-3 py-1 text-xs text-mute">{p.tag}</span>
              <button onClick={onClose} aria-label="Close" className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg transition hover:bg-fg hover:text-ink sm:grid"><X className="h-4 w-4" /></button>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-fg sm:text-3xl">{p.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-mute"><MapPin className="h-3.5 w-3.5 text-magenta" /> {p.client} · <Clock className="h-3.5 w-3.5 text-cyan" /> {p.time}</p>
            <dl className="mt-6 space-y-5">
              {[["The brief", p.brief, "text-cyan"], ["What we did", p.did, "text-magenta"], ["The result", p.result, "text-yellow"]].map(([k, v, c]) => (
                <div key={k}>
                  <dt className={`font-display text-xs font-semibold uppercase tracking-wider ${c}`}>{k}</dt>
                  <dd className="mt-1.5 leading-relaxed text-fg/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
            <div className="flex gap-1">
              <button onClick={() => onStep(-1)} aria-label="Previous project" className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition hover:bg-fg/5"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => onStep(1)} aria-label="Next project" className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg transition hover:bg-fg/5"><ChevronRight className="h-4 w-4" /></button>
            </div>
            <a href="/#quote" onClick={onClose} className="flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent">
              Want something similar? <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((n: number) => setOpen((o) => (o === null ? o : (o + n + PROJECTS.length) % PROJECTS.length)), []);

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Recent work"
            title={<>Work you've probably <span className="text-gradient">walked past.</span></>}
            sub="Recent installs across Gurugram and Delhi. Tap any project to see the brief, what we did and the result."
          />
          <a href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Hi! Can you share your full portfolio?")}`} target="_blank" rel="noreferrer" className="group flex shrink-0 items-center gap-2 text-sm font-medium text-cyan">
            Ask for full portfolio <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:mt-14 sm:auto-rows-[240px] sm:gap-4 md:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.6 }}
              className={`theme-dark group relative overflow-hidden rounded-2xl border border-line sm:rounded-3xl ${p.span} ${p.span.includes("col-span-2") ? "col-span-2" : ""}`}
            >
              <button onClick={() => setOpen(i)} className="absolute inset-0 z-10 cursor-pointer rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-cyan" aria-label={`Open case study: ${p.title}`} />
              <div className="absolute inset-0 transition duration-700 group-hover:scale-105"><Visual style={p.style} /></div>
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 sm:right-4 sm:top-4"><Plus className="h-4 w-4" /></span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-12 sm:p-5 sm:pt-16">
                <span className="rounded-full border border-fg/20 bg-fg/10 px-2.5 py-1 text-[11px] font-medium text-fg backdrop-blur">{p.tag}</span>
                <div className="mt-2 font-display text-sm font-semibold leading-tight text-fg sm:mt-3 sm:text-lg">{p.title}</div>
                <div className="hidden text-sm text-fg/60 sm:block">{p.client}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
      <AnimatePresence>{open !== null && <CaseStudy p={PROJECTS[open]} onClose={close} onStep={step} />}</AnimatePresence>
    </section>
  );
}
