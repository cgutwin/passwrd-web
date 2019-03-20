import React, { useState } from 'react'
import Styled from 'styled-components'
import * as AuthUtil from '../../../../util/auth'

function AddAccount () {
  const [ appName, setAppName ] = useState(null)
  const [ username, setUsername ] = useState(null)
  const [ password, setPassword ] = useState(null)
  const [ appUrl, setAppUrl ] = useState(null)
  
  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    
    let account = {
      AppName: appName,
      AppURL: appUrl,
      Username: username,
      Password: password
    }
    
    AuthUtil.addAccount(account)
      .then(() => window.location.reload())
  }
  
  return (
    <Wrapper>
      <h3>Add Account</h3>
      <form onSubmit={event => { onSubmitHandler(event) }}>
        <label>* App Name:
          <Input name={'AppName'}
                 onChange={event => {setAppName(event.target.value)}}
                 placeholder={'App/Site Name'}
                 required
                 type={'text'}/>
        </label>
        <label>App URL:
          <Input name={'AppURL'}
                 onChange={event => {setAppUrl(event.target.value)}}
                 placeholder={'App/Site URL'}
                 type={'url'}/>
        </label>
        <label>* Username:
        <Input name={'Username'}
               onChange={event => {setUsername(event.target.value)}}
               placeholder={'Username or Email'}
               required
               type={'text'}/>
        </label>
        <label>* Password:
        <Input name={'Password'}
               onChange={event => {setPassword(event.target.value)}}
               placeholder={'Password'}
               required
               type={'text'}/>
        </label>
        <Button type={'submit'}>Add New</Button>
      </form>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  padding: 20px;
  width: 25vw;
`

const Button = Styled('button')`
  background: #396afc;
  border: 2px solid rgba(0, 0, 0, 0.03);
  border-radius: 40px;
  color: white;
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 20px 5px;
  padding: 10px 15px;
`

const Input = Styled('input')`
  &:focus {
    border-bottom: 2px solid #396afc;
  }

  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin: 10px 0 20px 0;
  padding: 5px;
  transition: border-bottom 200ms;
`

export default AddAccount
