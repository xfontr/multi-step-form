import type { StepNode } from "#layers/steps/app/types/StepNode";
import type { Diet } from "./types/Diet";

import AgeStep from "#layers/steps/app/components/steps/AgeStep.vue";
import ExerciseStep from "#layers/steps/app/components/steps/ExerciseStep.vue";
import GenderStep from "#layers/steps/app/components/steps/GenderStep.vue";
import NameStep from "#layers/steps/app/components/steps/NameStep.vue";
import PathologyStep from "#layers/steps/app/components/steps/PathologyStep.vue";
import WeightStep from "#layers/steps/app/components/steps/WeightStep.vue";

const steps: StepNode<Diet>[] = [
    { key: "name", is: NameStep },
    { key: "gender", is: GenderStep },
    { key: "age", is: AgeStep },
    { key: "weight", is: WeightStep },
    { key: "exercise", is: ExerciseStep },
    { key: "pathology", is: PathologyStep },
];

export default steps;
