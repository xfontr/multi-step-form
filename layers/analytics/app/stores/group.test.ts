import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_GROUP } from "../configs/constants";
import useGroupStore from "../stores/group";

const { mockUseRuntimeConfig } = vi.hoisted(() => ({
    mockUseRuntimeConfig: vi.fn().mockReturnValue({ public: { env: "" } }),
}));

mockNuxtImport(useRuntimeConfig, () => mockUseRuntimeConfig);

describe("useGroupStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.clearAllMocks();
    });

    it("picks group from runtime config", () => {
        const groupA = { name: "A", rate: 100 };

        mockUseRuntimeConfig.mockReturnValue({
            public: {
                analytics: {
                    groups: [groupA],
                },
            },
        });

        const store = useGroupStore();

        expect(store.group).toEqual(groupA);
    });

    it("falls back to a default group when undefined", () => {
        mockUseRuntimeConfig.mockReturnValue({
            public: {
                analytics: {
                    groups: [],
                },
            },
        });

        const store = useGroupStore();

        expect(store.group).toEqual(DEFAULT_GROUP);
    });
});
