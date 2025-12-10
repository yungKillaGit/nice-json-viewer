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
    initialText: JSON.stringify(
      'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
    ),
  },
};

export const Empty: Story = {
  args: {
    initialText: '',
  },
};

export const StringType: Story = {
  name: 'String',
  args: {
    initialText: JSON.stringify('Hello, world!'),
  },
};

export const NumberType: Story = {
  name: 'Number',
  args: {
    initialText: JSON.stringify(42),
  },
};

export const BooleanTrueType: Story = {
  name: 'Boolean (true)',
  args: {
    initialText: JSON.stringify(true),
  },
};

export const BooleanFalseType: Story = {
  name: 'Boolean (false)',
  args: {
    initialText: JSON.stringify(false),
  },
};

export const NullType: Story = {
  name: 'Null',
  args: {
    initialText: JSON.stringify(null),
  },
};

export const ArrayType: Story = {
  name: 'Array',
  args: {
    initialText: JSON.stringify([1, 'two', true, null]),
  },
};

export const ObjectType: Story = {
  name: 'Object',
  args: {
    initialText: JSON.stringify({ a: 1, b: 'text', c: false }),
  },
};
