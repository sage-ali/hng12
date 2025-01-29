import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './dist/index.js', // Use the output of tsc
      exportName: 'app',
    }),
  ],
  build: {
    outDir: 'dist', // Final bundled output
    rollupOptions: {
      input: resolve(__dirname, 'dist/index.js'), // Entry file for bundling
    },
  },
});
