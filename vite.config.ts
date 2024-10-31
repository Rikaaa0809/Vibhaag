import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/Vibhaag/',  // Adjust base URL if necessary
  build: {
    outDir: 'dist',  // Output to public folder
  },
})