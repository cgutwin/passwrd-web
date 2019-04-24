import React, { useState } from 'react'
import Styled from 'styled-components'
import Button from '../../../elements/Button'
import Input from './Input'

function Form ({ signIn, createAccount }) {
  const [ username, setUsername ] = useState(null)
  const [ password, setPassword ] = useState(null)
  
  const onSignInClick = () => {
    let userToSignIn = {
      username: username,
      password: password
    }
  
    if (username && password) {
      signIn(userToSignIn)
    }
  }
  
  const onCreateAccountClick = () => {
    let accountToCreate = {
      username: username,
      password: password
    }
    
    if (accountToCreate.username && accountToCreate.password) {
      createAccount(accountToCreate)
    }
    else {
      console.error(accountToCreate)
    }
  }
  
  return (
    <Wrapper>
      <StyledForm onSubmit={event => event.preventDefault()}>
        <InputWrapper>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
          </svg>
          <Input name={'username'}
                 onChange={event => setUsername(event.target.value)}
                 placeholder={'Username'}
                 type={'text'} />
        </InputWrapper>
        <InputWrapper>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <g fill="none">
              <path d="M0 0h24v24H0V0z"/>
              <path opacity=".87" d="M0 0h24v24H0V0z"/>
            </g>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
          <Input name={'password'}
                 onChange={event => setPassword(event.target.value)}
                 placeholder={'Password'}
                 type={'password'} />
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={onSignInClick}
                  type={'submit'}>Sign In</Button>
          <p>or</p>
          <CreateAccount onClick={onCreateAccountClick}>Create An Account</CreateAccount>
        </ButtonWrapper>
      </StyledForm>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  @media screen and (max-width: 1024px) {
    grid-column: 1;
    grid-row: 2;
  }
  
  align-items: center;
  display: flex;
  grid-column: 2 / span 3;
  grid-row: 1;
`

const StyledForm = Styled('form')`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InputWrapper = Styled('label')`
  &:focus-within { fill: #304FFE; }
  align-items: center;
  display: flex;
  flex-direction: row;
  transition: fill 200ms;
`

const ButtonWrapper = Styled('div')`
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: unset;
  }
  
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2%;
  margin-top: 40px;
  padding-left: 40px;
`

const CreateAccount = Styled('p')`
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
`

export default Form
