import { MAX_COMPLETION } from "../configs/constants";
/**
 * Calculates a normalized completion value based on current step progression.
 *
 * @example
 *
 * getCompletion(3, 10, 0.1) // 0.3
 * getCompletion(10, 10, 0.1) // MAX_COMPLETION
 */
export function getCompletion(step: number, max: number, rate: number): number {
    const current = Math.min(step, max);
    return current >= max ? MAX_COMPLETION : +(current * rate).toFixed(2);
}
