import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['moon-192.png', 'moon-512.png'],
      manifest: {
        name: 'Soy La Luna',
        short_name: 'Soy La Luna',
        description: 'Tu cosmos personal — fases lunares, tarot diario y rituales',
        theme_color: '#0d1117',
        background_color: '#0d1117',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          { src: 'moon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'moon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 31536000 } }
          },
          {
            urlPattern: /^https:\/\/api\.nasa\.gov\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'nasa-api-cache', expiration: { maxEntries: 5, maxAgeSeconds: 86400 } }
          },
        ]
      }
    })
  ],
})
