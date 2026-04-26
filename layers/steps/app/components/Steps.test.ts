import { mountPrimeVue } from "@multi-step-form/ui";
import { describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import Steps from "./Steps.vue";

function createMockStep() {
    return defineComponent({
        props: ["name", "initialValue"],
        emits: ["submit"],
        setup(props, { emit }) {
            return () =>
                h("div", [
                    h("span", { class: "name" }, props.name),
                    h("span", { class: "value" }, String(props.initialValue)),
                    h(
                        "button",
                        {
                            class: "submit",
                            onClick: () => emit("submit", "new-value"),
                        },
                        "submit",
                    ),
                ]);
        },
    });
}

function render(props: any) {
    return mountPrimeVue(Steps, {
        props,
    });
}

describe("steps component", () => {
    it("emits back when clicking back button", async () => {
        const StepA = createMockStep();

        const wrapper = render({
            index: 1,
            store: { age: 10, name: "john" },
            nodes: [{ key: "age", is: StepA, name: "step1" }],
        });

        await wrapper.find(".steps__back").trigger("click");

        expect(wrapper.emitted("back")).toBeTruthy();
    });
});
