<script lang="ts" setup>
import SelectOptions from "#layers/ui/app/components/SelectOptions.vue";
import Step from "../Step.vue";

interface Props {
    initialValue?: string;
}

withDefaults(defineProps<Props>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [string] }>();

const MAX_GENDERS = 2;

const { tm } = useI18nArray();

const options = computed<[string, string]>(
    () => tm("data.genders", MAX_GENDERS) as [string, string],
);
</script>

<template>
    <Step
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <SelectOptions
                v-model="value.current"
                name="gender"
                :options
            >
                {{ $t("register.gender.label") }}
            </SelectOptions>
        </template>
    </Step>
</template>
