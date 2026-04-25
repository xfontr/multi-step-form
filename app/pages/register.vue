<script lang="ts" setup>
import type { Diet } from "#layers/steps/app/types/Diet";
import type { StepNode } from "#layers/steps/app/types/StepNode";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import Steps from "#layers/steps/app/components/Steps.vue";
import { FLOW_TOTAL_STEPS } from "#layers/steps/app/configs/constants";
import useDietStore from "#layers/steps/app/stores/diet";
import useFlowStore from "#layers/steps/app/stores/flow";
import steps from "#layers/steps/steps";
import Header from "#layers/ui/app/components/Header.vue";

const { tm } = useI18nArray();

const { diet } = useDietStore();
const { updateStep, init } = useUsageStore();
const flow = useFlowStore();
const { group } = useGroupStore();

const nodes = computed<StepNode<Diet>[]>(() => {
    const allSteps = tm("register.steps") as string[];
    const skipSet = new Set(group.stepsSkip ?? []);

    return steps.flatMap((node, i) =>
        skipSet.has(i) ? [] : { ...node, name: allSteps[i] },
    );
});

const { previous, next, index } = useQueryStepper(
    nodes.value.map(({ name }) => name!),
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

        <Steps
            class="register__steps"
            :store="diet"
            :nodes
            :index
            @submit="onSubmit"
            @back="onPrevious"
        />
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

    &__steps {
        :deep(.steps__back) {
            margin: 0 auto;
            position: absolute !important; // Workarounds primevue style attributes
            left: 0;
            bottom: 0;
            width: 45%;
        }

        &:has(.steps__back) {
            :deep(.form__submit) {
                position: absolute !important; // Workarounds primevue style attributes
                right: 0;
                bottom: 0;
                width: 45%;
            }
        }
    }
}
</style>
