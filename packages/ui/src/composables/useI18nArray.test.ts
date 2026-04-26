import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useI18n } from "vue-i18n";
import useI18nArray from "./useI18nArray";

const mockTm = vi.fn();

vi.mock("vue-i18n");

const { mockUseRuntimeConfig } = vi.hoisted(() => ({
    mockUseRuntimeConfig: vi.fn().mockReturnValue({ public: { env: "" } }),
}));

mockNuxtImport(useRuntimeConfig, () => mockUseRuntimeConfig);

vi.mocked(useI18n).mockReturnValue({
    tm: mockTm,
} as unknown as ReturnType<typeof useI18n>);

describe("useI18nArray", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("uses production behavior (returns raw array)", () => {
        mockUseRuntimeConfig.mockReturnValue({ public: { env: "production" } });

        mockTm.mockReturnValue(["a", "b", "c"]);

        const { tm } = useI18nArray();

        const result = tm("key");

        expect(result).toEqual(["a", "b", "c"]);
    });

    it("limits length in production", () => {
        mockUseRuntimeConfig.mockReturnValue({ public: { env: "production" } });

        mockTm.mockReturnValue(["a", "b", "c"]);

        const { tm } = useI18nArray();

        const result = tm("key", 1);

        expect(result).toEqual(["a"]);
    });

    it("maps loc.source in development", () => {
        mockUseRuntimeConfig.mockReturnValue({
            public: { env: "development" },
        });

        mockTm.mockReturnValue([
            { loc: { source: "a" } },
            { loc: { source: "b" } },
        ]);

        const { tm } = useI18nArray();

        const result = tm("key");

        expect(result).toEqual(["a", "b"]);
    });

    it("limits length in development", () => {
        mockUseRuntimeConfig.mockReturnValue({
            public: { env: "development" },
        });

        mockTm.mockReturnValue([
            { loc: { source: "a" } },
            { loc: { source: "b" } },
        ]);

        const { tm } = useI18nArray();

        const result = tm("key", 1);

        expect(result).toEqual(["a"]);
    });

    it("returns empty array if tm returns null/undefined", () => {
        mockUseRuntimeConfig.mockReturnValue({
            public: { env: "development" },
        });

        mockTm.mockReturnValue(undefined);

        const { tm } = useI18nArray();

        const result = tm("key");

        expect(result).toEqual([]);
    });
});
