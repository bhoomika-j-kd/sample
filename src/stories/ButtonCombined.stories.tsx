import { CustomButtonProps } from '../types/CustomButtonProps.type';
import { CustomButtonProps2 } from '../types/CustomButtonProps2.type';
import { SampleButton } from './Button.stories';
import { SampleButton2 } from './Button2.stories';

export default {
  title: 'CombinedStory',
};

export const CombinedStoryView = () => {
  return (
    <>
      <SampleButton {...(SampleButton.args as CustomButtonProps)} />
      <SampleButton2 {...(SampleButton2.args as CustomButtonProps2)} />
    </>
  );
};

// CombinedStoryView.storyName = 'hello world';
