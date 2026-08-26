"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { DICTIONARIES, LOCALE_TAGS, type Dictionary, type Lang } from "./dictionary";

const STORAGE_KEY = "loom-lang";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "uk" || value === "ru";
}

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

interface LangContextValue {
  lang: Lang;
  t: Dictionary;
  locale: string;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    window.localStorage.setItem(STORAGE_KEY, next);
    emitChange();
  }

  return (
    <LangContext.Provider value={{ lang, t: DICTIONARIES[lang], locale: LOCALE_TAGS[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
