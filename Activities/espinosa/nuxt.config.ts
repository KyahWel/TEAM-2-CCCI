// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      meta:[
        {charset: "UTF-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1.0"},
      
        
      ],
      script: [
        {}
      ],
      link: [
        {rel: "stylesheet", href:"https://afeld.github.io/emoji-css/emoji.css"},
        {rel: "stylesheet", href:"https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"},
        {rel: "preconnect", href:"https://fonts.googleapis.com"},
        {rel: "preconnect", href:"https://fonts.gstatic.com" },
        {rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swapm"},
        
        
            
      ],
    },

  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss' ],
  
  
  
})
