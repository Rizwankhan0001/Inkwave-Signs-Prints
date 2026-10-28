import { useEffect, useState } from "react";

/** Workshop hours (India time). Sunday closed. */
const OPEN = 9 * 60 + 30;   // 9:30 AM
const CLOSE = 20 * 60;      // 8:00 PM
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export type OpenStatus = { open: boolean; label: string };

function istNow() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return { day: DAYS.indexOf(get("weekday")), mins: (+get("hour") % 24) * 60 + +get("minute") };
}

export function getOpenStatus(): OpenStatus {
  const { day, mins } = istNow();
  const workday = day >= 1 && day <= 6;
  if (workday && mins >= OPEN && mins < CLOSE) {
    const left = CLOSE - mins;
    return { open: true, label: left <= 60 ? `Open · closes in ${left} min` : "Open now · until 8 PM" };
  }
  if (workday && mins < OPEN) return { open: false, label: "Closed · opens 9:30 AM" };
  // After closing time, or Sunday. Saturday evening reopens on Monday.
  return { open: false, label: day === 6 ? "Closed · opens Monday 9:30 AM" : "Closed · opens tomorrow 9:30 AM" };
}

export function useOpenStatus() {
  // Computed in the browser only (the page is pre-built, so build-time "now" would be wrong)
  const [s, setS] = useState<OpenStatus>({ open: false, label: "Mon–Sat · 9:30 AM – 8 PM" });
  useEffect(() => {
    setS(getOpenStatus());
    const t = setInterval(() => setS(getOpenStatus()), 60_000);
    return () => clearInterval(t);
  }, []);
  return s;
}
