import { withBase } from "./utils/helpers";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  eyebrowText?: string;
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type About = {
  title?: string;
  text?: string;
};

export type Blog = {
  description?: string;
};

export type ContactInfo = {
  title?: string;
  text?: string;
  email?: {
    text?: string;
    href?: string;
    email?: string;
  };
  socialProfiles?: {
    text?: string;
    href?: string;
  }[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  about?: About;
  contactInfo?: ContactInfo;
  subscribe?: Subscribe;
  blog?: Blog;
  postsPerPage?: number;
  recentPostLimit: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  website: "https://g-nevarez-realtor.example.com",
  title: "G. Nevarez Realtor",
  description:
    "Helping busy professionals find homes they love through a stress-free, guided process.",
  image: {
    src: "/space-ahead-preview.jpeg",
    alt: "G. Nevarez Realtor",
  },
  headerNavLinks: [
    {
      text: "About",
      href: withBase("/about"),
    },
    {
      text: "Listings",
      href: withBase("/"),
    },
    {
      text: "Buy",
      href: withBase("/#buy"),
    },
    {
      text: "Sell",
      href: withBase("/#sell"),
    },
    {
      text: "Lease",
      href: withBase("/#lease"),
    },
    {
      text: "Contact",
      href: withBase("/contact"),
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: withBase("/about"),
    },
    {
      text: "Contact",
      href: withBase("/contact"),
    },
  ],
  socialLinks: [
    {
      text: "TikTok",
      href: "https://www.tiktok.com/",
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
  ],
  hero: {
    eyebrowText: "Rocky Point, MX Realtor",
    title: "Finding a home you love",
    text: "I'm Gilberto Nevarez — helping busy professionals effortlessly find homes they adore through a transparent, guided process backed by experience and integrity.",
    image: {
      src: "/assets/images/g-nevarez-realtor.png",
      alt: "Gilberto Nevarez - Realtor",
    },
    actions: [
      {
        text: "Let's Talk",
        href: withBase("/contact"),
      },
    ],
  },
  about: {
    title: "About",
    text: "I help clients buy, sell, and lease in the GTA. Expect clear communication, proven strategy, and a calm, guided experience from first consult to closing.",
  },
  contactInfo: {
    title: "Contact",
    text: "Have questions or ready to get started? Reach out anytime — I’d love to help.",
    email: {
      text: "Email me and I’ll get back to you quickly.",
      href: "mailto:hello@example.com",
      email: "hello@example.com",
    },
    socialProfiles: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        text: "Peerlist",
        href: "https://www.peerlist.io/",
      },
      {
        text: "GitHub",
        href: "https://github.com/",
      },
    ],
  },
  postsPerPage: 2,
  recentPostLimit: 0,
};

export default siteConfig;
