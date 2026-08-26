"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  const footerLinks = t.nav.links.filter((link) => link.href !== "/");

  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl text-ink">
              Loom<span className="text-clay"> Studio</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone">{t.footer.tagline}</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-stone">{t.footer.studioLabel}</span>
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-ink-soft transition-colors hover:text-clay">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-stone">{t.footer.contactLabel}</span>
              <a href="mailto:hello@loom.studio" className="text-sm text-ink-soft transition-colors hover:text-clay">
                hello@loom.studio
              </a>
              <a href="https://instagram.com" className="text-sm text-ink-soft transition-colors hover:text-clay">
                {t.footer.instagram}
              </a>
              <span className="text-sm text-ink-soft">{t.footer.visits}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-stone md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {t.footer.copyright}
          </span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
