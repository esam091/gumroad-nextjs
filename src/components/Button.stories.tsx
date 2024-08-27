import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { fn } from "@storybook/test";

interface ButtonCustomProps
  extends Omit<ButtonProps, "leftIcon" | "rightIcon"> {
  leftIcon: boolean;
  rightIcon: boolean;
}

const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "filled",
        "accent",
        "destroyOutline",
        "destroy",
      ],
      table: {
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    label: {
      control: "text",
    },
    size: {
      control: "radio",
      options: ["regular", "small"],
      table: {
        defaultValue: {
          summary: 'regular'
        }
      }
    },
    leftIcon: {
      name: 'show left icon'
    },
    rightIcon: {
      name: 'show right icon'
    }
  },
  args: {
    onClick: fn(),
    label: "Button",
  },
  render({ leftIcon, rightIcon, ...args }) {
    return (
      <Button
        {...args}
        leftIcon={leftIcon ? <SampleIcon /> : undefined}
        rightIcon={rightIcon ? <SampleIcon /> : undefined}
      />
    );
  },
} satisfies Meta<ButtonCustomProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    disabled: false,
    leftIcon: false,
    rightIcon: false,
  },
};

function SampleIcon() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 5.25C2.75 3.59325 4.09325 2.25 5.75 2.25H7.25C7.664 2.25 8 2.586 8 3C8 3.414 7.664 3.75 7.25 3.75H5.75C4.92125 3.75 4.25 4.42125 4.25 5.25V12.75C4.25 13.5787 4.92125 14.25 5.75 14.25H13.25C14.0788 14.25 14.75 13.5787 14.75 12.75V5.25C14.75 4.42125 14.0788 3.75 13.25 3.75H11.75C10.9213 3.75 10.25 4.42125 10.25 5.25L10.25 9.75H12.5L9.5 12.75L6.5 9.75H8.75V5.25C8.75 3.59325 10.0933 2.25 11.75 2.25H13.25C14.9068 2.25 16.25 3.59325 16.25 5.25V12.75C16.25 14.4067 14.9068 15.75 13.25 15.75H5.75C4.09325 15.75 2.75 14.4067 2.75 12.75V5.25Z"
        fill="white"
      />
    </svg>
  );
}
