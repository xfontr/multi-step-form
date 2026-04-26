import type { Meta, StoryObj } from "@storybook/vue3";
import InputNumber from "./InputNumber.vue";

const meta: Meta<typeof InputNumber> = {
    title: "Components/InputNumber",
    component: InputNumber,
    tags: ["autodocs"],
    argTypes: {
        modelValue: { control: "number" },
    },
    args: {
        id: "input-number",
        placeholder: "Enter a number",
        modelValue: 0,
    },
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
    args: {
        modelValue: 10,
        placeholder: "Type a number...",
    },
};

export const Empty: Story = {
    args: {
        modelValue: null,
        placeholder: "No value yet",
    },
};

export const WithLabel: Story = {
    render: (args) => ({
        components: { InputNumber },
        setup() {
            return { args };
        },
        template: `
      <InputNumber v-bind="args">
        Quantity
      </InputNumber>
    `,
    }),
    args: {
        modelValue: 5,
    },
};

export const MinMaxStep: Story = {
    render: (args) => ({
        components: { InputNumber },
        setup() {
            return { args };
        },
        template: `
      <InputNumber
        v-bind="args"
        :min="0"
        :max="100"
        :step="5"
      >
        Limited number
      </InputNumber>
    `,
    }),
    args: {
        modelValue: 20,
    },
};

export const LargeNumber: Story = {
    args: {
        modelValue: 1000000,
        placeholder: "Big value",
    },
};
