export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST({ request }: { request: Request }) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const institution = String(body.institution ?? "").trim();
  const product = String(body.product ?? "").trim().slice(0, 40);
  const honeypot = String(body.company_website ?? "");

  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (institution.length < 2 || institution.length > 120) {
    return Response.json({ ok: false, error: "Please enter your institution or company." }, { status: 400 });
  }

  const webhook = import.meta.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    return Response.json(
      { ok: false, error: "The waitlist is not accepting submissions right now. Please email info@overwatchlabs.dev." },
      { status: 503 },
    );
  }

  const send = () =>
    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, institution, product, ts: new Date().toISOString() }),
      signal: AbortSignal.timeout(20000),
    });

  try {
    let res = await send();
    if (!res.ok) {
      // one retry — Apps Script cold starts are slow and occasionally fail
      await new Promise((r) => setTimeout(r, 800));
      res = await send();
    }
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong on our side. Please try again in a moment." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
