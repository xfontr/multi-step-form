<script lang="ts" setup generic="T extends string | number">
import type { UnwrapRef } from "vue";
import { Button } from "@multi-step-form/ui";

interface Props {
    initialValue?: T;
    validate?: (value?: UnwrapRef<T>) => boolean;
    name?: string;
}

const props = withDefaults(defineProps<Props>(), {
    validate: (value?: UnwrapRef<T>) => Boolean(value),
});

const emit = defineEmits<{ submit: [UnwrapRef<T>] }>();

const value = ref<{ current: T | undefined }>({ current: props.initialValue });

const isValid = computed<boolean>(() => {
    return props.validate(value.value.current);
});

function onSubmit(): void {
    if (!isValid.value) return;
    emit("submit", value.value.current!);
}

const submitKey = `step.${props.name}.submit`;
</script>

<template>
    <form
        class="step"
        @submit.prevent="onSubmit"
    >
        <slot
            :value
            :is-valid
        />

        <Button
            class="step__submit"
            type="submit"
            :disabled="!isValid"
        >
            {{ $te(submitKey) ? $t(submitKey) : $t("commons.continue") }}
        </Button>
    </form>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.step {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
}
</style>
