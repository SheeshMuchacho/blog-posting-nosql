"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "@/lib/service-data";
import { useState, useRef } from "react";
import { ExpandableCard } from "../ui/ExpandableCard";

export function ServiceTemplate({ service }: { service: Service }) {
  return (
    <article className="bg-white">
      {/* Enhanced Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 overflow-hidden"
      >

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight mt-6 bg-gradient-to-r from-[#144272] via-[#2c74b3] to-[#144272] bg-clip-text text-transparent"
        >
          {service.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mt-6 max-w-3xl leading-relaxed"
        >
          {service.description}
        </motion.p>
      </motion.header>

      <div className="space-y-12">
        {service.sections.map((section, idx) => {
          switch (section.type) {
            case "hero":
              return (
                <HeroSection key={idx} section={section} service={service} index={idx} />
              );

            case "cards":
              return (
                <CardsSection key={idx} section={section} index={idx} />
              );

            case "text":
              return (
                <TextSection key={idx} section={section} service={service} index={idx} />
              );
          }
        })}
      </div>
    </article>
  );
}

// Hero Section 
function HeroSection({ section, service, index }: { section: any; service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(44,116,179,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2c74b3]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#144272]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#144272] leading-tight">
              {section.heading}
            </h2>
            <div className="mt-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {section.body}
            </div>
          </motion.div>

          {section.image && (
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#144272]/20 via-transparent to-[#2c74b3]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={typeof section.image === "string" ? section.image : section.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                  priority
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#2c74b3] to-[#144272] rounded-full shadow-lg"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-[#144272] to-[#2c74b3] rounded-full shadow-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

type CardsSectionProps = {
  section: { type: "cards"; heading?: string; items: { title: string; body: string; subtitle?: string }[] };
  index?: number;
};

function CardsSection({ section, index = 0 }: CardsSectionProps & { index?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-6">
        {section.heading && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#144272] via-[#2c74b3] to-[#144272] bg-clip-text text-transparent mb-4">
              {section.heading}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#144272] to-[#2c74b3] mx-auto rounded-full" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {section.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + i * 0.1,
                ease: [0.04, 0.62, 0.23, 0.98]
              }}
              className="group"
            >
              <ExpandableCard
                title={item.title}
                subtitle={item.subtitle}
                content={item.body}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Text Section 
function TextSection({ section, service, index }: { section: any; service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isRightAlign = section.align === "right";

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative to-white overflow-hidden"
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className={`grid gap-12 items-center ${section.image ? "md:grid-cols-2" : ""}`}>
          {isRightAlign ? (
            <>
              {/* Image First (Right Align) */}
              {section.image && (
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="order-2 md:order-1 relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ImageContainer 
                    image={section.image} 
                    alt={service.title} 
                    isHovered={isHovered} 
                  />
                </motion.div>
              )}

              {/* Content Second */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-1 md:order-2"
              >
                <TextContent section={section} />
              </motion.div>
            </>
          ) : (
            <>
              {/* Content First */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TextContent section={section} />
              </motion.div>

              {/* Image Second */}
              {section.image && (
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ImageContainer 
                    image={section.image} 
                    alt={service.title} 
                    isHovered={isHovered} 
                  />
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}

// Reusable Image Container 
function ImageContainer({ image, alt, isHovered }: { image: any; alt: string; isHovered: boolean }) {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#144272]/20 via-transparent to-[#2c74b3]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src={typeof image === "string" ? image : image}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-3 -right-3 w-6 h-6 border-2 border-[#2c74b3] rounded-full"
      />
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#144272] to-[#2c74b3] rounded-full shadow-lg"
      />
    </div>
  );
}

// Reusable Text Content Component
function TextContent({ section }: { section: any }) {
  return (
    <>
      <h3 className="text-3xl sm:text-4xl font-bold text-[#144272] leading-tight mb-6">
        {section.heading}
      </h3>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {section.body}
      </p>

      {section.cta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {section.cta.href ? (
            <Link href={section.cta.href}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-white bg-gradient-to-r from-[#144272] to-[#2c74b3] hover:from-[#2c74b3] hover:to-[#144272] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                {section.cta.label}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 text-white bg-gradient-to-r from-[#144272] to-[#2c74b3] hover:from-[#2c74b3] hover:to-[#144272] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              {section.cta.label}
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          )}
        </motion.div>
      )}
    </>
  );
}