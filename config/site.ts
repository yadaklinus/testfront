export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Data App",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Data",
      href: "/data",
    },
    {
      label: "Airtime",
      href: "/airtime",
    },
  ],

  navMenuItemsLogin: [
    {
      label: "Data",
      href: "/data",
    },
    {
      label: "Airtime",
      href: "/airtime",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
