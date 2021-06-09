import React, { useState } from 'react'
import styled from 'styled-components'
import { spacing } from '../styles'
import MultipleChoiceItem from './MultipleChoiceItem'
import Button from '../button/Button'

export interface IMultipleChoice {}

const MultipleChoice = (props: IMultipleChoice) => {
  const [activeChoice, setActiveChoice] = useState(-1)

  const changeChoice = (choice: number): void => {
    if (choice === activeChoice) {
      setActiveChoice(-1)
      return
    }
    setActiveChoice(choice)
  }

  return (
    <>
      <MultipleChoiceWrapper>
        {new Array(3).fill(null).map((_, i) => (
          <MultipleChoiceItem
            activeChoice={activeChoice === i}
            choiceText={'Choice' + i}
            changeActiveChoice={() => changeChoice(i)}
          ></MultipleChoiceItem>
        ))}
      </MultipleChoiceWrapper>
      <Button fullWidth disabled={activeChoice === -1}>
        Confirm
      </Button>
    </>
  )
}

export default MultipleChoice

const MultipleChoiceWrapper = styled.div`
  border-radius: ${spacing.default};
  overflow: hidden;
  margin-bottom: ${spacing.default};
`
