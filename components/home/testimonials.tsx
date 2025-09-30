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
import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

const HEADING: LStr = {
  en: "What our clients say",
  ja: "お客様の声",
  ko: "고객들의 이야기",
};

const INTRO: LStr = {
  en: "Dive into the real stories of our clients and see how our tailored B2B email marketing solutions have transformed their outreach and engagement. Uncover why leading businesses trust us to elevate their strategies.",
  ja: "お客様事例をご覧ください。私たちのB2Bメールマーケティングソリューションが、エンゲージメントをどのように変革したのかご紹介します。多くの企業が当社を信頼する理由はここにあります。",
  ko: "고객들의 실제 스토리를 통해 당사의 맞춤형 B2B 이메일 마케팅 솔루션이 어떻게 도달과 참여를 변화시켰는지 확인해 보세요. 선도 기업들이 전략 강화를 위해 우리를 신뢰하는 이유를 만나보세요.",
};

const testimonials = [
  {
    text: {
      en: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      ja: "常に新しいツールを探しているデザイナーとして、Framer.com はすぐに私の心を掴みました。",
      ko: "혁신적인 도구를 늘 찾는 디자이너로서 Framer.com은 단번에 시선을 사로잡았습니다.",
    } as LStr,
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: {
      en: "Our team's productivity has skyrocketed since we started using this tool.",
      ja: "このツールを使い始めてから、チームの生産性が飛躍的に向上しました。",
      ko: "이 도구를 사용한 이후 우리 팀의 생산성이 급상승했습니다.",
    } as LStr,
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: {
      en: "This app has completely transformed how I manage my projects and deadlines.",
      ja: "このアプリでプロジェクトと期限管理が一つになりました。",
      ko: "이 앱은 프로젝트와 마감일 관리를 완전히 바꿔 놓았습니다.",
    } as LStr,
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: {
      en: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      ja: "このアプリをワークフローに素早く統合できたことに驚きました。",
      ko: "이 앱을 워크플로에 매우 빠르게 통합할 수 있어 놀랐습니다.",
    } as LStr,
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: {
      en: "Planning and executing events has never been easier. Nothing slips through the cracks anymore.",
      ja: "イベントの計画と実行がこれまでになく簡単に。不足、抜け漏れがなくなりました。",
      ko: "이벤트 기획과 실행이 그 어느 때보다 쉬워졌습니다. 누락이 사라졌어요.",
    } as LStr,
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: {
      en: "The customizability and integration capabilities of this app are top-notch.",
      ja: "このアプリのカスタマイズ性と連携機能は一級品です。",
      ko: "이 앱의 커스터마이즈와 연동 기능은 최상급입니다.",
    } as LStr,
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: {
      en: "Adopting this app has streamlined our project management and improved communication across the board.",
      ja: "このアプリの導入でプロジェクト管理が効率化され、コミュニケーションも全体的に改善されました。",
      ko: "이 앱을 도입하면서 프로젝트 관리가 간소화되고 전반적인 커뮤니케이션이 개선되었습니다.",
    } as LStr,
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: {
      en: "We can easily assign tasks, track progress, and manage documents all in one place.",
      ja: "タスクの割り当て、進捗の追跡、ドキュメント管理を一つの場所で簡単に行えます。",
      ko: "작업 할당, 진행 추적, 문서 관리를 한곳에서 손쉽게 할 수 있습니다.",
    } as LStr,
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: {
      en: "Its user-friendly interface and robust features support our diverse needs.",
      ja: "使いやすいインターフェースと強力な機能で、さまざまなニーズに対応します。",
      ko: "사용하기 쉬운 인터페이스와 강력한 기능이 다양한 요구를 지원합니다.",
    } as LStr,
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

type Testimonial = {
  text: LStr;
  imageSrc: string;
  name: string;
  username: string;
};

function TestimonialCard({ text, imageSrc, name, username }: { text: string; imageSrc: string; name: string; username: string }) {
  return (
    <div className="p-10 border border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full bg-white/60 backdrop-blur-md">
      <div className="whitespace-pre-line">{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
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
  // repeat items for infinite loop
  const repeated = [...items, ...items];

  const { lang } = useLanguage();

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
        animate={{ y: reverse ? ["0%", "-30%"] : ["-30%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {repeated.map((item, idx) => (
          <div key={`${item.username}-${idx}`} aria-hidden={idx >= items.length ? true : undefined}>
            <TestimonialCard
              text={t(item.text, lang)}
              imageSrc={item.imageSrc}
              name={item.name}
              username={item.username}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const Testimonials = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative bg-white overflow-x-clip py-10">
      <div
        aria-hidden="true"
        className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_200%)]"
      />

      {/* content */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#010D3E] to-blue-800 bg-clip-text text-transparent">
          {t(HEADING, lang)}
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto pb-5 whitespace-pre-line">
          {t(INTRO, lang)}
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <MarqueeColumn items={firstColumn as Testimonial[]} duration={22} />
          <MarqueeColumn items={secondColumn as Testimonial[]} className="hidden md:block" duration={26} reverse />
          <MarqueeColumn items={thirdColumn as Testimonial[]} className="hidden lg:block" duration={24} />
        </div>
      </div>
    </section>
  );
};
