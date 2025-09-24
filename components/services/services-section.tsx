"use client";

import { Target, BarChart3, Mail, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import contentsynd from "@/public/services/content-syndication/contentsynd1.png";
import displayad from "@/public/services/display-advertising/displayad1.png";
import leadgen from "@/public/services/lead-generation/leadgen1.png";
import webinar from "@/public/services/webinar/webinar1.png";
import intentdata from "@/public/services/intent-data/intentdata1.png";
import demandgen from "@/public/services/lead-generation/leadgen1.png";
import abm from "@/public/services/abm/abm1.jpg";
import type { Variants, TargetAndTransition } from "framer-motion";
import Link from "next/link";

import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

type Solution = {
  id: number;
  slug: string;
  image: any;
  icon: any;
  title: LStr;
  description: LStr;
  buttonText: LStr;
};

export const ServicesSection = () => {
  const { lang } = useLanguage();

  const HEADING: LStr = {
    en: "Our Solutions",
    ja: "私たちのソリューション",
    ko: "당사의 솔루션",
  };

  const INTRO: LStr = {
    en:
      "Comprehensive B2B email marketing solutions designed to drive qualified leads, nurture prospects, and accelerate your sales pipeline. Our data-driven approach ensures maximum ROI for your marketing investment.",
    ja:
      "質の高いリード獲得、見込み客の育成、そしてパイプラインの加速を実現する包括的なB2Bメールマーケティングソリューション。データドリブンなアプローチで投資対効果を最大化します。",
    ko:
      "검증된 리드를 창출하고 잠재고객을 육성하며 영업 파이프라인을 가속하는 종합 B2B 이메일 마케팅 솔루션입니다. 데이터 기반 접근으로 마케팅 ROI를 극대화합니다.",
  };

  const VIEW_SERVICE: LStr = {
    en: "View Service",
    ja: "サービスを見る",
    ko: "서비스 보기",
  };

  const solutions: Solution[] = [
    {
      id: 1,
      slug: "content-syndication",
      image: contentsynd,
      icon: Target,
      title: {
        en: "Content Syndication",
        ja: "コンテンツ・シンジケーション",
        ko: "콘텐츠 신디케이션",
      },
      description: {
        en:
          "Is your creative content really working? Acumen Intelligence believes in authentic communication, increasing your revenue and generating interest in your products and services.",
        ja:
          "クリエイティブは本当に機能していますか？Acumen Intelligenceは、真摯なコミュニケーションで収益向上と製品・サービスへの関心喚起を支援します。",
        ko:
          "당신의 크리에이티브가 실제로 효과를 내고 있나요? Acumen Intelligence는 진정성 있는 커뮤니케이션으로 매출을 높이고 제품·서비스 관심을 이끌어냅니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 2,
      slug: "display-advertising",
      image: displayad,
      icon: BarChart3,
      title: {
        en: "Display Advertising",
        ja: "ディスプレイ広告",
        ko: "디스플레이 광고",
      },
      description: {
        en:
          "Increase your brand presence with Acumen Intelligence display advertising. From eye-catching banners to dynamic ad placements, our strategies make your message stand out.",
        ja:
          "Acumen Intelligenceのディスプレイ広告でブランド存在感を強化。バナーから動的配信まで、メッセージを際立たせます。",
        ko:
          "Acumen Intelligence의 디스플레이 광고로 브랜드 존재감을 강화하세요. 배너부터 동적 집행까지 메시지를 돋보이게 합니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 3,
      slug: "lead-generation",
      image: leadgen,
      icon: Mail,
      title: {
        en: "Lead Generation",
        ja: "リード獲得",
        ko: "리드 생성",
      },
      description: {
        en:
          "Increase your prospects' buying intent with Acumen Intelligence Lead Generation. Discover the power of sophisticated language and targeted outreach.",
        ja:
          "高度な言語設計とターゲットアプローチで購買意欲を高めるリード獲得を実現します。",
        ko:
          "정교한 메시지와 타기팅으로 구매 의도를 높이는 리드 생성 전략을 제공합니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 4,
      slug: "webinar",
      image: webinar,
      icon: Users,
      title: {
        en: "Webinars and Events",
        ja: "ウェビナーとイベント",
        ko: "웨비나 및 이벤트",
      },
      description: {
        en:
          "Webinars are a great visual companion for your business. They allow for collaboration and storytelling, no matter how far apart you are.",
        ja:
          "ウェビナーは、距離に関係なくコラボレーションとストーリーテリングを実現する強力な手段です。",
        ko:
          "웨비나는 거리와 무관하게 협업과 스토리텔링을 가능하게 하는 강력한 수단입니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 5,
      slug: "intent-data",
      image: intentdata,
      icon: Zap,
      title: {
        en: "Intent Data",
        ja: "インテントデータ",
        ko: "인텐트 데이터",
      },
      description: {
        en:
          "Millions of intent data points give you a clearer picture of what buyers are ready to buy, helping you generate higher quality leads.",
        ja:
          "数百万のインテントデータが購買意欲の高い見込み客を可視化し、高品質なリード創出を支援します。",
        ko:
          "수백만 개의 인텐트 데이터가 구매 의향이 높은 잠재고객을 파악하게 해 양질의 리드를 창출합니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 6,
      slug: "demand-generation",
      image: demandgen,
      icon: Shield,
      title: {
        en: "Demand Generation",
        ja: "デマンドジェネレーション",
        ko: "디맨드 제너레이션",
      },
      description: {
        en:
          "Acumen Intelligence goes above and beyond to create the demand that fuels growth. Our segmented approach ensures your message resonates and influences decisions.",
        ja:
          "成長の原動力となる需要を創出。セグメント最適化により、意思決定に響くメッセージを届けます。",
        ko:
          "성장을 견인하는 수요를 창출합니다. 세분화된 접근으로 메시지 공감과 의사결정에 영향력을 높입니다.",
      },
      buttonText: VIEW_SERVICE,
    },
    {
      id: 7,
      slug: "abm",
      image: abm,
      icon: Shield,
      title: {
        en: "ABM",
        ja: "ABM",
        ko: "ABM",
      },
      description: {
        en:
          "Leverage our best-in-class intent database to power your ABM and confidently craft messages for expanded targeting and seamless integrations.",
        ja:
          "最先端のインテントデータベースでABMを強化。拡張ターゲティングとスムーズな連携を実現します。",
        ko:
          "최고 수준의 인텐트 DB로 ABM을 강화하고, 확장 타기팅과 매끄러운 연동을 구현하세요.",
      },
      buttonText: VIEW_SERVICE,
    },
  ];

  const cols = 3;

  const cardV: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i: number = 0): TargetAndTransition => {
      const delay = (i % 3) * 0.1;
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay,
        },
      };
    },
  };

  return (
    <section className="relative pt-20 pb-12 overflow-hidden h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_200%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            {t(HEADING, lang)}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t(INTRO, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => {
            const isAboveTheFold = i < cols;

            return (
            <motion.div
              key={solution.id}
              className="flex h-full"
              variants={cardV}
              initial="hidden"
              {...(isAboveTheFold
                ? { animate: "show" }
                : {
                    whileInView: "show",
                    viewport: { once: true, amount: 0.2, margin: "-5% 0px -5% 0px" },
                  })}
              custom={i}
              style={{ willChange: "transform, opacity" }}
            >
              <Link href={`/services/${solution.slug}`} className="block flex-1">
                <ServiceCard
                  image={solution.image.src}
                  icon={solution.icon}
                  title={t(solution.title, lang)}
                  description={t(solution.description, lang)}
                  buttonText={t(solution.buttonText, lang)}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
