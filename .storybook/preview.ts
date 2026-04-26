import type { Preview } from "@storybook/vue3";
import Aura from "@primeuix/themes/aura";
import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import "./preview.css";

setup((app) => {
    app.use(PrimeVue, {
        ripple: true,
        inputVariant: "filled",
        theme: {
            preset: Aura,
            options: {
                prefix: "p",
                darkModeSelector: false,
                cssLayer: false,
            },
        },
    });
});

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
