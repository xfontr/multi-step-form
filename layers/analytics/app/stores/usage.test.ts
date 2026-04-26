import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MAX_COMPLETION } from "../configs/constants";
import useUsageStore from "../stores/usage";

const mockGroupInit = vi.fn();

vi.mock("../stores/group", () => ({
    default: () => ({
        group: { name: "TEST_GROUP", rate: 100 },
        init: mockGroupInit,
    }),
}));

vi.stubGlobal("crypto", {
    randomUUID: () => "test-uuid",
});

describe("useUsageStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.useFakeTimers();
    });

    it("initializes usage correctly", () => {
        const store = useUsageStore();

        expect(mockGroupInit).toHaveBeenCalledTimes(0);

        store.init();

        const { usage } = store;

        expect(usage.group).toBe("TEST_GROUP");
        expect(usage.id).toBe("test-uuid");
        expect(usage.timestamps.init).toBe(Date.now());
        expect(usage.success).toBe(false);
        expect(mockGroupInit).toHaveBeenCalledTimes(1);

        store.init();

        expect(mockGroupInit).toHaveBeenCalledTimes(2);
    });

    it("updates step and completion correctly", () => {
        const store = useUsageStore();

        store.init();
        store.updateStep(2);

        const { usage } = store;

        expect(usage.completion).toBe(28.57);
        expect(usage.timestamps.total).toBeGreaterThanOrEqual(0);
    });

    it("marks success when completion reaches max", () => {
        const store = useUsageStore();

        store.init();
        store.updateStep(MAX_COMPLETION);

        const { usage } = store;

        expect(usage.success).toBe(true);
        expect(usage.completion).toBe(100);
    });

    it("advances the timestamps", () => {
        const store = useUsageStore();

        vi.setSystemTime(1000);

        store.init();

        const { init } = store.usage.timestamps;

        vi.setSystemTime(1100);
        store.updateStep(1);

        const { total } = store.usage.timestamps;

        expect(total).toBe(1100 - init);

        vi.setSystemTime(1300);
        store.updateStep(MAX_COMPLETION);
        const { usage } = store;

        expect(usage.timestamps.total).toBe(1300 - init);
        expect(usage.timestamps.success).toBe(1300);
    });
});
