import type { Meta, StoryObj } from "@storybook/vue3";
import SelectOptions from "./SelectOptions.vue";

const meta: Meta<typeof SelectOptions> = {
    title: "Components/SelectOptions",
    component: SelectOptions,
    tags: ["autodocs"],
    argTypes: {
        modelValue: { control: "text" },
        options: { control: "object" },
        name: { control: "text" },
    },
    args: {
        name: "select-options",
        options: ["One", "Two", "Three"],
        modelValue: "One",
    },
};

export default meta;

type Story = StoryObj<typeof SelectOptions>;

export const Default: Story = {
    args: {
        modelValue: "One",
        options: ["One", "Two", "Three"],
    },
    render: (args) => ({
        components: { SelectOptions },
        setup() {
            return { args };
        },
        template: `
      <SelectOptions v-bind="args">
        Choose an option
      </SelectOptions>
    `,
    }),
};

export const NoSelection: Story = {
    args: {
        modelValue: undefined,
        options: ["Apple", "Banana", "Orange"],
    },
    render: (args) => ({
        components: { SelectOptions },
        setup() {
            return { args };
        },
        template: `
      <SelectOptions v-bind="args">
        Fruits
      </SelectOptions>
    `,
    }),
};

export const ManyOptions: Story = {
    args: {
        modelValue: "Option 10",
        options: Array.from({ length: 12 }, (_, i) => `Option ${i + 1}`),
    },
    render: (args) => ({
        components: { SelectOptions },
        setup() {
            return { args };
        },
        template: `
      <SelectOptions v-bind="args">
        Many choices
      </SelectOptions>
    `,
    }),
};

export const Preselected: Story = {
    args: {
        modelValue: "Two",
        options: ["One", "Two", "Three"],
    },
    render: (args) => ({
        components: { SelectOptions },
        setup() {
            return { args };
        },
        template: `
      <SelectOptions v-bind="args">
        Preselected value
      </SelectOptions>
    `,
    }),
};
