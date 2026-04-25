<script lang="ts" setup>
import InputNumber from "#layers/ui/app/components/InputNumber.vue";
import Message from "#layers/ui/app/components/Message.vue";
import { DOG_YEARS } from "../configs/constants";
import Form from "./Form.vue";

interface Props {
    initialValue?: number;
}

defineProps<Props>();

const emit = defineEmits<{ submit: [number | undefined] }>();

const { t } = useI18n();

function dogYears(years: number) {
    return t("register.age.years", { years: years * DOG_YEARS });
}
</script>

<template>
    <Form
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value, isValid }">
            <InputNumber
                id="pet-age"
                v-model="value.current"
                :placeholder="$t('register.age.placeholder')"
            >
                {{ $t("register.age.label") }}
            </InputNumber>

            <Message v-if="isValid && value.current">
                {{ dogYears(value.current) }}
            </Message>
        </template>

        <template #submit>
            {{ $t("register.age.submit") }}
        </template>
    </Form>
</template>
