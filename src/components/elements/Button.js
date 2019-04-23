import React from 'react'
import Styled from 'styled-components'

function Button ({ children, ...rest}) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = Styled('button')`
  &:active {
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.5);
    background: #2b47e5;
  }
  &:hover { box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1); }
  background: #304FFE;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 13px 30px;
  transition: box-shadow 250ms, background 250ms;
`

export default Button
