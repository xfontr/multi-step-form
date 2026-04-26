import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";

export function mountComposable<R, T extends () => R>(callback: T) {
    let api: R | undefined;

    const TestComponent = defineComponent({
        setup() {
            api = callback();
            return () => h("div");
        },
    });

    const wrapper = mount(TestComponent);

    return { api, wrapper };
}
