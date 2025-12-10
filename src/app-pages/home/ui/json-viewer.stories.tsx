import type { Meta, StoryObj } from '@storybook/react';
import { JsonViewer } from './json-viewer';
import { HomePageLayout } from './layout';

const meta: Meta<typeof JsonViewer> = {
  title: 'Home/JsonViewer',
  component: JsonViewer,
  decorators: [
    (Story) => (
      <HomePageLayout>
        <Story />
      </HomePageLayout>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof JsonViewer>;

export const Default: Story = {};

export const InvalidJson: Story = {
  args: {
    initialText: '{name: John, age: 30}',
  },
};

export const LongLongString: Story = {
  args: {
    initialText: JSON.stringify({
      message:
        'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    }),
  },
};

export const Empty: Story = {
  args: {
    initialText: '',
  },
};
