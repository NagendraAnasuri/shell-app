import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'shell',
      remotes: {
          products: {
            type: "module",
            name: "products",
            entry: 'https://products-app-dusky.vercel.app/remoteEntry.js',
          },

          cart: {
            type: "module",
            name: "cart",
            entry: 'https://cart-app-puce-phi.vercel.app/remoteEntry.js',
        }
      },
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false
  }
})
