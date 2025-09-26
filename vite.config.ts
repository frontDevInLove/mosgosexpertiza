import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// @ts-expect-error: no types in package exports
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.cjs'),
      include: ['src/**/*.ts', 'src/**/*.vue'], // по желанию
      exclude: ['node_modules', 'dist'],
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
