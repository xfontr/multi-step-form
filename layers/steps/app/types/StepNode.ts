import type AgeStep from "../components/steps/AgeStep.vue";
import type GenderStep from "../components/steps/GenderStep.vue";
import type PathologyStep from "../components/steps/PathologyStep.vue";

export interface StepNode<
    Store extends { [K in keyof Store]: string | number | boolean | undefined },
> {
    key: keyof Store;
    is: // string case
        | typeof GenderStep
        // number case
        | typeof AgeStep
        // boolean case
        | typeof PathologyStep;
    name?: string;
}
