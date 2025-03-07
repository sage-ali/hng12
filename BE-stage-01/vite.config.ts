import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './src/index.ts', // Use the output of tsc
      exportName: 'app',
    }),
  ],
  build: {
    outDir: 'dist', // Final bundled output directory
    rollupOptions: {
      input: resolve(__dirname, 'src/index.js'), // Entry file for bundling
      output: {
        entryFileNames: 'index.js', // Output file name
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js'], // Include .ts and .js extensions
  },
});
