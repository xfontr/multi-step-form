import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "./Button.vue";

describe("button component", () => {
    it("should render a button with text 'test'", () => {
        const text = "test";

        const wrapper = mount(Button, {
            slots: {
                default: text,
            },
        });

        const button = wrapper.find("button");

        expect(button.text()).toBe(text);
    });
});
