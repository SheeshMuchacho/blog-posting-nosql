"use client";

import { useState } from "react";
import Image from "next/image";
import cogImage from "@/public/gen.gif";
import Button from "@/components/ui/Button";
import { AuroraText } from "@/components/ui/AuroraText";
import Link from "next/link";

import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

export default function HeroSection() {
  const { lang } = useLanguage();

  const BADGE: LStr = {
    en: "Empower your business",
    ja: "ビジネスを強化する",
    ko: "비즈니스를 강화하세요",
  };

  const HEADING_PART1: LStr = {
    en: "Exceptional",
    ja: "卓越した",
    ko: "뛰어난",
  };

  const HEADING_PART2: LStr = {
    en: "Solutions",
    ja: "支援",
    ko: "솔루션",
  };

  const HEADING_TAIL: LStr = {
    en: "for your Business",
    ja: "をあなたの\nビジネスに",
    ko: "을(를) 위한",
  };

  const DESCRIPTION: LStr = {
    en: "From data to delivery, we provide a seamless, all-in-one marketing solution tailored to meet every aspect of your business's growth strategy.",
    ja: "データからデリバリーまで、ビジネスの成長戦略のあらゆる側面に対応するシームレスなオールインワンのマーケティングソリューションを提供します。",
    ko: "데이터에서 실행까지, 비즈니스 성장 전략의 모든 측면을 충족하는 원스톱 통합 마케팅 솔루션을 제공합니다.",
  };

  const CTA_PRIMARY: LStr = { en: "Explore Solutions", ja: "ソリューションを見る", ko: "솔루션 살펴보기" };
  const CTA_SECONDARY: LStr = { en: "Learn more", ja: "さらに詳しく", ko: "자세히 알아보기" };

  return (
  <section className="flex items-center bg-white bg-[radial-gradient(125%_125%_at_50%_70%,#fff_40%,#0022EE_100%)] bg-fixed overflow-x-clip lg:pt-20">
    <div className="padding-container max-w-screen-xl mx-auto w-full">
      <div className="md:flex items-center justify-between">
          <div className="md:w-[478px] md:mr-8">
            <div className="text-sm inline-flex border border-black/20 px-3 py-1 rounded-lg tracking-tight">
              {t(BADGE, lang)}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-6 whitespace-pre-line">
              {t(HEADING_PART1, lang)}{" "}
              <AuroraText className="inline-block pr-[2px]">{t(HEADING_PART2, lang)}</AuroraText>{" "}
              {t(HEADING_TAIL, lang)}
            </h1>

            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              {t(DESCRIPTION, lang)}
            </p>

            <div className="flex gap-2 items-center mt-[30px]">
              <Button type="button" title={t(CTA_PRIMARY, lang)} className="btn btn-primary" />
              <Link href="/about">
                <Button
                  type="button"
                  title={t(CTA_SECONDARY, lang)}
                  className="btn btn-white"
                  icon="/icons/arrow-right.svg"
                />
              </Link>
            </div>
          </div>

          <div className="md:h-[648px] md:flex-1 relative z-20 mt-8 md:mt-0">
            <Image
              src={cogImage}
              alt="Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
  