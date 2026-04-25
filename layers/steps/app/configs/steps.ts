import type { Diet } from "../types/Diet";
import type { StepNode } from "../types/StepNode";

import AgeForm from "../components/forms/AgeForm.vue";
import ExerciseForm from "../components/forms/ExerciseForm.vue";
import GenderForm from "../components/forms/GenderForm.vue";
import NameForm from "../components/forms/NameForm.vue";
import PathologyForm from "../components/forms/PathologyForm.vue";
import WeightForm from "../components/forms/WeightForm.vue";

const steps: StepNode<Diet>[] = [
    { key: "name", is: NameForm },
    { key: "gender", is: GenderForm },
    { key: "age", is: AgeForm },
    { key: "weight", is: WeightForm },
    { key: "exercise", is: ExerciseForm },
    { key: "pathology", is: PathologyForm },
];

export default steps;
