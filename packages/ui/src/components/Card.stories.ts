import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "./Card.vue";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => ({
        components: { Card },
        template: `
      <Card>
        <p>This is a simple card</p>
      </Card>
    `,
    }),
};

export const WithContent: Story = {
    render: () => ({
        components: { Card },
        template: `
      <Card>
        <h3 style="margin-bottom: 8px;">Card Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Clean, simple, reusable.
        </p>
      </Card>
    `,
    }),
};

export const ComplexContent: Story = {
    render: () => ({
        components: { Card },
        template: `
      <Card>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3>Premium Plan</h3>
          <p>Access to all features</p>
          <button style="padding: 8px 12px;">Upgrade</button>
        </div>
      </Card>
    `,
    }),
};
