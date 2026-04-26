<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import { InputText } from "@multi-step-form/ui";
import Step from "../Step.vue";

withDefaults(defineProps<Props<string>>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [string] }>();

function validate(value?: string): boolean {
    return /^\D{2,}$/.test(value?.trim() ?? "");
}
</script>

<template>
    <Step
        :name
        :validate
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <InputText
                id="pet-name"
                v-model="value.current"
                :placeholder="$t(`step.${name}.placeholder`)"
            >
                {{ $t(`step.${name}.label`) }}
            </InputText>
        </template>
    </Step>
</template>
