import type { Meta, StoryObj } from "@nuxtjs/storybook";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
      <Button v-bind="args">
        Click me
      </Button>
    `,
    }),
};

export const CustomText: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `
      <Button v-bind="args">
        Buy now 🚀
      </Button>
    `,
    }),
};
