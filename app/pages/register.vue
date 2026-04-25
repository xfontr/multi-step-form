<script lang="ts" setup>
import type { Diet } from "#layers/steps/app/types/Diet";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import Steps from "#layers/steps/app/components/Steps.vue";
import useDietStore from "#layers/steps/app/stores/diet";
import useFlowStore from "#layers/steps/app/stores/flow";
import Header from "#layers/ui/app/components/Header.vue";

const { tm } = useI18nArray();

const { diet } = useDietStore();
const { updateStep } = useUsageStore();
const flow = useFlowStore();
const { group } = useGroupStore();

const { nodes, stepNames } = useStepNodes(
    tm("register.steps") as string[],
    group.stepsSkip ?? [],
);

const { previous, next, index } = useQueryStepper(stepNames);

function onSubmit<K extends keyof Diet>(key: K, value: Diet[K]) {
    diet[key] = value;
    next();
    updateStep(flow.index);
}

function onPrevious() {
    previous();
    updateStep(flow.index);
}
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
            :deep(.step__submit) {
                position: absolute !important; // Workarounds primevue style attributes
                right: 0;
                bottom: 0;
                width: 45%;
            }
        }
    }
}
</style>
