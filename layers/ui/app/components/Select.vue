<script setup lang="ts">
import { Select } from "primevue";

interface Props {
    placeholder: string;
    options: string[];
    editable?: boolean;
}

withDefaults(defineProps<Props>(), { editable: true });

const model = defineModel<string>();
</script>

<template>
    <Select
        v-model="model"
        :editable
        :options
        :placeholder
    />
</template>
