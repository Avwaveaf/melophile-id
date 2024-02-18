import { SiteConfig } from "../types/index";

export const siteConfig: SiteConfig = {
  name: "Melophile-Id",
  description:
    "An Magical Lyrics Meaning Blogs to tell you about What's this and what's that. Learn English now",
  url: "https://tx.shadcn.com",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;
