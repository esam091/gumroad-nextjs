import type { Meta, StoryObj } from "@storybook/react";

import Alert, { AlertProps } from "./Alert";
import { fn } from "@storybook/test";

interface CustomProps extends Omit<AlertProps, "buttons"> {
  showButtons: boolean;
}

const meta = {
  title: "Components/Alert",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "radio",
      options: [
        "normal",
        "success",
        "danger",
        "warning",
        "info",
        "gift",
        "promo",
      ],
    },
    closable: {
      control: "boolean",
    },
    showButtons: {
      control: "boolean",
    },
  },
  args: {
    closable: false,
    children: "Sample text",
    showButtons: false,
  },
  render({ showButtons, ...props }) {
    return (
      <Alert
        {...props}
        buttons={
          showButtons
            ? [
                {
                  title: "Button 1",
                  variant: "secondary",
                },
                {
                  title: "Button 2",
                  variant: "primary",
                },
              ]
            : undefined
        }
      />
    );
  },
} satisfies Meta<CustomProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  render({ showButtons, ...props }) {
    return (
      <Alert
        {...props}
        buttons={
          showButtons
            ? [
                {
                  title: "Button 1",
                  variant: "secondary",
                },
                {
                  title: "Button 2",
                  variant: "primary",
                },
              ]
            : undefined
        }
      />
    );
  },
};

export const RichText: Story = {
  render() {
    return (
      <Alert variant={"promo"}>
        <strong>New! Abandoned cart workflows:</strong> Boost your sales by
        reminding customers of items left in the cart. <br />
        <a
          className="underline"
          href="https://help.gumroad.com/index.html"
          target="#"
        >
          Learn more
        </a>
      </Alert>
    );
  },
};

export const WithButtons: Story = {
  render() {
    return (
      <Alert
        buttons={[
          {
            title: "Proceed",
            variant: "primary",
            onClick: fn(),
          },
          {
            title: "Cancel",
            variant: "secondary",
            onClick: fn(),
          },
        ]}
      >
        I&apos;m a multiline alert message and a have buttons too! I provide
        detailed messages to help users understand what&apos;s going on and capture
        the attention of the user in an intrusive way.
      </Alert>
    );
  },
};
