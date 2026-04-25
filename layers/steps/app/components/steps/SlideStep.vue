<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import Slider from "#layers/ui/app/components/Slider.vue";
import { HIGH_ACTIVITY, LOW_ACTIVITY } from "../../configs/constants";
import Step from "../Step.vue";

defineProps<Props<number>>();

const emit = defineEmits<{ submit: [number] }>();

function level(value: number) {
    if (value <= LOW_ACTIVITY) return "low";
    if (value >= HIGH_ACTIVITY) return "high";
    return "medium";
}
</script>

<template>
    <Step
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <Slider v-model="value.current">
                {{ $t(`step.${name}.label`) }}
            </Slider>

            <Message
                v-if="
                    value.current &&
                    $te(`step.${name}.level.${level(value.current)}`)
                "
                severity="secondary"
            >
                {{ $t(`step.${name}.level.${level(value.current)}`) }}
            </Message>
        </template>
    </Step>
</template>
