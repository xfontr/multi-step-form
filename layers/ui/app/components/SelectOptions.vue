<script lang="ts" setup>
import { SelectButton } from "primevue";

interface Props {
    options: string[];
    name: string;
}

defineProps<Props>();

const model = defineModel<string>();
</script>

<template>
    <div class="select-options">
        <span>
            <slot />
        </span>

        <SelectButton
            v-model="model"
            :name
            :options
        />
    </div>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.select-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $distances-s;
}
</style>
