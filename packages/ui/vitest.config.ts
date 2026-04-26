import {
    configDefaults,
    coverageConfigDefaults,
    defineConfig,
} from "vitest/config";

export default defineConfig({
    test: {
        globals: false,
        exclude: [...configDefaults.exclude, "dist/**/*"],
        coverage: {
            provider: "v8",
            exclude: [...coverageConfigDefaults.exclude],
            reporter: ["text", "html", "clover", "json", "lcov"],
        },
        environment: "happy-dom",
    },
});
