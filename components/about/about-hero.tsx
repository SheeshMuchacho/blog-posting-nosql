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
    en: "Acumen Intelligence is a global leader in Demand Generation and Database Marketing. It possesses the Winning Formula to be your One-Stop Growth Partner with:",
    ja: "Acumen Intelligenceは、需要創出とデータベースマーケティングにおけるグローバルリーダーです。ワンストップ成長パートナーとなるための勝利の公式を持っています：",
    ko: "Acumen Intelligence는 수요 창출 및 데이터베이스 마케팅 분야의 글로벌 리더입니다. 다음과 같은 성공 공식으로 원스톱 성장 파트너가 되겠습니다:",
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-20 md:pb-20 bg-primary overflow-hidden">
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
            {/* Central illustration with rotating outline only */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border-2 border-dashed border-blue-300/50 rounded-full"
              />
              
              {/* Floating elements */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: [-5, 5, -5], 
                    transition: {
                      opacity: { duration: 0.6, delay: 0.6, ease: "easeOut" },
                      scale: { duration: 0.6, delay: 0.6, ease: "easeInOut" },
                      y: { duration: 6, ease: "easeOut", repeat: Infinity },
                    },
                  },
                }}
                className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/40 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center z-20"
              >
                <Image
                  src="/icons/barchart.png"
                  alt="chart"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: [-10, 10, -10], 
                    transition: {
                      opacity: { duration: 0.6, delay: 0.1, ease: "easeOut" },
                      scale: { duration: 0.6, delay: 0.1, ease: "easeInOut" },
                      y: { duration: 6, ease: "easeOut", repeat: Infinity },
                    },
                  },
                }}
                className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-400/40 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center z-20"
              >
                <Image
                  src="/icons/ai.png"
                  alt="growth"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </motion.div>
              
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-blue-300/30 z-10">
                <Image
                  src="/growth.png"
                  alt="Acumen Intelligence Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}