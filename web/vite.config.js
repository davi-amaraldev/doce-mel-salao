import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [tailwindcss()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: fileURLToPath(new URL('./src/index.html', import.meta.url)),
      output: {
        assetFileNames: ({ names }) => (
          names.some((name) => name.endsWith('.jpeg'))
            ? 'assets/[name][extname]'
            : 'assets/[name]-[hash][extname]'
        ),
      },
    },
  },
});
