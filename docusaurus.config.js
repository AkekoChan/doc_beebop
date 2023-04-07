// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Beebop - Documentation",
  tagline:
    "La documentation que vous avez besoin pour comprendre l'application Beebop",
  favicon: "img/icon.svg",

  // Set the production url of your site here
  url: "https://beebop-doc.netlify.app", // Url to your site with no trailing slash
  baseUrl: "/",
  staticDirectories: ["public", "static"],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Beebop",
        logo: {
          alt: "Logo Beebop",
          src: "img/logo.svg",
          href: "/",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/mchauveni/beebop_app",
            label: "GitHub",
            position: "right",
          },
          {
            href: "#",
            label: "Beebop",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Découvrir Beebop",
            to: "/docs/introduction/intro",
          },

          {
            label: "GitHub",
            href: "https://github.com/mchauveni/beebop_app",
          },
          {
            label: "Beebop",
            href: "https://github.com/mchauveni/beebop_app",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Beebop`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
