import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function spaFallbackPlugin() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const indexPath = resolve("dist", "index.html");
      const fallbackPath = resolve("dist", "404.html");

      if (existsSync(indexPath)) {
        copyFileSync(indexPath, fallbackPath);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  base: "/",
});
