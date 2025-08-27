"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  content: string;
  subtitle?: string;
  index?: number;
  className?: string;
  defaultExpanded?: boolean;
}

export function ExpandableCard({ 
  title, 
  content, 
  subtitle, 
  index = 0,
  className = "",
  defaultExpanded = true
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = [
    "from-[#144272]/10 to-[#2c74b3]/5",
    "from-[#2c74b3]/10 to-[#144272]/5", 
    "from-[#144272]/10 to-[#2c74b3]/6"
  ];

  const cardStyle = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      layout
      className={`relative bg-white rounded-2xl overflow-hidden border border-gray-200/50 ${className}`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? "0 20px 20px rgba(20, 66, 114, 0.15), 0 8px 16px rgba(44, 116, 179, 0.1)" 
          : "0 8px 25px rgba(20, 66, 114, 0.08), 0 3px 8px rgba(44, 116, 179, 0.06)"
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cardStyle} opacity-40`} />
      
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: isHovered 
            ? "linear-gradient(45deg, transparent, rgba(44, 116, 179, 0.1), transparent)"
            : "transparent"
        }}
        transition={{ duration: 0.3 }}
      />
      
      {isExpanded && (
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-[#144272] to-[#2c74b3] rounded-full opacity-60"
        />
      )}

      <motion.div
        className="relative p-6 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            {/* Card number indicator */}
            <motion.div 
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#144272] to-[#2c74b3] text-white text-sm font-bold mb-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.div>
            
            <h3 className="text-lg font-bold text-[#144272] leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[#2c74b3] text-sm font-medium">
                {subtitle}
              </p>
            )}
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#144272]/10 to-[#2c74b3]/10 group-hover:from-[#144272]/20 group-hover:to-[#2c74b3]/20 transition-colors duration-300"
          >
            <ChevronDown className="w-5 h-5 text-[#2c74b3]" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden relative"
          >
            {/* Subtle separator */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#2c74b3]/20 to-transparent" />
            
            <div className="px-6 pb-12">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-3"
              >
                <p className="text-gray-700 leading-loose text-base">
                  {content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}