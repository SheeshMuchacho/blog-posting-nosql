"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutus from "@/public/aboutus.gif";
import { AuroraText } from "@/components/ui/AuroraText";
import { useLanguage } from "@/app/(main)/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function AboutHero() {
  const { lang } = useLanguage();

    const BADGE: LStr = {
    en: "About Us",
    ja: "アキュメンについて",
    ko: "회사 소개",
  };

  const HEADING_PART1: LStr = {
    en: "Driving",
    ja: "B2Bマーケティングに",
    ko: "B2B 마케팅의",
  };

  const HEADING_PART2: LStr = {
    en: "Innovation",
    ja: "革新",
    ko: "혁신",
  };

  const HEADING_TAIL: LStr = {
    en: "in B2B Marketing",
    ja: "をもたらす",
    ko: "을 이끌다",
  };

  const DESCRIPTION: LStr = {
    en: "Acumen Intelligence is a global leader in Demand Generation and Database Marketing - the driving force behind your lead generation triumph. Join us in exploring the boundless potential of B2B lead generation, and let us lead you to unparalleled success with our direct access to key decision makers.",
    ja: "アキュメンインテリジェンスは、リードジェネレーションとデータベースマーケティングにおけるグローバルリーダーであり、お客様のリードジェネレーション成功の原動力となります。B2Bリードジェネレーションの無限の可能性を探求するパートナーとして、主要な意思決定者への直接アクセスを通して、比類なき成功を約束します。",
    ko: "Acumen Intelligence는 수요 창출 및 데이터베이스 마케팅 분야의 글로벌 리더로서, 귀사의 리드 생성 성공을 위한 원동력입니다. B2B 리드 생성의 무한한 잠재력을 함께 탐색해 보세요. 주요 의사 결정권자와 직접 소통하여 귀사의 성공을 위한 최고의 길로 안내해 드리겠습니다.",
  };

  return (
    <section className="relative pt-20 pb-16 md:pb-20 bg-white bg-[radial-gradient(125%_125%_at_50%_90%,#fff_40%,#1E90FF_100%)] bg-fixed overflow-x-clip">
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
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm inline-flex border border-black/20 px-3 py-1 rounded-lg tracking-tight"
            >
              {t(BADGE, lang)}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-6 whitespace-pre-line"
            >
              {t(HEADING_PART1, lang)}{" "}
              <AuroraText className="inline-block pr-[2px]">{t(HEADING_PART2, lang)}</AuroraText>{" "}
              {t(HEADING_TAIL, lang)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-[#010D3E] tracking-tight mt-6"
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
            <div className="md:h-[648px] md:flex-1 relative z-20 mt-8 md:mt-0">
              <Image
                src={aboutus}
                alt="Image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}