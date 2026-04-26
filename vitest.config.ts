import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults, coverageConfigDefaults } from "vitest/config";

export default defineVitestConfig({
    test: {
        globals: false,
        exclude: [...configDefaults.exclude, "dist/**/*", "**/playwright/**"],
        coverage: {
            provider: "v8",
            exclude: [...coverageConfigDefaults.exclude],
            reporter: ["text", "html", "clover", "json", "lcov"],
        },
        environment: "happy-dom",
        setupFiles: ["./unit.setup.ts"],
    },
});
