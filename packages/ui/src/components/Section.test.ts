import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Section from "./Section.vue";

describe("section component", () => {
    it("renders slot content", () => {
        const wrapper = mount(Section, {
            slots: {
                default: "<p>hello world</p>",
            },
        });

        expect(wrapper.text()).toContain("hello world");
    });

    it("wraps slot inside content container", () => {
        const wrapper = mount(Section, {
            slots: {
                default: "<span>slot</span>",
            },
        });

        expect(wrapper.find(".section__content").html()).toContain("slot");
    });
});
