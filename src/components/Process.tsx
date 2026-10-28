import { motion } from "framer-motion";
import { PROCESS } from "../data";
import { SectionHeading } from "./ui";

const TONES = ["text-cyan", "text-magenta", "text-yellow", "text-fg"];

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-ink-2 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="How it works" title={<>From idea to installed <span className="text-gradient">in 4 steps.</span></>} />
        <ol className="relative mt-12 grid gap-8 sm:mt-16 md:grid-cols-4 md:gap-6">
          {/* Connector: vertical on phones, horizontal on desktop */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-cyan via-magenta to-yellow opacity-40 md:hidden" />
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-cyan via-magenta to-yellow opacity-40 md:block" />
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex gap-5 md:block"
            >
              <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-ink font-display text-lg font-bold md:h-16 md:w-16 md:text-xl">
                <span className={TONES[i]}>{p.step}</span>
              </div>
              <div className="pt-1 md:pt-0">
                <h3 className="font-display text-lg font-semibold text-fg md:mt-6 md:text-xl">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mute md:mt-2">{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
