import type { Meta, StoryObj } from '@storybook/react';

import { LoadingContainer } from '../../components/basic/LoadingContainer';

const meta = {
    title: "Basic/Loading Container",
    component: LoadingContainer,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof LoadingContainer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
