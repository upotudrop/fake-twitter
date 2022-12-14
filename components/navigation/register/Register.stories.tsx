import { ComponentStory, ComponentMeta } from '@storybook/react';
import Register, { IRegister } from './Register';
import { mockRegisterProps } from './Register.mocks';

export default {
  title: 'Navigation/Register',
  component: Register,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Register>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Register> = (args) => (
  <Register {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRegisterProps.base,
} as IRegister;