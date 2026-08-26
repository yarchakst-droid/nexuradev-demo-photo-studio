"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

interface Props {
  value: Date | null;
  onChange: (d: Date) => void;
  minDate?: Date;
}

function localizedWeekdays(locale: string): string[] {
  // 2024-01-01 is a Monday — start the reference week there so index 0 = Monday.
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
  return Array.from({ length: 7 }, (_, i) => formatter.format(new Date(2024, 0, 1 + i)));
}

function localizedMonths(locale: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(2024, i, 1)));
}

function startOfDay(d: Date): Date {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

function addMonths(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function sameDay(a: Date, b: Date): boolean {
  return a.toDateString() === b.toDateString();
}

function buildGrid(monthDate: Date): (Date | null)[] {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = Array.from({ length: startOffset }, () => null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  return cells;
}

export default function Calendar({ value, onChange, minDate }: Props) {
  const { locale, t } = useLang();
  const today = startOfDay(new Date());
  const min = minDate ? startOfDay(minDate) : startOfDay(new Date(today.getTime() + 2 * 86_400_000));
  const [cursor, setCursor] = useState(new Date(min.getFullYear(), min.getMonth(), 1));
  const [direction, setDirection] = useState(1);

  const WEEKDAYS = useMemo(() => localizedWeekdays(locale), [locale]);
  const MONTHS = useMemo(() => localizedMonths(locale), [locale]);
  const cells = useMemo(() => buildGrid(cursor), [cursor]);
  const minMonth = new Date(min.getFullYear(), min.getMonth(), 1);
  const maxMonth = addMonths(min, 5);

  function go(delta: number) {
    const next = addMonths(cursor, delta);
    if (next < minMonth || next > maxMonth) return;
    setDirection(delta);
    setCursor(next);
  }

  return (
    <div className="rounded-2xl border border-line bg-sand p-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          aria-label={t.booking.prevMonth}
          className="h-8 w-8 rounded-full text-stone transition hover:bg-sand-deep"
        >
          ‹
        </button>
        <span className="font-display text-sm text-ink">
          {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
        </span>
        <button
          onClick={() => go(1)}
          aria-label={t.booking.nextMonth}
          className="h-8 w-8 rounded-full text-stone transition hover:bg-sand-deep"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-y-1 text-center text-[11px] uppercase tracking-wide text-stone">
        {WEEKDAYS.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={cursor.toISOString()}
          initial={{ x: direction * 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 24, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-7 gap-y-1"
        >
          {cells.map((date, i) => {
            if (!date) return <span key={`empty-${i}`} />;
            const disabled = date < min;
            const isSelected = value !== null && sameDay(value, date);
            return (
              <button
                key={date.toISOString()}
                disabled={disabled}
                onClick={() => onChange(date)}
                className="relative flex h-9 items-center justify-center text-sm disabled:cursor-not-allowed"
              >
                {isSelected && (
                  <motion.span
                    layoutId="booking-calendar-selected"
                    className="absolute inset-1 rounded-full bg-clay"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    disabled ? "text-stone/40" : isSelected ? "text-sand" : "text-ink-soft"
                  }`}
                >
                  {date.getDate()}
                </span>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
