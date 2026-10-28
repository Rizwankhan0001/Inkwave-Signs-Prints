import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Calculator } from "lucide-react";
import { BRAND } from "../data";

const WA_LINK = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent("Hi! I need help with a sign / print order.")}`;

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.220-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.570.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.44-9.44 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.07c0 2 .52 3.96 1.520 5.68L.57 23.3l5.68-1.49a11.36 11.36 0 0 0 5.79 1.47h.01c6.26 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.89-3.34-8.04z" />
    </svg>
  );
}

/** Desktop: floating WhatsApp button. Phones/tablets: bottom action bar (Call · WhatsApp · Quote). */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-[#fff] shadow-[0_10px_30px_-5px_rgb(37_211_102/.6)] transition hover:scale-110 lg:grid"
      >
        <WaIcon className="h-7 w-7" />
      </motion.a>

      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            aria-label="Quick actions"
            className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
          >
            <div className="mx-auto grid max-w-md grid-cols-[1fr_1fr_1.4fr] gap-2 rounded-2xl border border-line bg-ink-2/90 p-2 shadow-[0_-10px_40px_-15px_rgb(0_0_0/.5)] light:shadow-[0_-6px_30px_-12px_rgb(17_17_27/.2)] backdrop-blur-xl">
              <a href={`tel:${BRAND.phoneRaw}`} className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[11px] font-medium text-fg transition active:bg-fg/10">
                <Phone className="h-5 w-5 text-cyan" /> Call
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[11px] font-medium text-fg transition active:bg-fg/10">
                <WaIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
              </a>
              <a href="/#quote" className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-magenta to-yellow text-sm font-semibold text-onaccent transition active:scale-[.98]">
                <Calculator className="h-4 w-4" /> Get price
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
