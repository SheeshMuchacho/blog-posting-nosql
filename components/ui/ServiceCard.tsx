import { useState, useRef } from 'react';

interface ServiceCardProps {
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function ServiceCard({
  image,
  icon: Icon,
  title,
  description,
  buttonText,
  className = ''
}: ServiceCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for the gradient
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
      className={`bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group ${className}`}
    >
      {/* Blue moving gradient effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.12), transparent 40%)`,
        }}
      />

      {/* Image section */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Icon in the center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-48">
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Card content */}
      <div className="pt-12 pb-6 px-6">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-4 leading-relaxed text-sm">
          {description}
        </p>
        <div className="text-center py-2">
          <button className="flex items-center text-blue-600 font-medium group">
            {buttonText}
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
    </div>
  );
}
