import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "./Select.vue";

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        modelValue: { control: "text" },
        placeholder: { control: "text" },
        options: { control: "object" },
        editable: { control: "boolean" },
    },
    args: {
        placeholder: "Select an option...",
        options: ["Apple", "Banana", "Orange"],
        editable: true,
        modelValue: "",
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        modelValue: "Apple",
    },
    render: (args) => ({
        components: { Select },
        setup() {
            return { args };
        },
        template: `
      <Select v-bind="args">
        Fruit selector
      </Select>
    `,
    }),
};

export const Empty: Story = {
    args: {
        modelValue: "",
    },
    render: (args) => ({
        components: { Select },
        setup() {
            return { args };
        },
        template: `
      <Select v-bind="args">
        Empty state
      </Select>
    `,
    }),
};

export const NonEditable: Story = {
    args: {
        modelValue: "Banana",
        editable: false,
    },
    render: (args) => ({
        components: { Select },
        setup() {
            return { args };
        },
        template: `
      <Select v-bind="args">
        Locked select
      </Select>
    `,
    }),
};

export const ManyOptions: Story = {
    args: {
        modelValue: "Option 5",
        options: Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`),
    },
    render: (args) => ({
        components: { Select },
        setup() {
            return { args };
        },
        template: `
      <Select v-bind="args">
        Large dataset
      </Select>
    `,
    }),
};
