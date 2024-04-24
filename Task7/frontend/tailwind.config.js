/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    css: ['~/assets/css/tailwind.css'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}

module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'background': "url('/assets/images/background.png')",
          
        }
      }
    }
  }