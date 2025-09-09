"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/lib/service-data";
import { useState, useEffect } from "react";
import { ExpandableCard } from "../ui/ExpandableCard";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t } from "@/lib/i18n";
import ContactModal from "../ui/ContactModal";

export function ServiceTemplate({ service }: { service: Service }) {
  const { lang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="bg-white">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-bold tracking-tight py-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          {t(service.title, lang)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-600 max-w-3xl leading-relaxed"
        >
          {t(service.description, lang)}
        </motion.p>
      </motion.header>

      <div className="space-y-12">
        {service.sections.map((section, idx) => {
          switch (section.type) {
            case "hero":
              return <HeroSection key={idx} section={section} service={service} index={idx} lang={lang} isPageLoaded={isLoaded} />;
            case "cards":
              return <CardsSection key={idx} section={section} index={idx} lang={lang} />;
            case "text":
              return <TextSection key={idx} section={section} service={service} index={idx} lang={lang} onOpenContact={() => setIsContactOpen(true)} />;
          }
        })}
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </article>
  );
}

function HeroSection({ section, service, index, lang, isPageLoaded }: { 
  section: any; 
  service: Service; 
  index: number; 
  lang: any;
  isPageLoaded: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isPageLoaded ? 1 : 0, 
        y: isPageLoaded ? 0 : 50 
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isPageLoaded ? 1 : 0, 
              x: isPageLoaded ? 0 : -30 
            }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tigh">
              {t(section.heading, lang)}
            </h2>
            <div className="mt-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {t(section.body, lang)}
            </div>
          </motion.div>

          {section.image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: isPageLoaded ? 1 : 0, 
                x: isPageLoaded ? 0 : 30 
              }}
              transition={{ 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={typeof section.image === "string" ? section.image : section.image}
                  alt={t(service.title, lang)}
                  fill
                  className={`object-cover transition-all duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

type CardsSectionProps = {
  section: { type: "cards"; heading?: any; items: { title: any; body: any; subtitle?: any }[] };
  index?: number;
  lang: any;
};

function CardsSection({ section, index = 0, lang }: CardsSectionProps) {
  const [maxContentHeight, setMaxContentHeight] = useState(0);

  const handleHeightChange = (h: number) => {
    setMaxContentHeight((prev) => (h > prev ? h : prev));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 45, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-6">
        {section.heading && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.2, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4">
              {t(section.heading, lang)}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch h-full">
          {section.items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              custom={i}
              className="group perspective-1000"
            >
              <ExpandableCard
                title={t(item.title, lang)}
                subtitle={item.subtitle ? t(item.subtitle, lang) : undefined}
                content={t(item.body, lang)}
                index={i}
                onHeightChange={handleHeightChange}
                targetHeight={maxContentHeight}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TextSection({ section, service, index, lang, onOpenContact }: { section: any; service: Service; index: number; lang: any; onOpenContact: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const isRightAlign = section.align === "right";

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.1, margin: "-100px" }} 
      transition={{ duration: 0.3,delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} 
      className="relative to-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className={`grid gap-12 items-center ${section.image ? "md:grid-cols-2" : ""}`}>
          {isRightAlign ? (
            <>
              {section.image && (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }} 
                  transition={{ duration: 0.3,delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
                  className="order-2 md:order-1 relative" 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ImageContainer image={section.image} alt={t(service.title, lang)} isHovered={isHovered} />
                </motion.div>
              )}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.2, margin: "-50px" }} 
                transition={{ duration: 0.3,delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
                className="order-1 md:order-2"
              >
                <TextContent section={section} lang={lang} onOpenContact={onOpenContact} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.2, margin: "-50px" }} 
                transition={{ duration: 0.3,delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TextContent section={section} lang={lang} onOpenContact={onOpenContact} />
              </motion.div>
              {section.image && (
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }} 
                  transition={{ duration: 0.3,delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
                  className="relative" 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ImageContainer image={section.image} alt={t(service.title, lang)} isHovered={isHovered} />
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}

function ImageContainer({ image, alt, isHovered }: { image: any; alt: string; isHovered: boolean }) {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group">
        <Image 
          src={typeof image === "string" ? image : image} 
          alt={alt} 
          fill 
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-105" : "scale-100"}`} 
        />
      </div>
      <motion.div 
        animate={{ rotate: [0, 360] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
        className="absolute -top-3 -right-3 w-6 h-6 border-2 border-secondary rounded-full" 
      />
      <motion.div 
        animate={{ y: [-3, 3, -3] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg" 
      />
    </div>
  );
}

function TextContent({ section, lang, onOpenContact }: { section: any; lang: any; onOpenContact: () => void }) {
  return (
    <>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3, margin: "-50px" }} 
        transition={{ duration: 0.2, delay: 0.1 }} 
        className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-6"
      >
        {t(section.heading, lang)}
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3, margin: "-50px" }} 
        transition={{ duration: 0.2, delay: 0.3 }} 
        className="text-gray-700 text-lg leading-relaxed mb-8"
      >
        {t(section.body, lang)}
      </motion.p>
      {section.cta && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <motion.button
            onClick={onOpenContact} // ⬅️ open modal here
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg font-medium"
          >
            {t(section.cta.label, lang)}
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      )}
    </>
  );
}