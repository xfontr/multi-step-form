<!--
[DEV-COMMENT]

PrimeVue Stepper allows to handle the step logic from within.

I opted out of it, since I found it to be quite limiting for
abstract components such as the one below.
-->

<script setup lang="ts">
import { Step, StepList, StepPanel, StepPanels, Stepper } from "primevue";
import { computed, useSlots } from "vue";

interface Props {
    index?: number;
}

const props = withDefaults(defineProps<Props>(), { index: 0 });

const emit = defineEmits<{ update: [string] }>();

const slots = useSlots();

const slotKeys = computed<string[]>(() => Object.keys(slots));

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
                <slot :name />
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
@use "#layers/ui/app/assets/scss/index" as *;

.stepper {
    display: flex;
    flex-direction: column;
    gap: $distances-s;

    .p-steppanels {
        padding: 0;
    }
}
</style>
