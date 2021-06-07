import React from "react";
import styled from "styled-components";
import { colors, fontFamily, fontSizing, spacing } from "../styles";

export interface IButton  {
  fullWidth?: boolean
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  fullWidth = true
}: IButton) => {
  return (
    <StyledButton>Button</StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  //Reset styling
  background: none;
    border: 0;
    color: inherit;
    /* cursor: default; */
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    user-select: none;
    -webkit-user-select: none; /* for button */
       -moz-user-select: none;
        -ms-user-select: none;

  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  background-color: ${colors.contrast};
  height: 60px;
  padding: 0 ${spacing.double};
  font-family: ${fontFamily};
  font-size: ${fontSizing.h3};
  font-weight: 400;
  color: ${colors.white1};
  border-radius: ${spacing.default};
`