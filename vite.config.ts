import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://valvalov22.github.io/paintingsGallery/',
  plugins: [react()],
});
