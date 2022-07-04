import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  css: {
    devSourcemap: true,
    extract: true,
    loaderOptions: {
      css: {
        modules: true,
        localIdentName: '[local]_[hash:base64:5]',
      },
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  root: './',
  build: {
    outDir: './build'
  }
})
