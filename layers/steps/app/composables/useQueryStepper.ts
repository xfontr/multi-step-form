import { useStepper } from "@vueuse/core";
import { FLOW_INITIAL_STEPS } from "../configs/constants";
import useFlowStore from "../stores/flow";

function useQueryStepper(steps: Ref<string[]>) {
    const flow = useFlowStore();
    const { goTo, goToNext, goToPrevious, index } = useStepper(steps);

    const route = useRoute();
    const router = useRouter();

    const initialStep = computed<number | undefined>(() => {
        const value = Number(route.query.step);
        return Number.isInteger(value) && value >= 0 ? value : undefined;
    });

    function updateQuery(step: number): void {
        router.push({
            query: { ...route.query, step },
        });
    }

    function next(): void {
        goToNext();
        flow.up();
        updateQuery(index.value);
    }

    function previous(): void {
        goToPrevious();
        flow.down();
        updateQuery(index.value);
    }

    function trySetQueryStep(
        query: number | undefined,
        current: number,
    ): boolean {
        if (query === undefined) return false;

        const queryStep = steps.value[query];

        if (queryStep && query <= current) {
            goTo(queryStep);
            flow.update(Number(query + FLOW_INITIAL_STEPS));
            return true;
        }

        return false;
    }

    function trySetFlowStep(current: number): void {
        const flowStep = steps.value[current];
        if (!flowStep) return;

        goTo(flowStep);
        updateQuery(current);
    }

    onMounted(() => {
        const current = flow.index - FLOW_INITIAL_STEPS;

        const success = trySetQueryStep(initialStep.value, current);
        if (!success) trySetFlowStep(current);
    });

    if (!flow.index) navigateTo("/");

    return {
        previous,
        next,
        index: readonly(index),
    };
}

export default useQueryStepper;
