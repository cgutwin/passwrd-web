import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Styled from 'styled-components'
import * as AuthUtil from '../../../util/auth'

function Login (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  async function authenticate (user) {
    const LoginStatus = await AuthUtil.authenticate(user)
    
    console.log(LoginStatus)
    if (LoginStatus.data.userId) {
      let data = {
        state: true,
        data: {
          id: LoginStatus.data.userId,
          username: LoginStatus.data.username,
        },
      }
      
      props.setIsAuthenticated(data)
      props.history.push('/dashboard')
      
    } else console.error(LoginStatus)
  }
  
  async function signUp (user) {
    const newUserStatus = await AuthUtil.newUser(user)
    
    alert(newUserStatus.data)
  }
  
  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    
    let user = {
      username: username,
      password: password
    }
    
    authenticate(user)
  }
  
  const onCreateAccountHandler = (evt) => {
    evt.preventDefault()
    
    let user = {
      username: username,
      password: password
    }
    
    signUp(user)
  }
  
  return (
    <Page>
      <Col1>
        <h1>passwrd.</h1>
      </Col1>
      <SpanGrid>
        <Inputs onSubmit={event => onSubmitHandler(event)}>
          <div>
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
          </div>
          <div>
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
          </div>
          <div style={{marginTop: 50,paddingLeft: 40}}>
            <SignIn type={'submit'}>Sign In</SignIn>
            or
            <CreateAccount onClick={event => onCreateAccountHandler(event)}>CREATE NEW ACCOUNT</CreateAccount>
          </div>
        </Inputs>
      </SpanGrid>
    </Page>
  )
}

const Page = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  overflow: hidden;
  height: 100vh;
`

const Col1 = Styled.div`
  & > h1 {
    font-size: 24px;
    font-style: italic;
    font-weight: bold;
  }
  
  align-items: center;
  display: flex;
  grid-column: 1;
  justify-content: center;
`

const SpanGrid = Styled.div`
  align-items: center;
  display: flex;
  grid-column: 2 / span 3;
  grid-row: 1;
`

const Col2 = Styled.div`
  align-items: flex-end;
  display: flex;
  gap: 5%;
  grid-column: 2;
  grid-row: 1;
  justify-content: center;
`

const Inputs = Styled.form`
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Input = Styled.input`
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
  width: 100%;
`

const SignIn = Styled.button`
  background: #304FFE;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  padding: 13px 30px;
  width: 112px;
`

const CreateAccount = Styled.button`
  background: transparent;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`

export default withRouter(Login)
