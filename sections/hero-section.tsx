'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { animate } from 'animejs';
import { ArrowRight } from 'lucide-react';
import cogImage from '@/public/hero4.png';
import { AuroraText } from '@/components/AuroraText';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [activeLine, setActiveLine] = useState(1);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const lines = ['Exceptional', 'Solutions for', 'your business'];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      const currentLine = lines[lineIndex];
      const typedChar = currentLine[charIndex];

      if (lineIndex === 0) setLine1(prev => prev + typedChar);
      if (lineIndex === 1) setLine2(prev => prev + typedChar);
      if (lineIndex === 2) setLine3(prev => prev + typedChar);

      charIndex++;

      if (charIndex < currentLine.length) {
        setTimeout(typeNextChar, 90);
      } else {
        lineIndex++;
        charIndex = 0;
        setActiveLine(lineIndex + 1);
        if (lineIndex < lines.length) {
          setTimeout(typeNextChar, 300);
        } else {
          setTimeout(() => setIsTypingDone(true), 500);
        }
      }
    };

    setTimeout(typeNextChar, 300);
  }, []);

  useEffect(() => {
    if (!isTypingDone) return;

    animate('.hero-fade', {
      x: [{ from: -20, to: 0, ease: 'easeOutQuad', duration: 800 }],
      opacity: { from: 0, to: 1, duration: 800, ease: 'easeOutQuad' },
      filter: { from: 'blur(4px)', to: 'blur(0px)', duration: 800 },
      delay: (_, i) => i * 150,
    });
  }, [isTypingDone]);

  return (
    <section className="relative h-[calc(100vh-64px)] overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#ffffff_100%)]" />
      <div className="absolute inset-0 z-1 pointer-events-none noise-overlay" />

      {/* Content */}
      <div className="container px-6 sm:px-8 lg:px-16 mx-auto relative z-10 h-full flex">
        <div className="flex w-full h-full items-start md:items-center justify-between flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left */}
          <div className="w-full md:flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter whitespace-pre-wrap leading-tight pr-2">
              <span className="block">
                {line1}
                {activeLine === 1 && <span className={`cursor ${isTypingDone ? 'blinking' : 'solid'}`}>|</span>}
              </span>
              <span className="block">
                {line2 && (() => {
                  const [first, ...rest] = line2.split(' ');
                  return (
                    <>
                      <AuroraText className="inline pr-[1px]">{first}</AuroraText>{' '}
                      {rest.join(' ')}
                    </>
                  );
                })()}
                {activeLine === 2 && <span className={`cursor ${isTypingDone ? 'blinking' : 'solid'}`}>|</span>}
              </span>
              <span className="block">
                {line3}
                {activeLine === 3 && <span className={`cursor ${isTypingDone ? 'blinking' : 'solid'}`}>|</span>}
              </span>
            </h1>

            <p className="hero-fade text-base sm:text-lg md:text-xl lg:text-2xl text-[#010D3E] tracking-tight mt-6 md:mt-8 opacity-0 blur-sm translate-x-[-20px]">
              From data to delivery, we provide a seamless, all-in-one marketing solution tailored to meet every aspect of your business's growth strategy.
            </p>

            <div className="hero-fade mt-6 opacity-0 blur-sm translate-x-[-20px]">
              <button
                type="button"
                className="bg-transparent text-white border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition flex items-center gap-2 text-base md:text-lg"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right (shown only from xl and up) */}
          <div className="hidden xl:flex w-[49%] justify-end">
            <Image
              src={cogImage}
              alt="Hero Illustration"
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 0.5px;
          font-weight: 700;
          font-size: 1.05em;
          line-height: 1;
          height: 1em;
          transform: translateX(-1px);
        }

        .solid {
          opacity: 1;
          animation: none;
        }

        .blinking {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .noise-overlay {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          background-repeat: repeat;
          background-size: cover;
          opacity: 0.05;
          z-index: 1;
        }
      `}</style>
    </section>


  );
}
