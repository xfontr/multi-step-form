import type { StepNode } from "#layers/steps/app/types/StepNode";
import type { Diet } from "./types/Diet";

import BooleanStep from "#layers/steps/app/components/steps/BooleanStep.vue";
import NumberStep from "#layers/steps/app/components/steps/NumberStep.vue";
import SelectStep from "#layers/steps/app/components/steps/SelectStep.vue";
import SlideStep from "#layers/steps/app/components/steps/SlideStep.vue";
import TextStep from "#layers/steps/app/components/steps/TextStep.vue";

const steps: StepNode<Diet>[] = [
    { key: "name", is: TextStep },
    { key: "gender", is: BooleanStep },
    { key: "age", is: NumberStep },
    { key: "weight", is: NumberStep },
    { key: "exercise", is: SlideStep },
    { key: "pathology", is: SelectStep },
];

export default steps;
