import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Test, Props } from './stories/Test';

export default {
  title: 'Test Component',
  component: Test,
  argTypes: {
    bgColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bgColor:"blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
   bgColor:"green",
};


