import { SERVICES } from "../data";

export default function Marquee() {
  const items = SERVICES.map((s) => s.title);
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2 py-5" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl font-semibold text-fg/70 md:text-2xl">
            {t}
            <span className={["text-cyan", "text-magenta", "text-yellow"][i % 3]}>✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-2" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-2" />
    </div>
  );
}
