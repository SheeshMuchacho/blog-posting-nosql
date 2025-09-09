"use client";

import { motion } from "framer-motion";
import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function PhilosophyAndDelivery() {
  const { lang } = useLanguage();

  const PHILOSOPHY_HEADING: LStr = {
    en: "THE ACUMEN INTELLIGENCE PHILOSOPHY",
    ja: "ACUMEN INTELLIGENCE の哲学",
    ko: "ACUMEN INTELLIGENCE 철학",
  };

  const PHILOSOPHY_DESCRIPTION: LStr = {
    en: "To provide cost effective solutions at same time building trust, end goal and maximum ROI. \n\n Working with you, we at Acumen Intelligence will design an online lead generation strategy that has clear goals and design and can streamline your lead qualification process with our sales lead tracking software.",
    ja: "お客様と協力して、Acumen Intelligenceでは、明確な目標と設計を持ち、弊社の営業リード追跡ソフトウェアでリード適格化プロセスを合理化できるオンラインリード生成戦略を設計いたします。",
    ko: "고객과 협력하여, Acumen Intelligence는 명확한 목표와 설계를 가지고 있으며 당사의 영업 리드 추적 소프트웨어로 리드 검증 프로세스를 합리화할 수 있는 온라인 리드 생성 전략을 설계합니다.",
  };

  const DELIVERY_HEADING: LStr = {
    en: "We can Deliver",
    ja: "私たちができること",
    ko: "우리가 제공할 수 있는 것",
  };

  const DELIVERY_DESCRIPTION: LStr = {
    en: "Minimizing cost per lead while maximizing lead quality – that's the objective of Overdrive's ongoing Lead Generation Capture and Lead Quality Optimization services. Because ultimately, a low cost lead is only good for your online marketing campaign if it can be converted into a sale.",
    ja: "リード単価を最小化しながらリード品質を最大化する - これがOverdriveの継続的なリード生成キャプチャとリード品質最適化サービスの目標です。最終的に、低コストリードは、それが売上に変換できる場合にのみ、オンラインマーケティングキャンペーンに有効だからです。",
    ko: "리드당 비용을 최소화하면서 리드 품질을 극대화하는 것 - 이것이 Overdrive의 지속적인 리드 생성 캡처 및 리드 품질 최적화 서비스의 목표입니다. 궁극적으로, 저비용 리드는 판매로 전환될 수 있을 때만 온라인 마케팅 캠페인에 유용하기 때문입니다.",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
      
      <motion.div
        className="padding-container max-w-screen-xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Philosophy Section */}
        <motion.div 
          variants={itemVariants as any}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual */}
            <motion.div
              variants={itemVariants as any}
              className="relative flex justify-center items-center order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md">
                <motion.div className="relative">
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Brain illustration */}
                    <motion.div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 rounded-full relative overflow-hidden bg-transparent">
                        <Image 
                        src="/digitalbrain.png" 
                        alt="digitalbrain"
                        width={500}
                        height={500}
                        className="object-cover" 
                        />
                      </div>
                    </motion.div>

                    {/* Floating DNA-like structures */}
                    <motion.div
                      animate={{ 
                        y: [-15, 15, -15],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute -top-8 -right-8 w-16 h-32 flex flex-col items-center justify-between"
                    >
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 h-3 bg-primary rounded-full rotate-45 shadow-lg" />
                      ))}
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [15, -15, 15],
                        rotate: [360, 180, 0]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute -bottom-8 -left-8 w-16 h-32 flex flex-col items-center justify-between"
                    >
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 h-3 bg-secondary rounded-full -rotate-45 shadow-lg" />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -left-4 w-8 h-8 border-2 border-dashed border-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-dashed border-cyan-400 rounded-full"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div variants={itemVariants as any} className="order-1 lg:order-2">
              <motion.h2
                variants={itemVariants as any}
                className="text-4xl md:text-4xl xs:text-3xl font-bold mb-8 text-gray-900 leading-tight"
              >
                {t(PHILOSOPHY_HEADING, lang)}
              </motion.h2>
              
              <motion.p
                variants={itemVariants as any}
                className="text-lg text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {t(PHILOSOPHY_DESCRIPTION, lang)}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>


        {/* Delivery Section */}
        <motion.div variants={itemVariants as any}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants as any}>
              <motion.h2
                variants={itemVariants as any}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight"
              >
                {t(DELIVERY_HEADING, lang)}
              </motion.h2>
              
              <motion.p
                variants={itemVariants as any}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {t(DELIVERY_DESCRIPTION, lang)}
              </motion.p>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              variants={itemVariants as any}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-lg">
                {/* 3D Isometric illustration container */}
                <motion.div className="relative w-full h-96 flex items-center justify-center">
                  {/* Central platform */}
                  <div className="relative">
                    {/* Main platform */}
                    <motion.div
                      animate={{ 
                        rotateY: [0, 5, 0, -5, 0],
                        rotateX: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-64 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-2xl transform perspective-1000 rotateX-12 rotateY-12"
                      style={{ 
                        transform: 'perspective(1000px) rotateX(15deg) rotateY(15deg)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Laptop on platform */}
                      <motion.div
                        animate={{ 
                          y: [-5, 5, -5],
                          rotateZ: [0, 1, 0, -1, 0]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-lg shadow-lg"
                      >
                        <div className="w-20 h-12 bg-blue-400 rounded-sm m-2 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Floating DNA structures around platform */}
                    <motion.div
                      animate={{ 
                        y: [-10, 10, -10],
                        rotateZ: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute -top-12 -left-16 w-12 h-24 flex flex-col items-center justify-between"
                    >
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-2 bg-cyan-400 rounded-full rotate-45 shadow-lg" />
                      ))}
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [10, -10, 10],
                        rotateZ: [360, 180, 0]
                      }}
                      transition={{ 
                        duration: 7, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -top-12 -right-16 w-12 h-24 flex flex-col items-center justify-between"
                    >
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-2 bg-cyan-300 rounded-full -rotate-45 shadow-lg" />
                      ))}
                    </motion.div>

                    {/* Small cubes around the platform */}
                    <motion.div
                      animate={{ 
                        y: [-8, 8, -8],
                        rotateY: [0, 90, 180, 270, 360]
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute -bottom-8 -left-12 w-8 h-8 bg-blue-600 rounded shadow-lg"
                    />

                    <motion.div
                      animate={{ 
                        y: [8, -8, 8],
                        rotateX: [0, 90, 180, 270, 360]
                      }}
                      transition={{ 
                        duration: 9, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute -bottom-8 -right-12 w-6 h-6 bg-cyan-500 rounded shadow-lg"
                    />

                    <motion.div
                      animate={{ 
                        y: [-6, 6, -6],
                        rotateZ: [0, 45, 90, 135, 180]
                      }}
                      transition={{ 
                        duration: 11, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-2 left-20 w-4 h-4 bg-blue-400 rounded shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Background decorative elements */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-dashed border-blue-300/50 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}