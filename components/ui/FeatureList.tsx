"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export type Feature = {
  icon: React.ReactNode;
  title: LStr;
  description: LStr;
};

interface FeatureListProps {
  heading: LStr;
  features: Feature[];
}

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

export default function FeatureList({ heading, features }: FeatureListProps) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Heading */}
      <motion.h2
        variants={itemVariants as any}
        className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent"
      >
        {t(heading, lang)}
      </motion.h2>

      {/* Features */}
      <motion.div variants={containerVariants} className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants as any}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/90 hover:shadow-lg transition-all duration-300"
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
    </motion.div>
  );
}
