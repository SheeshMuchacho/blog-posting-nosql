"use client";

import { LazyMotion, m, domAnimation, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { Database, TrendingUp, Zap, Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import FeatureList, { Feature } from "../ui/FeatureList";

export default function WhoWeAre() {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // --- Copy (unchanged) ---
  const HEADING: LStr = {
    en: "Winning Formula to be your One-Stop Growth Partner, with:",
    ja: "ワンストップ成長パートナーとなるための Winning Formula の特長:",
    ko: "Winning Formula는 다음과 같은 원스톱 성장 파트너가 되어 드립니다.",
  };

  const features: Feature[] = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: { en: "Decades of Experience", ja: "数十年の経験", ko: "수십 년의 경험" },
      description: {
        en: "Its decades of experience in B2B Lead Generation",
        ja: "B2Bリード生成における数十年の経験",
        ko: "B2B 리드 생성 분야의 수십 년 경험",
      },
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: { en: "Data-Driven Strategies", ja: "データ駆動戦略", ko: "데이터 기반 전략" },
      description: {
        en: "Data-Driven Strategy methodologies",
        ja: "データ駆動戦略の方法論",
        ko: "데이터 기반 전략 방법론",
      },
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: { en: "Marketing Automation", ja: "マーケティング自動化", ko: "마케팅 자동화" },
      description: {
        en: "Innovative Marketing Automation capabilities",
        ja: "革新的なマーケティング自動化機能",
        ko: "혁신적인 마케팅 자동화 기능",
      },
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: { en: "Global Reach", ja: "グローバルリーチ", ko: "글로벌 도달" },
      description: {
        en: "Access to over 25 million decision makers worldwide",
        ja: "世界中の2500万人以上の意思決定者へのアクセス",
        ko: "전 세계 2천5백만 명 이상의 의사결정자에 대한 액세스",
      },
    },
  ];

  // --- Motion setup (parent controls only) ---
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(scopeRef, { margin: "0px 0px -20% 0px", amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (shouldReduceMotion) return; // Respect reduced-motion
    if (inView) controls.start("visible");
  }, [inView, controls, shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.16, delayChildren: 0.08 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  } as const;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern simplified (static, no animation) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
        <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="padding-container max-w-screen-xl mx-auto relative z-10">
        <LazyMotion features={domAnimation}>
          <m.div
            ref={scopeRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Left: content */}
            <m.div variants={itemVariants} className="space-y-8">
              <FeatureList heading={HEADING} features={features} />
            </m.div>

            {/* Right: visual */}
            <m.div variants={itemVariants} className="relative flex justify-center items-center">
              <div className="relative w-full max-w-lg will-change-transform transform-gpu">
                <div className="relative w-full h-96 rounded-3xl p-6 shadow-xl bg-white/40 backdrop-blur">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <Image
                      src="/about.jpg"
                      alt="About illustration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Minimal floating accents; paused offscreen or when prefers-reduced-motion */}
                  {!shouldReduceMotion && (
                    <>
                      <m.div
                        className="absolute top-4 right-4 w-14 h-14 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center will-change-transform transform-gpu"
                        animate={inView ? { y: [-4, 4, -4] } : { y: 0 }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Database className="w-7 h-7 text-white" />
                      </m.div>

                      <m.div
                        className="absolute bottom-4 left-4 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center will-change-transform transform-gpu"
                        animate={inView ? { y: [3, -3, 3], rotate: [0, -2, 0] } : { y: 0, rotate: 0 }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      >
                        <TrendingUp className="w-9 h-9 text-white" />
                      </m.div>
                    </>
                  )}
                </div>
              </div>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
