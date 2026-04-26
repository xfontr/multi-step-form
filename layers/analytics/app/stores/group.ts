import type { AnalyticsGroup } from "../types/AnalyticsGroup";
import { DEFAULT_GROUP } from "../configs/constants";

const useGroupStore = defineStore(
    "group",
    () => {
        const { groups } = useRuntimeConfig().public.analytics;

        const group = ref<AnalyticsGroup>();

        function init() {
            if (group.value) return;

            group.value =
                pickAnalyticsGroup(groups as AnalyticsGroup[]) ?? DEFAULT_GROUP;
        }

        return { init, group };
    },
    { persist: true },
);

export default useGroupStore;
