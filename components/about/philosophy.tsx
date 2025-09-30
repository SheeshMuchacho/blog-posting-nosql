"use client";

import { LazyMotion, m, domAnimation, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";
import TiltShineCard from "@/components/ui/SparkleCard";

export default function PhilosophyAndDeliveryEnhanced() {
  const { lang } = useLanguage();
  const reduce = useReducedMotion() ?? false;

  const PHILOSOPHY_HEADING: LStr = {
    en: "THE ACUMEN INTELLIGENCE PHILOSOPHY",
    ja: "ACUMEN INTELLIGENCE の哲学",
    ko: "ACUMEN INTELLIGENCE 철학",
  };

  const PHILOSOPHY_DESCRIPTION: LStr = {
    en: "To provide cost effective solutions at same time building trust, end goal and maximum ROI. Working with you, we at Acumen Intelligence will design an online lead generation strategy that has clear goals and design and can streamline your lead qualification process with our sales lead tracking software.",
    ja: "お客様と協力して、アキュメンインテリジェンスでは、明確な目標をプランし、弊社のリード追跡ソフトウェアでリード適格化プロセスに基づきオンラインリード生成戦略を設計します。",
    ko: "고객과 협력하여, Acumen Intelligence는 명확한 목표와 설계를 가지고 있으며 당사의 영업 리드 추적 소프트웨어로 리드 검증 프로세스를 합리화할 수 있는 온라인 리드 생성 전략을 설계합니다.",
  };

  const DELIVERY_HEADING: LStr = {
    en: "We can Deliver",
    ja: "私たちができること",
    ko: "우리가 제공할 수 있는 것",
  };

  const DELIVERY_DESCRIPTION: LStr = {
    en: "Minimizing cost per lead while maximizing lead quality – that's the objective of Overdrive's ongoing Lead Generation Capture and Lead Quality Optimization services. Because ultimately, a low cost lead is only good for your online marketing campaign if it can be converted into a sale.",
    ja: "リード単価を最小化しながらリード品質を最大化する - これが継続的なリード生成キャプチャとリード最適化サービスの目標です。リードは売上に変換できる場合にのみ有効だからです。",
    ko: "리드당 비용을 최소화하면서 리드 품질을 극대화하는 것 - 이것이 Overdrive의 지속적인 리드 생성 캡처 및 리드 품질 최적화 서비스의 목표입니다. 궁극적으로, 저비용 리드는 판매로 전환될 수 있을 때만 온라인 마케팅 캠페인에 유용하기 때문입니다.",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <LazyMotion features={domAnimation}>
        <div className="padding-container max-w-screen-xl mx-auto">
          {/* Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <TiltShineCard
                src="/philo.jpg"
                alt="Digital brain"
                reduceMotion={reduce}
                ringColors={["white", "white", "white"]}
                sparkleA="white"
                sparkleB="white"
                maxWidth="40rem"
                aspect="5/4"
                sizes="(max-width:1024px) 90vw, 40vw"
              />
            </div>
            <m.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {t(PHILOSOPHY_HEADING, lang)}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {t(PHILOSOPHY_DESCRIPTION, lang)}
              </p>
            </m.div>
          </div>

          {/* Delivery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {t(DELIVERY_HEADING, lang)}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(DELIVERY_DESCRIPTION, lang)}
              </p>
            </m.div>
            <div>
              <TiltShineCard
                src="/deliver.jpg"
                alt="Deliver"
                reduceMotion={reduce}
                ringColors={["white", "white", "white"]}
                sparkleA="white"
                sparkleB="white"
                maxWidth="40rem"
                aspect="5/4"
                sizes="(max-width:1024px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}