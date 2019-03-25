import React from 'react'
import Branding from './components/Branding'
import Form from './components/Form'
import Styled from 'styled-components'
import { signIn as SignIn } from '../../../api/'

function LoginPage (props) {
  const signIn = (userToSignIn) => {
    SignIn(userToSignIn)
      .then(signInResult => props.setAccountStatus(signInResult))
  }
  
  return (
    <Wrapper>
      <Branding/>
      <Form signIn={signIn}/>
      <Info>
        <p>I'm on GitHub</p>
      </Info>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) 50px;
    padding: 0 10vw;
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
