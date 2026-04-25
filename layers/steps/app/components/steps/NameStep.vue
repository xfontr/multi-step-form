<script lang="ts" setup>
import InputText from "#layers/ui/app/components/InputText.vue";
import Step from "../Step.vue";

interface Props {
    initialValue?: string;
}

withDefaults(defineProps<Props>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [string] }>();

function validate(value?: string): boolean {
    return /^\D{2,}$/.test(value?.trim() ?? "");
}
</script>

<template>
    <Step
        :validate
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <InputText
                id="pet-name"
                v-model="value.current"
                :placeholder="$t('register.name.placeholder')"
            >
                {{ $t("register.name.label") }}
            </InputText>
        </template>
    </Step>
</template>
