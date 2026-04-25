import type { Diet } from "../../types/Diet";
import type { StepNode } from "../../types/StepNode";

import AgeForm from "./AgeStep.vue";
import ExerciseForm from "./ExerciseStep.vue";
import GenderForm from "./GenderStep.vue";
import NameForm from "./NameStep.vue";
import PathologyForm from "./PathologyStep.vue";
import WeightForm from "./WeightStep.vue";

const steps: StepNode<Diet>[] = [
    { key: "name", is: NameForm },
    { key: "gender", is: GenderForm },
    { key: "age", is: AgeForm },
    { key: "weight", is: WeightForm },
    { key: "exercise", is: ExerciseForm },
    { key: "pathology", is: PathologyForm },
];

export default steps;
