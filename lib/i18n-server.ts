import { cookies } from "next/headers";
import type { LStr } from "@/lib/i18n";

export type Locale = "en" | "ja" | "ko";

type CookieStore = ReturnType<typeof cookies> extends Promise<infer P>
  ? P
  : ReturnType<typeof cookies>;

/** Get the cookie store, working for both sync/async implementations */
async function getCookieStore(): Promise<CookieStore> {
  const result = (cookies as unknown as () => CookieStore | Promise<CookieStore>)();
  if (typeof (result as any)?.then === "function") {
    return await (result as Promise<CookieStore>);
  }
  return result as CookieStore;
}

/** Read 'lang' from cookie (default: 'en') */
export async function getRequestLocale(): Promise<Locale> {
  const ck = await getCookieStore();
  const raw = ck.get("lang")?.value as Locale | undefined;
  return raw === "ja" || raw === "ko" ? raw : "en";
}

/** Server-side translate with English fallback */
export function tServer(value: LStr, lang: Locale): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}
