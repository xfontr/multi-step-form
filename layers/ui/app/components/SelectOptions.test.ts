import { describe, expect, it } from "vitest";
import { mountPrimeVue } from "../test-utils/mount";
import SelectOptionsField from "./SelectOptions.vue";

describe("select options component", () => {
    it("renders default slot content", () => {
        const wrapper = mountPrimeVue(SelectOptionsField, {
            props: {
                name: "choice",
                options: ["A", "B"],
            },
            slots: {
                default: "Pick one",
            },
        });

        expect(wrapper.text()).toContain("Pick one");
    });
});
