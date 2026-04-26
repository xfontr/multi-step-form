import type { Meta, StoryObj } from "@storybook/vue3";
import InputText from "./InputText.vue";

const meta: Meta<typeof InputText> = {
    title: "Components/InputText",
    component: InputText,
    tags: ["autodocs"],
    argTypes: {
        modelValue: { control: "text" },
    },
    args: {
        id: "input-text",
        placeholder: "Type something...",
        modelValue: "",
    },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
    args: {
        modelValue: "Hello world",
        placeholder: "Enter text...",
    },
};

export const Empty: Story = {
    args: {
        modelValue: "",
        placeholder: "Empty input",
    },
};

export const WithLabel: Story = {
    render: (args) => ({
        components: { InputText },
        setup() {
            return { args };
        },
        template: `
      <InputText v-bind="args">
        Username
      </InputText>
    `,
    }),
    args: {
        modelValue: "John Doe",
    },
};

export const LongText: Story = {
    args: {
        modelValue:
            "This is a very long text input value to see how the component behaves with overflow and wrapping.",
        placeholder: "Long text...",
    },
};

export const NoPlaceholder: Story = {
    args: {
        modelValue: "No placeholder here",
    },
};
