"use client";

import { Target, BarChart3, Mail, Users, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ui/ServiceCard';
import contentsynd from '@/public/services/contentsynd.jpg';
import displayad from '@/public/services/displayad.jpg';
import leadgen from '@/public/services/leadgen.jpg';
import webinar from '@/public/services/webinar.jpg';
import intentdata from '@/public/services/intentdata.jpg';
import demandgen from '@/public/services/demandgen.jpg';
import abm from '@/public/services/abm.jpg';

export const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      image: contentsynd,
      icon: Target,
      title: "Content Syndication",
      description: "Is your creative content really working? Acumen Intelligence believes in authentic communication, increasing your revenue and generating interest in your products and services.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-1"
    },
    {
      id: 2,
      image: displayad,
      icon: BarChart3,
      title: "Display Advertising",
      description: "Increase your brand presence with Acumen Intelligence display advertising. Acumen Intelligence transforms your marketing efforts into compelling visual experiences that reach your target audience. From eye-catching banners to dynamic ad placements, our display advertising strategies will make your message stand out. Harness the power of visual storytelling to attract prospects and convert impressions into leads.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-2" 
    },
    {
      id: 3,
      image: leadgen,
      icon: Mail,
      title: "Lead Generation",
      description: "Are your prospects scattered around the world? Are you spending money on phone calls? Increase your prospects' buying intent with Acumen Intelligence Lead Generation. Enter the world of Acumen Intelligence Email Showcase and discover the power of sophisticated language.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-1"
    },
    {
      id: 4,
      image: webinar,
      icon: Users,
      title: "Webinars and Events",
      description: "Webinars are a great visual companion for your business. They allow for in-person collaboration and storytelling, no matter how far apart you are.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-1"
    },
    {
      id: 5,
      image: intentdata,
      icon: Zap,
      title: "Intent Data",
      description: "Manage your business and generate higher levels of leads wherever you are. All you need is in-house data and best-in-class technology at the right time. Millions of intent data points give you a clearer picture of what buyers are ready to buy.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-1"
    },
    {
      id: 6,
      image: demandgen,
      icon: Shield,
      title: "Demand Generation",
      description: "When it comes to demand generation, Acumen Intelligence is your strategic partner. We go above and beyond to create the demand that fuels growth. Are your prospects scattered around the world? Is cold calling costly? Acumen Intelligence's highly segmented lead generation approach can help you overcome these challenges. Enter the world of email marketing with Acumen Intelligence and unleash the persuasive power of the written word. Create messages that resonate with your readers and influence their purchasing decisions.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-2" 
    },
    {
      id: 7,
      image: abm,
      icon: Shield,
      title: "ABM",
      description: "Leverage our best-in-class intent database to power your ABM and confidently craft messages for expanded targeting, seamless integrations, and accout-based marketing strategies.",
      buttonText: "View Service",
      gridClass: "md:col-span-1 lg:col-span-1" 
    }
  ];

  const containerV = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const, when: 'beforeChildren', staggerChildren: 0.12 } },
  };

  const cardV = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  };

 return (
    <section className="relative pt-7 pb-12 overflow-hidden h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_200%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive B2B email marketing solutions designed to drive qualified leads, nurture prospects, and accelerate your sales pipeline. Our data-driven approach ensures maximum ROI for your marketing investment.
          </p>
        </div>

        {/* No motion on the grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              className={`${solution.gridClass} min-h-[300px]`}
              variants={cardV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }} // triggers per card as you scroll
              custom={i}
              style={{ willChange: "transform" }}
            >
              <div className="h-full">
                <ServiceCard
                  image={solution.image.src}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  buttonText={solution.buttonText}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
