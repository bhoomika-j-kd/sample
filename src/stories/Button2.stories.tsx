import { Meta, StoryFn } from '@storybook/react';
import CustomButton2 from '../components/CustomButton2';
import { CustomButtonProps2 } from '../types/CustomButtonProps2.type';

export default {
  title: 'Button2',
  component: CustomButton2,
} as Meta;

const ButtonTemplate2: StoryFn<CustomButtonProps2> = (args: CustomButtonProps2) => (
  <CustomButton2 {...args} />
);

export const SampleButton2 = ButtonTemplate2.bind({});
SampleButton2.args = {
  text: 'Button 2',
  style: { backgroundColor: 'green', marginLeft: '5px', width: '100px', height: '100px' },
} as CustomButtonProps2;
