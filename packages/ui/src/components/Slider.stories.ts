import type { Meta, StoryObj } from "@storybook/vue3";
import Slider from "./Slider.vue";

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    tags: ["autodocs"],
    argTypes: {
        modelValue: {
            control: { type: "number", min: 0, max: 100 },
        },
    },
    args: {
        modelValue: 50,
    },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        modelValue: 50,
    },
    render: (args) => ({
        components: { Slider },
        setup() {
            return { args };
        },
        template: `
      <Slider v-bind="args">
        Volume
      </Slider>
    `,
    }),
};

export const LowValue: Story = {
    args: {
        modelValue: 10,
    },
    render: (args) => ({
        components: { Slider },
        setup() {
            return { args };
        },
        template: `
      <Slider v-bind="args">
        Low intensity
      </Slider>
    `,
    }),
};

export const HighValue: Story = {
    args: {
        modelValue: 90,
    },
    render: (args) => ({
        components: { Slider },
        setup() {
            return { args };
        },
        template: `
      <Slider v-bind="args">
        High intensity
      </Slider>
    `,
    }),
};

export const MidRange: Story = {
    args: {
        modelValue: 25,
    },
    render: (args) => ({
        components: { Slider },
        setup() {
            return { args };
        },
        template: `
      <Slider v-bind="args">
        Progress
      </Slider>
    `,
    }),
};
