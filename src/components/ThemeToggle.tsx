import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme, type Theme } from "../theme";

const origin = (e: React.MouseEvent) => ({ x: e.clientX, y: e.clientY });

/** Segmented Light / Dark switch — used in the top bar and mobile menu. */
export function ThemeSwitch({ size = "sm", labels = false }: { size?: "sm" | "md"; labels?: boolean }) {
  const theme = useTheme();
  const opts: { id: Theme; icon: typeof Sun; label: string }[] = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
  ];
  const pad = size === "sm" ? "px-2 py-1" : "px-4 py-2";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div role="radiogroup" aria-label="Colour theme" className="relative flex rounded-full border border-line bg-ink/60 p-0.5">
      {opts.map((o) => {
        const on = theme === o.id;
        return (
          <button
            key={o.id}
            role="radio"
            aria-checked={on}
            aria-label={`${o.label} mode`}
            onClick={(e) => !on && setTheme(o.id, origin(e))}
            className={`relative flex items-center gap-1.5 rounded-full ${pad} text-xs font-medium transition ${on ? "text-ink" : "text-mute hover:text-fg"}`}
          >
            {on && <motion.span layoutId={`theme-knob-${size}`} className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", bounce: 0.25, duration: 0.45 }} />}
            <o.icon className={`relative ${icon}`} />
            {labels && <span className="relative">{o.label}</span>}
          </button>
        );
      })}
    </div>
  );
}

/** Single round button that flips the theme — used in the main nav. */
export function ThemeButton() {
  const theme = useTheme();
  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={(e) => setTheme(next, origin(e))}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-fg transition hover:border-fg/30"
    >
      <motion.span key={theme} initial={{ y: 20, rotate: -90, opacity: 0 }} animate={{ y: 0, rotate: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.span>
    </button>
  );
}
