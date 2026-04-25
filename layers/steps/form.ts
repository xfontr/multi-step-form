import type { FormNode } from "./app/types/FormNode";

import AgeForm from "./app/components/AgeForm.vue";
import ExerciseForm from "./app/components/ExerciseForm.vue";
import GenderForm from "./app/components/GenderForm.vue";
import NameForm from "./app/components/NameForm.vue";
import PathologyForm from "./app/components/PathologyForm.vue";
import WeightForm from "./app/components/WeightForm.vue";

const form: FormNode[] = [
    { key: "name", is: NameForm },
    { key: "gender", is: GenderForm },
    { key: "age", is: AgeForm },
    { key: "weight", is: WeightForm },
    { key: "exercise", is: ExerciseForm },
    { key: "pathology", is: PathologyForm },
];

export default form;
