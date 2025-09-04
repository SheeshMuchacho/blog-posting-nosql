"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

import { useLanguage } from "@/app/i18n/LanguageProvider";
import { t, type LStr } from "@/lib/i18n";

const servicesItems = NAV_LINKS.find((link) => link.key === "services")?.dropdown || [];

const Footer = () => {
  const { lang } = useLanguage();

  const BLURB: LStr = {
    en: "Acumen Intelligence gives a new meaning to the traditional marketing funnel. Our dynamic executions help B2B marketers generate and manage leads and drive sales.",
    ja: "Acumen Intelligence は従来のマーケティングファネルに新たな意味を与えます。ダイナミックな施策で、B2Bマーケターのリード創出・管理と売上拡大を支援します。",
    ko: "Acumen Intelligence는 전통적인 마케팅 퍼널에 새로운 의미를 부여합니다. 역동적인 실행으로 B2B 마케터가 리드를 생성·관리하고 매출을 견인하도록 돕습니다.",
  };

  const OUR_SERVICES: LStr = { en: "Our Services", ja: "サービス一覧", ko: "서비스" };
  const STAY_CONNECTED: LStr = { en: "Stay Connected", ja: "最新情報を受け取る", ko: "소식을 받아보세요" };

  const NEWSLETTER_DESC: LStr = {
    en: "Subscribe to our newsletter and get the latest updates, insights, and exclusive offers delivered straight to your inbox.",
    ja: "ニュースレターに登録して、最新情報やインサイト、限定オファーをメールで受け取りましょう。",
    ko: "뉴스레터를 구독하고 최신 소식, 인사이트, 독점 혜택을 이메일로 받아보세요.",
  };

  const PLACEHOLDER_EMAIL: LStr = {
    en: "Enter your email address",
    ja: "メールアドレスを入力",
    ko: "이메일 주소를 입력하세요",
  };

  const BTN_SUBSCRIBE: LStr = { en: "Subscribe", ja: "登録する", ko: "구독하기" };

  const ERR_REQUIRED: LStr = { en: "Email is required", ja: "メールアドレスは必須です", ko: "이메일은 필수입니다" };
  const ERR_INVALID: LStr = { en: "Please enter a valid email", ja: "有効なメールアドレスを入力してください", ko: "유효한 이메일을 입력해주세요" };

  const SUB_SUCCESS: LStr = {
    en: "Thank you for subscribing to our newsletter!",
    ja: "ニュースレターのご購読ありがとうございます！",
    ko: "뉴스레터 구독해 주셔서 감사합니다!",
  };

  const COPYRIGHT_PREFIX: LStr = {
    en: "©",
    ja: "©",
    ko: "©",
  };
  const COPYRIGHT_SUFFIX: LStr = {
    en: "Acumen Intelligence. All rights reserved.",
    ja: "Acumen Intelligence. 無断転載を禁じます。",
    ko: "Acumen Intelligence. 판권 소유.",
  };

  const PRIVACY: LStr = { en: "Privacy Policy", ja: "プライバシーポリシー", ko: "개인정보 처리방침" };
  const TERMS: LStr = { en: "Terms of Service", ja: "利用規約", ko: "이용약관" };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const yearRef = useRef(new Date().getFullYear());

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError(t(ERR_REQUIRED, lang));
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(t(ERR_INVALID, lang));
      return;
    }

    setEmailError("");
    setSubscribed(true);
    setEmail("");

    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <>
      <footer className="bg-slate-800 text-white relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 md:h-20"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
          </svg>
        </div>

        <div className="max-container padding-container pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo/logoblueT.png"
                  alt="logo"
                  width={140}
                  height={32}
                  className="object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-slate-300 mb-8 leading-relaxed">{t(BLURB, lang)}</p>

              {/* Social Links */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={t(social.label, lang)}
                    style={{ backgroundColor: social.bg }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={t(social.label, lang)}
                      width={20}
                      height={20}
                      className="transition-colors duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-xl mb-6 text-white relative">
                {t(OUR_SERVICES, lang)}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500"></div>
              </h4>
              <div className="space-y-3">
                {servicesItems.map((service) => (
                  <Link
                    key={service.key}
                    href={service.href}
                    className="block text-slate-300 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 py-1"
                  >
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {t(service.label, lang)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-xl mb-6 text-white relative">
                {t(STAY_CONNECTED, lang)}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500"></div>
              </h4>
              <p className="text-slate-300 mb-6 leading-relaxed">{t(NEWSLETTER_DESC, lang)}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder={t(PLACEHOLDER_EMAIL, lang)}
                      className={`w-full px-6 py-4 rounded-xl bg-slate-700 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-600 transition-all duration-300 pr-32 ${
                        emailError ? "border-red-400 ring-2 ring-red-400" : "border-slate-600 hover:border-slate-500"
                      }`}
                    />
                    <Button
                      type="submit"
                      title={t(BTN_SUBSCRIBE, lang)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-500 text-sm text-black hover:text-white px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                    />
                  </div>
                  {emailError && (
                    <p className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {emailError}
                    </p>
                  )}
                </div>

                {subscribed && (
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 flex items-center animate-fade-in">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-300 font-medium">{t(SUB_SUCCESS, lang)}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700">
          <div className="max-container padding-container py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                {t(COPYRIGHT_PREFIX, lang)} {yearRef.current} {t(COPYRIGHT_SUFFIX, lang)}
              </p>
              <div className="flex gap-8">
                <Link href="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                  {t(PRIVACY, lang)}
                </Link>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                  {t(TERMS, lang)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Footer;
