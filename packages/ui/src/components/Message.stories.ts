import type { Meta, StoryObj } from "@storybook/vue3";
import Message from "./Message.vue";

const meta: Meta<typeof Message> = {
    title: "Components/Message",
    component: Message,
    tags: ["autodocs"],
    argTypes: {
        severity: {
            control: "select",
            options: ["success", "info", "warn", "error", undefined],
        },
    },
    args: {
        severity: "info",
    },
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Info: Story = {
    args: {
        severity: "info",
    },
    render: (args) => ({
        components: { Message },
        setup() {
            return { args };
        },
        template: `
      <Message v-bind="args">
        This is an info message.
      </Message>
    `,
    }),
};

export const Success: Story = {
    args: {
        severity: "success",
    },
    render: (args) => ({
        components: { Message },
        setup() {
            return { args };
        },
        template: `
      <Message v-bind="args">
        Operation completed successfully.
      </Message>
    `,
    }),
};

export const Warning: Story = {
    args: {
        severity: "warn",
    },
    render: (args) => ({
        components: { Message },
        setup() {
            return { args };
        },
        template: `
      <Message v-bind="args">
        Be careful with this action.
      </Message>
    `,
    }),
};

export const Error: Story = {
    args: {
        severity: "error",
    },
    render: (args) => ({
        components: { Message },
        setup() {
            return { args };
        },
        template: `
      <Message v-bind="args">
        Something went wrong.
      </Message>
    `,
    }),
};

export const DefaultNoSeverity: Story = {
    args: {
        severity: undefined,
    },
    render: (args) => ({
        components: { Message },
        setup() {
            return { args };
        },
        template: `
      <Message v-bind="args">
        Default message without severity.
      </Message>
    `,
    }),
};
