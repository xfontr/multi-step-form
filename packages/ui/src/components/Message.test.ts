import { mountPrimeVue } from "@multi-step-form/ui";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MessageField from "./Message.vue";

describe("message component", () => {
    it("renders slot content", () => {
        const wrapper = mountPrimeVue(MessageField, {
            slots: {
                default: "Hello world",
            },
        });

        expect(wrapper.text()).toContain("Hello world");
    });

    it("passes severity prop to Message", () => {
        const wrapper = shallowMount(MessageField, {
            props: {
                severity: "error",
            },
        });

        const message = wrapper.find("message-stub");

        expect(message.attributes("severity")).toBe("error");
    });

    it("does not set severity when not provided", () => {
        const wrapper = shallowMount(MessageField);

        const message = wrapper.find("message-stub");

        expect(message.attributes("severity")).toBeUndefined();
    });
});
