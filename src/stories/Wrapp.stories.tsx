import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Wrapp, Props } from './Wrapp';

export default {
  title: 'Wrapp component',
  component: Wrapp
  
} as Meta;

const Template: Story<Props> = (args) => <Wrapp center={true} {...args} >{<p>{'I am wrapped'}</p>}</Wrapp>;

export const Box = Template.bind({});
Box.args = {
  width:"350px",
  height:"350px",
  borderWidth:"0"


};

export const BoxWithBorders = Template.bind({});
BoxWithBorders.args = {
  ...Box.args,
  bgColor:"lightcyan",
  borderColor:"teal",
  borderWidth:"3px",
  borderRadius:"5px"
};

export const SectionWrapper = Template.bind({});
SectionWrapper.args = {
  width:"100%",
  maxWidth:"800px",
  height:"40vh",
  bgColor:'lightcyan'
};

export const FullWrapper = Template.bind({});
FullWrapper.args = {
  width:"100%",
  height:"100vh",
  bgColor:'lightgreen'
};


