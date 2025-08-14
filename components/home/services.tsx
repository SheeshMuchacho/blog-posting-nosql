'use client';

import Button from '@/components/ui/Button';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Target, BarChart3, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {

  const containerV = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const, when: 'beforeChildren', staggerChildren: 0.12 } },
  };

  const cardV = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  };

  return (
    <section className="relative py-12 overflow-hidden h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_160%)]">
      <motion.div
        className="padding-container max-w-screen-xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerV}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            Excellent Solutions That Drive Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We deliver data-driven marketing strategies that connect you with your ideal customers and accelerate business growth.
          </p>
        </div>

        <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          {services.map((s) => (
            <motion.li
              key={s.title}
              variants={cardV}
              className="will-change-transform"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* If SpotlightCard accepts className, you can also add hover styles inside it */}
              <SpotlightCard icon={s.icon} title={s.title} description={s.description} />
            </motion.li>
          ))}
        </motion.ul>

        <div className="text-center mt-16 flex justify-center">
          <Button
            type="button"
            title="Explore All Services"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none 
              focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
              bg-blue-500 text-white shadow hover:bg-secondary px-8 py-3 max-w-52 whitespace-pre 
              group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out 
              hover:ring-2 hover:ring-secondary hover:ring-offset-1 btn-shine"
          />
        </div>
      </motion.div>
    </section>
  );
}

const services = [
  { icon: <Target className="w-8 h-8 text-blue-600" />, title: 'ABM', description: 'Account-Based Marketing strategies to target high-value accounts with personalized campaigns and measurable results.' },
  { icon: <BarChart3 className="w-8 h-8 text-blue-600" />, title: 'Lead Generation', description: 'Comprehensive lead generation solutions to identify, nurture, and convert qualified prospects into loyal customers.' },
  { icon: <Globe className="w-8 h-8 text-blue-600" />, title: 'Demand Generation', description: 'End-to-end demand generation programs to increase brand awareness and drive qualified interest in your products.' },
];
