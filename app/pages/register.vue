<script lang="ts" setup>
import type { Diet } from "#layers/steps/app/types/Diet";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import ExerciseForm from "#layers/steps/app/components/ExerciseForm.vue";
import GenderForm from "#layers/steps/app/components/GenderForm.vue";
import NameForm from "#layers/steps/app/components/NameForm.vue";
import PatologyForm from "#layers/steps/app/components/PathologyForm.vue";
import WeightForm from "#layers/steps/app/components/WeightForm.vue";
import { FLOW_TOTAL_STEPS } from "#layers/steps/app/configs/constants";
import useDietStore from "#layers/steps/app/stores/diet";
import useFlowStore from "#layers/steps/app/stores/flow";
import Button from "#layers/ui/app/components/Button.vue";
import Header from "#layers/ui/app/components/Header.vue";
import Stepper from "#layers/ui/app/components/Stepper.vue";

const { tm } = useI18nArray();

const { diet } = useDietStore();
const { updateStep, init } = useUsageStore();
const flow = useFlowStore();
const { group } = useGroupStore();

const steps = computed<string[]>(() => {
    const allSteps = tm("register.steps") as string[];
    return allSteps.filter((_, index) => !group.stepsSkip?.includes(index));
});

const { previous, next, index } = useQueryStepper(steps);

function onSubmit<K extends keyof Diet>(key: K) {
    return (value: Diet[K]) => {
        diet[key] = value;
        next();
        updateStep(flow.index);
    };
}

function onPrevious() {
    previous();
    updateStep(flow.index);
}

onMounted(() => {
    init(FLOW_TOTAL_STEPS - (group.stepsSkip?.length ?? 0));
});

const onSubmitName = onSubmit("name");
const onSubmitGender = onSubmit("gender");
const onSubmitAge = onSubmit("age");
const onSubmitWeight = onSubmit("weight");
const onSubmitExercise = onSubmit("exercise");
const onSubmitPathology = onSubmit("pathology");
</script>

<template>
    <section class="register">
        <Header class="register__header">
            <template #heading>
                {{ $t("register.heading") }}
            </template>

            <template #description>
                {{ $t("register.description") }}
            </template>
        </Header>

        <Stepper :index>
            <template
                v-if="!group.stepsSkip?.includes(0)"
                #[steps[0]]
            >
                <NameForm
                    :initial-value="diet.name"
                    @submit="onSubmitName"
                />
            </template>

            <template
                v-if="!group.stepsSkip?.includes(1)"
                #[steps[1]]
            >
                <GenderForm
                    :initial-value="diet.gender"
                    @submit="onSubmitGender"
                />
            </template>

            <template
                v-if="!group.stepsSkip?.includes(2)"
                #[steps[2]]
            >
                <AgeForm
                    :initial-value="diet.age"
                    @submit="onSubmitAge"
                />
            </template>

            <template
                v-if="!group.stepsSkip?.includes(3)"
                #[steps[3]]
            >
                <WeightForm
                    :initial-value="diet.weight"
                    @submit="onSubmitWeight"
                />
            </template>

            <template
                v-if="!group.stepsSkip?.includes(4)"
                #[steps[4]]
            >
                <ExerciseForm
                    :initial-value="diet.exercise"
                    @submit="onSubmitExercise"
                />
            </template>

            <template
                v-if="!group.stepsSkip?.includes(5)"
                #[steps[5]]
            >
                <PatologyForm
                    :initial-value="diet.pathology"
                    @submit="onSubmitPathology"
                />
            </template>

            <template #back>
                <Button
                    :label="$t('commons.back')"
                    severity="secondary"
                    class="register__back"
                    @click="onPrevious"
                />
            </template>
        </Stepper>
    </section>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.register {
    display: flex;
    flex-direction: column;
    gap: $distances-s;

    &__header {
        padding: $distances-m;
        height: 20vh;
    }

    &__back {
        margin: 0 auto;
        position: absolute !important; // Workarounds primevue style attributes
        left: 0;
        bottom: 0;
        width: 45%;
    }

    &:has(.register__back) {
        :deep(.form__submit) {
            position: absolute !important; // Workarounds primevue style attributes
            right: 0;
            bottom: 0;
            width: 45%;
        }
    }
}

:deep(.stepper__panel) {
    min-height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: beige;
}

:deep(.stepper__steps) {
    padding: 0 $distances-m;
}

:deep(.stepper__content) {
    width: 50%;
}

:deep(.form) {
    min-height: 30vh;
}
</style>
