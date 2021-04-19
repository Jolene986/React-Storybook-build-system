import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Heading component',
  component: Heading 
  
} as Meta;

/*const Template: Story<HeadingProps> = (args) => <Heading fontSize="36px" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color:"darkcyan",
  headingLevel:"h1",
  children:"I am a h1 heading"
};

export const Secondary = Template.bind({});
Secondary.args = {
  color:"blue",
  headingLevel:"h2",
  children:"I am h2 I am a h1 heading and I am aligned to the left"
   
};
*/

export const HeadingH1: React.VFC<{}> = () => <Heading headingLevel="h1" color="magenta" fontSize="26px" marginTop="2em" width="80%" textAlign="center" >{'I am H1 Heading'}</Heading>;
export const HeadingH2: React.VFC<{}> = () => <Heading headingLevel="h2" color="darkcyan" fontSize="20px"  marginTop="2em" width="80%" textAlign="left" >{'I am H2 Heading and I am aligned left'}</Heading>
export const HeadingH5: React.VFC<{}> = () => <Heading headingLevel="h5" color="yelow" fontSize="36px" marginTop="2em" width="80%" textAlign="center" >{'I am H5 Heading but with the biggest font'}</Heading>;
export const HeadingP: React.VFC<{}> = () => <Heading headingLevel="p" color="#262626" fontSize="20px"  marginTop="2em" width="20%"  >{'I am a paragraf and I am not that wide '}</Heading>


