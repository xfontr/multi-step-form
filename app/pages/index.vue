<script lang="ts" setup>
import Button from "#shared/ui/components/Button.vue";
import Select from "#shared/ui/components/Select.vue";
</script>

<template>
    <section class="hero">
        <header class="hero__header">
            <h1>{{ $t("landing.heading") }}</h1>
            <p>{{ $t("landing.subHeading") }}</p>

            <form class="hero__form">
                <Select :placeholder="$t('landing.inputPlaceholder')" />

                <Button type="submit">
                    {{ $t("landing.cta") }}
                </Button>
            </form>
        </header>
    </section>
</template>

<style lang="scss" scoped>
@use "#shared/ui/scss/index" as *;

.hero {
    min-height: 50vh;
    padding: $distances-m;
    display: flex;
    align-items: center;

    &__header {
        display: flex;
        flex-direction: column;
        gap: $distances-s;
        width: 50%;
    }

    &__form {
        display: flex;
        gap: $distances-s;
    }
}
</style>
