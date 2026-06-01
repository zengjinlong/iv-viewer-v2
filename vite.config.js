import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  test: {
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'IVViewerV2',
      fileName: (format) => `iv-viewer-v2.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    },
  },
})
