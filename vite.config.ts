import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/libraryapp/',
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss()
  ],
})
