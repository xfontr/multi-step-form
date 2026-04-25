import type { Usage } from "../types/Usage";
import { MAX_COMPLETION } from "../configs/constants";
import useGroupStore from "./group";

const useUsageStore = defineStore(
    "usage",
    () => {
        const { group } = useGroupStore();

        const maxStep = ref<number>();

        const completionRatePerStep = computed<number>(() => {
            return MAX_COMPLETION / (maxStep.value ?? 1);
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
            maxStep.value ??= max;

            if (usage.id) return;

            usage.id = crypto.randomUUID();
            usage.timestamps.init = Date.now();

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
                maxStep.value ?? 1,
                completionRatePerStep.value,
            );

            updateSuccessStatus();
            updateTimestamps();
            post();
        }

        return {
            init,
            updateStep,
            // This is a lie to prevent consumers from actually altering the usage
            // pinia persisted package won't allow the use of readonly()
            usage: usage as Readonly<Usage>,
        };
    },
    { persist: true },
);

export default useUsageStore;
