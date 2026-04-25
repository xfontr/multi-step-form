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
            timestamps: {
                init: 0,
                success: 0,
                total: 0,
            },
        });

        function init(max: number): void {
            if (!usage.id) usage.id = crypto.randomUUID();

            usage.timestamps.init = Date.now();
            usage.timestamps.success = 0;
            usage.timestamps.total = 0;

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

        function updateTimestamps(): void {
            if (usage.success) usage.timestamps.success = Date.now();
            usage.timestamps.total = Date.now() - usage.timestamps.init;
        }

        function updateSuccessStatus(): void {
            usage.success = usage.completion === MAX_COMPLETION;
        }

        function updateStep(step: number): void {
            usage.completion = getCompletion(
                step,
                maxStep.value,
                completionRatePerStep.value,
            );

            updateSuccessStatus();
            updateTimestamps();
            post();
        }

        function getUsage(): Readonly<Usage> {
            return readonly(usage);
        }

        return { getUsage, init, updateStep };
    },
    { persist: { pick: ["usage"] } },
);

export default useUsageStore;
