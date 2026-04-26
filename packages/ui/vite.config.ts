import path from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@multi-step-form/ui": path.resolve(
                __dirname,
                "../multi-step-form/src",
            ),
        },
    },
});
