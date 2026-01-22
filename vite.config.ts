import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    hmr: true,
  },
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __LAST_UPDATED__: JSON.stringify(new Date().toLocaleString("en-US", { month: "long", year: "numeric" })),
  },
});
