"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Users } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import Image from "next/image";

const CountryOutlines = {
  UK: (
    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current text-blue-600/70">
      <path d="M30 20 L35 15 L45 18 L50 15 L55 20 L60 25 L65 30 L70 40 L65 50 L60 60 L55 65 L50 70 L45 75 L40 80 L35 75 L30 70 L25 65 L20 55 L25 45 L30 35 Z" />
    </svg>
  ),
  SriLanka: (
    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current text-blue-600/70">
      <path d="M45 10 L50 15 L55 25 L60 35 L58 45 L55 55 L50 65 L45 75 L40 80 L35 75 L40 65 L42 55 L45 45 L48 35 L45 25 Z" />
    </svg>
  ),
  Singapore: (
    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current text-blue-600/70">
      <circle cx="50" cy="50" r="8" />
    </svg>
  ),
  Indonesia: (
    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current text-blue-600/70">
      <path d="M10 40 L20 35 L30 40 L40 38 L50 42 L60 40 L70 45 L80 50 L85 55 L80 60 L70 58 L60 60 L50 58 L40 60 L30 58 L20 55 L10 50 Z" />
      <path d="M15 60 L25 58 L35 62 L25 65 L15 63 Z" />
      <path d="M45 65 L55 63 L65 67 L55 70 L45 68 Z" />
    </svg>
  ),
  Japan: (
    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current text-blue-600/70">
      <path d="M65 15 L70 20 L75 30 L80 40 L75 50 L70 55 L65 60 L60 65 L55 60 L60 50 L65 40 L60 30 L65 20 Z" />
      <path d="M45 25 L50 30 L55 40 L50 50 L45 45 L40 35 L45 30 Z" />
      <path d="M25 35 L30 40 L35 50 L30 55 L25 50 L20 40 L25 35 Z" />
    </svg>
  ),
};

export default function ExploreOurLocations() {
  const { lang } = useLanguage();

  const HEADING: LStr = {
    en: "Explore Our Global Locations",
    ja: "グローバル拠点を探索",
    ko: "글로벌 위치 탐색",
  };

  const SUBHEADING: LStr = {
    en: "Connecting businesses worldwide through our strategic office locations",
    ja: "戦略的なオフィス拠点を通じて世界中のビジネスを結び付けます",
    ko: "전략적 오피스 위치를 통해 전 세계 비즈니스를 연결합니다",
  };

  const locations = [
    {
      country: "United Kingdom",
      countryCode: "/country/uk-c.png",
      flagImage: "/country/uk.png",
      city: "London",
      address: "123 Business District, London EC1A 1AA",
      email: "info@acumenintelligence.com",
      team: "10+ Professionals",
      gradient: "from-red-500 to-blue-600"
    },
    {
      country: "Sri Lanka",
      countryCode: "/country/sl-c.png",
      flagImage: "/country/sl.png",
      city: "Colombo",
      address: "456 Business Center, Colombo 00100",
      email: "info@acumenintelligence.com",
      team: "40+ Professionals",
      gradient: "from-green-500 to-orange-600"
    },
    {
      country: "Singapore",
      countryCode: "/country/sg-c.png",
      flagImage: "/country/sg.png",
      city: "Singapore",
      address: "789 Marina Bay, Singapore 018956",
      email: "info@acumenintelligence.com",
      team: "20+ Professionals",
      gradient: "from-red-600 to-white"
    },
    {
      country: "Indonesia",
      countryCode: "/country/id-c.png",
      flagImage: "/country/id.png",
      city: "Jakarta",
      address: "321 SCBD District, Jakarta 12190",
      email: "info@acumenintelligence.com",
      team: "15+ Professionals",
      gradient: "from-red-600 to-white"
    },
    {
      country: "Japan",
      countryCode: "/country/jp-c.png",
      flagImage: "/country/jp.png",
      city: "Tokyo",
      address: "654 Shibuya District, Tokyo 150-0002",
      email: "info@acumenintelligence.com",
      team: "10+ Professionals",
      gradient: "from-red-600 to-white"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="padding-container max-w-screen-xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          variants={cardVariants as any}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-primary bg-clip-text text-transparent"
          >
            {t(HEADING, lang)}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t(SUBHEADING, lang)}
          </motion.p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              variants={cardVariants as any}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Card Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-11 h-11 flex-shrink-0">
                        <Image
                          src={location.flagImage}
                          alt={`${location.country} flag`}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover rounded-full border-2 border-gray-200 shadow-sm"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {location.country}
                        </h3>
                        <p className="text-sm text-gray-500">{location.city}</p>
                      </div>
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={location.countryCode}
                          alt={`${location.country} flag`}
                          width={35}
                          height={35}
                          className="w-full h-full opacity-75"
                        />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-gray-600">{location.email}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-2 border-t border-gray-100">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium text-gray-700">{location.team}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}