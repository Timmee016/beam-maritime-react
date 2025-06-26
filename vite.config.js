import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',              // project root
  publicDir: 'public',    // where index.html and logo are
  build: {
    outDir: 'dist'        // where Vercel expects the build output
  }
});
