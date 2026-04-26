import type { Meta, StoryObj } from "@storybook/vue3";
import Section from "./Section.vue";

const meta: Meta<typeof Section> = {
    title: "Layout/Section",
    component: Section,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section>;

// 🔹 Default usage
export const Default: Story = {
    render: () => ({
        components: { Section },
        template: `
      <Section>
        <div style="background: #eee; padding: 24px;">
          Default content inside section
        </div>
      </Section>
    `,
    }),
};

// 🔹 With long content (to visualize width constraints)
export const LongContent: Story = {
    render: () => ({
        components: { Section },
        template: `
      <Section>
        <div style="background: #ddd; padding: 24px;">
          <p v-for="i in 5" :key="i">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </Section>
    `,
    }),
};

// 🔹 Visualizing max-width behavior
export const CenteredContent: Story = {
    render: () => ({
        components: { Section },
        template: `
      <Section>
        <div style="background: #ccc; padding: 24px; text-align: center;">
          Centered + constrained content
        </div>
      </Section>
    `,
    }),
};
