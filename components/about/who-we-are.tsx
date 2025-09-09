"use client";

import { motion } from "framer-motion";
import { Database, TrendingUp, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function WhoWeAre() {
  const { lang } = useLanguage();

  const HEADING: LStr = {
    en: "Who We Are?",
    ja: "私たちは誰ですか？",
    ko: "우리는 누구인가?",
  };

  const INTRO: LStr = {
    en: "Acumen Intelligence is a global leader in Demand Generation and Database Marketing. It possesses the Winning Formula to be your One-Stop Growth Partner with:",
    ja: "Acumen Intelligenceは、需要創出とデータベースマーケティングにおけるグローバルリーダーです。ワンストップ成長パートナーとなるための勝利の公式を持っています：",
    ko: "Acumen Intelligence는 수요 창출 및 데이터베이스 마케팅 분야의 글로벌 리더입니다. 다음과 같은 성공 공식으로 원스톱 성장 파트너가 되겠습니다:",
  };

  const WELCOME_TEXT: LStr = {
    en: "Welcome to Acumen Intelligence – the driving force behind your lead generation future. Unlock the boundless potential of B2B lead generation, and let us lead you to unparalleled success with our direct access to key decision makers.",
    ja: "Acumen Intelligenceへようこそ - あなたのリード生成の未来を牽引する原動力です。B2Bリード生成の無限の可能性を解き放ち、主要な意思決定者への直接アクセスにより、比類のない成功へと導きます。",
    ko: "Acumen Intelligence에 오신 것을 환영합니다 - 리드 생성 미래를 이끄는 원동력입니다. B2B 리드 생성의 무한한 잠재력을 해제하고, 핵심 의사결정자에 대한 직접적인 액세스로 비교할 수 없는 성공으로 이끌어드립니다.",
  };

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: {
        en: "Decades of Experience",
        ja: "数十年の経験",
        ko: "수십 년의 경험",
      } as LStr,
      description: {
        en: "Its decades of experience in B2B Lead Generation",
        ja: "B2Bリード生成における数十年の経験",
        ko: "B2B 리드 생성 분야의 수십 년 경험",
      } as LStr,
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: {
        en: "Data-Driven Strategies",
        ja: "データ駆動戦略",
        ko: "데이터 기반 전략",
      } as LStr,
      description: {
        en: "Data-Driven Strategy methodologies",
        ja: "データ駆動戦略の方法論",
        ko: "데이터 기반 전략 방법론",
      } as LStr,
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: {
        en: "Marketing Automation",
        ja: "マーケティング自動化",
        ko: "마케팅 자동화",
      } as LStr,
      description: {
        en: "Innovative Marketing Automation capabilities",
        ja: "革新的なマーケティング自動化機能",
        ko: "혁신적인 마케팅 자동화 기능",
      } as LStr,
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: {
        en: "Global Reach",
        ja: "グローバルリーチ",
        ko: "글로벌 도달",
      } as LStr,
      description: {
        en: "Access to over 25 million decision makers worldwide",
        ja: "世界中の2500万人以上の意思決定者へのアクセス",
        ko: "전 세계 2천5백만 명 이상의 의사결정자에 대한 액세스",
      } as LStr,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <motion.div
        className="padding-container max-w-screen-xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants as any} className="space-y-8">
            <motion.h2
              variants={itemVariants as any}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent"
            >
              {t(HEADING, lang)}
            </motion.h2>
            
            <motion.p
              variants={itemVariants as any}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {t(INTRO, lang)}
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t(feature.title, lang)}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t(feature.description, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants as any}
              className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500"
            >
              {t(WELCOME_TEXT, lang)}
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants as any}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main illustration container */}
              <motion.div
                className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Database className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-20 h-20 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center"
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <Globe className="w-12 h-12 text-blue-600" />
                </motion.div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.15),transparent_50%)]" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-12 h-12 border-4 border-dashed border-blue-300 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-dashed border-indigo-300 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}