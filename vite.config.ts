import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    !!process.env.VITE_OPTIMIZE_IMAGES && ViteImageOptimizer({
      include: ["src/assets/**/*"],
      exclude: ["public/**/*"],
      jpg: { quality: 75 },
      webp: { quality: 75 },
    }),
    !!process.env.VITE_VISUALIZE && visualizer({
      filename: "stats.html",
      emitFile: true,
      template: "treemap",
    }),
  ].filter(Boolean) as any,

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
