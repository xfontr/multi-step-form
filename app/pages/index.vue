<script lang="ts" setup>
import { Card, Header, Section } from "@multi-step-form/ui";
import SelectStep from "#layers/steps/app/components/steps/SelectStep.vue";
import useLandingController from "~/composables/useLandingController";

const { onSubmit, initialValue } = useLandingController();
</script>

<template>
    <Section class="hero">
        <div class="hero__content">
            <Header class="hero__header">
                <template #heading>
                    {{ $t("landing.heading") }}
                </template>
                <template #description>
                    {{ $t("landing.subHeading") }}
                </template>
            </Header>

            <Card class="hero__cta">
                <!--
                This prevents hydration mismatches when navigating back: the server will be undefined, but
                the client will be populated by the persisted store. It's not an ideal workaround.
                 -->
                <ClientOnly>
                    <SelectStep
                        :initial-value
                        name="breed"
                        @submit="onSubmit"
                    />
                </ClientOnly>
            </Card>
        </div>
    </Section>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.hero {
    display: flex;
    align-items: center;
    gap: $distances-l;
    height: 100vh;

    @media (min-width: $breakpoints-l) {
        padding: $distances-m;
    }

    @media (min-width: $breakpoints-l) {
        background: url("/img/dog.webp") no-repeat 45vw;
        background-size: 60%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: $distances-l;
    }

    &__header,
    &__cta {
        @media (min-width: $breakpoints-l) {
            max-width: 40%;
        }
    }
}
</style>
