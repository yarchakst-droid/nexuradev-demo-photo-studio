"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/i18n/LangContext";

const HERO_VIDEO = "https://videos.pexels.com/video-files/34506426/14620220_2560_1440_30fps.mp4";
const HERO_POSTER = "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/15" />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <span className="text-xs uppercase tracking-[0.3em] text-sand/70">{t.home.hero.eyebrow}</span>
        <h1 className="mt-6 max-w-3xl font-display text-6xl italic leading-[1.02] text-sand sm:text-7xl lg:text-8xl">
          {t.home.hero.headline}
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link
            href="/booking"
            className="rounded-full bg-sand px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            {t.home.hero.bookCta}
          </Link>
          <Link href="/gallery" className="text-sm text-sand/80 underline decoration-sand/30 underline-offset-4 hover:text-sand">
            {t.home.hero.galleryCta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
