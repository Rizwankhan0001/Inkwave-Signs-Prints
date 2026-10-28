import { CLIENTS } from "../data";

const STYLES = [
  "font-display font-bold tracking-tight",
  "font-sans font-semibold uppercase tracking-[0.2em] text-sm",
  "font-display italic font-medium",
  "font-sans font-black tracking-tighter",
  "font-display font-light uppercase tracking-[0.3em] text-sm",
];

export default function Clients() {
  return (
    <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-mute">Trusted by 1,200+ brands across Delhi NCR</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 [animation-duration:55s]">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} className={`whitespace-nowrap text-xl text-fg/35 transition hover:text-fg/80 ${STYLES[i % STYLES.length]}`}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
