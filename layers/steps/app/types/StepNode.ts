import type BooleanStep from "../components/steps/BooleanStep.vue";
import type NumberStep from "../components/steps/NumberStep.vue";
import type TextStep from "../components/steps/TextStep.vue";

export interface StepNode<
    Store extends { [K in keyof Store]: string | number | boolean | undefined },
> {
    key: keyof Store;
    is: // string case
        | typeof TextStep
        // number case
        | typeof NumberStep
        // boolean case
        | typeof BooleanStep;
    name?: string;
}
