import type { AnalyticsGroup } from "../types/AnalyticsGroup";

/**
 * Picks a random analytics group based on weighted probability.
 *
 * @returns A randomly selected group, or undefined if input is empty.
 *
 * @example
 * pickAnalyticsGroup([
 *   { name: "A", rate: 20 },
 *   { name: "B", rate: 80 }
 * ])
 */
export function pickAnalyticsGroup(
    groups: AnalyticsGroup[],
): AnalyticsGroup | undefined {
    if (!groups?.length) return;

    const random = Math.random() * 100;
    let cumulative = 0;

    for (const group of groups) {
        cumulative += group.rate;

        if (random < cumulative) {
            return group;
        }
    }

    return groups[groups.length - 1];
}
