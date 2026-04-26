<script lang="ts" setup>
import useUsageStore from "#layers/analytics/app/stores/usage";
import SelectStep from "#layers/steps/app/components/steps/SelectStep.vue";
import useStepsStore from "#layers/steps/app/stores/steps";
import Card from "#layers/ui/app/components/Card.vue";
import Header from "#layers/ui/app/components/Header.vue";
import Section from "#layers/ui/app/components/Section.vue";
import useDietStore from "~/stores/diet";

const { diet } = useDietStore();
const flow = useStepsStore();

const usage = useUsageStore();

function onSubmit(breed: string): void {
    diet.breed = breed;
    flow.up();
    usage.updateStep(flow.index);
    navigateTo("/register");
}

onMounted(() => {
    flow.update(0);
});
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
                <SelectStep
                    :initial-value="diet.breed"
                    name="breed"
                    @submit="onSubmit"
                />
            </Card>
        </div>
    </Section>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

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
