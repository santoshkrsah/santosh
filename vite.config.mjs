import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 this fixes the blank page on deployment 
  // ./ Sirf local development result - Sab JS/CSS files 404 → white screen
  // / Root domain pe (recommended) results - Sab files load hote hain

})
