import React from "react";
import styled from "styled-components";
import { colors, fontFamily, fontSizing, spacing } from "../styles";

export interface IButtonLink  {
  fullWidth?: boolean
  disabled?: boolean
  children?: React.ReactNode
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  fullWidth = false,
  disabled = true,
  children,
}: IButtonLink) => {
  return (
    <StyledButton disabled={disabled} fullWidth={fullWidth}>{children}</StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ disabled?: boolean, fullWidth?: boolean}>`
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
  display: inline-block;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  height: 60px;
  padding: 0 ${spacing.double};
  font-family: ${fontFamily};
  font-size: ${fontSizing.h3};
  font-weight: 400;
  color: ${colors.white1};
  text-decoration: underline;

  background-color: none;
  color: ${({disabled}) => (disabled ? colors.white3 : colors.contrast)};
`