"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bookingPackages } from "@/data/packages";
import FloatingField from "@/components/shared/FloatingField";
import { useLang } from "@/i18n/LangContext";
import Calendar from "./Calendar";

type Step = 0 | 1 | 2 | 3;

interface Confirmation {
  reference: string;
  package: string;
  date: string;
}

export default function BookingStepper() {
  const { lang, locale, t } = useLang();
  const [step, setStep] = useState<Step>(0);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const selectedPackage = bookingPackages.find((p) => p.id === packageId) ?? null;

  const canContinue = (step === 0 && packageId !== null) || (step === 1 && date !== null) || step === 2;

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId,
          date: date?.toISOString().slice(0, 10),
          name,
          email,
          phone: phone || undefined,
          notes: notes || undefined,
          lang,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t.booking.errors.generic);
        return;
      }
      setConfirmation(data);
      setStep(3);
    } catch {
      setError(t.booking.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (step === 2) {
      if (!name.trim() || name.trim().length < 2) {
        setError(t.booking.errors.name);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(t.booking.errors.email);
        return;
      }
      void handleSubmit();
      return;
    }
    setError(null);
    setStep((s) => (s + 1) as Step);
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(0, s - 1) as Step);
  }

  return (
    <div className="mx-auto max-w-2xl">
      {step < 3 && (
        <div className="mb-12 flex items-center gap-3">
          {t.booking.stepLabels.slice(0, 3).map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-3">
              <div className="flex flex-1 flex-col gap-2">
                <span className={`h-1 rounded-full transition-colors ${i <= step ? "bg-clay" : "bg-line"}`} />
                <span className={`text-xs ${i === step ? "text-ink" : "text-stone"}`}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="package"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {bookingPackages.map((pkg) => {
              const selected = pkg.id === packageId;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setPackageId(pkg.id)}
                  className={`rounded-2xl border p-6 text-left transition-colors ${
                    selected ? "border-clay bg-sand-deep/50" : "border-line hover:border-ink/30"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl text-ink">{pkg.name[lang]}</h3>
                    <span className="font-display text-lg text-clay">${pkg.price}</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-stone">{pkg.duration[lang]}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{pkg.description[lang]}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {pkg.includes[lang].map((inc) => (
                      <li key={inc} className="text-xs text-ink-soft">
                        · {inc}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="date"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm text-stone">{t.booking.dateHelper(selectedPackage?.name[lang] ?? "")}</p>
            <Calendar value={date} onChange={setDate} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <FloatingField label={t.booking.fields.name} value={name} onChange={setName} required />
            <FloatingField label={t.booking.fields.email} type="email" value={email} onChange={setEmail} required />
            <FloatingField label={t.booking.fields.phone} type="tel" value={phone} onChange={setPhone} />
            <FloatingField label={t.booking.fields.notes} value={notes} onChange={setNotes} textarea />
          </motion.div>
        )}

        {step === 3 && confirmation && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-line bg-sand-deep/40 p-10 text-center"
          >
            <span className="font-display text-4xl italic text-clay">✓</span>
            <h3 className="mt-4 font-display text-3xl text-ink">{t.booking.successTitle}</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-stone">
              {t.booking.successBody(
                email,
                confirmation.package,
                new Intl.DateTimeFormat(locale, { day: "numeric", month: "long" }).format(new Date(confirmation.date))
              )}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-stone">
              {t.booking.reference} {confirmation.reference}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-4 text-sm text-clay">{error}</p>}

      {step < 3 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="text-sm text-stone transition-colors hover:text-ink disabled:opacity-0"
          >
            {t.booking.back}
          </button>
          <button
            onClick={next}
            disabled={!canContinue || submitting}
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-sand transition-transform enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? (submitting ? t.booking.sending : t.booking.sendBtn) : t.booking.continueBtn}
          </button>
        </div>
      )}
    </div>
  );
}
