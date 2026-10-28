import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MapPin } from "lucide-react";
import { AREAS, AREA_SLUGS, FAQS, areaUrl } from "../data";
import { SectionHeading } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered.</span></>} />
          <div className="mt-8 divide-y sm:mt-10 divide-line border-y border-line">
            {FAQS.map((f, i) => (
              <div key={f.q}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="font-display text-base font-medium text-fg sm:text-lg">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pb-5 leading-relaxed text-mute">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div id="areas" className="scroll-mt-28">
          <SectionHeading eyebrow="Areas we serve" title={<>Installed across <span className="text-gradient">Delhi NCR.</span></>} sub="Free site visit and measurement within Gurugram. Pan-India shipping for bulk and retail-chain orders." />
          <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10">
            {AREAS.map((a) => (
              <li key={a}>
                <a href={areaUrl(a)} className={`flex items-center gap-1.5 rounded-full border border-line bg-fg/[0.03] px-3 py-1.5 text-xs transition hover:border-cyan/50 hover:text-fg sm:px-4 sm:py-2 sm:text-sm ${AREA_SLUGS[a] ? "text-fg/90" : "text-fg/60"}`}>
                  <MapPin className="h-3.5 w-3.5 text-magenta" /> {a}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
