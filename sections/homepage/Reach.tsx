import { cn } from "@/lib/utils";
import { REACH_FEATURES } from "@/constants";
import React, { JSX } from "react";

import {
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconCloud,
  IconApi,
  IconHeadset,
  IconSpeedboat,
  IconUsers,
} from "@tabler/icons-react";

export function Reach() {
  const getReachIconComponent = (iconName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      WebDevelopment: <IconCode size={24} />,
      MobileApp: <IconDeviceMobile size={24} />,
      Design: <IconPalette size={24} />,
      Cloud: <IconCloud size={24} />,
      Api: <IconApi size={24} />,
      Support: <IconHeadset size={24} />,
      Performance: <IconSpeedboat size={24} />,
      Consultation: <IconUsers size={24} />,
    };

    return iconMap[iconName] || <IconCode size={24} />;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">Our Reach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {REACH_FEATURES.map((feature, index) => (
            <ReachFeature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={getReachIconComponent(feature.icon)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ReachFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ReachFeature = ({
  title,
  description,
  icon,
  index,
}: ReachFeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-neutral-200 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-neutral-200",
        index < 4 && "lg:border-b border-neutral-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
