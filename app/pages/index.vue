<script lang="ts" setup>
import useUsageStore from "#layers/analytics/app/stores/usage";
import SelectStep from "#layers/steps/app/components/steps/SelectStep.vue";
import useStepsStore from "#layers/steps/app/stores/steps";
import Card from "#layers/ui/app/components/Card.vue";
import Header from "#layers/ui/app/components/Header.vue";
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
    <section class="hero">
        <Header class="hero__header">
            <template #heading>
                {{ $t("landing.heading") }}
            </template>
            <template #description>
                {{ $t("landing.subHeading") }}
            </template>
        </Header>
    </section>

    <Card class="cta">
        <SelectStep
            :initial-value="diet.breed"
            name="breed"
            @submit="onSubmit"
        />
    </Card>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.hero {
    padding: $distances-m;
    display: flex;
    background-color: beige;
    align-items: center;
    height: 50vh;

    &__header {
        width: 50%;
    }
}

.cta {
    margin-left: $distances-m;
    margin-top: -$distances-m;
    width: 50%;
}
</style>
