import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import useDietStore from "../stores/diet";

describe("useDietStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("initializes with default values", () => {
        const store = useDietStore();

        expect(store.diet).toEqual({
            breed: "",
            name: "",
            gender: "",
            age: undefined,
            weight: undefined,
            exercise: 0,
            pathology: undefined,
        });
    });

    it("is reactive and can be updated", () => {
        const store = useDietStore();

        store.diet.name = "G";
        store.diet.age = 27;

        expect(store.diet.name).toBe("G");
        expect(store.diet.age).toBe(27);
    });
});
