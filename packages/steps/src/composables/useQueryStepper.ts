import { useStepper } from "@vueuse/core";
import useStepStore from "../stores/steps";

function useQueryStepper(steps: Ref<string[]>, initialSteps: number) {
    const stepsStore = useStepStore();
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
        stepsStore.up();
        updateQuery(index.value);
    }

    function previous(): void {
        goToPrevious();
        stepsStore.down();
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
            stepsStore.update(Number(query + initialSteps));
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

    function init(): void {
        if (!stepsStore.index) navigateTo("/");
    }

    onMounted(() => {
        const current = stepsStore.index - initialSteps;

        const success = trySetQueryStep(initialStep.value, current);
        if (!success) trySetFlowStep(current);
    });

    return {
        previous,
        next,
        init,
        index: readonly(index),
    };
}

export default useQueryStepper;
