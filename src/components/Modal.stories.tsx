import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import Button from "./Button";
import { fn } from "@storybook/test";
import Alert from "./Alert";
import { RadioCardItem } from "./Radio";
import Pill from "./Pill";
import { RadioGroup } from "@radix-ui/react-radio-group";

const meta = {} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const action = fn();

interface DefaultStoryProps {
  title: string;
  description: string;
  size: "regular" | "small";
  showButtons: boolean;
  showCustomContent: boolean;
}

export const Default: StoryObj<Meta<DefaultStoryProps>> = {
  argTypes: {
    size: {
      control: "radio",
      options: ["regular", "small"],
    },
  },
  args: {
    title: "Sample title",
    description:
      "The quick brown fox, jumps over the lazy dog. The quick brown fox, jumps over the lazy dog. ",
    size: "regular",
    showButtons: true,
    showCustomContent: true,
  },
  render({ showButtons, showCustomContent, ...props }) {
    return (
      <Modal
        trigger={<Button label="Show modal" />}
        {...props}
        buttons={
          showButtons && (
            <>
              <Button label="Button 1" variant="secondary" onClick={action} />
              <Button label="Button 2" onClick={action} />
            </>
          )
        }
      >
        {showCustomContent && (
          <Alert variant={"info"}>This is a custom content</Alert>
        )}
      </Modal>
    );
  },
};

export const CloseButton: Story = {
  render() {
    return (
      <Modal
        trigger={<Button label="Show modal" />}
        title="Publish wishlist?"
        description="There are some products in your wishlist that won’t be shown because they aren’t available through Discover. Do you still want to publish?"
        buttons={
          <>
            <Modal.Close>
              <Button label="No, cancel" variant="secondary" />
            </Modal.Close>
            <Button label="Yes, publish" variant="accent" />
          </>
        }
      />
    );
  },
};

export const CustomContent: Story = {
  render() {
    return (
      <Modal
        trigger={<Button label="Show modal" />}
        title="Want to upgrade for just $5?"
        description="Don't just learn the theory – put it into practice with our worksheet."
        buttons={
          <>
            <Modal.Close>
              <Button label="Don't replace" variant="secondary" />
            </Modal.Close>
            <Button label="Replace" />
          </>
        }
      >
        <RadioGroup value="val">
          <RadioCardItem
            value="val"
            label="Video course + spreadsheet"
            description="Get access to all videos and a spreadsheet to practice what you learn."
            leadingDecoration={<Pill label="$222" variant="secondary" />}
          />
        </RadioGroup>
      </Modal>
    );
  },
};

export const RichTextDescription: Story = {
  render() {
    return (
      <Modal
        trigger={<Button label="Show modal" />}
        size="small"
        title="Delete page?"
        description={
          <span>
            Are you sure you want to delete the page &quot;What&apos;s inside&quot;? Existing
            customers will lose access to this content.{" "}
            <strong>This action cannot be undone.</strong>
          </span>
        }
        buttons={
          <>
            <Button label="Yes, delete" variant="destroy" />
            <Modal.Close>
              <Button label="No, cancel" variant='secondary' />
            </Modal.Close>
          </>
        }
      />
    );
  },
};

// controlled, rich text description
