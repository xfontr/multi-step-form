import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SelectField from "./Select.vue";

describe("select component", () => {
    it("passes props to Select", () => {
        const wrapper = shallowMount(SelectField, {
            props: {
                placeholder: "Choose option",
                options: ["A", "B"],
                editable: false,
            },
        });

        const select = wrapper.find("select-stub");

        expect(select.attributes("placeholder")).toBe("Choose option");
        expect(select.attributes("options")).toBe("A,B");
        expect(select.attributes("editable")).toBe("false");
    });

    it("defaults editable to true", () => {
        const wrapper = shallowMount(SelectField, {
            props: {
                placeholder: "Choose option",
                options: ["A", "B"],
            },
        });

        const select = wrapper.find("select-stub");

        expect(select.attributes("editable")).toBe("true");
    });
});
