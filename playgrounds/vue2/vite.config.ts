import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-text-collapse/vue2/',
  plugins: [ vue(), UnoCSS({ configFile: fileURLToPath(new URL('./../../uno.config.ts', import.meta.url)) }) ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
