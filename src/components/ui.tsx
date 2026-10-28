import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, sub, center = false }: { eyebrow: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan ${center ? "justify-center" : ""}`}>
        <span className="reg-mark scale-50 text-cyan" aria-hidden />
        {eyebrow}
      </div>
      <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-pretty text-base leading-relaxed text-mute md:text-lg">{sub}</p>}
    </Reveal>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

export const accentClass = {
  cyan: { text: "text-cyan", bg: "bg-cyan/10", ring: "group-hover:border-cyan/50", glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-cyan)]" },
  magenta: { text: "text-magenta", bg: "bg-magenta/10", ring: "group-hover:border-magenta/50", glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-magenta)]" },
  yellow: { text: "text-yellow", bg: "bg-yellow/10", ring: "group-hover:border-yellow/50", glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-yellow)]" },
};
