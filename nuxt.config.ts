// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
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
      // Add any public config here if needed
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
