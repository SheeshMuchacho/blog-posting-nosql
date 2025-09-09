"use client";

import { motion } from "framer-motion";
import { Database, TrendingUp, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import FeatureList, { Feature } from "../ui/FeatureList";

export default function WhoWeAre() {
  const { lang } = useLanguage();

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

            {/* Features List */}
            <motion.div variants={itemVariants as any} className="space-y-8">
              <FeatureList heading={HEADING} features={features} />
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants as any}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main illustration container */}
              <motion.div className="relative w-full h-96 rounded-3xl p-8 shadow-2xl bg-[url('/about.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/10 rounded-3xl" />

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [-3, 3, -3],
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
                    y: [4, -4, 4],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-20 h-20 bg-primary rounded-full shadow-lg flex items-center justify-center"
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.15),transparent_50%)]" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-12 h-12 border-4 border-dashed border-secondary rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-dashed border-secondary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}