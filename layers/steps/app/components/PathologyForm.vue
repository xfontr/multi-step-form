<script lang="ts" setup>
import SelectOptions from "#layers/ui/app/components/SelectOptions.vue";
import Form from "./Form.vue";

interface Props {
    initialValue?: string;
}

withDefaults(defineProps<Props>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [boolean] }>();

const { t } = useI18n();

const options = computed<[string, string]>(() => [
    t("commons.yes"),
    t("commons.no"),
]);

function onSubmit(value: string | number) {
    const [trueText] = options.value;
    emit("submit", value === trueText);
}
</script>

<template>
    <Form
        :initial-value
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
