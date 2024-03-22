// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {charset: "UTF=8"},
        {name: "viewport", content: "width=device-width, initial-scale=1.0"},
      ],
      
      link: [
        { 
        href: "https://afeld.github.io/emoji-css/emoji.css",
        rel: "stylesheet",
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
});
