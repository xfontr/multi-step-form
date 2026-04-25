import type { Usage } from "../types/Usage";
import { MAX_COMPLETION } from "../configs/constants";
import useGroupStore from "./group";

const useUsageStore = defineStore(
    "usage",
    () => {
        const { group } = useGroupStore();

        const maxStep = ref<number>(1);

        const completionRatePerStep = computed<number>(() => {
            return MAX_COMPLETION / maxStep.value;
        });

        const usage = reactive<Usage>({
            group: group.name,
            id: "",
            completion: 0,
            success: false,
        });

        function init(max: number): void {
            if (!usage.id) usage.id = crypto.randomUUID();

            maxStep.value = max;

            post();
        }

        function post(): Promise<void> {
            return new Promise((resolve) => {
                // eslint-disable-next-line no-console
                console.table(usage);
                resolve();
            });
        }

        function updateStep(step: number): void {
            usage.completion = getCompletion(
                step,
                maxStep.value,
                completionRatePerStep.value,
            );

            usage.success = usage.completion === MAX_COMPLETION;

            post();
        }

        return { usage, init, updateStep };
    },
    { persist: { pick: ["usage"] } },
);

export default useUsageStore;
