<script lang="ts" setup>
import Select from "#layers/ui/app/components/Select.vue";
import Form from "../Form.vue";

interface Props {
    initialValue?: string;
}

withDefaults(defineProps<Props>(), {
    initialValue: "",
});

const emit = defineEmits<{ submit: [string] }>();

const { tm } = useI18nArray();
</script>

<template>
    <Form
        :initial-value
        @submit="(v) => emit('submit', v)"
    >
        <template #default="{ value }">
            <Select
                v-model="value.current"
                :options="tm('data.breeds')"
                :placeholder="$t('register.race.placeholder')"
            />
        </template>
    </Form>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.race-form {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
}
</style>
