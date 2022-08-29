import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostResult, { IPostResult } from './PostResult';
import { mockPostResultProps } from './PostResult.mocks';

export default {
  title: 'utility/PostResult',
  component: PostResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PostResult>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostResult> = (args) => (
  <PostResult {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPostResultProps.base,
} as IPostResult;