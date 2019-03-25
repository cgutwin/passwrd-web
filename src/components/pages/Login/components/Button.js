import React from 'react'
import Styled from 'styled-components'

function Button ({ children, ...rest}) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = Styled('button')`
  background: #304FFE;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 13px 30px;
`

export default Button
