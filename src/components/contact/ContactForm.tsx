"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingField from "@/components/shared/FloatingField";
import { useLang } from "@/i18n/LangContext";

export default function ContactForm() {
  const { lang, t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, lang }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t.booking.errors.generic);
        return;
      }
      setSent(true);
    } catch {
      setError(t.booking.errors.network);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-line bg-sand-deep/40 p-10 text-center"
        >
          <span className="font-display text-3xl italic text-clay">✓</span>
          <h3 className="mt-4 font-display text-2xl text-ink">{t.contact.form.successTitle}</h3>
          <p className="mt-3 text-sm text-stone">{t.contact.form.successBody}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-5"
        >
          <FloatingField label={t.contact.form.name} value={name} onChange={setName} required />
          <FloatingField label={t.contact.form.email} type="email" value={email} onChange={setEmail} required />
          <FloatingField label={t.contact.form.message} value={message} onChange={setMessage} textarea rows={5} />

          {error && <p className="text-sm text-clay">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 self-start rounded-full bg-ink px-7 py-3 text-sm font-medium text-sand transition-transform enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? t.contact.form.sending : t.contact.form.send}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
