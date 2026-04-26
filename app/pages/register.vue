<script lang="ts" setup>
import { Header, Status, useI18nArray } from "@multi-step-form/ui";
import useGroupStore from "#layers/analytics/app/stores/group";
import useUsageStore from "#layers/analytics/app/stores/usage";
import useDiet from "#layers/diet/app/composables/useDiet";
import useDietStore from "#layers/diet/app/stores/diet";
import Steps from "#layers/steps/app/components/Steps.vue";
import useStepsStore from "#layers/steps/app/stores/steps";
import stepNodes from "~/steps";

const { tm } = useI18nArray(useRuntimeConfig().public.env === "production");

const { diet } = useDietStore();
const steps = useStepsStore();
const groupStore = useGroupStore();
const { updateStep } = useUsageStore();

const { nodes, stepNames } = useStepNodes(
    tm("register.steps") as string[],
    groupStore.group?.stepsSkip,
    stepNodes,
);

const { previous, next, index } = useQueryStepper(stepNames);

const { signUp, status } = useDiet();

function onSubmit<K extends keyof Diet>(key: K, value: Diet[K]): void {
    diet[key] = value;
    next();
    updateStep(steps.index);
}

function onPrevious(): void {
    previous();
    updateStep(steps.index);
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
            v-if="status === 'IDLE'"
            class="register__steps"
            :store="diet"
            :nodes
            :index
            @submit="onSubmit"
            @back="onPrevious"
            @end="signUp"
        />

        <Status :status>
            <template #success>
                <Message severity="success">
                    {{ $t("register.success") }}
                </Message>

                <Button @click="useRestart">
                    {{ $t("commons.restart") }}
                </Button>
            </template>

            <template #error>
                <Message severity="error">
                    {{ $t("register.error") }}
                </Message>
            </template>
        </Status>
    </section>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.register {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
    height: 100vh;

    &__header {
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__steps {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        :deep(.stepper__content) {
            max-width: 50%;
        }

        :deep(.steps__back) {
            position: absolute !important; // Workarounds primevue style attributes
            left: $distances-m;
            bottom: $distances-m;

            @media (min-width: $breakpoints-xl) {
                margin: 0 auto;
                width: 30%;
            }
        }

        :deep(.step__submit) {
            @media (min-width: $breakpoints-xl) {
                position: absolute !important; // Workarounds primevue style attributes
                right: $distances-m;
                bottom: $distances-m;
                width: 52%;
            }
        }
    }
}
</style>
