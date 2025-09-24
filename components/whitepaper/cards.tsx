"use client"

import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import StretchedCard from "../ui/StretchedCard";

export default function WhitepaperCards() {
  const { lang } = useLanguage();

  const Heading: LStr = {
    en: "Unleashing the Potential of Intent Data Innovative Strategies to Enhance Marketing Funnel Performance",
    ja: "インテントデータの可能性を解き放つ：マーケティングファネルのパフォーマンスを向上させる革新的な戦略",
    ko: "의도 데이터의 잠재력 발휘: 마케팅 퍼널 성과 향상을 위한 혁신적인 전략",
  };

  const Description: LStr = {
    en: "In this white paper, we explore how intent data can revolutionize lead qualification, nurture campaigns, and sales collaboration.",
    ja: "このホワイトペーパーでは、インテントデータがリードの適格化、ナーチャリングキャンペーン、営業連携をどのように革新できるかを探ります。",
    ko: "이 백서에서는 의도 데이터가 리드 자격 부여, 육성 캠페인 및 영업 협업을 어떻게 혁신할 수 있는지 살펴봅니다.",
  };

  const ButtonText: LStr = {
    en: "Learn More",
    ja: "詳細はこちら",
    ko: "더 알아보기",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <StretchedCard
          image="/whitepapers/whitepaper1.jpg"
          heading={t(Heading, lang)}
          description={t(Description, lang)}
          buttonText={t(ButtonText, lang)}
          link="https://acumenintelligence.com/content-hub/unleashing-the-potential-of-intent-data/"
        />
      </div>
    </div>
  );
}