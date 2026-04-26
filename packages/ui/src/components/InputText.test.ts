import { mountPrimeVue } from "@multi-step-form/ui";
import { describe, expect, it } from "vitest";
import InputTextField from "./InputText.vue";

describe("input text component", () => {
    it("renders label slot", () => {
        const wrapper = mountPrimeVue(InputTextField, {
            props: { id: "name" },
            slots: {
                default: "Name",
            },
        });

        expect(wrapper.text()).toContain("Name");
    });

    it("passes id and placeholder to InputText", () => {
        const wrapper = mountPrimeVue(InputTextField, {
            props: {
                id: "name",
                placeholder: "Enter name",
            },
            global: {
                stubs: {
                    InputText: true,
                },
            },
        });

        const input = wrapper.find("input-text-stub");

        expect(input.attributes("id")).toBe("name");
        expect(input.attributes("placeholder")).toBe("Enter name");
    });

    it("links label with input via id", () => {
        const wrapper = mountPrimeVue(InputTextField, {
            props: { id: "name" },
            slots: { default: "Name" },
        });

        const label = wrapper.find("label");

        expect(label.attributes("for")).toBe("name");
    });
});
