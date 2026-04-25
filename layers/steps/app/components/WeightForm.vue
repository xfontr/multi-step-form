<script lang="ts" setup>
import InputNumber from "#layers/ui/app/components/InputNumber.vue";
import Form from "./Form.vue";

interface Props {
    initialValue?: number;
}

defineProps<Props>();

const emit = defineEmits<{ submit: [number | undefined] }>();
</script>

<template>
    <Form
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

        <template #submit>
            {{ $t("register.weight.submit") }}
        </template>
    </Form>
</template>
