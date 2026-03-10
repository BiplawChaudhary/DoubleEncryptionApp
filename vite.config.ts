import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      include: ["src/assets/**/*"],
      exclude: ["public/**/*"],
      jpg: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
  base: "/doubleencryption_app/",
  build: {
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.includes("react") ? "react" : "vendor";
          }
        },
      },
    },
    target: "esnext",
  },
  server: {
    host: "0.0.0.0",
  },
});
