<script lang="ts" setup>
import SelectOptions from "#layers/ui/app/components/SelectOptions.vue";
import Form from "./Form.vue";

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
    <Form
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
    </Form>
</template>
