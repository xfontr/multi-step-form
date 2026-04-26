<script setup lang="ts">
import { Step, StepList, StepPanel, StepPanels, Stepper } from "primevue";
import { computed, useSlots } from "vue";

interface Props {
    index?: number;
}

const props = withDefaults(defineProps<Props>(), { index: 0 });

const emit = defineEmits<{ update: [string] }>();

const slots = useSlots();

const slotKeys = computed<string[]>(() =>
    Object.keys(slots).filter((key) => key !== "back"),
);

const value = computed<string>(() => (props.index + 1).toString());

function onUpdateValue(value: string): void {
    emit("update", value);
}
</script>

<template>
    <Stepper
        v-if="slotKeys.length"
        class="stepper"
        :value
        linear
        @update:value="onUpdateValue"
    >
        <StepPanels>
            <StepPanel
                v-for="(name, slotIndex) in slotKeys"
                :key="name"
                class="stepper__panel"
                :value="(slotIndex + 1).toString()"
            >
                <article class="stepper__content">
                    <slot :name />
                    <slot
                        v-if="index"
                        name="back"
                    />
                </article>
            </StepPanel>
        </StepPanels>

        <StepList class="stepper__steps">
            <Step
                v-for="(name, slotIndex) in slotKeys"
                :key="name"
                :value="(slotIndex + 1).toString()"
            >
                {{ name }}
            </Step>
        </StepList>
    </Stepper>
</template>

<style lang="scss" scoped>
@use "@multi-step-form/ui/src/assets/scss/index" as *;

.stepper {
    display: flex;
    flex-direction: column;
    gap: $distances-s;

    .p-steppanels {
        padding: 0;
    }

    &__content {
        position: relative;
        width: 100%;
    }
}
</style>
