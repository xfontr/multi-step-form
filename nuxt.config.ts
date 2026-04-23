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
        options: {
            theme: {
                preset: Aura,
            },
        },
    },

    fonts: {
        defaults: {
            weights: [300, 600, 900],
        },
    },
});
