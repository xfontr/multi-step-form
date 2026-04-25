<script lang="ts" setup>
import RaceForm from "#layers/steps/app/components/RaceForm.vue";
import useDietStore from "#layers/steps/app/stores/diet";
import useFlowStore from "#layers/steps/app/stores/flow";
import Card from "#layers/ui/app/components/Card.vue";
import Header from "#layers/ui/app/components/Header.vue";

const { diet } = useDietStore();
const { up, update } = useFlowStore();

function onSubmit(race: string): void {
    diet.race = race;
    up();
    navigateTo("/register");
}

onMounted(() => {
    update(0);
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
        <RaceForm
            :initial-value="diet.race"
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
