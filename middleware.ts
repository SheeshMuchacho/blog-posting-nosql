import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED = ["en", "ja", "ko"] as const;
type Locale = (typeof SUPPORTED)[number];
const DEFAULT_LOCALE: Locale = "en";

// Parse Accept-Language like "ja-JP;q=0.9,ja;q=0.8,en-US;q=0.7,en;q=0.6"
function pickLocale(acceptLang: string | null): Locale {
  if (!acceptLang) return DEFAULT_LOCALE;

  const parts = acceptLang
    .split(",")
    .map((item) => {
      const [tag, ...params] = item.trim().split(";");
      const lang = tag.toLowerCase();
      const q = params.find((p) => p.trim().startsWith("q="));
      const weight = q ? parseFloat(q.split("=")[1]) : 1;
      return { lang, weight: Number.isFinite(weight) ? weight : 1 };
    })
    .sort((a, b) => b.weight - a.weight);

  for (const { lang } of parts) {
    if (SUPPORTED.includes(lang as Locale)) return lang as Locale;
    const base = lang.split("-")[0];
    if (SUPPORTED.includes(base as Locale)) return base as Locale;
  }
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore static assets / Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(png|jpe?g|gif|svg|ico|webp|css|js|txt|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  // If cookie already present, do nothing
  if (req.cookies.get("lang")) return NextResponse.next();

  // Choose from browser preference
  const preferred = pickLocale(req.headers.get("accept-language"));

  // Set cookie & redirect once so server sees it immediately
  const res = NextResponse.redirect(req.nextUrl);
  res.cookies.set("lang", preferred, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
