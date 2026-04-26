<template>
    <article class="card">
        <slot />
    </article>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.card {
    padding: $distances-m;
    border-radius: $distances-xs;
    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.1);
    background-color: $colors-secondary;
}
</style>
