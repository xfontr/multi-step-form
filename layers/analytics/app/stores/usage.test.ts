import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useUsageStore from "../stores/usage";

vi.mock("../stores/group", () => ({
    default: () => ({
        group: { name: "TEST_GROUP", rate: 100 },
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

        store.init(5);

        const usage = store.getUsage();

        expect(usage.group).toBe("TEST_GROUP");
        expect(usage.id).toBe("test-uuid");
        expect(usage.timestamps.init).toBe(Date.now());
        expect(usage.success).toBe(false);
    });

    it("updates step and completion correctly", () => {
        const store = useUsageStore();

        store.init(5);
        store.updateStep(2);

        const usage = store.getUsage();

        expect(usage.completion).toBe(40);
        expect(usage.timestamps.total).toBeGreaterThanOrEqual(0);
    });

    it("marks success when completion reaches max", () => {
        const store = useUsageStore();

        store.init(5);
        store.updateStep(5);

        const usage = store.getUsage();

        expect(usage.success).toBe(true);
        expect(usage.completion).toBe(100);
    });

    it("advances the timestamps", () => {
        const store = useUsageStore();

        vi.setSystemTime(1000);

        store.init(5);

        const { init } = store.getUsage().timestamps;

        vi.setSystemTime(1100);
        store.updateStep(1);

        const { total } = store.getUsage().timestamps;

        expect(total).toBe(1100 - init);

        vi.setSystemTime(1300);
        store.updateStep(5);
        const usage = store.getUsage();

        expect(usage.timestamps.total).toBe(1300 - init);
        expect(usage.timestamps.success).toBe(1300);
    });
});
