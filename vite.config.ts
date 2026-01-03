import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      srcDir: './src',
    }),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    react(),
  ],
  server: {
    watch: {
      ignored: ['**/routeTree.gen.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      'lucide-react',
      'framer-motion',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      '@radix-ui/react-slot',
      '@radix-ui/react-avatar',
      'usehooks-ts',
    ],
  },
  ssr: {
    optimizeDeps: {
      include: [
        'lucide-react',
        'framer-motion',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
        '@radix-ui/react-slot',
        '@radix-ui/react-avatar',
        'usehooks-ts',
      ],
    },
  },
})
