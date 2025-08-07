'use client'

import { useState, useRef, useEffect } from "react";
import Button from "@/components/Button";
import { ArrowRight, Target, BarChart3, Globe } from "lucide-react";

type SpotlightCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const SpotlightCard = ({ icon, title, description, index }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (!divRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl p-8 overflow-hidden border border-black/10 bg-white shadow-md group transition-all duration-300 ${
        isFocused ? "shadow-xl" : ""
      }`}
      style={{ height: "100%" }}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="flex items-center text-blue-600 font-medium group">
          Learn more
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Squares Background Component
const SquaresBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -inset-x-40 inset-y-0">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[size:40px_40px] bg-grid-gray-900/[0.8]" />
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "ABM",
      description: "Account-Based Marketing strategies to target high-value accounts with personalized campaigns and measurable results."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Lead Generation",
      description: "Comprehensive lead generation solutions to identify, nurture, and convert qualified prospects into loyal customers."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Demand Generation",
      description: "End-to-end demand generation programs to increase brand awareness and drive qualified interest in your products."
    }
  ];

  return (
    <section className="py-20 bg-[radial-gradient(ellipse_140%_10%_at_top_left,#183EC2,#ffffff_100%)] overflow-hidden relative">
      {/* Squares Background */}
      <SquaresBackground />
      
      <div className="padding-container max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm inline-flex border border-black/20 px-3 py-1 rounded-lg tracking-tight mb-4 bg-white/80 backdrop-blur-sm">Our Services</div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            Excellent Solutions That Drive Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We deliver data-driven marketing strategies that connect you with your ideal customers and accelerate business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 flex justify-center">
          <Button
            type="button"
            title="Explore All Services"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-blue-300/50"
          />
        </div>
      </div>
      
      {/* Add this in your global CSS */}
      <style jsx global>{`
        .bg-grid-gray-900 {
          background-image: linear-gradient(to right, rgb(17 24 39 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(17 24 39 / 0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}