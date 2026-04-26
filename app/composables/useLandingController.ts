import useUsageStore from "#layers/analytics/app/stores/usage";
import useDietStore from "#layers/diet/app/stores/diet";
import useStepsStore from "#layers/steps/app/stores/steps";

function useLandingController() {
    const { diet } = useDietStore();
    const flow = useStepsStore();
    const usage = useUsageStore();

    function onSubmit(breed: string): void {
        diet.breed = breed;
        flow.up();
        usage.updateStep(flow.index);
        navigateTo("/register");
    }

    onMounted(() => {
        flow.update(0);
    });

    return { onSubmit, initialValue: diet.breed };
}

export default useLandingController;
