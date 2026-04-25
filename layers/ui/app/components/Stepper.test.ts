import { describe, expect, it, vi } from "vitest";
import { mountPrimeVue } from "../test-utils/mount";
import StepperField from "./Stepper.vue";

describe("stepper component", () => {
    it("is not visible if no slots are provided", () => {
        const wrapper = mountPrimeVue(StepperField);

        expect(wrapper.findComponent({ name: "Stepper" }).isVisible()).toBe(
            false,
        );
    });

    it("renders steps based on named slots (excluding back)", () => {
        const wrapper = mountPrimeVue(StepperField, {
            slots: {
                step1: "Step 1 content",
                step2: "Step 2 content",
                back: "Back button",
            },
        });

        const steps = wrapper.findAll(".stepper__panel");

        expect(steps).toHaveLength(2);
        expect(wrapper.text()).toContain("step1");
        expect(wrapper.text()).toContain("step2");
        expect(wrapper.text()).not.toContain("back");
    });

    it("renders back slot only when index > 0", () => {
        const wrapper = mountPrimeVue(StepperField, {
            props: { index: 1 },
            slots: {
                step1: "Step 1",
                back: "Back button",
            },
        });

        expect(wrapper.text()).toContain("Back button");
    });
});
