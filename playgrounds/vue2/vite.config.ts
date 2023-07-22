import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-seamless-roll/vue2/',
  plugins: [ vue() ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
