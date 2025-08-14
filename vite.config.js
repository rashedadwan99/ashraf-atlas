import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Optional: fixes issues on some systems/editors (e.g., WSL or network drives)
    },
    port: 5173,          // Default port, you can change it
    open: true,          // Opens browser on server start
  },
})
