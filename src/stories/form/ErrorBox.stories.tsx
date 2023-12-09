import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBox } from '../../components/form/ErrorBox';
import { Form } from '../../components/form/Form';
import React from 'react';

const meta = {
    decorators: [
        (Story)=><Form>
            <Story/>
        </Form>
    ],
    title: "Form/Error Box",
    component: ErrorBox,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ErrorBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "Test error text"
    }
};
