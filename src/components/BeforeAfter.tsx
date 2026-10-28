import { useRef, useState, type PointerEvent } from "react";
import { MoveHorizontal, TrendingUp, Eye, Moon } from "lucide-react";
import { SectionHeading, Reveal } from "./ui";

function Storefront({ lit }: { lit: boolean }) {
  return (
    <div className={`absolute inset-0 ${lit ? "bg-gradient-to-b from-[#0d0f24] to-[#06070f]" : "bg-gradient-to-b from-[#1a1a1f] to-[#0e0e11]"}`}>
      {/* Building wall */}
      <div className={`absolute inset-x-[8%] bottom-0 top-[10%] rounded-t-lg ${lit ? "bg-[#1c1c2a]" : "bg-[#26262b]"}`}>
        {/* Sign band */}
        <div className={`absolute inset-x-[6%] top-[8%] flex h-[22%] items-center justify-center rounded-md ${lit ? "bg-black shadow-[0_0_80px_-10px_var(--color-magenta)]" : "bg-[#3a3a40]"}`}>
          {lit ? (
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[clamp(1.5rem,5vw,3.5rem)] font-bold tracking-tight text-yellow" style={{ textShadow: "0 0 20px rgb(255 184 0 / .8), 0 0 60px rgb(255 184 0 / .5)" }}>SAFFRON</span>
              <span className="font-display text-[clamp(.8rem,2vw,1.4rem)] italic neon">kitchen</span>
            </div>
          ) : (
            <span className="font-sans text-[clamp(1rem,3vw,1.8rem)] font-semibold tracking-wide text-fg/25">SAFFRON KITCHEN</span>
          )}
        </div>
        {/* Windows + door */}
        <div className="absolute inset-x-[6%] bottom-0 top-[38%] flex gap-[3%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`relative flex-1 rounded-t-md border-4 ${lit ? "border-[#2a2a3d] bg-gradient-to-b from-[#ffcf73]/50 to-[#ff8a3d]/30" : "border-[#333338] bg-[#18181c]"} ${i === 1 ? "mt-[6%]" : ""}`}>
              {lit && i !== 1 && <div className="absolute inset-x-[15%] top-[20%] rounded border border-fg/40 bg-fg/10 py-1 text-center text-[clamp(.4rem,1vw,.7rem)] font-semibold tracking-widest text-fg">OPEN</div>}
              {i === 1 && <div className={`absolute bottom-0 left-1/2 h-[85%] w-[60%] -translate-x-1/2 rounded-t ${lit ? "bg-[#ffcf73]/40" : "bg-[#101013]"}`} />}
            </div>
          ))}
        </div>
      </div>
      {/* Ground glow */}
      {lit && <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-yellow/15 to-transparent" />}
    </div>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (e: PointerEvent) => {
    if (!dragging.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  return (
    <section className="border-y border-line bg-ink-2 py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="The difference" title={<>Same shop. <span className="text-gradient">Different story.</span></>} sub="Drag the slider. A well-lit sign is the cheapest salesperson you'll ever hire — it works 24×7 and never takes leave." />
          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {[
                { icon: Eye, k: "3×", v: "more visible from 50 m away" },
                { icon: Moon, k: "After 7 PM", v: "your shop keeps selling" },
                { icon: TrendingUp, k: "+30%", v: "average walk-ins reported by our cafés" },
              ].map((r) => (
                <li key={r.k} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-ink text-cyan"><r.icon className="h-5 w-5" /></span>
                  <span><b className="font-display text-fg">{r.k}</b> <span className="text-mute">{r.v}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div
            ref={ref}
            className="theme-dark relative aspect-[4/3] cursor-ew-resize sm:aspect-[16/11] touch-none select-none overflow-hidden rounded-3xl border border-line"
            onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e); }}
            onPointerMove={move}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <Storefront lit />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Storefront lit={false} />
            </div>
            <span className="absolute left-3 top-3 rounded-full sm:left-4 sm:top-4 bg-black/60 px-3 py-1 text-xs font-medium text-fg/80 backdrop-blur">Before</span>
            <span className="absolute right-3 top-3 rounded-full sm:right-4 sm:top-4 bg-gradient-to-r from-magenta to-yellow px-3 py-1 text-xs font-semibold text-onaccent">After · Inkwave</span>
            <div className="absolute inset-y-0 w-0.5 bg-fg shadow-[0_0_20px_white]" style={{ left: `${pos}%` }}>
              <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-fg text-ink shadow-xl">
                <MoveHorizontal className="h-5 w-5" />
              </div>
            </div>
            <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after comparison" className="sr-only" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
