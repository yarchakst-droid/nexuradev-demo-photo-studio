"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setSolid(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-sand/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="font-display text-lg tracking-wide text-ink">
          Loom<span className="text-clay"> Studio</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {t.nav.links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? "text-ink" : "text-stone hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-clay"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/booking"
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink transition-colors hover:border-clay hover:text-clay"
          >
            {t.nav.bookCta}
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="h-px w-6 bg-ink" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-px w-6 bg-ink" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="h-px w-6 bg-ink" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-sand lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8">
              {t.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-display text-2xl text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
