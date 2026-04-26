<script lang="ts" setup>
import type { Props } from "../../types/StepProps";
import SelectOptions from "#layers/ui/app/components/SelectOptions.vue";
import Steps from "../Step.vue";

defineProps<Props<boolean>>();

const emit = defineEmits<{ submit: [boolean] }>();

const { t } = useI18n();

const options = computed<[string, string]>(() => [
    t("commons.no"),
    t("commons.yes"),
]);

function toTextBoolean(value?: boolean) {
    const [falseText, trueText] = options.value;
    return value ? trueText : falseText;
}

function onSubmit(value: string | number) {
    const [_, trueText] = options.value;
    emit("submit", value === trueText);
}
</script>

<template>
    <Steps
        :name
        :initial-value="toTextBoolean(initialValue)"
        @submit="onSubmit"
    >
        <template #default="{ value }">
            <SelectOptions
                v-model="value.current"
                :name
                :options
            >
                {{ $t(`step.${name}.label`) }}
            </SelectOptions>
        </template>
    </Steps>
</template>
