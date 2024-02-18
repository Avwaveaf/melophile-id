import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};
export type BlogConfig = {
  name: string;
  description: string;
};

export type HeroConfig = {
  title: string;
  description: string;
};

export type LandingConfig = {
  mainNav: MainNavItem[];
  heroSection: HeroConfig;
  features: Features[];
};

export type Features = {
  title: string;
  description: string;
};

export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  readingTime: number;
};

export type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
