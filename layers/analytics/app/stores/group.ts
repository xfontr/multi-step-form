import type { AnalyticsGroup } from "../types/AnalyticsGroup";

const useGroupStore = defineStore(
    "group",
    () => {
        const { groups } = useRuntimeConfig().public.analytics;

        const group = ref<AnalyticsGroup | undefined>(
            pickAnalyticsGroup(groups),
        );

        return { group: readonly(group) };
    },
    { persist: true },
);

export default useGroupStore;
