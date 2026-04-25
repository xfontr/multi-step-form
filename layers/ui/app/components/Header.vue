<script lang="ts" scoped></script>

<template>
    <header class="header">
        <h1 v-if="$slots.heading">
            <slot name="heading" />
        </h1>
        <p v-if="$slots.description">
            <slot name="description" />
        </p>
    </header>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.header {
    display: flex;
    flex-direction: column;
    gap: $distances-s;
}
</style>
