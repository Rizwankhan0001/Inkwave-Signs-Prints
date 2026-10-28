import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { Search, CornerDownLeft, Phone, MessageCircle, Mail, Hash, Calculator, BookOpen } from "lucide-react";
import { BRAND, INDUSTRIES, SERVICES, industryUrl, serviceUrl } from "../data";
import { GUIDES } from "../content";

type Item = {
  label: string;
  hint: string;
  group: "Services" | "Industries" | "Guides" | "Pages" | "Contact";
  icon: ComponentType<{ className?: string }>;
  run: () => void;
};

/** Scroll to a home-page section, or go to the home page first when on another page. */
const jump = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
  else window.location.href = `/#${id}`;
};
const go = (url: string) => (window.location.href = url);

export default function SearchPalette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const all = useMemo<Item[]>(() => [
    ...SERVICES.map((s) => ({ label: s.title, hint: `${s.category} · from ₹${s.from.toLocaleString("en-IN")}/${s.unit}`, group: "Services" as const, icon: s.icon, run: () => go(serviceUrl(s.title)) })),
    ...INDUSTRIES.map((i) => ({ label: i.title, hint: i.products.join(" · "), group: "Industries" as const, icon: i.icon, run: () => go(industryUrl(i.title)) })),
    ...GUIDES.map((g) => ({ label: g.title, hint: "Price guide", group: "Guides" as const, icon: BookOpen, run: () => go(`/guides/${g.slug}`) })),
    { label: "Instant price estimate", hint: "Calculate a ballpark price", group: "Pages", icon: Calculator, run: () => jump("quote") },
    { label: "Our work", hint: "Recent installs", group: "Pages", icon: Hash, run: () => jump("work") },
    { label: "How it works", hint: "Our 4-step process", group: "Pages", icon: Hash, run: () => jump("process") },
    { label: "FAQ", hint: "Timelines, warranty, design", group: "Pages", icon: Hash, run: () => jump("faq") },
    { label: `Call ${BRAND.phone}`, hint: BRAND.hours, group: "Contact", icon: Phone, run: () => (window.location.href = `tel:${BRAND.phoneRaw}`) },
    { label: "Chat on WhatsApp", hint: "Usually replies in 15 min", group: "Contact", icon: MessageCircle, run: () => window.open(`https://wa.me/${BRAND.phoneRaw}`, "_blank", "noopener") },
    { label: `Email ${BRAND.email}`, hint: "For bulk & corporate orders", group: "Contact", icon: Mail, run: () => (window.location.href = `mailto:${BRAND.email}`) },
  ], []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return all;
    return all.filter((i) => `${i.label} ${i.hint} ${i.group}`.toLowerCase().includes(t));
  }, [q, all]);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => setIdx(0), [q]);
  useEffect(() => {
    listRef.current?.querySelector(`[data-i="${idx}"]`)?.scrollIntoView({ block: "nearest" });
  }, [idx]);

  const choose = (i: Item) => { onClose(); setTimeout(i.run, 50); };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(results.length - 1, i + 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(0, i - 1)); }
    if (e.key === "Enter" && results[idx]) choose(results[idx]);
    if (e.key === "Escape") onClose();
  };

  let lastGroup = "";

  return (
    <motion.div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 light:bg-black/30 px-3 pt-[8vh] backdrop-blur-sm sm:px-4 sm:pt-[12vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.18 }}
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-[0_40px_120px_-20px_rgb(0_0_0/.9)] light:shadow-[0_30px_80px_-20px_rgb(17_17_27/.3)]"
        role="dialog" aria-label="Search"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="h-5 w-5 text-mute" />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey}
            placeholder="Search LED boards, name plates, printing…" className="h-14 flex-1 bg-transparent text-fg outline-none placeholder:text-mute/70" />
          <button onClick={onClose} className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-mute">ESC</button>
        </div>
        <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-4 py-10 text-center text-sm text-mute">No results for "{q}". Try "LED", "plate" or "vinyl".</li>}
          {results.map((r, i) => {
            const header = r.group !== lastGroup ? (lastGroup = r.group) : null;
            return (
              <li key={r.group + r.label}>
                {header && <div className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-mute">{header}</div>}
                <button data-i={i} onMouseMove={() => setIdx(i)} onClick={() => choose(r)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${i === idx ? "bg-fg/[0.07]" : ""}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line ${i === idx ? "text-cyan" : "text-mute"}`}><r.icon className="h-4 w-4" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-fg">{r.label}</span>
                    <span className="block truncate text-xs text-mute">{r.hint}</span>
                  </span>
                  {i === idx && <CornerDownLeft className="h-4 w-4 text-mute" />}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 text-[11px] text-mute sm:flex">
          <span><kbd className="rounded border border-line px-1">↑</kbd> <kbd className="rounded border border-line px-1">↓</kbd> to navigate</span>
          <span><kbd className="rounded border border-line px-1">↵</kbd> to select</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
