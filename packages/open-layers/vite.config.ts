import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { externalizeDeps } from "vite-plugin-externalize-deps";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), externalizeDeps()],
  esbuild: {
    target: "esnext",
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    outDir: resolve(import.meta.dirname, "./dist"),
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
});
