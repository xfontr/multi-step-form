import { useI18nArray } from "@multi-step-form/ui";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import useDiet from "#layers/diet/app/composables/useDiet";
import useDietStore from "#layers/diet/app/stores/diet";
import useStepsStore from "#layers/steps/app/stores/steps";
import { FLOW_INITIAL_STEPS } from "~/configs/constants";
import stepNodes from "~/steps";

function useRegisterController() {
    const { tm } = useI18nArray(useRuntimeConfig().public.env === "production");

    const { diet } = useDietStore();
    const steps = useStepsStore();
    const groupStore = useGroupStore();
    const { updateStep } = useUsageStore();

    const { nodes, stepNames } = useStepNodes(
        tm("register.steps") as string[],
        groupStore.group?.stepsSkip,
        stepNodes,
    );

    const { previous, next, index } = useQueryStepper(
        stepNames,
        FLOW_INITIAL_STEPS,
    );

    const { signUp, status } = useDiet();

    function onSubmit<K extends keyof Diet>(key: K, value: Diet[K]): void {
        diet[key] = value;
        next();
        updateStep(steps.index);
    }

    function onPrevious(): void {
        previous();
        updateStep(steps.index);
    }

    function onEnd(): Promise<void> {
        return signUp();
    }

    return {
        index,
        nodes,
        onSubmit,
        onPrevious,
        onEnd,
        status,
        store: diet,
    };
}

export default useRegisterController;
