import { cookies } from "next/headers";
import type { Locale } from "@/app/i18n/LanguageProvider";
import type { LStr } from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const raw = (await cookies()).get("lang")?.value as Locale | undefined;
  return raw === "ja" || raw === "ko" ? raw : "en";
}

export function tServer(value: LStr, lang: Locale): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}
