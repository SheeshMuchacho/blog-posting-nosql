// constants/index.ts

export interface DropdownItem {
  key: string;
  label: string;
  href: string;
}

export interface NavLink {
  key: string;
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: 'home', label: 'Home', href: '/' },
  {
    key: 'services',
    label: 'Services',
    href: '/services',
    dropdown: [
      { key: 'content-syndication', label: 'Content Syndication', href: '/content-syndication' },
      { key: 'lead-generation', label: 'Lead Generation', href: '/lead-generation' },
      { key: 'intent-data', label: 'Intent Data', href: '/intent-data' },
      { key: 'display-advertising', label: 'Display Advertising', href: '/display-advertising' },
      { key: 'webinar-&-events', label: 'Webinar & Events', href: '/webinar-&-events' },
      { key: 'abm', label: 'ABM', href: '/abm' },
      { key: 'demand-generation', label: 'Demand Generation', href: '/demand-generation' },
    ],
  },
  { key: 'about', label: 'About', href: '/about' },
  {
    key: 'resources',
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { key: 'blog', label: 'Blog', href: '/blog' },
      { key: 'resource-library', label: 'Resource Library', href: '/resource-library' },
    ],
  },
  {
    key: 'languages',
    label: 'Languages',
    href: '/languages',
    dropdown: [
      { key: 'english', label: 'English', href: '/english' },
      { key: 'japanese', label: '日本語', href: '/japanese' },
      { key: 'korean', label: '한국인', href: '/korean' },
    ],
  },];

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ]
  },
  {
    title: "Our Services",
    links: [
      { label: "Content Syndication", href: "/content-syndication" },
      { label: "Lead Generation", href: "/lead-generation" },
      { label: "Intent Data", href: "/intent-data" },
      { label: "Display Advertising", href: "/display-advertising" },
      { label: "Webinar & Events", href: "/webinar-&-events" },
      { label: "ABM", href: "/abm" },
      { label: "Demand Generation", href: "/demand-generation" },
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "/icons/facebook.svg", href: "https://facebook.com", label: "Facebook" },
  { icon: "/icons/x.svg", href: "https://x.com", label: "X" },
  { icon: "/icons/instagram.svg", href: "https://instagram.com", label: "Instagram" },
  { icon: "/icons/linkedin.svg", href: "https://linkedin.com", label: "LinkedIn" },
];

export interface ServiceFeature {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const services = [
  {
    title: "Lead Generation",
    description: "Comprehensive lead generation solutions to identify, nurture, and convert qualified prospects into loyal customers."
  },
  {
    title: "ABM",
    description: "Account-Based Marketing strategies to target high-value accounts with personalized campaigns and measurable results."
  },
  {
    title: "Demand Generation",
    description: "End-to-end demand generation programs to increase brand awareness and drive qualified interest in your products."
  }
];

