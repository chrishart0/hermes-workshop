import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Hermes Agent Workshop",
  description: "Build a practical AI agent with Hermes in one workshop.",
  cleanUrls: true,
  appearance: false,
  sitemap: {
    hostname: "https://hermes.arcadian.cloud"
  },
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", href: "/assets/hermes-logo.jpeg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
      }
    ],
    ["link", { rel: "canonical", href: "https://hermes.arcadian.cloud/" }],
    ["meta", { property: "og:title", content: "Hermes Agent Workshop" }],
    [
      "meta",
      {
        property: "og:description",
        content: "A 4-hour hands-on workshop for building useful agents with Hermes."
      }
    ],
    ["meta", { property: "og:url", content: "https://hermes.arcadian.cloud/" }],
    ["meta", { property: "og:image", content: "https://hermes.arcadian.cloud/assets/hermes-logo.jpeg" }],
    ["meta", { property: "og:type", content: "website" }]
  ],
  themeConfig: {
    siteTitle: "Hermes Agent Workshop",
    nav: [
      { text: "Overview", link: "/" },
      { text: "Pre-work", link: "/pre-work" },
      { text: "Use cases", link: "/use-cases" },
      { text: "Outline", link: "/full-workshop-outline" },
      { text: "Register", link: "https://luma.com/aic-ch-7-18" },
      { text: "Hermes Docs", link: "https://hermes-agent.nousresearch.com/docs" }
    ],
    sidebar: [
      {
        text: "Workshop",
        items: [
          { text: "Overview", link: "/" },
          { text: "Pre-work Setup", link: "/pre-work" },
          { text: "Use Case Library", link: "/use-cases" },
          { text: "Full Workshop Outline", link: "/full-workshop-outline" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/NousResearch/hermes-agent" },
      { icon: "x", link: "https://x.com/NousResearch" }
    ],
    search: false,
    footer: {
      message: "Built by human and Hermes Agent collaboration.",
    }
  }
});
