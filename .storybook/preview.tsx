import React from 'react';

import { Preview } from '@storybook/react';

import "../src/assets/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{overflow: "hidden"}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default preview;
