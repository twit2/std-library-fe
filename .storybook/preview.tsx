import React from 'react';
import { T2BasicUI } from '../src/decorators/T2BasicUI';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <T2BasicUI>
        <Story/>
      </T2BasicUI>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
