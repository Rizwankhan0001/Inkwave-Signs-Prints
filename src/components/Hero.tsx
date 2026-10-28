import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Truck, Palette } from "lucide-react";
import { BRAND, STATS } from "../data";
import { Counter } from "./ui";
import Clients from "./Clients";

function SignMockup() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-sm lg:max-w-md">
      {/* Storefront wall */}
      <div className="theme-dark absolute inset-0 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-ink-3 to-ink-2 shadow-2xl">
        <div className="grid-bg absolute inset-0 opacity-60" />
        {/* Main sign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-x-6 top-8 rounded-2xl border border-fg/10 bg-black/60 px-6 py-7 text-center"
        >
          <div className="animate-flicker font-display text-4xl font-bold tracking-tight neon sm:text-5xl">OPEN</div>
          <div className="mt-2 font-display text-sm uppercase tracking-[0.4em] neon-cyan">late night</div>
        </motion.div>

        {/* 3D letters */}
        <div className="absolute inset-x-6 top-[44%] flex justify-center gap-1.5">
          {"CAFÉ".split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="font-display text-5xl font-bold text-yellow sm:text-6xl"
              style={{ textShadow: "0 1px 0 #b37f00, 0 2px 0 #a37400, 0 3px 0 #8f6600, 0 4px 0 #7a5700, 0 10px 24px rgb(255 184 0 / .45)" }}
            >
              {ch}
            </motion.span>
          ))}
        </div>

        {/* Vinyl window sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="absolute left-1/2 top-[63%] grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full border-2 border-dashed border-white/40 bg-magenta text-center shadow-[0_8px_30px_-6px_var(--color-magenta)] sm:h-24 sm:w-24"
        >
          <span className="font-display text-[10px] font-bold uppercase leading-tight tracking-wider text-white sm:text-xs">Grand<br /><span className="text-base sm:text-lg">Opening</span><br />Sale</span>
        </motion.div>

        {/* Name plate */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 rounded-lg border border-yellow/40 bg-gradient-to-br from-[#f5d77a] via-[#c9a13b] to-[#8a6a1c] px-4 py-3 shadow-lg"
        >
          <div className="font-display text-sm font-bold text-ink">The Kapoors</div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-ink/70">H-21 · DLF II</div>
        </motion.div>

        {/* Acrylic tag */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.35 }}
          className="absolute bottom-8 right-6 rounded-lg border border-fg/30 bg-fg/10 px-4 py-3 backdrop-blur-md"
        >
          <div className="text-[10px] uppercase tracking-widest text-cyan">Acrylic</div>
          <div className="font-display text-sm font-bold text-fg">Cabin 04</div>
        </motion.div>
      </div>

      {/* Floating chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="card absolute -left-4 top-1/3 hidden rounded-2xl px-4 py-3 backdrop-blur-xl sm:block md:-left-10"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-fg"><Palette className="h-4 w-4 text-magenta" /> Free mock-up</div>
        <div className="text-xs text-mute">on your storefront photo</div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="card absolute -right-4 top-10 hidden rounded-2xl px-4 py-3 backdrop-blur-xl sm:block md:-right-8"
      >
        <div className="flex items-center gap-1 text-yellow">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
        <div className="mt-1 text-xs text-mute">4.9 from 600+ reviews</div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-12 sm:pt-40 md:pt-48 md:pb-24">
      {/* Background glows */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="animate-drift pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-magenta/20 blur-[120px] light:bg-magenta/10" />
      <div className="animate-drift-slow pointer-events-none absolute left-[45%] top-1/3 h-[380px] w-[380px] rounded-full bg-[#7c3aed]/20 blur-[130px] light:hidden" />
      {/* Soft light beam from above (dark theme) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_42%,rgb(255_255_255/.07)_50%,transparent_58%)] light:hidden" />
      <div className="animate-drift-slow pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-cyan/20 blur-[120px] light:bg-cyan/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/5 px-3 py-1.5 text-xs text-mute"
          >
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" /><span className="relative h-2 w-2 rounded-full bg-cyan" /></span>
            Serving Gurugram & Delhi NCR since 2014
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-fg sm:mt-6 sm:text-6xl lg:text-7xl"
          >
            Signs that get <span className="text-gradient">noticed.</span>
            <br />Prints that <span className="italic text-fg/80">last.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:mt-6 sm:text-lg"
          >
            LED & 3D letter boards, acrylic and golden name plates, flex, vinyl and UV printing — designed, produced in-house and installed by our own crew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-row"
          >
            <a href="/#quote" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta to-yellow px-6 py-3.5 sm:px-7 sm:py-4 font-semibold text-onaccent shadow-[0_10px_40px_-10px_var(--color-magenta)] transition hover:brightness-110">
              Get an instant estimate <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Hi! I'd like a quote for a sign / print job.")}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-fg/5 px-6 py-3.5 sm:px-7 sm:py-4 font-semibold text-fg transition hover:bg-fg/10">
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute sm:mt-8"
          >
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan" /> 1-year LED warranty</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-yellow" /> Free installation in NCR*</li>
          </motion.ul>
        </div>

        <motion.div style={{ y }}>
          <SignMockup />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-12 max-w-7xl px-4 sm:mt-20 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-2 px-3 py-6 text-center sm:px-6 sm:py-8">
              <div className="font-display text-2xl font-bold text-fg sm:text-3xl md:text-4xl"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-1 text-xs text-mute sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Clients />
    </section>
  );
}
