import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        resume: resolve(__dirname, 'src/resume.html'),
        research: resolve(__dirname, 'src/research.html'),
      },
    },
    outDir: 'dist',
  },
});

