import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "vue-sdz/src/styles/_index.scss";
        `
      }
    }
  },
  plugins: [createVuePlugin()],
  server: { port: 8080 }
})