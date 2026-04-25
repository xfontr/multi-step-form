import type { StepNode } from "../types/StepNode";

function useStepNodes<
    Store extends { [K in keyof Store]: string | number | boolean | undefined },
>(list: string[], skip: number[], stepNodes: StepNode<Store>[]) {
    const nodes = computed<Required<StepNode<Store>>[]>(() => {
        const skipSet = new Set(skip);

        return stepNodes.flatMap((node, i) =>
            skipSet.has(i) || !list[i] ? [] : { ...node, name: list[i] },
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
