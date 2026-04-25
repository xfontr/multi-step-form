import { mount } from "@vue/test-utils";
import PrimeVue from "primevue/config";
import { describe, expect, it, vi } from "vitest";
import { mountPrimeVue } from "./mount";

vi.mock("@vue/test-utils", () => ({
    mount: vi.fn(),
}));

describe("mountPrimeVue", () => {
    it("calls mount with PrimeVue plugin prepended", () => {
        const component = { template: "<div />" };

        const userPlugin = vi.fn();
        const props = {
            randomProp: "test",
        };

        mountPrimeVue(component, {
            props,
            global: {
                plugins: [userPlugin],
            },
        });

        expect(mount).toHaveBeenCalledWith(component, {
            props,
            global: {
                plugins: [PrimeVue, userPlugin],
            },
        });
    });
});
