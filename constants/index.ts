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
        { key: 'resource-library', label: 'Resource Library', href: 'resource-library' },

      ],
    },
    { key: 'careers', label: 'Careers', href: '/careers' },
  ];

  export const FOOTER_LINKS = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact Us'],
    },
    {
      title: 'Services',
      links: [
        'Content Syndication',
        'Lead Generation',
        'Intent Data',
        'Display Advertising',
        'Webinar & Events',
        'ABM',
        'Demand Generation',
      ],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Resource Library'],
    },
  ];
  
  