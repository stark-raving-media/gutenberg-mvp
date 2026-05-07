import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /gutenberg-mvp/ for production or / for local dev
  base: import.meta.env.PROD ? '/gutenberg-mvp/' : '/'
})
