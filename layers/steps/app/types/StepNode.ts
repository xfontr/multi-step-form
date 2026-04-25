import type AgeForm from "../components/forms/AgeForm.vue";
import type GenderForm from "../components/forms/GenderForm.vue";
import type PathologyForm from "../components/forms/PathologyForm.vue";

export interface StepNode<
    Store extends { [K in keyof Store]: string | number | boolean | undefined },
> {
    key: keyof Store;
    is: // string case
        | typeof GenderForm
        // number case
        | typeof AgeForm
        // boolean case
        | typeof PathologyForm;
    name?: string;
}
