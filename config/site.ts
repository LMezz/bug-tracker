export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Bug Tracker",
  description:
    "A bug tracking application to help you and your team manage issues in development.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  images: {
    backgrounds: {
      auth: "",
    },
  },
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
