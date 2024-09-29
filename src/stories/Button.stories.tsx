import CustomButton from '../components/CustomButton';
import { Meta, StoryFn } from '@storybook/react';
import { CustomButtonProps } from '../types/CustomButtonProps.type';
import { Decorator } from './Decorator';

export default {
  title: 'Button',
  component: CustomButton,
  argTypes: { handleClick: { action: 'CustomButtonClick' } },
} as Meta;

const ButtonTemplate: StoryFn<CustomButtonProps> = (args: CustomButtonProps) => (
  <Decorator>
    <CustomButton {...args} />
  </Decorator>
);

export const SampleButton = ButtonTemplate.bind({});
SampleButton.args = {
  color: 'pink',
  text: 'Button 1',
  width: 200,
  height: 150,
  provideBorder: true,
  handleClick: () => {
    console.log('Button clicked!');
    alert('Button Click');
  },
} as CustomButtonProps;
