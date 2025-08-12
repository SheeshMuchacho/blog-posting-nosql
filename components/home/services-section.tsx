'use client';

import Button from '@/components/ui/Button';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Target, BarChart3, Globe } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[radial-gradient(ellipse_200%_10%_at_top_left,#183EC2,#ffffff_100%)] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-x-40 inset-y-0">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[size:40px_40px] bg-grid-gray-900" />
          </div>
        </div>
      </div>

      <div className="padding-container max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            Excellent Solutions That Drive Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We deliver data-driven marketing strategies that connect you with your ideal customers and accelerate business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <SpotlightCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>

        <div className="text-center mt-16 flex justify-center">
          <Button
            type="button"
            title="Explore All Services"
            className="btn bg-blue-500 hover:bg-secondary text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-blue-700/50"
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: 'ABM',
    description:
      'Account-Based Marketing strategies to target high-value accounts with personalized campaigns and measurable results.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: 'Lead Generation',
    description:
      'Comprehensive lead generation solutions to identify, nurture, and convert qualified prospects into loyal customers.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'Demand Generation',
    description:
      'End-to-end demand generation programs to increase brand awareness and drive qualified interest in your products.',
  },
];
