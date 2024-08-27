import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './Toggle';

const meta = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    disabled: false
  }
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};