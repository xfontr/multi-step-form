<script lang="ts" setup>
import SelectOptions from "#layers/ui/app/components/SelectOptions.vue";
import Form from "./Form.vue";

interface Props {
    initialValue?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{ submit: [boolean] }>();

const { t } = useI18n();

const options = computed<[string, string]>(() => [
    t("commons.no"),
    t("commons.yes"),
]);

function toTextBoolean(value: boolean) {
    const [falseText, trueText] = options.value;
    return value ? trueText : falseText;
}

function onSubmit(value: string | number) {
    const [_, trueText] = options.value;
    emit("submit", value === trueText);
}
</script>

<template>
    <Form
        :initial-value="toTextBoolean(initialValue)"
        @submit="onSubmit"
    >
        <template #default="{ value }">
            <SelectOptions
                v-model="value.current"
                name="pathology"
                :options
            >
                {{ $t("register.pathology.label") }}
            </SelectOptions>
        </template>
    </Form>
</template>
