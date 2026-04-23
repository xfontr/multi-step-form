<template>
    <button
        class="cta-button"
        type="button"
    >
        <slot />
    </button>
</template>

<script lang="ts"></script>

<style lang="scss">
@use "#shared/ui/scss/index" as *;

.cta-button {
    cursor: pointer;
    background-color: $colors-primary;
}
</style>
