"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "ja" | "ko";

type Ctx = { lang: Locale; setLang: (l: Locale) => void };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>("en");

  useEffect(() => {
    if (typeof document === "undefined") return;
    const cookie = document.cookie.split("; ").find((c) => c.startsWith("lang="));
    const v = (cookie?.split("=")[1] ?? "en") as Locale;
    setLang(v === "ja" || v === "ko" ? v : "en");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
