"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function AboutHero() {
  const { lang } = useLanguage();

  const HEADING: LStr = {
    en: "About Us",
    ja: "私たちについて",
    ko: "회사 소개",
  };

  const SUBHEADING: LStr = {
    en: "Driving Innovation in B2B Marketing",
    ja: "B2Bマーケティングにおけるイノベーションの推進",
    ko: "B2B 마케팅의 혁신을 주도하다",
  };

  const DESCRIPTION: LStr = {
    en: "We are a global leader in demand generation and database marketing, empowering businesses with data-driven strategies and cutting-edge automation solutions.",
    ja: "私たちは需要創出とデータベースマーケティングにおけるグローバルリーダーであり、データドリブンな戦略と最先端の自動化ソリューションでビジネスを支援しています。",
    ko: "우리는 수요 창출 및 데이터베이스 마케팅 분야의 글로벌 리더로서, 데이터 기반 전략과 최첨단 자동화 솔루션으로 비즈니스를 지원합니다.",
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-[#010D3E] via-blue-900 to-blue-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 padding-container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              {t(HEADING, lang)}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100"
            >
              {t(SUBHEADING, lang)}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              {t(DESCRIPTION, lang)}
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Central illustration placeholder - you can replace with actual image */}
            <div className="relative w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/40 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-blue-300/50 rounded-full"
              />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-16 h-16 bg-blue-500/40 rounded-lg backdrop-blur-sm border border-blue-300/30 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-blue-400 rounded opacity-80" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 w-20 h-20 bg-blue-400/40 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center"
              >
                <div className="w-10 h-10 bg-blue-300 rounded-full opacity-80" />
              </motion.div>
              
              {/* Center icon */}
              <div className="w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}