import { NextResponse } from "next/server";
import { bookingPackages } from "@/data/packages";
import { DICTIONARIES, type Lang } from "@/i18n/dictionary";
import { formRateLimit, getClientIp } from "@/lib/rate-limit";

interface BookingRequestBody {
  packageId?: string;
  date?: string;
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
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

  let body: BookingRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { packageId, date, name, email, phone, notes } = body;
  const lang = resolveLang(body.lang);
  const errors = DICTIONARIES[lang].booking.errors;

  const pkg = bookingPackages.find((p) => p.id === packageId);
  if (!pkg) {
    return NextResponse.json({ error: errors.packageInvalid }, { status: 400 });
  }
  if (!date || Number.isNaN(new Date(date).getTime())) {
    return NextResponse.json({ error: errors.dateInvalid }, { status: 400 });
  }
  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: errors.name }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: errors.email }, { status: 400 });
  }

  const reference = `LOOM-${Date.now().toString(36).toUpperCase()}`;

  // Never log visitor-submitted PII (name/email/phone/notes) server-side.
  console.log("[booking] new request received", { reference, package: pkg.name.en, date });

  return NextResponse.json({
    ok: true,
    reference,
    package: pkg.name[lang],
    date,
  });
}
