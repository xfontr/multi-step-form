import { describe, expect, it } from "vitest";
import TextStep from "../components/steps/TextStep.vue";
import useStepNodes from "./useStepNodes";

describe("useStepNodes", () => {
    function createStepNode(key: string) {
        return { key, is: TextStep };
    }

    it("maps nodes with names from list", () => {
        const list = ["step1", "step2"];
        const skip = undefined;

        const stepNodes = [createStepNode("a"), createStepNode("b")];

        const { nodes, stepNames } = useStepNodes(list, skip, stepNodes);

        expect(nodes.value).toEqual([
            { key: "a", is: expect.anything(), name: "step1" },
            { key: "b", is: expect.anything(), name: "step2" },
        ]);

        expect(stepNames.value).toEqual(["step1", "step2"]);
    });

    it("skips nodes based on index", () => {
        const list = ["step1", "step2", "step3"];
        const skip = [1];

        const stepNodes = [
            createStepNode("a"),
            createStepNode("b"),
            createStepNode("c"),
        ];

        const { nodes, stepNames } = useStepNodes(list, skip, stepNodes);

        expect(nodes.value).toEqual([
            { key: "a", is: expect.anything(), name: "step1" },
            { key: "c", is: expect.anything(), name: "step3" },
        ]);

        expect(stepNames.value).toEqual(["step1", "step3"]);
    });

    it("skips nodes when list entry is falsy", () => {
        const list = ["step1", "", "step3"];
        const skip = undefined;

        const stepNodes = [
            createStepNode("a"),
            createStepNode("b"),
            createStepNode("c"),
        ];

        const { nodes, stepNames } = useStepNodes(list, skip, stepNodes);

        expect(nodes.value).toEqual([
            { key: "a", is: expect.anything(), name: "step1" },
            { key: "c", is: expect.anything(), name: "step3" },
        ]);

        expect(stepNames.value).toEqual(["step1", "step3"]);
    });

    it("handles empty skip array", () => {
        const list = ["step1"];
        const skip: number[] = [];

        const stepNodes = [createStepNode("a")];

        const { nodes, stepNames } = useStepNodes(list, skip, stepNodes);

        expect(nodes.value.length).toBe(1);
        expect(stepNames.value).toEqual(["step1"]);
    });

    it("handles list shorter than stepNodes", () => {
        const list = ["step1"];
        const skip = undefined;

        const stepNodes = [createStepNode("a"), createStepNode("b")];

        const { nodes } = useStepNodes(list, skip, stepNodes);

        expect(nodes.value).toEqual([
            { key: "a", is: expect.anything(), name: "step1" },
        ]);
    });
});
