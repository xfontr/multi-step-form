<script
    lang="ts"
    setup
    generic="
        Store extends {
            [K in keyof Store]: string | number | boolean | undefined;
        }
    "
>
import type { StepNode } from "../types/StepNode";
import { Button, Card, Stepper } from "@multi-step-form/ui";

interface Props {
    nodes: Required<StepNode<Store>>[];
    store: Store;
    index: number;
}

defineProps<Props>();

const emit = defineEmits<{
    submit: [key: keyof Store, value: Store[keyof Store]];
    back: [];
}>();

function onSubmit<T extends keyof Store>(key: T, value: unknown) {
    emit("submit", key, value as Store[T]);
}
</script>

<template>
    <Stepper
        class="steps"
        :index
    >
        <template
            v-for="{ key, is, name } in nodes"
            #[name]
            :key
        >
            <Card>
                <component
                    :is
                    :name="key as string"
                    :initial-value="store[key]"
                    @submit="(value: unknown) => onSubmit(key, value)"
                />
            </Card>
        </template>

        <template #back>
            <Button
                :label="$t('commons.back')"
                severity="secondary"
                class="steps__back"
                @click="emit('back')"
            />
        </template>
    </Stepper>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

:deep(.stepper__panel) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

:deep(.stepper__steps) {
    padding: 0 $distances-m;
}

:deep(.step) {
    min-height: 40vh;

    @media (min-width: $breakpoints-l) {
        min-width: 30vh;
    }
}
</style>
