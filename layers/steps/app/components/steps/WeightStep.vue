<script lang="ts" setup>
import InputNumber from "#layers/ui/app/components/InputNumber.vue";
import Step from "../Step.vue";

interface Props {
    initialValue?: number;
}

defineProps<Props>();

const emit = defineEmits<{ submit: [number] }>();
</script>

<template>
    <Step
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <InputNumber
                id="pet-weight"
                v-model="value.current"
                :placeholder="$t('register.weight.placeholder')"
            >
                {{ $t("register.weight.label") }}
            </InputNumber>
        </template>
    </Step>
</template>
