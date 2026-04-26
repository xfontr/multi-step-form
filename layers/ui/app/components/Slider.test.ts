import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { mountPrimeVue } from "#shared/test-utils/mount";
import SliderField from "./Slider.vue";

describe("slider component", () => {
    it("renders default slot content", () => {
        const wrapper = mountPrimeVue(SliderField, {
            slots: {
                default: "Volume",
            },
        });

        expect(wrapper.text()).toContain("Volume");
    });

    it("passes number prop to Slider", () => {
        const wrapper = shallowMount(SliderField);

        const slider = wrapper.find("slider-stub");

        expect(slider.attributes("number")).toBe("");
    });
});
