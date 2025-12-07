import type { Preview } from '@storybook/nextjs-vite';
import RootLayout from '../app/layout';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },

    layout: 'fullscreen',

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f172a',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },

  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default preview;
