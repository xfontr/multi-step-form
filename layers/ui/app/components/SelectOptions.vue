<script lang="ts" setup>
import { SelectButton } from "primevue";

interface Props {
    /**
     * @description Maximum two options.
     */
    options: [string, string];
    name: string;
}

defineProps<Props>();

const model = defineModel<string>();
</script>

<template>
    <div class="select-button">
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

.select-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $distances-s;
}
</style>
