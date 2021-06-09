import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import MultipleChoice, {
  IMultipleChoice,
  IMultipleChoiceData,
} from '../src/components/multiple-choice/MultipleChoice'

const multipleChoiceData: IMultipleChoiceData = {
  choices: ['Choice 1', 'Choice 2', 'Choice 3'],
  correctChoice: 1,
}

export default {
  title: 'Components/MultipleChoice',
  component: MultipleChoice,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IMultipleChoice> = () => (
  <MultipleChoice multipleChoiceData={multipleChoiceData} />
)

// Reuse that template for creating different stories
export const Primary = Template.bind({})
