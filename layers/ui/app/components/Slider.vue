<script lang="ts" setup>
import { Slider } from "primevue";

const model = defineModel<number>();
</script>

<template>
    <div class="slider">
        <span>
            <slot />
        </span>

        <Slider
            v-model="model"
            class="slider__slider"
            number
        />
    </div>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $distances-s;

    &__slider {
        width: 100%;
    }
}
</style>
