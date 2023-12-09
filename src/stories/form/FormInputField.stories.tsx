import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../../components/form/Form';
import React from 'react';
import { FormInputField } from '../../components/form/FormInputField';

const meta = {
    decorators: [
        (Story)=><Form>
            <Story/>
        </Form>
    ],
    title: "Form/FormInputField",
    component: FormInputField,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof FormInputField>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        label: "Test label",
        type: "text",
        extended: false,
        placeholder: ""
    }
};

export const Password: Story = {
    args: {
        label: "Password",
        type: "password",
        extended: false,
        placeholder: ""
    }
};

export const Extended: Story = {
    args: {
        label: "Extended Text",
        type: "text",
        extended: true,
        placeholder: ""
    }
};
