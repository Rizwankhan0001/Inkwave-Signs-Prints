/** Icon colours for each service accent. */
export const accentClass = {
  cyan: { text: "text-cyan", bg: "bg-cyan/10" },
  magenta: { text: "text-magenta", bg: "bg-magenta/10" },
  yellow: { text: "text-yellow", bg: "bg-yellow/10" },
};

export const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
