"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage, type Locale } from "@/app/i18n/LanguageProvider";
import { useRouter } from "next/navigation";

const LABELS: Record<Locale, string> = { en: "EN", ja: "日本語", ko: "한국어" };
const OPTIONS: Locale[] = ["en", "ja", "ko"];

export default function LangSwitcher({ 
  scrolled = false, 
  isMobile = false 
}: { 
  scrolled?: boolean;
  isMobile?: boolean;
}) {
  const { lang, setLang } = useLanguage();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);

  const change = (l: Locale) => {
    setLang(l);
    document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    if (isMobile) return;
    
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (e.target instanceof Node && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isMobile]);

  // Keyboard handling
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.key === "Enter" || e.key === " ") && !open) {
        setOpen(true);
      }
      if (e.key === "ArrowDown" && open && !isMobile) {
        firstItemRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, isMobile]);

  useEffect(() => {
    if (open && !isMobile) {
      setTimeout(() => firstItemRef.current?.focus(), 0);
    }
  }, [open, isMobile]);

  if (isMobile) {
    // Mobile expandable menu style
    return (
      <div>
        <button
          className="text-text-dark text-base font-medium hover:text-secondary transition-colors flex items-center justify-between w-full"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          Language
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64 mt-3" : "max-h-0"}`}>
          <ul className="pl-4 border-l-2 border-gray-200 space-y-3">
            {OPTIONS.map((l, itemIndex) => {
              const active = l === lang;
              return (
                <li
                  key={l}
                  className="transition-all duration-300"
                  style={{
                    transitionDelay: `${itemIndex * 100}ms`,
                    opacity: open ? 1 : 0,
                    transform: open ? "translateX(0)" : "translateX(-1rem)",
                  }}
                >
                  <button
                    onClick={() => change(l)}
                    className={`text-sm transition-colors flex items-center ${
                      active ? "text-secondary font-medium" : "text-text-dark hover:text-secondary"
                    }`}
                  >
                    {LABELS[l]}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          "flex items-center gap-1 text-text-dark font-medium hover:text-secondary transition-colors whitespace-nowrap leading-none",
          scrolled ? "text-sm" : "text-xs",
        ].join(" ")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="leading-none">{LABELS[lang]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`ml-1 h-4 w-4 shrink-0 align-middle relative top-[1px] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={[
          "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50",
          "transition-all duration-200 origin-top",
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible",
        ].join(" ")}
      >
        <ul className="py-1">
          {OPTIONS.map((l, i) => {
            const active = l === lang;
            return (
              <li key={l}>
                <button
                  ref={i === 0 ? firstItemRef : undefined}
                  role="menuitem"
                  onClick={() => change(l)}
                  className={[
                    "w-full text-left px-4 py-2 text-xs transition-colors focus:outline-none focus:ring-0 active:outline-none",
                    active
                      ? "text-secondary bg-gray-50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-secondary",
                  ].join(" ")}
                  aria-current={active ? "true" : undefined}
                >
                  {LABELS[l]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}