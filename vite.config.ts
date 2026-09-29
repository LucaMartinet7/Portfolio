import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    define: {
        // Baked in at build time so server and client render the same year.
        __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
    },
    build: {
        target: "es2022",
        // Never inline assets as data: URIs, so the CSP can stay 'self'-only.
        assetsInlineLimit: 0,
        // Every browser we target supports modulepreload natively.
        modulePreload: { polyfill: false },
    },
});
