"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ExpandableCardProps {
  title: string;
  content: string;
  subtitle?: string;
  index?: number;
  className?: string;
  defaultExpanded?: boolean;
  onHeightChange?: (height: number) => void;
  targetHeight?: number;
  icon?: React.ReactNode;
}

export function ExpandableCard({ 
  title, 
  content, 
  subtitle, 
  index = 0,
  className = "",
  defaultExpanded = true,
  onHeightChange,
  targetHeight,
  icon
}: ExpandableCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const cardStyles = [
    "from-[#144272]/10 to-[#2c74b3]/5",
    "from-[#2c74b3]/10 to-[#144272]/5", 
    "from-[#144272]/10 to-[#2c74b3]/6"
  ];

  const cardStyle = cardStyles[index % cardStyles.length];

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      onHeightChange?.(height);
    }
  }, [content, onHeightChange]);

  return (
    <motion.div
      layout
      className={`relative bg-white rounded-2xl overflow-hidden border border-gray-200/50 h-full flex flex-col ${className}`}
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
      
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-[#144272] to-[#2c74b3] rounded-full opacity-60"
      />

      <div className="relative p-6 flex-shrink-0">
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
          
          {/* Custom icon in top right */}
          {icon && (
            <motion.div
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#144272]/10 to-[#2c74b3]/10 text-[#2c74b3]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Subtle separator */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#2c74b3]/20 to-transparent" />
        
        <div 
          ref={contentRef}
          className="px-6 pb-12"
        >
          <div className="pt-3">
            <p className="text-gray-700 leading-loose text-base">
              {content}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}