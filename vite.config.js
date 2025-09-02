import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Tailwind automatically handled via postcss
  ],
  base: '/AMAYA_COFFESHOP/', // <-- GitHub Pages hosted repo name
  build: {
    outDir: 'build', // default, ensures gh-pages deploy folder
  },
});
