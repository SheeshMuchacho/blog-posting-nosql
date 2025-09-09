"use client";

import Button from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Target, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// i18n imports
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import { JSX } from "react";

export default function TopServices() {
  const { lang } = useLanguage();

  const containerV = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const cardV = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  const HEADING: LStr = {
    en: "Excellent Solutions That Drive Growth",
    ja: "成長を促進する優れたソリューション",
    ko: "성장을 견인하는 뛰어난 솔루션",
  };

  const INTRO: LStr = {
    en: "We deliver data-driven marketing strategies that connect you with your ideal customers and accelerate business growth.",
    ja: "理想的な顧客とつながり、ビジネスの成長を加速させるデータドリブンなマーケティング戦略を提供します。",
    ko: "이상적인 고객과 연결하고 비즈니스 성장을 가속화하는 데이터 기반 마케팅 전략을 제공합니다.",
  };

  const CTA: LStr = {
    en: "Explore All Services",
    ja: "すべてのサービスを見る",
    ko: "모든 서비스 보기",
  };

  const services: {
    icon: JSX.Element;
    title: LStr;
    description: LStr;
  }[] = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: { en: "ABM", ja: "ABM", ko: "ABM" },
      description: {
        en: "Account-Based Marketing strategies to target high-value accounts with personalized campaigns and measurable results.",
        ja: "価値の高いアカウントを対象に、パーソナライズされたキャンペーンと測定可能な成果を提供するアカウントベースドマーケティング戦略。",
        ko: "가치가 높은 계정을 타겟으로 맞춤형 캠페인과 측정 가능한 결과를 제공하는 계정 기반 마케팅 전략.",
      },
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: { en: "Lead Generation", ja: "リード獲得", ko: "리드 생성" },
      description: {
        en: "Comprehensive lead generation solutions to identify, nurture, and convert qualified prospects into loyal customers.",
        ja: "適格な見込み客を特定・育成し、ロイヤル顧客へと転換する包括的なリード獲得ソリューション。",
        ko: "적격 잠재고객을 발굴, 육성하여 충성 고객으로 전환하는 종합적인 리드 생성 솔루션.",
      },
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: { en: "Demand Generation", ja: "デマンドジェネレーション", ko: "디맨드 제너레이션" },
      description: {
        en: "End-to-end demand generation programs to increase brand awareness and drive qualified interest in your products.",
        ja: "ブランド認知を高め、製品への適格な関心を促進するエンドツーエンドのデマンドジェネレーションプログラム。",
        ko: "브랜드 인지도를 높이고 제품에 대한 적격 관심을 유도하는 엔드투엔드 디맨드 제너레이션 프로그램.",
      },
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_200%)]">
      <motion.div
        className="padding-container max-w-screen-xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerV}
      >
        {/* Heading + Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            {t(HEADING, lang)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t(INTRO, lang)}</p>
        </div>

        {/* Service Cards */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {services.map((s, i) => (
            <motion.li
              key={i}
              variants={cardV}
              className="will-change-transform"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <SpotlightCard
                icon={s.icon}
                title={t(s.title, lang)}
                description={t(s.description, lang)}
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <div className="text-center mt-16 flex justify-center">
          <Link href="/services">
            <Button
              type="button"
              title={t(CTA, lang)}
              className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none 
                focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
                bg-blue-500 text-white shadow hover:bg-secondary px-8 py-3 max-w-52 whitespace-pre 
                group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out 
                hover:ring-2 hover:ring-secondary hover:ring-offset-1 btn-shine"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
