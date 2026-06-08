// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";
const isProd = process.env.NODE_ENV === "production";
const csp =
  "default-src 'self'; script-src 'self' https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https:; img-src 'self' data: https:; connect-src 'self' https:;";

const securityHeaders: Record<string, string> = {
  "Content-Security-Policy": csp,
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};
if (isProd && siteUrl.startsWith("https")) {
  securityHeaders["Strict-Transport-Security"] =
    "max-age=63072000; includeSubDomains; preload";
}

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Paul Nyamawi | UI Designer & Web Developer",
      titleTemplate: "%s | Paul Nyamawi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
          content: `${siteUrl}/images/profile.jpg`,
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
          content: `${siteUrl}/images/profile.jpg`,
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
      siteUrl,
    },
  },
  routeRules: {
    "/**": {
      headers: {
        ...securityHeaders,
      },
    },
  },
});
