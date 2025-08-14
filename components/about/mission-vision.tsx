"use client";

import AnimatedCard from "@/components/ui/AnimatedCard"; 

export const MissionVisionSection = () => {
  return (
    <section className="max-container padding-container py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatedCard 
          style={1}
          title="Our Vision"
          description="To be the global leader in B2B demand generation, empowering businesses with data-driven strategies that accelerate growth and connect them to decision makers."
        />
        
        <AnimatedCard 
          style={1}
          title="Our Mission"
          description="To deliver unmatched lead generation through innovative marketing automation, precision targeting, and strategic partnerships that drive client success across every industry worldwide."
        />

        <AnimatedCard 
        style={1}
        title="Our Values"
        description="We prioritize trust, innovation, and measurable results, building lasting partnerships through transparent communication and a relentless focus on client success."
        />

      </div>
    </section>
  );
};
