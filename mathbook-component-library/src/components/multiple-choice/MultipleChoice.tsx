import React, { useState } from 'react'
import styled from 'styled-components'
import { spacing } from '../styles'
import MultipleChoiceItem from './MultipleChoiceItem'
import Button from '../button/Button'

export interface IMultipleChoice {
  multipleChoiceData: IMultipleChoiceData
}

export interface IMultipleChoiceData {
  choices: string[]
  correctChoice: number
}

const MultipleChoice = ({ multipleChoiceData }: IMultipleChoice) => {
  const [clickedChoice, setClickedChoice] = useState(-1)
  const [clicked, setClicked] = useState(false)

  const { choices, correctChoice } = multipleChoiceData

  const changeChoice = (choice: number): void => {
    setClicked(true)
    setClickedChoice(choice)
  }

  return (
    <>
      <MultipleChoiceWrapper clicked={clicked}>
        {choices.map((choiceText, i) => (
          <MultipleChoiceItem
            activeChoice={clickedChoice === i}
            choiceText={choiceText}
            changeActiveChoice={() => !clicked && changeChoice(i)}
            isCorrect={correctChoice === i}
          ></MultipleChoiceItem>
        ))}
      </MultipleChoiceWrapper>
      <Button fullWidth disabled={clickedChoice === -1}>
        Confirm
      </Button>
    </>
  )
}

export default MultipleChoice

const MultipleChoiceWrapper = styled.div<{ clicked?: boolean }>`
  border-radius: ${spacing.default};
  overflow: hidden;
  margin-bottom: ${spacing.default};

  cursor: ${({ clicked }) => (clicked ? 'not-allowed' : 'pointer')};
`
