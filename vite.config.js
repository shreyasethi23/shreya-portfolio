import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base path locally, GitHub Pages base in production builds.
  base: command === 'serve' ? '/' : '/shreya-portfolio/',
}));
