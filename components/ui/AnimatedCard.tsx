"use client";

type CardConfig = {
  color: string; 
  animation: string;
  duration: string;
};

type AnimatedCardProps = {
  title: string;
  description: string;
  style: 1; 
  className?: string;
};

const AnimatedCard = ({ title, description, style, className }: AnimatedCardProps) => {
  const cardConfig: Record<1, CardConfig> = {
    1: {
      color: "hsl(220, 75%, 25%)", // Dark Blue
      animation: "reverse",
      duration: "7s"
    },
  };

  const config = cardConfig[style];

  return (
    <div className={`relative p-3 rounded-lg overflow-visible z-10 ${className}`}>
      <style jsx>{`

        .card-${style}::after {
          position: absolute;
          width: 90%;
          height: 90%;
          z-index: -2;
          border-radius: 8px;
          background-color: #144272;
          filter: drop-shadow(0px 0px 2px ${config.color});
          content: "";
          animation: hue-rotate-${style} ${config.duration} linear infinite ${config.animation};
        }
      `}</style>

      <div className={`card-${style} absolute inset-0`} />

      <div className="relative bg-gray-100 rounded-xl p-8 z-10">
        <h2 className="text-black font-bold text-4xl leading-tight capitalize mb-5">
          {title}
        </h2>

        <div className="pl-7 border-l border-black mb-6 text-justify overflow-hidden line-clamp-5">
          {description}
        </div>

      </div>
    </div>
  );
};

export default AnimatedCard;
