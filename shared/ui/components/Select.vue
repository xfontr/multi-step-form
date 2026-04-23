<script setup lang="ts">
import { Select } from "primevue";

interface Props {
    placeholder: string;
    options: string[];
    editable?: boolean;
}

withDefaults(defineProps<Props>(), { editable: true });
</script>

<template>
    <Select
        :editable
        :options
        :placeholder
    />
</template>
