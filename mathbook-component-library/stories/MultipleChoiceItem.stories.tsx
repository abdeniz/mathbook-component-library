import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import MultipleChoiceItem, {
  IMultipleChoiceItem,
} from '../src/components/multiple-choice/MultipleChoiceItem'

export default {
  title: 'Components/MultipleChoiceItem',
  component: MultipleChoiceItem,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<IMultipleChoiceItem> = (args) => (
  <MultipleChoiceItem {...args}>Button</MultipleChoiceItem>
)

// Reuse that template for creating different stories
export const Primary = Template.bind({})
