import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";
const KEY = "inkwave-theme";
const listeners = new Set<() => void>();

const read = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "light" ? "#f6f5f1" : "#0b0b14");
  listeners.forEach((l) => l());
}

function saved(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

/** Switch theme. If the click position is given, reveal the new theme in a circle from that point. */
export function setTheme(t: Theme, origin?: { x: number; y: number }) {
  try { localStorage.setItem(KEY, t); } catch { /* private mode etc. */ }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  type VT = { ready: Promise<void> };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => VT };

  if (!doc.startViewTransition || reduce) {
    const root = document.documentElement;
    root.classList.add("theme-fade");
    apply(t);
    window.setTimeout(() => root.classList.remove("theme-fade"), 400);
    return;
  }

  const x = origin?.x ?? window.innerWidth - 40;
  const y = origin?.y ?? 20;
  const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const vt = doc.startViewTransition(() => apply(t));
  vt.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 550, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" }
    );
  });
}

// Follow the device setting until the visitor picks a theme themselves
if (typeof window !== "undefined") {
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (!saved()) apply(e.matches ? "light" : "dark");
  });
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    read,
    () => "dark"
  );
}
