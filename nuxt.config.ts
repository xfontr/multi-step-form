export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",

    devtools: { enabled: false },

    modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@nuxtjs/i18n"],

    i18n: {
        defaultLocale: "es",
        locales: [
            { code: "es", name: "Spanish", file: "es.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
    },

    css: ["#shared/ui/scss/index.scss"],
});
