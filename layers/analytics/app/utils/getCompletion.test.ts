import { describe, expect, it } from "vitest";
import { MAX_COMPLETION } from "../configs/constants";
import { getCompletion } from "./getCompletion";

describe("getCompletion", () => {
    it("calculates normal progress correctly", () => {
        expect(getCompletion(3, 10, 0.1)).toBe(0.3);
        expect(getCompletion(5, 10, 0.25)).toBe(1.25);
    });

    it("caps step at max before calculating", () => {
        expect(getCompletion(15, 10, 0.1)).toBe(MAX_COMPLETION);
    });

    it("returns MAX_COMPLETION when step equals max", () => {
        expect(getCompletion(10, 10, 0.1)).toBe(MAX_COMPLETION);
    });

    it("rounds to 2 decimal places", () => {
        expect(getCompletion(3, 10, 0.3333)).toBe(1.0);
    });

    it("handles zero rate", () => {
        expect(getCompletion(5, 10, 0)).toBe(0);
    });

    it("handles negative steps (clamped behavior)", () => {
        expect(getCompletion(-5, 10, 0.1)).toBe(-0.5);
    });
});
