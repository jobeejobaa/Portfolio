import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  server: {
    port: 5175,
    open: true,
  },
  plugins: [react()],
})
