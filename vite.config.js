import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base path locally, GitHub Pages base in production builds.
  base: command === 'serve' ? '/' : '/shreya-portfolio/',
  server: {
    port: 5190,
    // Use explicit loopback so dev server starts in restricted environments; use `npm run dev -- --host` to expose on LAN.
    host: '127.0.0.1',
    // If port 5190 is already in use, fail loudly instead of silently picking another port (avoids viewing an old Vite process).
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
}));
