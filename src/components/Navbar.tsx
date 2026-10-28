import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, Phone, Mail, Clock, ChevronDown, Search, ArrowRight, MapPin, Sparkles,
  Instagram, Facebook, Linkedin, Youtube, MessageCircle, Star,
} from "lucide-react";
import { AREAS, AREA_SLUGS, BRAND, INDUSTRIES, OFFERS, SERVICES, SOCIALS, areaUrl, industryUrl, serviceUrl, type Category } from "../data";
import { accentClass } from "./ui";
import SearchPalette from "./SearchPalette";
import { ThemeButton, ThemeSwitch } from "./ThemeToggle";
import { OpenBadge } from "./Contact";

type MenuId = "services" | "industries" | "areas";
type NavItem = { label: string; href: string; menu?: MenuId; wideOnly?: boolean };

const NAV: NavItem[] = [
  { label: "Services", href: "/#services", menu: "services" },
  { label: "Industries", href: "/#industries", menu: "industries" },
  { label: "Our Work", href: "/#work" },
  { label: "Process", href: "/#process", wideOnly: true },
  { label: "Areas", href: "/#areas", menu: "areas" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/#contact" },
];

const CATEGORIES: { name: Category; blurb: string }[] = [
  { name: "Signage", blurb: "Lit & non-lit boards" },
  { name: "Printing", blurb: "Large & small format" },
  { name: "Name Plates", blurb: "Homes & cabins" },
  { name: "Display", blurb: "Events & retail" },
];

const WA = (text: string) => `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(text)}`;

export function Logo() {
  return (
    <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${BRAND.full} home`}>
      <img src="/favicon.svg" alt="" className="h-9 w-9" />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-fg">
        {BRAND.name}
        <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-mute">Signs & Prints</span>
      </span>
    </a>
  );
}

/* ───────────────────────── Top info bar ───────────────────────── */

function TopBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % OFFERS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative border-b border-line/60 bg-gradient-to-r from-magenta/15 via-ink-2 to-cyan/15 text-xs">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <div className="hidden items-center gap-5 text-mute md:flex">
          <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-1.5 transition hover:text-fg"><Phone className="h-3.5 w-3.5 text-cyan" />{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="hidden items-center gap-1.5 transition hover:text-fg lg:flex"><Mail className="h-3.5 w-3.5 text-yellow" />{BRAND.email}</a>
          <a href="/#contact" className="hidden transition hover:text-fg xl:inline-flex"><OpenBadge /></a>
        </div>

        {/* Rotating offers */}
        <div className="relative h-5 min-w-0 flex-1 overflow-hidden md:max-w-md">
          <AnimatePresence mode="wait">
            <motion.a
              key={i}
              href="/#quote"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-center gap-1.5 truncate text-[11px] font-medium text-fg sm:text-xs md:justify-center"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-yellow" />
              <span className="truncate">{OFFERS[i]}</span>
            </motion.a>
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden items-center gap-1 text-mute lg:flex">
            <Star className="h-3.5 w-3.5 fill-yellow text-yellow" /> <b className="font-semibold text-fg">4.9</b> Google rating
          </span>
          <span className="hidden h-4 w-px bg-line lg:block" />
          <div className="hidden items-center gap-3 text-mute md:flex">
            {[
              [Instagram, SOCIALS.instagram, "Instagram"],
              [Facebook, SOCIALS.facebook, "Facebook"],
              [Linkedin, SOCIALS.linkedin, "LinkedIn"],
              [Youtube, SOCIALS.youtube, "YouTube"],
            ].map(([Icon, href, label]) => {
              const I = Icon as typeof Instagram;
              return <a key={label as string} href={href as string} aria-label={label as string} className="transition hover:text-fg"><I className="h-3.5 w-3.5" /></a>;
            })}
          </div>
          <span className="hidden h-4 w-px bg-line md:block" />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Dropdown panels ───────────────────────── */

function ServicesMenu({ close }: { close: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 xl:grid-cols-4">
        {CATEGORIES.map((c) => (
          <div key={c.name}>
            <div className="mb-3 border-b border-line pb-2">
              <div className="font-display text-sm font-semibold text-fg">{c.name}</div>
              <div className="text-xs text-mute">{c.blurb}</div>
            </div>
            <ul className="space-y-0.5">
              {SERVICES.filter((s) => s.category === c.name).map((s) => {
                const a = accentClass[s.accent];
                return (
                  <li key={s.title}>
                    <a
                      href={serviceUrl(s.title)}
                      onClick={close}
                      className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-fg/5"
                    >
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${a.bg} ${a.text}`}><s.icon className="h-4 w-4" /></span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-fg/90 group-hover:text-fg">{s.title}</span>
                        <span className="block text-[11px] text-mute">from ₹{s.from.toLocaleString("en-IN")}/{s.unit}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured card */}
      <div className="theme-dark relative hidden overflow-hidden rounded-2xl border border-line bg-black p-5 lg:flex lg:flex-col">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan/30 blur-3xl" />
        <div className="relative">
          <span className="rounded-full bg-yellow px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-onaccent">Free</span>
          <div className="mt-4 font-display text-4xl font-bold animate-flicker neon">OPEN</div>
          <h4 className="mt-4 font-display text-lg font-semibold text-fg">See it on your shop before you pay</h4>
          <p className="mt-1.5 text-sm text-mute">Send a photo of your storefront. Get a realistic mock-up and quote in 2 hours.</p>
        </div>
        <a href={WA("Hi! Here's a photo of my shop — please send a sign mock-up.")} target="_blank" rel="noreferrer"
          className="relative mt-auto flex items-center justify-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent">
          <MessageCircle className="h-4 w-4" /> Send photo on WhatsApp
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm lg:col-span-2">
        <span className="text-mute">16+ products · in-house production · installation across NCR</span>
        <span className="flex items-center gap-5">
          <a href="/guides" onClick={close} className="font-medium text-fg/80 transition hover:text-fg">Price guides</a>
          <a href="/services" onClick={close} className="group flex items-center gap-1.5 font-medium text-cyan">
            Browse all services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </span>
      </div>
    </div>
  );
}

function IndustriesMenu({ close }: { close: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
      <ul className="grid gap-1 sm:grid-cols-2">
        {INDUSTRIES.map((ind) => (
          <li key={ind.title}>
            <a href={industryUrl(ind.title)} onClick={close} className="group flex gap-3 rounded-xl p-3 transition hover:bg-fg/5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-ink text-fg transition group-hover:border-cyan/50 group-hover:text-cyan">
                <ind.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-fg">{ind.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-mute">{ind.desc}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden flex-col justify-between rounded-2xl border border-line bg-gradient-to-br from-ink-3 to-ink p-5 lg:flex">
        <div>
          <div className="font-display text-4xl font-bold text-gradient">1,200+</div>
          <div className="mt-1 text-sm text-fg">brands & homes served</div>
          <p className="mt-3 text-xs leading-relaxed text-mute">Single outlets to 80-store retail rollouts with matching colour and finish everywhere.</p>
        </div>
        <a href="/#quote" onClick={close} className="mt-6 flex items-center gap-1.5 text-sm font-medium text-cyan">Plan a rollout <ArrowRight className="h-4 w-4" /></a>
      </div>
    </div>
  );
}

function AreasMenu({ close }: { close: () => void }) {
  return (
    <div className="w-[min(560px,90vw)]">
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-cyan/30 bg-cyan/10 p-3 text-sm text-fg">
        <MapPin className="h-4 w-4 shrink-0 text-cyan" /> Free site visit & measurement anywhere in Gurugram
      </div>
      <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
        {AREAS.map((a) => (
          <li key={a}>
            <a href={areaUrl(a)} onClick={close} className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-fg/5 hover:text-fg ${AREA_SLUGS[a] ? "text-fg/85" : "text-mute"}`}>{a}</a>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-xs text-mute">Outside NCR? We ship bulk & retail-chain orders pan-India.</p>
    </div>
  );
}

/* ───────────────────────── Mobile drawer ───────────────────────── */

function MobileSection({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex w-full items-center justify-between py-4 text-left font-display text-lg font-medium text-fg">
        {title}
        <ChevronDown className={`h-5 w-5 text-mute transition-transform ${open ? "rotate-180 text-cyan" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm light:bg-black/30 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.aside
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-full max-w-sm flex-col border-l border-line bg-ink lg:hidden"
        role="dialog" aria-label="Menu"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button onClick={onClose} className="rounded-full border border-line p-2 text-fg" aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          <MobileSection title="Services">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="mb-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-mute">{c.name}</div>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES.filter((s) => s.category === c.name).map((s) => (
                    <a key={s.title} href={serviceUrl(s.title)} onClick={onClose} className="rounded-full border border-line px-3 py-1.5 text-sm text-fg/90">{s.title}</a>
                  ))}
                </div>
              </div>
            ))}
          </MobileSection>
          <MobileSection title="Industries">
            <div className="grid grid-cols-2 gap-2">
              {INDUSTRIES.map((i) => (
                <a key={i.title} href={industryUrl(i.title)} onClick={onClose} className="flex items-center gap-2 rounded-xl border border-line p-2.5 text-sm text-fg/90">
                  <i.icon className="h-4 w-4 shrink-0 text-cyan" /> <span className="leading-tight">{i.title}</span>
                </a>
              ))}
            </div>
          </MobileSection>
          {NAV.filter((n) => !n.menu).map((n) => (
            <a key={n.href} href={n.href} onClick={onClose} className="block border-b border-line py-4 font-display text-lg font-medium text-fg">{n.label}</a>
          ))}
          <MobileSection title="Areas we serve">
            <div className="flex flex-wrap gap-1.5">
              {AREAS.map((a) => <a key={a} href={areaUrl(a)} onClick={onClose} className="rounded-full bg-fg/5 px-3 py-1 text-xs text-mute">{a}</a>)}
            </div>
          </MobileSection>

          <div className="flex items-center justify-between border-b border-line py-4">
            <span className="font-display text-lg font-medium text-fg">Appearance</span>
            <ThemeSwitch size="md" labels />
          </div>

          <div className="space-y-3 py-6 text-sm text-mute">
            <div className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-magenta" />{BRAND.address}</div>
            <div className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-yellow" />{BRAND.hours}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-fg"><Phone className="h-4 w-4" /> Call</a>
          <a href={WA("Hi! I'd like a quote.")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-onaccent"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          <a href="/#quote" onClick={onClose} className="col-span-2 rounded-full bg-gradient-to-r from-magenta to-yellow py-3 text-center text-sm font-semibold text-onaccent">Get instant estimate</a>
        </div>
      </motion.aside>
    </>
  );
}

/* ───────────────────────── Navbar ───────────────────────── */

/** `current` highlights a menu item on inner pages, e.g. "services", "industries", "areas", "guides". */
export default function Navbar({ current }: { current?: string } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [search, setSearch] = useState(false);
  const [active, setActive] = useState("");
  const closeTimer = useRef<number>();
  const headerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 40); if (window.scrollY < 300) setActive(""); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section in view
  useEffect(() => {
    const ids = NAV.map((n) => n.href.split("#")[1]).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(window.scrollY < 300 ? "" : "#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Keyboard: ⌘K / Ctrl+K opens search, Esc closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setSearch((s) => !s); }
      if (e.key === "Escape") { setMenu(null); setDrawer(false); }
    };
    const onClick = (e: MouseEvent) => { if (!headerRef.current?.contains(e.target as Node)) setMenu(null); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, []);

  useEffect(() => { document.body.style.overflow = drawer || search ? "hidden" : ""; }, [drawer, search]);

  const openMenu = (id: MenuId) => { window.clearTimeout(closeTimer.current); setMenu(id); };
  const scheduleClose = () => { closeTimer.current = window.setTimeout(() => setMenu(null), 160); };
  const close = () => setMenu(null);

  const solid = scrolled || menu !== null;

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50" onMouseLeave={scheduleClose}>
        {/* Top bar collapses once you scroll */}
        <motion.div initial={false} animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }} transition={{ duration: 0.25 }} className="overflow-hidden">
          <TopBar />
        </motion.div>

        <div className={`relative transition-colors duration-300 ${solid ? "border-b border-line/70 bg-ink/85 shadow-[0_10px_40px_-20px_rgb(0_0_0/.8)] light:shadow-[0_8px_30px_-18px_rgb(17_17_27/.25)] backdrop-blur-xl" : "border-b border-transparent"}`}>
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-4 sm:px-6">
            <Logo />

            <ul className="hidden items-center lg:flex">
              {NAV.map((n) => {
                const isOpen = menu === n.menu && !!n.menu;
                const key = n.href.split("#")[1] ?? n.href.slice(1);
                const isActive = active === "#" + key || current === key;
                return (
                  <li key={n.label} onMouseEnter={() => (n.menu ? openMenu(n.menu) : scheduleClose())} className={`relative ${n.wideOnly ? "hidden xl:block" : ""}`}>
                    {n.menu ? (
                      <button
                        onClick={() => (isOpen ? close() : openMenu(n.menu!))}
                        aria-expanded={isOpen}
                        className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition xl:px-4 ${isOpen || isActive ? "text-fg" : "text-mute hover:text-fg"}`}
                      >
                        {isOpen && <motion.span layoutId="nav-hover" className="absolute inset-0 rounded-full bg-fg/[0.07]" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
                        <span className="relative">{n.label}</span>
                        <ChevronDown className={`relative h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <a href={n.href} className={`relative block rounded-full px-3.5 py-2 text-sm transition xl:px-4 ${isActive ? "text-fg" : "text-mute hover:text-fg"}`}>
                        {n.label}
                      </a>
                    )}
                    {isActive && <motion.span layoutId="nav-active" className="pointer-events-none absolute inset-x-0 -bottom-1.5 mx-auto h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan to-magenta" />}

                    {/* Small dropdown for Areas, anchored to its button */}
                    {n.menu === "areas" && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                            onMouseEnter={() => openMenu("areas")}
                            className="absolute right-0 top-full pt-3"
                          >
                            <div className="rounded-2xl border border-line bg-ink-2/95 p-4 shadow-2xl backdrop-blur-xl light:shadow-[0_20px_50px_-15px_rgb(17_17_27/.2)]"><AreasMenu close={close} /></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <button onClick={() => setSearch(true)} className="hidden items-center gap-2 rounded-full border border-line bg-fg/[0.03] py-2 pl-3 pr-2 text-sm text-mute transition hover:border-fg/30 hover:text-fg md:flex" aria-label="Search">
                <Search className="h-4 w-4" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden rounded-md border border-line bg-ink px-1.5 py-0.5 font-sans text-[10px] xl:inline">⌘K</kbd>
              </button>
              <button onClick={() => setSearch(true)} className="grid h-10 w-10 place-items-center rounded-full text-fg md:hidden" aria-label="Search"><Search className="h-5 w-5" /></button>
              {/* Top bar (with its theme switch) hides on scroll — show a compact toggle instead */}
              <AnimatePresence>
                {scrolled && (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                    <ThemeButton />
                  </motion.div>
                )}
              </AnimatePresence>
              <a href="/#quote" className="group hidden items-center gap-1.5 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-yellow hover:text-onaccent sm:flex">
                Free Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <button onClick={() => setDrawer(true)} className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg lg:hidden" aria-label="Open menu" aria-expanded={drawer}>
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>

          {/* Full-width dropdowns for Services and Industries */}
          <AnimatePresence>
            {(menu === "services" || menu === "industries") && (
              <motion.div
                key="mega"
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}
                onMouseEnter={() => openMenu(menu)}
                className="absolute inset-x-0 top-full hidden px-4 pt-2 sm:px-6 lg:block"
              >
                <div className="mx-auto max-w-7xl rounded-3xl border border-line bg-ink-2/95 p-6 shadow-[0_30px_80px_-20px_rgb(0_0_0/.9)] light:shadow-[0_30px_60px_-20px_rgb(17_17_27/.22)] backdrop-blur-xl">
                  <AnimatePresence mode="wait">
                    <motion.div key={menu} initial={{ opacity: 0, x: menu === "services" ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                      {menu === "services" ? <ServicesMenu close={close} /> : <IndustriesMenu close={close} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll progress */}
          <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan via-magenta to-yellow" />
        </div>
      </header>

      <AnimatePresence>{drawer && <MobileDrawer onClose={() => setDrawer(false)} />}</AnimatePresence>
      <AnimatePresence>{search && <SearchPalette onClose={() => setSearch(false)} />}</AnimatePresence>
    </>
  );
}
