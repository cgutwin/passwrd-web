import React, { Fragment } from 'react'
import Styled from 'styled-components'

function Input ({ ...rest }) {
  // need to set the props to ...rest, calling directly gives fake arrays? ex. joining {rest.placeholder} doesnt work.
  let inputProps = {...rest}
  let required = ''
  
  if (inputProps.required) required = ' *'
  return (
    <Fragment>
      <Label htmlFor={inputProps.id}>
        {inputProps.placeholder.toUpperCase()}
        {required}
      </Label>
      <StyledInput {...rest}/>
    </Fragment>
  )
}

const StyledInput = Styled('input')`
  &:focus {
    border: 2px solid #0639e0;
  }
  
  border: 2px solid #dee0e7;
  border-radius: 15px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 10%;
  padding: 2% 5%;
  transition: border 200ms;
  width: 80%;
`

const Label = Styled('label')`
  align-self: start;
  font-size: 0.8rem;
  margin: 0 0 10px 25px;
`

export default Input
