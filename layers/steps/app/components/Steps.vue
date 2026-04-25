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
import Button from "#layers/ui/app/components/Button.vue";
import Stepper from "#layers/ui/app/components/Stepper.vue";

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
            <component
                :is
                :name="key as string"
                :initial-value="store[key]"
                @submit="(value: unknown) => onSubmit(key, value)"
            />
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
@use "#layers/ui/app/assets/scss/index" as *;

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

:deep(.step) {
    min-height: 30vh;
}
</style>
