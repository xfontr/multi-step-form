<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import Select from "#layers/ui/app/components/Select.vue";
import Steps from "../Step.vue";

withDefaults(defineProps<Props>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [string] }>();

const { tm } = useI18nArray();
</script>

<template>
    <Steps
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <Select
                v-model="value.current"
                :options="tm(`step.${name}.options`)"
                :placeholder="$t(`step.${name}.placeholder`)"
            />
        </template>
    </Steps>
</template>
