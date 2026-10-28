import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Send, CheckCircle2, BadgePercent, TrendingDown } from "lucide-react";
import { BRAND, SERVICES, SERVICE_EVENT, SERVICE_SLUGS, type ServiceEventDetail } from "../data";
import { saveLead } from "../leads";
import { bulkQuote, ruleFor } from "../pricing";
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
  const [letters, setLetters] = useState(8);
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
  const rule = ruleFor(service.unit);

  // Each product starts at a sensible quantity (e.g. 100 copies for printing)
  useEffect(() => { setQty(ruleFor(service.unit).defaultQty); }, [service.unit]);

  /** Size of one item in the unit it's priced by (sq.ft per board, inches per set of letters) */
  const perItem = isArea ? w * h : isInch ? w * letters : 1;

  const { bulk, extra, total, listTotal } = useMemo(() => {
    const bulk = bulkQuote(service.from, service.unit, perItem * qty);
    const addonPct = ADDONS.filter((a) => addons.includes(a.id)).reduce((s, a) => s + a.pct, 0);
    const extra = bulk.subtotal * addonPct;
    // Price without the bulk discount, add-ons included (shown struck through)
    const listTotal = bulk.list * (1 + addonPct);
    return { bulk, extra, total: bulk.subtotal + extra, listTotal };
  }, [service, perItem, qty, addons]);
  const savedTotal = listTotal - total;

  // Quantity needed to reach the next discount tier
  const nextQty = bulk.next ? Math.ceil(bulk.next.tier.min / perItem) : null;
  const qtyLabel = isArea ? "Number of boards" : isInch ? "Number of signs" : service.unit === "copy" ? "Copies" : "Quantity";
  const pct = (n: number) => `${Math.round(n * 100)}%`;

  const toggle = (id: string) => setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi ${BRAND.name}! I'd like a quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product: ${service.title}`,
      isArea ? `Size: ${w} × ${h} ft` : isInch ? `Letters: ${letters} × ${w} in high` : null,
      `${qtyLabel}: ${qty}`,
      bulk.off ? `Bulk discount: ${pct(bulk.off)} (saves ${inr(savedTotal)})` : null,
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex justify-between text-sm font-medium text-fg" htmlFor="w">
                    {isArea ? "Width" : "Letter height"} <span className="text-cyan">{w} {isArea ? "ft" : "in"}</span>
                  </label>
                  <input id="w" type="range" min={1} max={isArea ? 40 : 36} value={w} onChange={(e) => setW(+e.target.value)} className="h-6 w-full cursor-pointer accent-cyan" />
                </div>
                {isArea ? (
                  <div>
                    <label className="mb-2 flex justify-between text-sm font-medium text-fg" htmlFor="h">Height <span className="text-magenta">{h} ft</span></label>
                    <input id="h" type="range" min={1} max={20} value={h} onChange={(e) => setH(+e.target.value)} className="h-6 w-full cursor-pointer accent-magenta" />
                  </div>
                ) : (
                  <div>
                    <label className="mb-2 flex justify-between text-sm font-medium text-fg" htmlFor="letters">Number of letters <span className="text-magenta">{letters}</span></label>
                    <input id="letters" type="range" min={1} max={30} value={letters} onChange={(e) => setLetters(+e.target.value)} className="h-6 w-full cursor-pointer accent-magenta" />
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="mb-2 flex items-center justify-between text-sm font-medium text-fg" htmlFor="qty">
                {qtyLabel}
                <span className="flex items-center gap-1 text-xs font-normal text-[#22c55e]"><BadgePercent className="h-3.5 w-3.5" /> Bulk orders save up to {pct(Math.max(...rule.tiers.map((t) => t.off)))}</span>
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex w-full items-center rounded-xl border border-line bg-ink sm:w-44">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - (service.unit === "copy" ? 50 : 1)))} className="px-5 py-3 text-lg text-mute hover:text-fg" aria-label="Decrease">−</button>
                  <input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} className="w-full bg-transparent text-center text-fg outline-none" />
                  <button type="button" onClick={() => setQty((q) => q + (service.unit === "copy" ? 50 : 1))} className="px-5 py-3 text-lg text-mute hover:text-fg" aria-label="Increase">+</button>
                </div>
                <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
                  {rule.quickQty.map((n) => (
                    <button type="button" key={n} onClick={() => setQty(n)}
                      className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition ${qty === n ? "border-cyan bg-cyan/10 text-fg" : "border-line text-mute hover:text-fg"}`}>
                      {n.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
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
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-mute">
                {bulk.off > 0 && <s className="text-mute/70">{inr(listTotal)}</s>}
                + GST · indicative only
              </div>

              <AnimatePresence>
                {bulk.off > 0 && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-2 text-sm font-medium text-[#4ade80] light:text-[#15803d]">
                    <TrendingDown className="h-4 w-4 shrink-0" /> You save {inr(savedTotal)} with a {pct(bulk.off)} bulk discount
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Discount tiers */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs text-mute">
                  <span>Bulk discount</span>
                  <span>{bulk.volume.toLocaleString("en-IN")} {rule.measure}</span>
                </div>
                <div className="flex gap-1">
                  {rule.tiers.map((t, i) => (
                    <div key={t.min} className="flex-1">
                      <div className={`h-1.5 rounded-full transition-colors ${i <= bulk.tierIndex ? "bg-gradient-to-r from-cyan to-magenta" : "bg-fg/10"}`} />
                      <div className={`mt-1.5 text-center text-[10px] ${i === bulk.tierIndex ? "font-semibold text-fg" : "text-mute"}`}>{t.off ? `−${pct(t.off)}` : "0%"}</div>
                    </div>
                  ))}
                </div>
                {bulk.next && nextQty && (
                  <button type="button" onClick={() => setQty(nextQty)}
                    className="mt-3 w-full rounded-xl border border-dashed border-cyan/40 px-3 py-2 text-left text-xs text-fg/85 transition hover:border-cyan hover:bg-cyan/5">
                    Make it <b className="text-fg">{nextQty.toLocaleString("en-IN")}</b> {qtyLabel.toLowerCase().replace("number of ", "")} and get <b className="text-cyan">{pct(bulk.next.tier.off)} off</b> →
                  </button>
                )}
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-mute">{service.title}</dt><dd className="text-fg">{inr(bulk.subtotal)}</dd></div>
                <div className="flex justify-between text-mute">
                  <dt>Rate</dt>
                  <dd>{bulk.off > 0 && <s className="mr-1.5 opacity-60">₹{service.from}</s>}₹{bulk.rate < 10 ? bulk.rate.toFixed(2) : Math.round(bulk.rate).toLocaleString("en-IN")}/{service.unit}</dd>
                </div>
                {isArea && <div className="flex justify-between text-mute"><dt>Area</dt><dd>{w * h} sq.ft × {qty}</dd></div>}
                {isInch && <div className="flex justify-between text-mute"><dt>Lettering</dt><dd>{letters} × {w}" × {qty}</dd></div>}
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
