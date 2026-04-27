<script lang="ts" setup>
import type { NuxtError } from "#app";
import { Card, Header, Section } from "@multi-step-form/ui";

defineProps<{
    error: NuxtError;
}>();
</script>

<template>
    <Section class="error">
        <Card class="error__card">
            <Header class="error__header">
                <template #heading>
                    {{ $t("commons.error.generic") }}
                </template>
                <template #description>
                    {{ error.status }}
                </template>
            </Header>

            <NuxtLink
                to="/"
                class="error__home"
            >
                {{ $t("commons.error.back") as string }}
            </NuxtLink>
        </Card>
    </Section>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: $distances-m;

    &__card {
        display: flex;
        flex-direction: column;
        gap: $distances-m;
        text-align: center;
        margin: 0 auto;

        @media (min-width: $breakpoints-l) {
            max-width: 50vw;
        }
    }
}
</style>
