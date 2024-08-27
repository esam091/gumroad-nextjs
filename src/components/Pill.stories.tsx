import type { Meta, StoryObj } from "@storybook/react";

import Pill, { type PillProps } from "./Pill";

interface CustomProps extends Omit<PillProps, 'className'> {
  showRightIcon: boolean
}

const meta = {
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["regular", "small"],
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "link"],
    },
    showRightIcon: {
      control: 'boolean'
    }
  },
  args: {
    showRightIcon: false
  },
  render({showRightIcon, ...args }) {
    return <Pill {...args} rightIcon={showRightIcon ? <CloseIcon /> : undefined} />
  }
} satisfies Meta<CustomProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Pill",
    size: "regular",
    variant: "primary",
  },
};

function CloseIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9L9 3M3 3L9 9"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
