import { beforeEach, describe, expect, it, vi } from "vitest";
import { useI18n } from "vue-i18n";
import useI18nArray from "./useI18nArray";

const mockTm = vi.fn();

vi.mock("vue-i18n");

vi.mocked(useI18n).mockReturnValue({
    tm: mockTm,
} as unknown as ReturnType<typeof useI18n>);

describe("useI18nArray", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("uses production behavior (returns raw array)", () => {
        mockTm.mockReturnValue(["a", "b", "c"]);

        const { tm } = useI18nArray(true);

        const result = tm("key");

        expect(result).toEqual(["a", "b", "c"]);
    });

    it("limits length in production", () => {
        mockTm.mockReturnValue(["a", "b", "c"]);

        const { tm } = useI18nArray(true);

        const result = tm("key", 1);

        expect(result).toEqual(["a"]);
    });

    it("maps loc.source in development", () => {
        mockTm.mockReturnValue([
            { loc: { source: "a" } },
            { loc: { source: "b" } },
        ]);

        const { tm } = useI18nArray(false);

        const result = tm("key");

        expect(result).toEqual(["a", "b"]);
    });

    it("limits length in development", () => {
        mockTm.mockReturnValue([
            { loc: { source: "a" } },
            { loc: { source: "b" } },
        ]);

        const { tm } = useI18nArray(false);

        const result = tm("key", 1);

        expect(result).toEqual(["a"]);
    });

    it("returns empty array if tm returns null/undefined", () => {
        mockTm.mockReturnValue(undefined);

        const { tm } = useI18nArray(false);

        const result = tm("key");

        expect(result).toEqual([]);
    });
});
