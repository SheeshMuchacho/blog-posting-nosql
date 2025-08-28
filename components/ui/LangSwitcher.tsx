"use client";
import { useLanguage, type Locale } from "@/app/i18n/LanguageProvider";
import { useRouter } from "next/navigation";

const LABELS: Record<Locale, string> = { en: "EN", ja: "日本語", ko: "한국어" };

export default function LangSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { lang, setLang } = useLanguage();
  const router = useRouter();

  const change = (l: Locale) => {
    setLang(l);
    // cookie for server (1 year)
    document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}`;
    // re-run server components + metadata
    router.refresh();
  };

  return (
    <div className={["flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white", scrolled ? "text-sm" : "text-xs"].join(" ")}>
      {(["en", "ja", "ko"] as Locale[]).map((l, index) => (
        <button
          key={l}
          onClick={() => change(l)}
          className={[
            "transition-all duration-300 hover:bg-gray-100 hover:text-black focus:outline-none",
            scrolled ? "px-3 py-2" : "px-4 py-2",
            lang === l 
              ? "bg-primary text-white" 
              : "text-gray-700 hover:text-gray-900",
            index > 0 ? "border-l border-gray-300" : "",
          ].join(" ")}
          aria-pressed={lang === l}
          aria-label={`Switch to ${LABELS[l]}`}
        >
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}