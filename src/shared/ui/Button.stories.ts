import { briefcasePlus, floppyDisk, tabArrowUpRight } from "@lucide/lab";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const meta = {
  title: "Shared UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "link"],
    },
    type: {
      control: "select",
      options: ["normal", "red", "blue", "green"],
    },
    size: {
      control: "select",
      options: ["large", "default", "small"],
    },
    iconPosition: {
      control: "select",
      options: ["before", "after"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    type: "normal",
    size: "default",
    iconPosition: "before",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "primary",
  },

  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Button</Button>`,
  }),
};

export const WithIconBefore: Story = {
  args: {
    icon: briefcasePlus,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Add item</Button>`,
  }),
};

export const WithIconAfter: Story = {
  args: {
    icon: tabArrowUpRight,
    iconPosition: "after",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">Open</Button>`,
  }),
};

export const IconOnly: Story = {
  args: {
    icon: floppyDisk,
    class: "w-9 px-0",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" />`,
  }),
};
