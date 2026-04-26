<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import InputNumber from "#layers/ui/app/components/InputNumber.vue";
import Message from "#layers/ui/app/components/Message.vue";
import Step from "../Step.vue";

const props = defineProps<Props<number>>();

const emit = defineEmits<{ submit: [number] }>();

const messageKey = `step.${props.name}.message`;

function validate(value?: number): boolean {
    return value !== undefined && value !== null && value <= 60;
}
</script>

<template>
    <Step
        :name
        :initial-value
        :validate
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value, isValid }">
            <InputNumber
                :id="name"
                v-model="value.current"
                :placeholder="$t(`step.${name}.placeholder`)"
            >
                {{ $t(`step.${name}.label`) }}
            </InputNumber>

            <Message v-if="$te(messageKey) && value.current && isValid">
                {{ $t(messageKey, { value: value.current }) }}
            </Message>
        </template>
    </Step>
</template>
