<template>
    <section class="section">
        <div class="section__content">
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.section {
    &__content {
        max-width: $breakpoints-s;
        width: 100%;
        margin: 0 auto;

        @media (min-width: $breakpoints-l) {
            max-width: $breakpoints-m;
        }

        @media (min-width: $breakpoints-xl) {
            max-width: $breakpoints-l;
        }

        @media (min-width: $breakpoints-l) {
            max-width: $breakpoints-xl;
        }
    }
}
</style>
