import type { Locale } from "@/app/(main)/i18n/LanguageProvider";

export type LStr = string | Record<Locale, string>;
export type LSTr = LStr; 

export function t(value: LStr, lang: Locale): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}
