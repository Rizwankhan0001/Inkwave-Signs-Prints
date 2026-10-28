import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { SectionHeading, Reveal } from "./ui";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-ink-2 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Client love" title={<>Trusted by 1,200+ <span className="text-gradient">businesses & homes.</span></>} />
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mt-14 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="card relative w-[85%] shrink-0 snap-start rounded-3xl p-6 sm:w-[60%] sm:p-8 md:w-auto">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-fg/5" />
              <div className="flex gap-0.5 text-yellow">{Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-base leading-relaxed text-fg/90 sm:mt-5 sm:text-lg">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan via-magenta to-yellow font-display font-bold text-onaccent">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-fg">{t.name}</div>
                  <div className="text-sm text-mute">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
