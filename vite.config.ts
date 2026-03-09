import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),
    ViteImageOptimizer({
      include: ["src/assets/**/*"],  // only optimize images inside src/assets
      exclude: ["public/**/*"],
      jpg: { quality: 75 },
      webp: { quality: 75 }
    }),],
  base: "/doubleencryption_app/",
  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          react: ["react", "react-dom"]
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    cacheDir: '.vite',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs for production
      },
    },
    target: 'esnext', // Target modern JavaScript only
  },
  server: {
    host: "0.0.0.0",
    // port: 80,
    // strictPort: true,
  },
});
