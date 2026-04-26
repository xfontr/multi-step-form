import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Status from "./Status.vue";

describe("status component", () => {
    it("renders loading spinner when status is LOADING", () => {
        const wrapper = mount(Status, {
            props: {
                status: "LOADING",
            },
        });

        const spinner = wrapper.find(".spinner");

        expect(spinner.exists()).toBe(true);
    });

    it("renders error slot when status is ERROR", () => {
        const wrapper = mount(Status, {
            props: {
                status: "ERROR",
            },
            slots: {
                error: "Something went wrong",
            },
        });

        const error = wrapper.find(".status-card__error");

        expect(error.exists()).toBe(true);
        expect(error.text()).toBe("Something went wrong");
    });

    it("renders success slot when status is SUCCESS", () => {
        const wrapper = mount(Status, {
            props: {
                status: "SUCCESS",
            },
            slots: {
                success: "Everything worked",
            },
        });

        const success = wrapper.find(".status-card__success");

        expect(success.exists()).toBe(true);
        expect(success.text()).toBe("Everything worked");
    });

    it("wraps LOADING state inside Card", () => {
        const wrapper = mount(Status, {
            props: {
                status: "LOADING",
            },
        });

        const card = wrapper.findComponent({ name: "Card" });

        expect(card.exists()).toBe(true);
    });

    it("does not render Card when status is IDLE", () => {
        const wrapper = mount(Status, {
            props: {
                status: "IDLE",
            },
        });

        const card = wrapper.findComponent({ name: "Card" });

        expect(card.exists()).toBe(false);
    });
});
