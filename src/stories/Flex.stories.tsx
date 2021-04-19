import React from "react";
import { Story, Meta } from "@storybook/react";

import { Flex, Props } from "./Flex";
import { Wrapp } from "./Wrapp";

const arr = [1, 2, 3];
export default {
  title: "Flex components",
  component: Flex,
} as Meta;

const Template: Story<Props> = (args) => (
  <Flex width="95%" align="center" {...args}>
    {arr.map((item) => (
      <Wrapp key={item} width="100px" height="100px" bgColor="magenta">
        {1}
      </Wrapp>
    ))}
  </Flex>
);

export const Row = Template.bind({});
Row.args = {
  direction: "row",
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
  justify: "space-evenly",
  minHeight: "80vh",
};
export const FlexWrap = Template.bind({});
FlexWrap.args = {
  width: "25%",
  wrap: true,
};

export const FlexNoWrap = Template.bind({});
FlexNoWrap.args = {
  width: "25%",
  wrap: false,
};
