/* Bulk pricing: the more someone orders, the lower the rate.
   Edit the tiers below — the estimator, service pages and detail panel all use them. */

export type Tier = { min: number; off: number };

type Rule = {
  /** What the order size is counted in */
  measure: string;
  tiers: Tier[];
  /** Starting quantity in the estimator */
  defaultQty: number;
  /** Quick-pick quantities shown in the estimator */
  quickQty: number[];
};

const RULES: Record<string, Rule> = {
  // Boards, flex, vinyl, film… — counted by total area (size × quantity)
  "sq.ft": {
    measure: "sq.ft",
    tiers: [{ min: 0, off: 0 }, { min: 50, off: 0.05 }, { min: 150, off: 0.1 }, { min: 300, off: 0.15 }, { min: 600, off: 0.2 }],
    defaultQty: 1,
    quickQty: [1, 2, 5, 10, 25],
  },
  // 3D letters — counted by total inches of lettering (height × letters × sets)
  inch: {
    measure: "inches of lettering",
    tiers: [{ min: 0, off: 0 }, { min: 100, off: 0.05 }, { min: 250, off: 0.1 }, { min: 500, off: 0.15 }],
    defaultQty: 1,
    quickQty: [1, 2, 5, 10],
  },
  // Name plates, standees, frames, merch — counted by pieces
  piece: {
    measure: "pieces",
    tiers: [{ min: 0, off: 0 }, { min: 5, off: 0.05 }, { min: 10, off: 0.1 }, { min: 25, off: 0.15 }, { min: 50, off: 0.2 }],
    defaultQty: 1,
    quickQty: [1, 5, 10, 25, 50],
  },
  // Digital printing — counted by copies
  copy: {
    measure: "copies",
    tiers: [{ min: 0, off: 0 }, { min: 500, off: 0.1 }, { min: 1000, off: 0.2 }, { min: 2500, off: 0.3 }, { min: 5000, off: 0.4 }],
    defaultQty: 100,
    quickQty: [100, 500, 1000, 2500, 5000],
  },
};

export const ruleFor = (unit: string): Rule => RULES[unit] ?? RULES.piece;

/** Biggest discount available for a unit type, e.g. 0.2 for "up to 20% off". */
export const maxDiscount = (unit: string) => Math.max(...ruleFor(unit).tiers.map((t) => t.off));

export type BulkQuote = {
  volume: number;
  list: number;
  off: number;
  saved: number;
  subtotal: number;
  rate: number;
  /** Next tier to unlock, if any */
  next?: { tier: Tier; needed: number };
  tierIndex: number;
};

/** Price for a given order size, with the bulk discount applied. */
export function bulkQuote(rate: number, unit: string, volume: number): BulkQuote {
  const tiers = ruleFor(unit).tiers;
  let tierIndex = 0;
  tiers.forEach((t, i) => { if (volume >= t.min) tierIndex = i; });
  const off = tiers[tierIndex].off;
  const list = rate * volume;
  const subtotal = list * (1 - off);
  const nextTier = tiers[tierIndex + 1];
  return {
    volume,
    list,
    off,
    saved: list - subtotal,
    subtotal,
    rate: rate * (1 - off),
    next: nextTier ? { tier: nextTier, needed: Math.max(0, nextTier.min - volume) } : undefined,
    tierIndex,
  };
}

/** Rows for a bulk price table: order size, discount, effective rate. */
export function tierRows(rate: number, unit: string) {
  const { tiers, measure } = ruleFor(unit);
  return tiers.map((t, i) => {
    const nextMin = tiers[i + 1]?.min;
    const from = t.min === 0 ? 1 : t.min;
    const size = nextMin ? `${from.toLocaleString("en-IN")}–${(nextMin - 1).toLocaleString("en-IN")}` : `${from.toLocaleString("en-IN")}+`;
    const r = rate * (1 - t.off);
    return {
      size: `${size} ${measure}`,
      off: t.off ? `${Math.round(t.off * 100)}% off` : "Standard",
      rate: `₹${r < 10 ? r.toFixed(2).replace(/\.00$/, "") : Math.round(r).toLocaleString("en-IN")}/${unit}`,
      offValue: t.off,
    };
  });
}
