<script lang="ts" setup>
import type { Diet } from "../types/Diet";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import Steps from "#layers/steps/app/components/Steps.vue";
import useStepsStore from "#layers/steps/app/stores/steps";
import Header from "#layers/ui/app/components/Header.vue";
import steps from "~/steps";
import useDietStore from "~/stores/diet";

const { tm } = useI18nArray();

const { diet } = useDietStore();
const { updateStep } = useUsageStore();
const flow = useStepsStore();
const { group } = useGroupStore();

const { nodes, stepNames } = useStepNodes(
    tm("register.steps") as string[],
    group.stepsSkip ?? [],
    steps,
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
