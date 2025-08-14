"use client";

import avatar1 from "@/public/avatar/avatar-1.png";
import avatar2 from "@/public/avatar/avatar-2.png";
import avatar3 from "@/public/avatar/avatar-3.png";
import avatar4 from "@/public/avatar/avatar-4.png";
import avatar5 from "@/public/avatar/avatar-5.png";
import avatar6 from "@/public/avatar/avatar-6.png";
import avatar7 from "@/public/avatar/avatar-7.png";
import avatar8 from "@/public/avatar/avatar-8.png";
import avatar9 from "@/public/avatar/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';

const testimonials = [
  { text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", imageSrc: avatar1.src, name: "Jamie Rivera", username: "@jamietechguru00" },
  { text: "Our team's productivity has skyrocketed since we started using this tool. ", imageSrc: avatar2.src, name: "Josh Smith", username: "@jjsmith" },
  { text: "This app has completely transformed how I manage my projects and deadlines.", imageSrc: avatar3.src, name: "Morgan Lee", username: "@morganleewhiz" },
  { text: "I was amazed at how quickly we were able to integrate this app into our workflow.", imageSrc: avatar4.src, name: "Casey Jordan", username: "@caseyj" },
  { text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", imageSrc: avatar5.src, name: "Taylor Kim", username: "@taylorkimm" },
  { text: "The customizability and integration capabilities of this app are top-notch.", imageSrc: avatar6.src, name: "Riley Smith", username: "@rileysmith1" },
  { text: "Adopting this app for our team has streamlined our project management and improved communication across the board.", imageSrc: avatar7.src, name: "Jordan Patels", username: "@jpatelsdesign" },
  { text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.", imageSrc: avatar8.src, name: "Sam Dawson", username: "@dawsontechtips" },
  { text: "Its user-friendly interface and robust features support our diverse needs.", imageSrc: avatar9.src, name: "Casey Harper", username: "@casey09" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ text, imageSrc, name, username }: Testimonial) {
  return (
    <div className="p-10 border border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full bg-white/60 backdrop-blur-md">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 text-left">{name}</div>
          <div className="leading-5 tracking-tight text-left text-gray-400">{username}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  items,
  className,
  duration = 30,
  reverse = false,
  height = "h-[460px]",
}: {
  items: Testimonial[];
  className?: string;
  duration?: number;
  reverse?: boolean;
  height?: string;
}) {
  const repeated = [...items, ...items];  // This is to create the infinite loop effect.

  return (
    <div
      className={twMerge(
        "relative overflow-hidden will-change-transform",
        height,
        "[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: reverse ? ["0%", "-30%"] : ["-30%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity, // Ensures infinite loop
          repeatType: "loop", // Ensures it loops smoothly without glitches
        }}
      >
        {repeated.map((item, idx) => (
          <div
            key={`${item.username}-${idx}`}
            aria-hidden={idx >= items.length ? true : undefined}
          >
            <TestimonialCard {...item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const Testimonials = () => {
  return (
    <section className="relative bg-white overflow-x-clip py-10">
      <div
        aria-hidden="true"
        className="
         absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_200%)]
        "
      />

      {/* content */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
          What our clients say
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto pb-5">
          Dive into the real stories of our clients and see how our tailored B2B email marketing solutions have transformed their outreach and engagement. Uncover why leading businesses trust us to elevate their strategies.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <MarqueeColumn items={firstColumn} duration={22} />
          <MarqueeColumn items={secondColumn} className="hidden md:block" duration={26} reverse />
          <MarqueeColumn items={thirdColumn} className="hidden lg:block" duration={24} />
        </div>
      </div>
    </section>
  );
};


