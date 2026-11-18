import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const pages = [
  'index.html',
  'quem-somos.html',
  'diferenciais.html',
  'eventos.html',
  'pacotes.html',
  'depoimentos.html',
  'contato.html',
  'disponibilidade.html',
];

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [tailwindcss()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: pages.map((page) => fileURLToPath(new URL(`./src/${page}`, import.meta.url))),
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
