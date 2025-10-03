"use client";

import { useLanguage } from "@/app/(main)/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import Link from "next/link";

export default function NotFound() {
  const { lang } = useLanguage();

  const TITLE: LStr = { en: "Page Not Found", ja: "ページが見つかりません", ko: "페이지를 찾을 수 없습니다" };
  const DESCRIPTION: LStr = {
    en: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    ja: "お探しのページは削除されたか、名前が変更されたか、一時的に利用できない可能性があります。",
    ko: "찾으시는 페이지가 삭제되었거나 이름이 변경되었거나 일시적으로 사용할 수 없습니다.",
  };
  const BTN_HOME: LStr = { en: "Return Home", ja: "ホームに戻る", ko: "홈으로 돌아가기" };

  return (
    <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
      <h1 className="text-8xl md:text-9xl font-bold text-secondary">404</h1>
      <div className="h-1 w-16 rounded bg-secondary my-5 md:my-7"></div>

      <p className="text-2xl md:text-3xl font-bold text-gray-800">{t(TITLE, lang)}</p>
      <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
        {t(DESCRIPTION, lang)}
      </p>

      <div className="flex items-center gap-4 mt-6">
        <Link
          href="/"
          className="bg-secondary hover:bg-primary px-7 py-2.5 text-white rounded-md active:scale-95 transition-all"
        >
          {t(BTN_HOME, lang)}
        </Link>
      </div>
    </div>
  );
}
