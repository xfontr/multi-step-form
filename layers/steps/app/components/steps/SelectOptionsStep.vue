<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import { SelectOptions, useI18nArray } from "@multi-step-form/ui";
import Step from "../Step.vue";

const props = defineProps<Props<string>>();

const emit = defineEmits<{ submit: [string] }>();

const { tm } = useI18nArray();
</script>

<template>
    <Step
        :name
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <SelectOptions
                v-model="value.current"
                :name
                :options="tm(`step.${props.name}.options`)"
            >
                {{ $t(`step.${name}.label`) }}
            </SelectOptions>
        </template>
    </Step>
</template>
