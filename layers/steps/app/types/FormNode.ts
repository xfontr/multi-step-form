import type AgeForm from "../components/AgeForm.vue";
import type GenderForm from "../components/GenderForm.vue";
import type PathologyForm from "../components/PathologyForm.vue";
import type { Diet } from "./Diet";

export interface FormNode {
    key: keyof Diet;
    is: // string case
        | typeof GenderForm
        // number case
        | typeof AgeForm
        // boolean case
        | typeof PathologyForm;
}
