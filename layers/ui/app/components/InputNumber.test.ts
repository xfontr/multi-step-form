import { describe, expect, it } from "vitest";
import { mountPrimeVue } from "../test-utils/mount";
import InputNumberField from "./InputNumber.vue";

describe("input number component", () => {
    it("renders label slot", () => {
        const wrapper = mountPrimeVue(InputNumberField, {
            props: { id: "age" },
            slots: {
                default: "Age",
            },
        });

        expect(wrapper.text()).toContain("Age");
    });

    it("passes id and placeholder to InputNumber", () => {
        const wrapper = mountPrimeVue(InputNumberField, {
            props: {
                id: "age",
                placeholder: "Enter age",
            },
            global: {
                stubs: {
                    InputNumber: true,
                },
            },
        });

        const input = wrapper.find("input-number-stub");

        expect(input.attributes("id")).toBe("age");
        expect(input.attributes("placeholder")).toBe("Enter age");
    });

    it("links label with input via id", () => {
        const wrapper = mountPrimeVue(InputNumberField, {
            props: { id: "age" },
            slots: { default: "Age" },
        });

        const label = wrapper.find("label");

        expect(label.attributes("for")).toBe("age");
    });
});
