"use client"

import { useLanguage } from "@/app/(main)/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import SearchBox from "../ui/SearchBox";

export default function BlogHero() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const Heading: LStr = {
    en: "Blogs",
    ja: "ブログ",
    ko: "블로그",
  };

  const Description: LStr = {
    en: "Stay updated with the latest insights, trends, and stories from our team",
    ja: "アキュメンインテリジェンスの最新インサイト、トレンド、ストーリーをご確認ください",
    ko: "우리 팀의 최신 인사이트, 트렌드, 스토리를 확인하세요",
  };

  return (
    <div>
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

    <div className="py-2">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBox
          placeholder="Search blogs..."
          defaultValue={searchQuery}
          className="max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10"
        />
      </div>
    </div>
    </div>
  );
}
