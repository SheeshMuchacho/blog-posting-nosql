"use client";

import AnimatedCard from "@/components/ui/AnimatedCard"; 

export const MissionVision = () => {
  return (
    <section className="max-container padding-container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <AnimatedCard 
          style={1}
          title="Our Vision"
          description="To be the leading digital agency known for creating exceptional experiences that drive innovation and transform businesses across all industries."
        />
        
        <AnimatedCard 
          style={2}
          title="Our Mission"
          description="Our mission is to deliver exceptional digital solutions that drive growth and success for our clients."
        />

        <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src="/path-to-your-image.jpg"
            alt="Vision and Mission Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
