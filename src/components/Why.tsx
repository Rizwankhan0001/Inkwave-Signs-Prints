import { Factory, PenTool, Clock, Wrench, BadgeIndianRupee, Leaf } from "lucide-react";
import { SectionHeading, Reveal } from "./ui";

const FEATURES = [
  { icon: Factory, title: "In-house production", desc: "CNC router, laser cutter, UV flatbed and 3.2m printers under one roof — no middlemen, no delays." },
  { icon: PenTool, title: "Free design mock-ups", desc: "See your sign on a photo of your actual shopfront before you pay a rupee." },
  { icon: Clock, title: "24–48h express", desc: "Rush jobs for launches and events. Flex, vinyl and standees can be ready next day." },
  { icon: Wrench, title: "Install & AMC", desc: "Trained crew with safe wiring, scaffolding and after-sales maintenance plans." },
  { icon: BadgeIndianRupee, title: "Transparent pricing", desc: "Itemised quotes with GST invoice. No hidden installation or transport costs." },
  { icon: Leaf, title: "Eco-friendly inks", desc: "Low-VOC UV and eco-solvent inks that are safer indoors and fade-resistant outdoors." },
];

export default function Why() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2 py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-yellow/10 blur-[140px] light:bg-yellow/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Why Inkwave" title={<>Built like a factory. <span className="text-gradient">Finished like a studio.</span></>} />
        <div className="mt-10 grid gap-px sm:mt-16 overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} className="flex gap-4 bg-ink-2 p-5 transition hover:bg-ink-3 sm:block sm:p-8">
              <f.icon className="h-7 w-7 shrink-0 text-cyan" strokeWidth={1.6} />
              <div><h3 className="font-display text-lg font-semibold text-fg sm:mt-5">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mute sm:mt-2">{f.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
