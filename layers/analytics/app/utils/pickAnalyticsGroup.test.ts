import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    type Mock,
    vi,
} from "vitest";
import { pickAnalyticsGroup } from "./pickAnalyticsGroup";

describe("pickAnalyticsGroup", () => {
    const groups = [
        { name: "A", rate: 20 },
        { name: "B", rate: 30 },
        { name: "C", rate: 50 },
    ];

    beforeEach(() => {
        vi.spyOn(Math, "random");
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("returns undefined when no groups are provided", () => {
        expect(pickAnalyticsGroup([])).toBeUndefined();
    });

    it("picks first group when random is low", () => {
        (Math.random as Mock).mockReturnValue(0); // 0 * 100 = 0

        const result = pickAnalyticsGroup(groups);

        expect(result).toEqual(groups[0]);
    });

    it("picks second group when random is in middle range", () => {
        (Math.random as Mock).mockReturnValue(0.25); // 25

        const result = pickAnalyticsGroup(groups);

        expect(result).toEqual(groups[1]);
    });

    it("picks last group when random is high", () => {
        (Math.random as Mock).mockReturnValue(0.99); // 99

        const result = pickAnalyticsGroup(groups);

        expect(result).toEqual(groups[2]);
    });

    it("falls back to last group if no match (edge case)", () => {
        const brokenGroups = [
            { name: "A", rate: 0 },
            { name: "B", rate: 0 },
        ];

        (Math.random as any).mockReturnValue(0.5);
        const result = pickAnalyticsGroup(brokenGroups);

        expect(result).toEqual(brokenGroups[brokenGroups.length - 1]);
    });
});
