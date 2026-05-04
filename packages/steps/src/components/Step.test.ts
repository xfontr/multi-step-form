import { mountPrimeVue } from "@multi-step-form/ui";
import { describe, expect, it, vi } from "vitest";
import { h } from "vue";
import Step from "./Step.vue";

type InputEventWithValue = InputEvent & {
    target: InputEvent["target"] & {
        value: unknown;
    };
};

function render(props = {}) {
    return mountPrimeVue(Step, {
        props,
        slots: {
            default: ({ value }: { value: { current: unknown } }) =>
                h("input", {
                    value: value.current,
                    onInput: (event: InputEventWithValue) =>
                        (value.current = event.target.value),
                }),
        },
    });
}

describe("step component", () => {
    it("renders with initial value", () => {
        const wrapper = render({ initialValue: "test" });

        const input = wrapper.find("input");
        expect((input.element as HTMLInputElement).value).toBe("test");
    });

    it("is invalid by default if no value", async () => {
        const wrapper = render();

        const button = wrapper.find("button");
        expect(button.attributes("disabled")).toBeDefined();
    });

    it("becomes valid when value is set", async () => {
        const wrapper = render();

        const input = wrapper.find("input");
        await input.setValue("test");

        const button = wrapper.find("button");
        expect(button.attributes("disabled")).toBeUndefined();
    });

    it("emits submit when valid", async () => {
        const wrapper = render();

        const input = wrapper.find("input");

        await wrapper.find("form").trigger("submit");
        expect(wrapper.emitted("submit")).toBeFalsy();

        await input.setValue("valid");
        await wrapper.find("form").trigger("submit");

        expect(wrapper.emitted("submit")).toBeTruthy();
        expect(wrapper.emitted("submit")![0]).toEqual(["valid"]);
    });

    it("does not emit submit when invalid", async () => {
        const wrapper = render();

        await wrapper.find("form").trigger("submit");

        expect(wrapper.emitted("submit")).toBeFalsy();
    });

    it("uses custom validate function", async () => {
        const validate = vi.fn((v) => v === "ok");

        const wrapper = render({ validate });

        const input = wrapper.find("input");

        await input.setValue("nope");
        await wrapper.find("form").trigger("submit");

        expect(wrapper.emitted("submit")).toBeFalsy();

        await input.setValue("ok");
        await wrapper.find("form").trigger("submit");

        expect(wrapper.emitted("submit")).toBeTruthy();
    });
});
