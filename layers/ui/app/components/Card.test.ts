import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Card from "./Card.vue";

describe("card component", () => {
    it("should render slot content inside the card", () => {
        const content = "hello card";

        const wrapper = mount(Card, {
            slots: {
                default: content,
            },
        });

        const article = wrapper.find("article");

        expect(article.text()).toBe(content);
    });
});
