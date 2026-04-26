import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "./Header.vue";

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: () => ({
        components: { Header },
        template: `
      <Header>
        <template #heading>
          Welcome to the app
        </template>
        <template #description>
          This is a simple header component using slots
        </template>
      </Header>
    `,
    }),
};

export const OnlyHeading: Story = {
    render: () => ({
        components: { Header },
        template: `
      <Header>
        <template #heading>
          Dashboard
        </template>
      </Header>
    `,
    }),
};

export const OnlyDescription: Story = {
    render: () => ({
        components: { Header },
        template: `
      <Header>
        <template #description>
          You can also pass only a description if needed
        </template>
      </Header>
    `,
    }),
};

export const Empty: Story = {
    render: () => ({
        components: { Header },
        template: `<Header />`,
    }),
};
