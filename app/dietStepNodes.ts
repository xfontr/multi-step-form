import type { StepNode } from "@multi-step-form/steps";

import {
    BooleanStep,
    NumberStep,
    SelectOptionsStep,
    SlideStep,
    TextStep,
} from "@multi-step-form/steps";

const dietStepNodes: StepNode<Diet>[] = [
    { key: "name", is: TextStep },
    { key: "gender", is: SelectOptionsStep },
    { key: "age", is: NumberStep },
    { key: "weight", is: NumberStep },
    { key: "exercise", is: SlideStep },
    { key: "pathology", is: BooleanStep },
];

export default dietStepNodes;
