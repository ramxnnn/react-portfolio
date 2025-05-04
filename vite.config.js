import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000,       // Set the port to 3000
    strictPort: true, // Make sure it doesn't switch to another port if 3000 is in use
    allowedHosts: [
      'dev.ramxn.com',       // Allow dev.ramxn.com
      'www.dev.ramxn.com',   // Allow www.dev.ramxn.com
    ],
  },
})
