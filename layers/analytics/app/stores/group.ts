import type { AnalyticsGroup } from "../types/AnalyticsGroup";
import { DEFAULT_GROUP } from "../configs/constants";

const useGroupStore = defineStore(
    "group",
    () => {
        const { groups } = useRuntimeConfig().public.analytics;

        const group = ref<AnalyticsGroup>(
            pickAnalyticsGroup(groups as AnalyticsGroup[]) ?? DEFAULT_GROUP,
        );

        return { group };
    },
    { persist: true },
);

export default useGroupStore;
