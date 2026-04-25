import type { Diet } from "./app/types/Diet";
import type { StepNode } from "./app/types/StepNode";

import AgeForm from "./app/components/forms/AgeForm.vue";
import ExerciseForm from "./app/components/forms/ExerciseForm.vue";
import GenderForm from "./app/components/forms/GenderForm.vue";
import NameForm from "./app/components/forms/NameForm.vue";
import PathologyForm from "./app/components/forms/PathologyForm.vue";
import WeightForm from "./app/components/forms/WeightForm.vue";

const steps: StepNode<Diet>[] = [
    { key: "name", is: NameForm },
    { key: "gender", is: GenderForm },
    { key: "age", is: AgeForm },
    { key: "weight", is: WeightForm },
    { key: "exercise", is: ExerciseForm },
    { key: "pathology", is: PathologyForm },
];

export default steps;
