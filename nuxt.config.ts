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
    ],

    i18n: {
        defaultLocale: "es",
        locales: [
            // { code: "es", name: "Spanish", file: "es.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
    },

    css: ["#layers/ui/app/assets/scss/index.scss"],

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

    fonts: {
        defaults: {
            weights: [300, 600, 900],
        },
    },
});
