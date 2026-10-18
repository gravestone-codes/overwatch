import type { APIRoute } from "astro";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INTENTS = new Set(["demo", "trial", "quote", "cloud", "owl", "services", "general", "readiness"]);

const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "We couldn't read that request. Please try again." }, { status: 400 });
  }

  // Bots fill every field; people never see this one.
  if (clean(body.company_website, 200)) return Response.json({ ok: true });

  const lead = {
    intent: INTENTS.has(clean(body.intent, 20)) ? clean(body.intent, 20) : "general",
    name: clean(body.name, 120),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 40),
    organisation: clean(body.organisation, 160),
    industry: clean(body.industry, 60),
    systems: clean(body.systems, 30),
    message: clean(body.message, 4000),
    score: clean(body.score, 10),
    page: clean(body.page, 200),
    ts: new Date().toISOString(),
  };

  if (lead.name.length < 2) {
    return Response.json({ ok: false, field: "name", error: "Please tell us your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(lead.email)) {
    return Response.json({ ok: false, field: "email", error: "That email address doesn't look right. Please check it." }, { status: 400 });
  }
  if (lead.organisation.length < 2) {
    return Response.json({ ok: false, field: "organisation", error: "Please tell us your organisation's name." }, { status: 400 });
  }

  const webhook = import.meta.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    return Response.json(
      { ok: false, error: "Our form is offline for a moment. Please email info@overwatchlabs.dev or call +250 789 567 629." },
      { status: 503 },
    );
  }

  // `institution` and `product` keep older versions of the sheet script working.
  const payload = JSON.stringify({ ...lead, institution: lead.organisation, product: lead.intent });
  const send = () =>
    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      signal: AbortSignal.timeout(20000),
    });

  try {
    let res = await send();
    if (!res.ok) {
      // Apps Script cold starts occasionally fail once.
      await new Promise((r) => setTimeout(r, 800));
      res = await send();
    }
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong on our side and your message wasn't sent. Please try again, or email info@overwatchlabs.dev." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
};
