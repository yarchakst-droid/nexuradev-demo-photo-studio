"use client";

import { useEffect, type RefObject } from "react";

/**
 * iOS Safari frequently leaves a muted/autoplay/playsInline <video> paused
 * (showing its native tap-to-play affordance) instead of starting it —
 * notably when Low Power Mode is on, or when the autoplay attempt races a
 * slow network fetch. This keeps retrying play() as the video loads and,
 * as a last resort, on the very first touch/scroll anywhere on the page,
 * so the video always ends up playing without the user needing to find
 * and tap the hidden play button.
 */
export function useAutoplayVideo(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (!video.paused) return;
      video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("stalled", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    document.addEventListener("touchstart", tryPlay, { passive: true });
    document.addEventListener("scroll", tryPlay, { passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("stalled", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, [ref]);
}
