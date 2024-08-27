import { Meta, StoryObj } from "@storybook/react";
import LikeButton from "./LikeButton";
import { fn } from "@storybook/test";

const meta = {
  title: 'Components/Like Button',
  tags: ['autodocs'],
  component: LikeButton,
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof LikeButton>

export default meta

type Story = StoryObj<typeof meta>

export const Sample: Story = {
  args: {
    isLiked: false,
    likes: 3456
  }
}