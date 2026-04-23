<script setup lang="ts">
import { Select } from "primevue";

interface Props {
    placeholder: string;
}

defineProps<Props>();
</script>

<template>
    <Select
        editable
        :options="['Food', 'drinks']"
        option-label="name"
        :placeholder
    />
</template>
