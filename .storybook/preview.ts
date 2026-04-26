import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import Aura from "@primeuix/themes/aura";
import "./preview.css";

import PrimeVue from "primevue/config";

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
