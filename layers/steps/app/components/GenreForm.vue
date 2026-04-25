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

const { tm } = useI18nArray();

function validate(value: string): boolean {
    return Boolean(value);
}

const options = computed<[string, string]>(
    () => tm("data.genres").slice(0, 2) as [string, string],
);
</script>

<template>
    <Form
        :initial-value
        :validate
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <SelectOptions
                v-model="value.current"
                name="genre"
                :options
            >
                {{ $t("register.genre.label") }}
            </SelectOptions>
        </template>

        <template #submit>
            {{ $t("register.genre.submit") }}
        </template>
    </Form>
</template>
