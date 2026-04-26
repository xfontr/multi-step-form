import type { AnalyticsGroup } from "./app/types/AnalyticsGroup";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            analytics: {
                groups: [
                    {
                        name: "A",
                        rate: 40,
                    },
                    {
                        name: "B",
                        rate: 60,
                        stepsSkip: [5],
                    },
                ] satisfies AnalyticsGroup[],
            },
        },
    },
});
