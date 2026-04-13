import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base path locally, GitHub Pages base in production builds.
  base: command === 'serve' ? '/' : '/shreya-portfolio/',
  // Injected at build time so the footer can show when this bundle was produced.
  define: {
    __SITE_UPDATED__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
}));
