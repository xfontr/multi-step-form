import type { Meta, StoryObj } from "@storybook/vue3";
import Status from "./Status.vue";

const meta: Meta<typeof Status> = {
    title: "Components/Status",
    component: Status,
    tags: ["autodocs"],
    argTypes: {
        status: {
            control: "select",
            options: ["IDLE", "LOADING", "ERROR", "SUCCESS"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Status>;

export const Idle: Story = {
    args: {
        status: "IDLE",
    },
};

export const Loading: Story = {
    args: {
        status: "LOADING",
    },
};

export const Error: Story = {
    args: {
        status: "ERROR",
    },
    render: (args) => ({
        components: { Status },
        setup() {
            return { args };
        },
        template: `
            <Status v-bind="args">
                <template #error>
                    <div style="color: red; font-weight: bold;">
                        Something went wrong. Try again.
                    </div>
                </template>
            </Status>
        `,
    }),
};

export const Success: Story = {
    args: {
        status: "SUCCESS",
    },
    render: (args) => ({
        components: { Status },
        setup() {
            return { args };
        },
        template: `
            <Status v-bind="args">
                <template #success>
                    <div style="text-align: center;">
                        <h3>All good 🚀</h3>
                        <p>Operation completed successfully.</p>
                    </div>
                </template>
            </Status>
        `,
    }),
};
