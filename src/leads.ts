/** Saves a lead by email via Web3Forms (free) when PUBLIC_WEB3FORMS_KEY is set. */
const KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

export const leadsEnabled = Boolean(KEY);

type Gtag = (...args: unknown[]) => void;

export async function saveLead(subject: string, fields: Record<string, string>): Promise<boolean> {
  (window as unknown as { gtag?: Gtag }).gtag?.("event", "generate_lead", { method: "form", form: subject, page: location.pathname });
  if (!KEY) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: KEY, subject: `Website lead: ${subject}`, from_name: "Inkwave website", page: location.href, ...fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
