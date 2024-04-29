// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

 // buildModules: ['@nuxt/typescript-build'], 
  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  antd:{
    // Options
  }
})
