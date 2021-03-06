import React, { useState } from 'react'
import Toast from './components/Toast'
import Branding from './components/Branding'
import Form from './components/Form'
import Styled from 'styled-components'
import { signIn as SignIn, createAccount as CreateAccount } from '../../../api/'

function LoginPage (props) {
  const [ errorToastDisplay, setErrorToastDisplay ] = useState({visible: false, message: null})
  
  const signIn = (userToSignIn) => {
      SignIn(userToSignIn)
        .then(signInResult => {
          props.setAccountStatus(signInResult)
        })
        .catch(() => {
          displayToastError()
        })
  }
  
  const createAccount = (accountToCreate) => {
    CreateAccount(accountToCreate)
      .then(creationResult => {
        if (creationResult.status) signIn(accountToCreate)
        alert(JSON.stringify(creationResult))
      })
      .catch(() => {
        displayToastError('Error: Username already exists.')
      })
  }
  
  const displayToastError = (message = 'Error: Incorrect Username / Password.') => {
    setErrorToastDisplay({visible: true, message: message})
    setTimeout(() => {
      setErrorToastDisplay({visible: false, message: null})
    }, 5000)
  }
  
  const errorToast = () => {
    let toast = null
    if (errorToastDisplay.visible) {
      toast = (
        <Toast>
          <p>{errorToastDisplay.message}</p>
        </Toast>
      )
    }
    return toast
  }
  
  return (
    <Wrapper>
      {errorToast()}
      <Branding/>
      <Form signIn={signIn} createAccount={createAccount}/>
      <Info>
        <p>
          <a href={'https://github.com/cgutwin/passwrd-web'}
             rel={'noreferrer noopener nofollow'}
             target={'_blank'}>
            I'm on GitHub
          </a>
        </p>
        <p>
          Very much in an alpha state.
        </p>
      </Info>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) 50px;
    padding: 10vh 10vw;
  }
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 100vh;
`

const Info = Styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10%;
  grid-row: 4;
  grid-column: 1 / span 3;
  justify-content: center;
`


export default LoginPage
