import type { Diet } from "../types/Diet";
import type { StepNode } from "../types/StepNode";
import steps from "../components/steps";

function useStepNodes(list: string[], skip: number[]) {
    const nodes = computed<StepNode<Diet>[]>(() => {
        const skipSet = new Set(skip);

        return steps.flatMap((node, i) =>
            skipSet.has(i) ? [] : { ...node, name: list[i] },
        );
    });

    const stepNames = computed<string[]>(() =>
        nodes.value.map(({ name }) => name!),
    );

    return {
        nodes,
        stepNames,
    };
}

export default useStepNodes;
