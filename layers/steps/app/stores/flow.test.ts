import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import useFlowStore from "../stores/flow";

describe("useFlowStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("starts at index 0", () => {
        const store = useFlowStore();

        expect(store.index).toBe(0);
    });

    it("increments index with up()", () => {
        const store = useFlowStore();

        store.up();
        store.up();

        expect(store.index).toBe(2);
    });

    it("decrements index with down()", () => {
        const store = useFlowStore();

        store.update(3);
        store.down();

        expect(store.index).toBe(2);
    });

    it("does not go below 0 with down()", () => {
        const store = useFlowStore();

        store.down();

        expect(store.index).toBe(0);
    });

    it("sets index with update()", () => {
        const store = useFlowStore();

        store.update(10);

        expect(store.index).toBe(10);
    });

    it("combines operations correctly", () => {
        const store = useFlowStore();

        store.up(); // 1
        store.up(); // 2
        store.down(); // 1
        store.update(5); // 5

        expect(store.index).toBe(5);
    });
});
