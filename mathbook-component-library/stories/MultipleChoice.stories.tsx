import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import MultipleChoice, {
  IMultipleChoice,
} from '../src/components/multiple-choice/MultipleChoice'

export default {
  title: 'Components/MultipleChoice',
  component: MultipleChoice,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IMultipleChoice> = (args) => (
  <MultipleChoice {...args}>Button</MultipleChoice>
)

// Reuse that template for creating different stories
export const Primary = Template.bind({})
