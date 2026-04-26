import type { Meta, StoryObj } from "@storybook/vue3";
import Stepper from "./Stepper.vue";

const meta: Meta<typeof Stepper> = {
    title: "Components/Stepper",
    component: Stepper,
    tags: ["autodocs"],
    argTypes: {
        index: {
            control: { type: "number", min: 0, step: 1 },
        },
    },
    args: {
        index: 0,
    },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Basic: Story = {
    args: {
        index: 0,
    },
    render: (args) => ({
        components: { Stepper },
        setup() {
            return { args };
        },
        template: `
      <Stepper v-bind="args">
        <template #Personal>
          <div>
            <h3>Personal</h3>
            <p>Enter your personal info</p>
          </div>
        </template>

        <template #Details>
          <div>
            <h3>Details</h3>
            <p>Fill in the details</p>
          </div>
        </template>

        <template #Confirm>
          <div>
            <h3>Confirm</h3>
            <p>Review everything before submitting</p>
          </div>
        </template>
      </Stepper>
    `,
    }),
};

export const WithBack: Story = {
    args: {
        index: 1,
    },
    render: (args) => ({
        components: { Stepper },
        setup() {
            const next = () => {
                args.index = Math.min(args.index + 1, 2);
            };

            const back = () => {
                args.index = Math.max(args.index - 1, 0);
            };

            return { args, next, back };
        },
        template: `
      <Stepper v-bind="args">
        <template #StepOne>
          <div>
            <h3>Step One</h3>
            <p>First step content</p>
            <button @click="next">Next</button>
          </div>
        </template>

        <template #StepTwo>
          <div>
            <h3>Step Two</h3>
            <p>Second step content</p>
            <button @click="back">Back</button>
            <button @click="next">Next</button>
          </div>
        </template>

        <template #StepThree>
          <div>
            <h3>Step Three</h3>
            <p>Final step content</p>
            <button @click="back">Back</button>
          </div>
        </template>
      </Stepper>
    `,
    }),
};

export const Empty: Story = {
    render: () => ({
        components: { Stepper },
        template: `<Stepper />`,
    }),
};
