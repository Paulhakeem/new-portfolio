// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Paul Nyamawi | UI Designer & Web Developer",
      titleTemplate: "%s | Paul Nyamawi",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Paul Nyamawi — crafted UI and web experiences with Vue.js, Nuxt, and modern design.",
        },
        {
          name: "theme-color",
          content: "#0f1724",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Paul Nyamawi Portfolio",
        },
        {
          property: "og:description",
          content:
            "Portfolio of Paul Nyamawi — crafted UI and web experiences with Vue.js, Nuxt, and modern design.",
        },
        {
          property: "og:image",
          content: "http://localhost:3000/images/profile.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Paul Nyamawi | UI Designer & Web Developer",
        },
        {
          name: "twitter:description",
          content:
            "Portfolio of Paul Nyamawi — crafted UI and web experiences with Vue.js, Nuxt, and modern design.",
        },
        {
          name: "twitter:image",
          content: "http://localhost:3000/images/profile.jpg",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/ui",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    emailUsername: process.env.EMAIL_USERNAME,
    emailPassword: process.env.EMAIL_PASSWORD,
    public: {
      siteUrl: process.env.SITE_URL || "http://localhost:3000",
    },
  },
  routeRules: {
    "/**": {
      headers: {
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://*; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    },
  },
});
