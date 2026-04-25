<script lang="ts" setup generic="T extends string | number">
import type { UnwrapRef } from "vue";
import Button from "#layers/ui/app/components/Button.vue";

interface Props {
    initialValue?: T;
    validate?: (value?: UnwrapRef<T>) => boolean;
}

const props = withDefaults(defineProps<Props>(), {
    validate: (value?: UnwrapRef<T>) => Boolean(value),
});

const emit = defineEmits<{ submit: [UnwrapRef<T> | undefined] }>();

const value = ref<{ current: T | undefined }>({ current: props.initialValue });

const isValid = computed<boolean>(() => {
    return props.validate(value.value.current);
});

function onSubmit(): void {
    if (!isValid.value) return;
    emit("submit", value.value.current);
}
</script>

<template>
    <form
        class="form"
        @submit.prevent="onSubmit"
    >
        <slot
            :value
            :is-valid
        />

        <Button
            class="form__submit"
            type="submit"
            :disabled="!isValid"
        >
            <slot name="submit" />
        </Button>
    </form>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.form {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
}
</style>
