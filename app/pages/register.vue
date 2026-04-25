<script lang="ts" setup>
import NameForm from "#layers/steps/app/components/NameForm.vue";
import useDietStore from "#layers/steps/app/stores/diet";
import Button from "#layers/ui/app/components/Button.vue";
import Header from "#layers/ui/app/components/Header.vue";
import Stepper from "#layers/ui/app/components/Stepper.vue";

const { tm } = useI18nArray();
const { diet } = useDietStore();

const steps = computed<string[]>(() => tm("register.steps"));

const { previous, onSubmit, index } = useQueryStepper(steps);

function onNameSubmit(name: string): void {
    onSubmit(() => {
        diet.name = name;
    });
}
</script>

<template>
    <section class="register">
        <Header class="register__header">
            <template #heading>
                {{ $t("register.heading") }}
            </template>

            <template #description>
                {{ $t("register.description") }}
            </template>
        </Header>

        <Stepper :index>
            <template #[steps[0]]>
                <NameForm
                    :initial-value="diet.name"
                    @submit="onNameSubmit"
                />
            </template>

            <template #[steps[1]]>
                <p>Step 2</p>
            </template>

            <template #[steps[2]]>
                <p>Step 3</p>
            </template>
        </Stepper>

        <Button
            v-if="index"
            label="Back"
            severity="secondary"
            class="register__back"
            @click="previous"
        />
    </section>
</template>

<style lang="scss" scoped>
@use "#layers/ui/app/assets/scss/index" as *;

.register {
    display: flex;
    flex-direction: column;
    gap: $distances-s;

    &__header {
        padding: $distances-m;
        height: 20vh;
    }

    &__back {
        width: 20%;
        margin: 0 auto;
    }
}

:deep(.stepper__panel) {
    min-height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: beige;
}

:deep(.stepper__steps) {
    padding: 0 $distances-m;
}
</style>
