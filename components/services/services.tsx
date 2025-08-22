"use client";

import { Target, BarChart3, Mail, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import contentsynd from "@/public/services/contentsynd.png";
import displayad from "@/public/services/displayad.png";
import leadgen from "@/public/services/leadgen.png";
import webinar from "@/public/services/webinar.png";
import intentdata from "@/public/services/intentdata.png";
import demandgen from "@/public/services/demandgen.png";
import abm from "@/public/services/abm.png";
import type { Variants, TargetAndTransition } from "framer-motion";
import Link from "next/link";

export const ServicesSection = () => {
  const solutions = [
    {
      id: 1,
      slug: "content-syndication", 
      image: contentsynd,
      icon: Target,
      title: "Content Syndication",
      description:
        "Is your creative content really working? Acumen Intelligence believes in authentic communication, increasing your revenue and generating interest in your products and services.",
      buttonText: "View Service",
    },
    {
      id: 2,
      slug: "display-advertising", 
      image: displayad,
      icon: BarChart3,
      title: "Display Advertising",
      description:
        "Increase your brand presence with Acumen Intelligence display advertising. From eye-catching banners to dynamic ad placements, our strategies make your message stand out.",
      buttonText: "View Service",
    },
    {
      id: 3,
      slug: "lead-generation", 
      image: leadgen,
      icon: Mail,
      title: "Lead Generation",
      description:
        "Increase your prospects' buying intent with Acumen Intelligence Lead Generation. Discover the power of sophisticated language and targeted outreach.",
      buttonText: "View Service",
    },
    {
      id: 4,
      slug: "webinar", 
      image: webinar,
      icon: Users,
      title: "Webinars and Events",
      description:
        "Webinars are a great visual companion for your business. They allow for collaboration and storytelling, no matter how far apart you are.",
      buttonText: "View Service",
    },
    {
      id: 5,
      slug: "intent-data", 
      image: intentdata,
      icon: Zap,
      title: "Intent Data",
      description:
        "Millions of intent data points give you a clearer picture of what buyers are ready to buy, helping you generate higher quality leads.",
      buttonText: "View Service",
    },
    {
      id: 6,
      slug: "demand-generation", 
      image: demandgen,
      icon: Shield,
      title: "Demand Generation",
      description:
        "Acumen Intelligence goes above and beyond to create the demand that fuels growth. Our segmented approach ensures your message resonates and influences decisions.",
      buttonText: "View Service",
    },
    {
      id: 7,
      slug: "abm", 
      image: abm,
      icon: Shield,
      title: "ABM",
      description:
        "Leverage our best-in-class intent database to power your ABM and confidently craft messages for expanded targeting and seamless integrations.",
      buttonText: "View Service",
    },
  ];

  const cols = 3; 

  const cardV: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i: number = 0): TargetAndTransition => {
      const delay = (i % 3) * 0.1; 
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay,
        },
      };
    },
  };


  return (
    <section className="relative pt-7 pb-12 overflow-hidden h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_200%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive B2B email marketing solutions designed to drive
            qualified leads, nurture prospects, and accelerate your sales
            pipeline. Our data-driven approach ensures maximum ROI for your
            marketing investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => {
            const isAboveTheFold = i < cols;

            return (
              <motion.div
                key={solution.id}
                className="h-full"
                variants={cardV}
                initial="hidden"
                {...(isAboveTheFold
                  ? { animate: "show" } 
                  : {
                      whileInView: "show",
                      viewport: { once: true, amount: 0.2, margin: "-5% 0px -5% 0px" },
                    })}
                custom={i}
                style={{ willChange: "transform, opacity" }}
              >
              <Link href={`/services/${solution.slug}`} className="block h-full">
                <ServiceCard
                  image={solution.image.src}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  buttonText={solution.buttonText}
                />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
