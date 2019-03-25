import React from 'react'
import Styled from 'styled-components'

function Input ({ ...rest}) {
  return <StyledInput required {...rest}/>
}

const StyledInput = Styled('input')`
  @media screen and (max-width: 360px) {
    width: 80%;
  }
  
  &:focus {
    border-bottom: 2px solid #304FFE;
    font-weight: 500;
  }
  
  background: none;
  border: none;
  border-bottom: 2px solid #000000;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  margin: 20px 0 20px 20px;
  padding: 10px;
  transition: border 200ms;
  // without the calc, the input will move the screen over if overfilled
  width: calc(100% - 30px);
`

export default Input
