<script lang="ts" setup>
import Select from "#layers/ui/app/components/Select.vue";
import Steps from "../Step.vue";

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
    <Steps
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
    </Steps>
</template>
