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
    <div class="select">
        <span>
            <slot />
        </span>

        <Select
            v-model="model"
            :editable
            :options
            fluid
            :placeholder
        />
    </div>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.select {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $distances-xs;
    font-size: $fonts-size-small;
}
</style>
