'use client';

import { useRef, useState } from 'react';

export type SpotlightCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function SpotlightCard({
  icon,
  title,
  description,
  className = '',
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = divRef.current;
    if (!div) return;
    const rect = div.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl p-8 overflow-hidden border border-black/10 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${className}`}
      style={{ height: '100%' }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.12), transparent 40%)`,
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
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
