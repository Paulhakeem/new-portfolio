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
  }
})