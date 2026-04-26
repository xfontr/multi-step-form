import { mount } from "@vue/test-utils";
import PrimeVue from "primevue/config";

export function mountPrimeVue(
    component: Parameters<typeof mount>[0],
    config: Parameters<typeof mount>[1] = {},
) {
    return mount(component, {
        ...config,
        global: {
            ...config?.global,
            plugins: [PrimeVue, ...(config?.global?.plugins ?? [])],
        },
    });
}
