import { describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import { mountPrimeVue } from "#shared/test-utils/mount";
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
    it("renders nodes with correct props", () => {
        const StepA = createMockStep();

        const wrapper = render({
            index: 0,
            store: { age: 10 },
            nodes: [
                {
                    key: "age",
                    is: StepA,
                    name: "step1",
                },
            ],
        });

        expect(wrapper.find(".name").text()).toBe("age");
        expect(wrapper.find(".value").text()).toBe("10");
    });

    it("emits submit with key + value", async () => {
        const StepA = createMockStep();

        const wrapper = render({
            index: 0,
            store: { age: 10 },
            nodes: [
                {
                    key: "age",
                    is: StepA,
                    name: "step1",
                },
            ],
        });

        await wrapper.find(".submit").trigger("click");

        expect(wrapper.emitted("submit")).toBeTruthy();
        expect(wrapper.emitted("submit")![0]).toEqual(["age", "new-value"]);
    });

    it("renders multiple nodes", () => {
        const StepA = createMockStep();
        const StepB = createMockStep();

        const wrapper = render({
            index: 1,
            store: { age: 10, name: "john" },
            nodes: [
                { key: "age", is: StepA, name: "step1" },
                { key: "name", is: StepB, name: "step2" },
            ],
        });

        const names = wrapper.findAll(".name").map((n) => n.text());

        expect(names).toEqual(["age", "name"]);
    });

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
