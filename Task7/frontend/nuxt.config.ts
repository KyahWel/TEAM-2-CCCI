// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    
  ],
 

  // interface Strategies {
  //   local: {
  //     scheme: string;
  //     localStorage: {
  //       prefix: string;
  //     };
  //     token: {
  //       prefix: string;
  //       property: string;
  //       maxAge: number;
  //       type: string;
  //     };
  //     refreshToken: {
  //       property: 'refresh_token';
  //       data: 'refresh_token';
  //       maxAge: number;
  //     };
  //     user: {
  //       property: 'user';
  //       autoFetch: boolean;
  //     };
  //     endpoints: {
  //       login: { url: string; method: string };
  //       refresh: { url: string; method: string };
  //       user: { url: string; method: string };
  //     };
  //   };
  // }
  
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
