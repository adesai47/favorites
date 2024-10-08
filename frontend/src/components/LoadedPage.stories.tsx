import type { Meta, StoryObj } from '@storybook/react';

import LoadedPage from './LoadedPage';

const meta = {
  component: LoadedPage,
} satisfies Meta<typeof LoadedPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};