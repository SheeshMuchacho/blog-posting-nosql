"use client"

import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function WhitepaperHero() {
  const { lang } = useLanguage();

  const Heading: LStr = {
    en: "Whitepapers",
    ja: "ホワイトペーパー",
    ko: "백서",
  };

  const Description: LStr = {
    en: "Discover insights, strategies, and data-driven approaches to enhance your marketing performance",
    ja: "マーケティングパフォーマンスを向上させるためのインサイト、戦略、データドリブンのアプローチの数々をご覧ください",
    ko: "마케팅 성과를 향상시키기 위한 인사이트, 전략 및 데이터 기반 접근 방식을 알아보세요",
  };

  return (
    <div className="bg-[#144272] text-white pb-16 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(Heading, lang)}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t(Description, lang)}
          </p>
        </div>
      </div>
    </div>
  );
}