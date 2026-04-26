import { fileURLToPath } from "node:url";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",

    devtools: { enabled: false },

    modules: [
        "@nuxt/eslint",
        "@nuxt/test-utils/module",
        "@nuxt/fonts",
        "@nuxtjs/i18n",
        "@primevue/nuxt-module",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
        "@nuxtjs/storybook",
    ],

    i18n: {
        defaultLocale: "es",
        locales: [
            { code: "es", name: "Spanish", file: "es.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
    },

    css: ["@multi-step-form/ui/src/assets/scss/index.scss"],

    pinia: {
        storesDirs: ["./app/stores/**", "./app/layers/**/app/stores/**"],
    },

    primevue: {
        usePrimeVue: true,
        options: {
            ripple: true,
            inputVariant: "filled",
            theme: {
                preset: Aura,
                options: {
                    prefix: "p",
                    darkModeSelector: false,
                    cssLayer: false,
                },
            },
        },
    },

    fonts: process.env.STORYBOOK
        ? false
        : {
              defaults: {
                  weights: [300, 600, 900],
              },
          },

    runtimeConfig: {
        public: {
            env: import.meta.env.NODE_ENV,
        },
    },

    vite: {
        resolve: {
            alias: {
                "@multi-step-form/ui": fileURLToPath(
                    new URL(
                        "./node_modules/@multi-step-form/ui",
                        import.meta.url,
                    ),
                ),
            },
        },
        ssr: {
            noExternal: ["@multi-step-form/ui"],
        },
        optimizeDeps: {
            include: ["@multi-step-form/ui", "@vueuse/core"],
        },
    },
});
