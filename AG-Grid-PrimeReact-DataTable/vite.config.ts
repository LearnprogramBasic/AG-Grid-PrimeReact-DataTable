import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Importa visualizer de esta manera

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Abre automáticamente el reporte en tu navegador
      filename: 'bundle-analysis.html', // Nombre del archivo de reporte
      gzipSize: true, // Mostrar el tamaño comprimido con gzip
      brotliSize: true, // Mostrar el tamaño comprimido con brotli
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
});
