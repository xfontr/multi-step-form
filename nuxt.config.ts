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
    ],

    i18n: {
        defaultLocale: "es",
        locales: [
            { code: "es", name: "Spanish", file: "es.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
    },

    css: ["#shared/ui/scss/index.scss"],

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
