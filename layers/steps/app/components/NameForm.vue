<script lang="ts" setup>
import { ref } from "vue";
import Button from "#layers/ui/app/components/Button.vue";
import Input from "#layers/ui/app/components/Input.vue";

interface Props {
    initialValue?: string;
}

const props = withDefaults(defineProps<Props>(), { initialValue: "" });

const emit = defineEmits<{ submit: [string] }>();

const name = ref<string>(props.initialValue);

/**
 * [DEV-COMMENT]
 *
 * Usually we'd want a better validation system, using a library such as Zod.
 * However, based on the validation system I've seen in Dogfy, I've opted to
 * keep it simple (no proper rule separation nor error messages)
 */
const isValid = computed<boolean>(() => /^\D{2,}$/.test(name.value.trim()));

function onSubmit(): void {
    emit("submit", name.value);
}
</script>

<template>
    <form
        class="name-form"
        @submit.prevent="onSubmit"
    >
        <Input
            id="pet-name"
            v-model="name"
            :placeholder="$t('register.name.placeholder')"
        >
            {{ $t("register.name.label") }}
        </Input>

        <Button
            class="name-form__submit"
            type="submit"
            :disabled="!isValid"
        >
            {{ $t("register.name.submit") }}
        </Button>
    </form>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.name-form {
    display: flex;
    flex-direction: column;
    gap: $distances-s;

    &__submit {
        width: fit-content;
        align-self: center;
    }
}
</style>
