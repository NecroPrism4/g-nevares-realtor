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
  website: "https://gooceano.com",
  title: "Gilberto Nevárez",
  description:
    "Agente inmobiliario bilingüe especializado en venta, compra, rentas y gestión de propiedades en Puerto Peñasco, Sonora.",
  image: {
    src: "/gnevarezrealtor-preview.jpeg",
    alt: "G. Nevarez Realtor",
  },
  headerNavLinks: [
    {
      text: "Inicio",
      href: withBase(""),
    },
    {
      text: "Servicios",
      href: "#services",
    },
    {
      text: "Propiedades",
      href: "#listings",
    },
    {
      text: "Proceso",
      href: "#process",
    },
    {
      text: "Zona",
      href: "#area",
    },
    {
      text: "Contacto",
      href: "#contact",
    },
  ],
  footerNavLinks: [
    {
      text: "Servicios",
      href: "#services",
    },
    {
      text: "Propiedades",
      href: "#listings",
    },
    {
      text: "Contacto",
      href: "#contact",
    },
  ],
  socialLinks: [
    {
      text: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      text: "Facebook",
      href: "https://www.facebook.com/",
    },
  ],
  hero: {
    eyebrowText: "Puerto Peñasco, Sonora",
    title: "Encuentra tu propiedad ideal en Puerto Peñasco",
    text: "Agente inmobiliario bilingüe — Venta, compra, rentas y asesoría personalizada.",
    image: {
      src: "/assets/images/g-nevarez-realtor.png",
      alt: "Gilberto Nevárez - Agente inmobiliario",
    },
    actions: [
      {
        text: "Explorar propiedades",
        href: "https://oceano-sales.com",
      },
      {
        text: "Contáctame por WhatsApp",
        href: "https://wa.me/16235659078?text=Hi Gilberto, I'm interested in buying a property in Puerto Peñasco, Sonora.",
      },
    ],
  },
  about: {
    title: "Sobre mí",
    text: "Soy Gilberto Nevárez, agente inmobiliario con más de 20 años de experiencia ayudando a compradores y vendedores a concretar transacciones exitosas en Puerto Peñasco, Sonora 🇲🇽. Como profesional bilingüe (inglés / español), brindo atención clara y personalizada, acompañándote en cada etapa: desde la búsqueda, negociación, financiamiento y cierre, hasta la administración de tu propiedad si lo necesitas.",
  },
  contactInfo: {
    title: "Contacto",
    text: "¿Tienes preguntas o quieres comenzar? Escríbeme y te respondo rápido.",
    email: {
      text: "Gilberto@goOceano.com",
      href: "mailto:Gilberto@goOceano.com",
      email: "Gilberto@goOceano.com",
    },
    socialProfiles: [
      {
        text: "Instagram",
        href: "https://www.instagram.com/",
      },
      {
        text: "Facebook",
        href: "https://www.facebook.com/",
      },
    ],
  },
  postsPerPage: 2,
  recentPostLimit: 0,
};

export default siteConfig;
