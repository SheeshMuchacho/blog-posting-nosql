
import type { LStr } from "@/lib/i18n";

export interface DropdownItem {
  key: string;
  label: LStr;
  href: string;
}

export interface NavLink {
  key: string;
  label: LStr;
  href: string;
  dropdown?: DropdownItem[];
}

export const NAV_LINKS: NavLink[] = [
  { key: "home", label: { en: "Home", ja: "ホーム", ko: "홈" }, href: "/" },

  {
    key: "services",
    label: { en: "Services", ja: "サービス", ko: "서비스" },
    href: "/services",
    dropdown: [
      {
        key: "content-syndication",
        label: { en: "Content Syndication", ja: "コンテンツ・シンジケーション", ko: "콘텐츠 신디케이션" },
        href: "/services/content-syndication",
      },
      {
        key: "lead-generation",
        label: { en: "Lead Generation", ja: "リード獲得", ko: "리드 생성" },
        href: "/services/lead-generation",
      },
      {
        key: "intent-data",
        label: { en: "Intent Data", ja: "インテントデータ", ko: "인텐트 데이터" },
        href: "/services/intent-data",
      },
      {
        key: "display-advertising",
        label: { en: "Display Advertising", ja: "ディスプレイ広告", ko: "디스플레이 광고" },
        href: "/services/display-advertising",
      },
      {
        key: "webinar",
        label: { en: "Webinar & Events", ja: "ウェビナーとイベント", ko: "웨비나 및 이벤트" },
        href: "/services/webinar",
      },
      {
        key: "abm",
        label: { en: "ABM", ja: "ABM", ko: "ABM" },
        href: "/services/abm",
      },
      {
        key: "demand-generation",
        label: { en: "Demand Generation", ja: "デマンドジェネレーション", ko: "디맨드 제너레이션" },
        href: "/services/demand-generation",
      },
    ],
  },

  { key: "about", label: { en: "About Us", ja: "会社概要", ko: "회사 소개" }, href: "/about" },

  {
    key: "resources",
    label: { en: "Resources", ja: "リソース", ko: "리소스" },
    href: "/blog",
    dropdown: [
      { key: "blog", label: { en: "Blog", ja: "ブログ", ko: "블로그" }, href: "/blog" },
      {
        key: "resource-library",
        label: { en: "Resource Library", ja: "リソースライブラリ", ko: "리소스 라이브러리" },
        href: "/resource-library",
      },
    ],
  },
];


export interface FooterLink {
  label: LStr;
  href: string;
}

export interface FooterSection {
  title: LStr;
  links: FooterLink[];
}

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: { en: "Our Services", ja: "サービス一覧", ko: "서비스" },
    links: [
      {
        label: { en: "Content Syndication", ja: "コンテンツ・シンジケーション", ko: "콘텐츠 신디케이션" },
        href: "/services/content-syndication",
      },
      { label: { en: "Lead Generation", ja: "リード獲得", ko: "리드 생성" }, href: "/services/lead-generation" },
      { label: { en: "Intent Data", ja: "インテントデータ", ko: "인텐트 데이터" }, href: "/services/intent-data" },
      {
        label: { en: "Display Advertising", ja: "ディスプレイ広告", ko: "디스플레이 광고" },
        href: "/services/display-advertising",
      },
      {
        label: { en: "Webinar & Events", ja: "ウェビナーとイベント", ko: "웨비나 및 이벤트" },
        href: "/services/webinar",
      },
      { label: { en: "ABM", ja: "ABM", ko: "ABM" }, href: "/services/abm" },
      {
        label: { en: "Demand Generation", ja: "デマンドジェネレーション", ko: "디맨드 제너레이션" },
        href: "/services/demand-generation",
      },
    ],
  },
];

export interface SocialLink {
  icon: string;
  href: string;
  label: LStr;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "/icons/facebook.png", href: "https://facebook.com", label: { en: "Facebook", ja: "フェイスブック", ko: "페이스북" },},
  { icon: "/icons/x.png", href: "https://x.com", label: { en: "X", ja: "X", ko: "X" },},
  { icon: "/icons/instagram.png", href: "https://instagram.com", label: { en: "Instagram", ja: "インスタグラム", ko: "인스타그램" },},
  { icon: "/icons/linkedin.png", href: "https://linkedin.com", label: { en: "LinkedIn", ja: "リンクトイン", ko: "링크드인" }, },
];


