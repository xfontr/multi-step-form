import type { AnalyticsGroup } from "./app/types/AnalyticsGroup";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            analytics: {
                groups: [
                    {
                        name: "A",
                        rate: 30,
                    },
                    {
                        name: "B",
                        rate: 70,
                        stepsSkip: [5],
                    },
                ] satisfies AnalyticsGroup[],
            },
        },
    },
});
