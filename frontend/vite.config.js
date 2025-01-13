import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Backend URL
        changeOrigin: true, // Changes the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Optionally rewrite the path
      },
    },
  },
})
