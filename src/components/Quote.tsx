import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Send, CheckCircle2 } from "lucide-react";
import { BRAND, SERVICES, SERVICE_EVENT, SERVICE_SLUGS, type ServiceEventDetail } from "../data";
import { saveLead } from "../leads";
import { SectionHeading } from "./ui";

const ADDONS = [
  { id: "install", label: "On-site installation", pct: 0.12 },
  { id: "express", label: "Express 48h delivery", pct: 0.2 },
  { id: "design", label: "Premium design revisions", pct: 0.08 },
] as const;

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Quote() {
  const [svc, setSvc] = useState(SERVICES[0].title);
  const [w, setW] = useState(6);
  const [h, setH] = useState(3);
  const [qty, setQty] = useState(1);
  const [addons, setAddons] = useState<string[]>(["install"]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  // Coming from a service page: /?service=led-sign-board#quote
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    const t = slug && Object.keys(SERVICE_SLUGS).find((k) => SERVICE_SLUGS[k] === slug);
    if (t) setSvc(t);
  }, []);

  // "Price it" buttons elsewhere preselect the product here
  useEffect(() => {
    const on = (e: Event) => {
      const { title, target } = (e as CustomEvent<ServiceEventDetail>).detail;
      if (target !== "quote") return;
      setSvc(title);
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener(SERVICE_EVENT, on);
    return () => window.removeEventListener(SERVICE_EVENT, on);
  }, []);

  const service = SERVICES.find((s) => s.title === svc)!;
  const isArea = service.unit === "sq.ft";
  const isInch = service.unit === "inch";

  const { base, extra, total } = useMemo(() => {
    const units = isArea ? w * h : isInch ? w * 12 : 1; // letters priced per inch of letter height × letter count approximation
    const base = service.from * units * qty;
    const extra = ADDONS.filter((a) => addons.includes(a.id)).reduce((s, a) => s + base * a.pct, 0);
    return { base, extra, total: base + extra };
  }, [service, w, h, qty, addons, isArea, isInch]);

  const toggle = (id: string) => setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi ${BRAND.name}! I'd like a quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product: ${service.title}`,
      isArea ? `Size: ${w} × ${h} ft` : isInch ? `Letter height: ${w} in` : null,
      `Quantity: ${qty}`,
      addons.length ? `Add-ons: ${ADDONS.filter((a) => addons.includes(a.id)).map((a) => a.label).join(", ")}` : null,
      `Website estimate: ${inr(total)} + GST`,
    ].filter(Boolean);
    window.open(`https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    // Also keep a copy by email, in case WhatsApp isn't available on this device
    saveLead("Quote request", { name, phone, details: lines.slice(1).join("\n") });
    setSent(true);
  };

  const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-fg outline-none transition placeholder:text-mute/60 focus:border-cyan focus:ring-2 focus:ring-cyan/20";

  return (
    <section id="quote" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-magenta/15 blur-[140px] light:bg-magenta/[0.07]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Instant estimate" title={<>Know your price in <span className="text-gradient">30 seconds.</span></>} sub="Pick a product and size to see a ballpark estimate. Send it to us on WhatsApp and we'll confirm the final price with a free mock-up." />

        <form onSubmit={submit} className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-5">
          <div className="card relative space-y-6 rounded-3xl p-5 sm:p-8 lg:col-span-3">
            {/* Live price that follows you while filling the form (phones/tablets) */}
            <div className="sticky top-[76px] z-10 -mx-5 -mt-5 flex items-center justify-between rounded-t-3xl border-b border-line bg-ink-2/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:-mt-8 sm:px-8 lg:hidden">
              <span className="flex items-center gap-2 text-xs text-mute"><Calculator className="h-4 w-4 text-yellow" /> Live estimate</span>
              <span className="font-display text-xl font-bold text-fg">{inr(total)}<span className="ml-1 text-xs font-normal text-mute">+ GST</span></span>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-fg" htmlFor="svc">Product</label>
              <select id="svc" value={svc} onChange={(e) => setSvc(e.target.value)} className={field}>
                {["Signage", "Printing", "Name Plates", "Display"].map((c) => (
                  <optgroup key={c} label={c}>
                    {SERVICES.filter((s) => s.category === c).map((s) => <option key={s.title}>{s.title}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>

            {(isArea || isInch) && (
              <div className={`grid gap-4 ${isArea ? "sm:grid-cols-2" : ""}`}>
                <div>
                  <label className="mb-2 flex justify-between text-sm font-medium text-fg" htmlFor="w">
                    {isArea ? "Width" : "Letter height"} <span className="text-cyan">{w} {isArea ? "ft" : "in"}</span>
                  </label>
                  <input id="w" type="range" min={1} max={isArea ? 40 : 36} value={w} onChange={(e) => setW(+e.target.value)} className="h-6 w-full cursor-pointer accent-cyan" />
                </div>
                {isArea && (
                  <div>
                    <label className="mb-2 flex justify-between text-sm font-medium text-fg" htmlFor="h">Height <span className="text-magenta">{h} ft</span></label>
                    <input id="h" type="range" min={1} max={20} value={h} onChange={(e) => setH(+e.target.value)} className="h-6 w-full cursor-pointer accent-magenta" />
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-fg" htmlFor="qty">Quantity</label>
              <div className="flex w-full items-center rounded-xl border border-line bg-ink sm:w-44">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-5 py-3 text-lg text-mute hover:text-fg" aria-label="Decrease">−</button>
                <input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} className="w-full bg-transparent text-center text-fg outline-none" />
                <button type="button" onClick={() => setQty((q) => q + 1)} className="px-5 py-3 text-lg text-mute hover:text-fg" aria-label="Increase">+</button>
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium text-fg">Add-ons</legend>
              <div className="flex flex-wrap gap-2">
                {ADDONS.map((a) => {
                  const on = addons.includes(a.id);
                  return (
                    <button type="button" key={a.id} onClick={() => toggle(a.id)} aria-pressed={on}
                      className={`rounded-full border px-4 py-2 text-sm transition ${on ? "border-cyan bg-cyan/10 text-fg" : "border-line text-mute hover:text-fg"}`}>
                      {on ? "✓ " : "+ "}{a.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-fg" htmlFor="name">Your name</label>
                <input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Gupta" className={field} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-fg" htmlFor="phone">Phone</label>
                <input id="phone" required type="tel" pattern="[0-9+\s-]{10,}" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="98xxx xxxxx" className={field} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-ink-3 to-ink-2 p-5 sm:p-8">
              <div className="flex items-center gap-2 text-sm text-mute"><Calculator className="h-4 w-4 text-yellow" /> Estimated price</div>
              <motion.div key={Math.round(total)} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 font-display text-4xl font-bold text-fg sm:text-5xl">
                {inr(total)}
              </motion.div>
              <div className="mt-1 text-sm text-mute">+ GST · indicative only</div>

              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-mute">{service.title}</dt><dd className="text-fg">{inr(base)}</dd></div>
                <div className="flex justify-between text-mute"><dt>Rate</dt><dd>₹{service.from}/{service.unit}</dd></div>
                {isArea && <div className="flex justify-between text-mute"><dt>Area</dt><dd>{w * h} sq.ft × {qty}</dd></div>}
                <div className="flex justify-between"><dt className="text-mute">Add-ons</dt><dd className="text-fg">{inr(extra)}</dd></div>
              </dl>

              <button type="submit" className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-magenta px-6 py-4 font-semibold text-onaccent transition hover:brightness-110">
                <Send className="h-4 w-4" /> Send on WhatsApp
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 flex items-center gap-2 text-sm text-cyan">
                    <CheckCircle2 className="h-4 w-4" /> Thanks! We usually reply within 15 minutes.
                  </motion.p>
                )}
              </AnimatePresence>
              <p className="mt-4 text-xs text-mute">Final price depends on material, finish and site conditions. Free mock-up included.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
