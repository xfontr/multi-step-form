import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Header from "./Header.vue";

describe("header component", () => {
    it("renders heading slot when provided", () => {
        const wrapper = mount(Header, {
            slots: {
                heading: "My Title",
            },
        });

        const h1 = wrapper.find("h1");

        expect(h1.exists()).toBe(true);
        expect(h1.text()).toBe("My Title");
    });

    it("renders description slot when provided", () => {
        const wrapper = mount(Header, {
            slots: {
                description: "My description",
            },
        });

        const p = wrapper.find("p");

        expect(p.exists()).toBe(true);
        expect(p.text()).toBe("My description");
    });

    it("does not render heading if slot is missing", () => {
        const wrapper = mount(Header);

        expect(wrapper.find("h1").exists()).toBe(false);
        expect(wrapper.find("p").exists()).toBe(false);
    });

    it("renders both slots together", () => {
        const wrapper = mount(Header, {
            slots: {
                heading: "Title",
                description: "Desc",
            },
        });

        expect(wrapper.find("h1").text()).toBe("Title");
        expect(wrapper.find("p").text()).toBe("Desc");
    });
});
