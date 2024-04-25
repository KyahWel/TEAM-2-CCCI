import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue()
  ],
  server: {
    hmr: {
      overlay: false
    }
  }
}