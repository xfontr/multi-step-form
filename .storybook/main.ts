import type { StorybookConfig } from "@nuxtjs/storybook";

const config: StorybookConfig = {
    stories: ["../packages/**/*.stories.ts"],
    framework: "@storybook-vue/nuxt",
};
export default config;
