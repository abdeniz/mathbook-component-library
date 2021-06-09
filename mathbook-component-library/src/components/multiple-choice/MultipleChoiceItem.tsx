import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, fontFamily, spacing } from '../styles'

export interface IMultipleChoiceItem {
  activeChoice: boolean
  choiceText: string
  changeActiveChoice: () => void
  isCorrect: boolean
}

const MultipleChoiceItem = ({
  activeChoice,
  choiceText,
  changeActiveChoice,
  isCorrect,
}: IMultipleChoiceItem) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (activeChoice !== undefined) setSelected(activeChoice)
  }, [activeChoice])

  return (
    <MultipleChoiceItemWrapper
      isCorrect={isCorrect}
      onClick={() => changeActiveChoice()}
      selected={selected}
    >
      {choiceText}
    </MultipleChoiceItemWrapper>
  )
}

export default MultipleChoiceItem

const MultipleChoiceItemWrapper = styled.div<{
  selected: boolean
  isCorrect: boolean
}>`
  padding: ${spacing.default};
  font-family: ${fontFamily};
  background-color: ${colors.white1};
  background-color: ${({ selected, isCorrect }) =>
    selected && isCorrect && colors.contrast};
  background-color: ${({ selected, isCorrect }) =>
    selected && !isCorrect && colors.error};
  color: ${colors.dark1};
  user-select: none;

  -webkit-transition: background-color 0.2 linear;
  -ms-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
`
