'use client'

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Globe2, Target } from "lucide-react";
import { REACH_DATA, REACH_STATS } from "@/constants";

type RegionCardProps = {
  region: string;
  count: string;
  countNumber: number;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  index: number;
};

const RegionCard = ({ region, count, countNumber, icon, color, bgColor, description, index }: RegionCardProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2500;
      const steps = 80;
      const stepValue = countNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= countNumber) {
          setDisplayCount(countNumber);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, countNumber]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + 'K';
    }
    return num.toString();
  };

  return (
    <div
      ref={cardRef}
      className={`group relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl hover:border-slate-600/70 transition-all duration-700 transform hover:-translate-y-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gradient glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-3xl`} />
      
      <div className="relative z-10">
        {/* Header with icon and action */}
        <div className="flex items-start justify-between mb-6">
          <div className={`${bgColor} p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-slate-600/20`}>
            {icon}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5 text-slate-400" />
          </div>
        </div>
        
        {/* Main content */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
            {region}
          </h3>
          <p className="text-slate-400 text-sm font-medium">{description}</p>
        </div>
        
        {/* Counter */}
        <div className="mb-6">
          <div className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {formatNumber(displayCount)}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="w-full bg-slate-700/50 rounded-full h-1 overflow-hidden">
          <div
            className={`bg-gradient-to-r ${color} h-1 rounded-full transition-all duration-3000 ease-out shadow-sm`}
            style={{
              width: isVisible ? `${Math.min((countNumber / 11700000) * 100, 100)}%` : '0%',
              transitionDelay: `${index * 150 + 500}ms`
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Modern geometric background
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large geometric shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${10 + (i * 12)}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default function OurReachSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative">
      {/* Background Effects */}
      <GeometricBackground />
      
      <div className="padding-container max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-slate-700/50 px-4 py-2 rounded-2xl mb-6 bg-slate-800/50 backdrop-blur-sm">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300 font-medium">Global Network</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Global</span> Reach
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connecting businesses across <span className="text-emerald-400 font-bold">{REACH_STATS.totalCountries}+ countries</span> with 
            our network of <span className="text-blue-400 font-bold">{(REACH_STATS.totalContacts / 1000000).toFixed(1)}M+ verified contacts</span> 
            spanning {REACH_STATS.totalRegions} key regions worldwide.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { label: "Total Reach", value: `${(REACH_STATS.totalContacts / 1000000).toFixed(1)}M+`, icon: <Target className="w-5 h-5" />, color: "from-blue-400 to-cyan-400" },
            { label: "Active Regions", value: REACH_STATS.totalRegions.toString(), icon: <Globe2 className="w-5 h-5" />, color: "from-purple-400 to-pink-400" },
            { label: "Countries", value: `${REACH_STATS.totalCountries}+`, icon: <ArrowUpRight className="w-5 h-5" />, color: "from-emerald-400 to-green-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 group hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                  {stat.icon}
                </div>
                <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {REACH_DATA.map((region, index) => (
            <RegionCard 
                  key={index}
                  region={region.region}
                  count={region.count}
                  countNumber={region.countNumber}
                  color={region.color}
                  bgColor={region.bgColor}
                  description={region.description}
                  index={index} icon={undefined}            />
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.7; }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}