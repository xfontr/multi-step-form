<script lang="ts" setup>
import type { Diet } from "#layers/steps/app/types/Diet";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import { FLOW_TOTAL_STEPS } from "#layers/steps/app/configs/constants";
import useDietStore from "#layers/steps/app/stores/diet";
import useFlowStore from "#layers/steps/app/stores/flow";
import form from "#layers/steps/form";
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

const nodes = computed(() =>
    form.filter((_, index) => !group.stepsSkip?.includes(index)),
);

function onSubmit<K extends keyof Diet>(key: K, value: unknown) {
    diet[key] = value as Diet[K];
    next();
    updateStep(flow.index);
}

function onPrevious() {
    previous();
    updateStep(flow.index);
}

onMounted(() => {
    init(FLOW_TOTAL_STEPS - (group.stepsSkip?.length ?? 0));
});
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
                v-for="({ key, is }, i) in nodes"
                #[steps[i]]
                :key
            >
                <component
                    :is
                    :initial-value="diet[key]"
                    @submit="(value: unknown) => onSubmit(key, value)"
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
