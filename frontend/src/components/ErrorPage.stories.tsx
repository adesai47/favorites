import type { Meta, StoryObj } from '@storybook/react';

import ErrorPage from './ErrorPage';

const meta = {
  component: ErrorPage,
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};