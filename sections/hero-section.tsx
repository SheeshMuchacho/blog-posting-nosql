'use client';

import { useState } from 'react';
import Image from 'next/image';
import cogImage from '@/public/gen.png';
import cylinder from '@/public/cylinder.png';
import noodle from '@/public/noodle.png';
import Button from '@/components/Button';
import { AuroraText } from '@/components/AuroraText';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-8 pb-20 md:pt-6 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#ffffff_100%)] overflow-x-clip">
      <div className="padding-container max-w-screen-xl mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px] md:mr-8">
            <div className="text-sm inline-flex border border-black/20 px-3 py-1 rounded-lg tracking-tight">
              Empower your business
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-6">
              Exceptional <AuroraText className="inline-block pr-[2px]">Solutions</AuroraText> for your Business
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              From data to delivery, we provide a seamless, all-in-one marketing solution tailored to meet every aspect of your business's growth strategy.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <Button type="button" title="Explore Solutions" className="btn btn-primary" />
              <Button type="button" title="Learn more" className="btn btn-outline-white" icon="/icons/arrow-right.svg" />
            </div>
          </div>

          <div
            className="md:h-[648px] md:flex-1 relative mt-8 md:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={cogImage}
              alt="Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinder}
              alt="cylinder"
              width={220}
              height={220}
              className={`hidden md:block -top-8 -left-32 md:absolute animate-float transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}
            />
            <Image
              src={noodle}
              alt="noodle"
              width={220}
              className={`hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] animate-slow-rotate transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
