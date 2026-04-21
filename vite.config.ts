import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      sitemap({
        hostname: 'https://imamsudarajat.my.id',
      })
  ],
})
