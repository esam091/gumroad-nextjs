import { Meta, StoryObj } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";
import Button from "./Button";

const meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      control: "radio",
      options: ["top", "bottom", "left", "right"],
    },
  },
  args: {
    side: "top",
  },
  render({ side }) {
    return (
      <Tooltip
        side={side}
        trigger={<Button label="Hover over me" variant="secondary" />}
      >
        Sample
      </Tooltip>
    );
  },
} satisfies Meta<Pick<TooltipProps, "side">>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render({ side }) {
    return (
      <Tooltip
        side={side}
        trigger={<Button label="Hover over me" variant="secondary" />}
      >
        This is a sample tooltip.
      </Tooltip>
    );
  },
};

export const RichText: Story = {
  render({ side }) {
    return (
      <Tooltip
        side={side}
        trigger={<Button label="Hover over me" variant="secondary" />}
      >
        <p>
          <strong>2</strong> views
          <br />
          <strong>2</strong> sales
          <br />
          <strong>$110</strong>
          <br />
          <strong>Friday, July 22nd</strong>
          <br />
        </p>
      </Tooltip>
    );
  },
};
