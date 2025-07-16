// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxt/ui', 'shadcn-nuxt', '@nuxt/icon', '@nuxt/fonts', '@nuxt/image'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
    // Private variables (only available on server side)
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.APP_PASSWORD,

    // Public variables (can be accessed in client-side too)
    // public: {
    //   apiBaseUrl: process.env.SMTP_HOST,
    // },
  },
})