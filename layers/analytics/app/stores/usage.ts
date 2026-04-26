import type { ApiResponse } from "#shared/types/ApiResponse";
import type { Usage } from "#shared/types/Usage";
import repository from "../analytics.repository";
import { MAX_COMPLETION } from "../configs/constants";
import useGroupStore from "./group";

const useUsageStore = defineStore(
    "usage",
    () => {
        const groupStore = useGroupStore();

        const maxStep = ref<number>();

        const completionRatePerStep = computed<number>(() => {
            return MAX_COMPLETION / (maxStep.value ?? 1);
        });

        const usage = reactive<Usage>({
            group: "",
            stepsSkipped: 0,
            id: "",
            completion: 0,
            success: false,
            timestamps: {
                init: 0,
                success: 0,
                total: 0,
            },
        });

        function setInitialValues(): void {
            usage.id = createId();
            usage.timestamps.init = Date.now();
            usage.group = groupStore.group!.name!;
            usage.stepsSkipped = groupStore.group!.stepsSkip?.length ?? 0;
        }

        function init(total: number): void {
            groupStore.init();

            maxStep.value ??=
                total - (groupStore.group!.stepsSkip?.length ?? 0);
            if (usage.id) return;

            setInitialValues();
        }

        function post(): Promise<ApiResponse> {
            return repository.publish(usage);
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
