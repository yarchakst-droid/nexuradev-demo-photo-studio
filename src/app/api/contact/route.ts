import { NextResponse } from "next/server";
import { DICTIONARIES, type Lang } from "@/i18n/dictionary";
import { formRateLimit, getClientIp } from "@/lib/rate-limit";

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  lang?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function resolveLang(lang?: string): Lang {
  return lang === "uk" || lang === "ru" ? lang : "en";
}

export async function POST(request: Request) {
  if (!formRateLimit(getClientIp(request)).success) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: ContactRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;
  const lang = resolveLang(body.lang);
  const dict = DICTIONARIES[lang];

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: dict.booking.errors.name }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: dict.booking.errors.email }, { status: 400 });
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json({ error: dict.contact.form.messageTooShort }, { status: 400 });
  }

  // Never log visitor-submitted PII (name/email/message) server-side.
  console.log("[contact] new message received", { lang });

  return NextResponse.json({ ok: true });
}
