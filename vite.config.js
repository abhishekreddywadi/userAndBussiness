import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    historyApiFallback: true
  },
  css: {
    preprocessorOptions: {
      css: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      'slick-carousel': 'node_modules/slick-carousel'
    }
  }
})
