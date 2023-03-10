import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  build: {
    cssCodeSplit: false,
    minify: mode === 'production',
    modulePreload: false,
    sourcemap: mode !== 'production',
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      exposes: {
        './wbs': './src/widgets/wbs',
      },
      filename: 'remote-entry.js',
      name: 'remote-widgets-wbs',
      remotes: {
        'remote-common': 'http://localhost:3002/assets/remote-entry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
    },
  },
}))
