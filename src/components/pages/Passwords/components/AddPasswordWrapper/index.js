import React, { useState } from 'react'
import Button from '../../../../elements/Button'
import Input from './components/Input'
import Styled from 'styled-components'

function AddPasswordWrapper ({ AddPassword }) {
  const [ appName, setAppName ] = useState(null)
  const [ username, setUsername ] = useState(null)
  const [ password, setPassword ] = useState(null)
  const [ appUrl, setAppUrl ] = useState(null)
  
  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    
    let account = {
      AppName: appName,
      AppURL: appUrl,
      AccountName: username,
      Password: password
    }
  
    AddPassword(account)
  }
  
  return (
    <Wrapper>
      <TitleWrapper>
        <h4>ADD PASSWORD</h4>
      </TitleWrapper>
      <Form onSubmit={event => { onSubmitHandler(event) }}>
        <Input
          id={'AppName'}
          name={'AppName'}
          onChange={(event) => setAppName(event.target.value)}
          placeholder={'App Name'}
          required
          type={'text'}
        />
        <Input
          id={'AppURL'}
          name={'AppURL'}
          onChange={(event) => setAppUrl(event.target.value)}
          placeholder={'App / Site URL'}
          type={'url'}
        />
        <Input
          id={'AccountName'}
          name={'AccountName'}
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'Username / Email'}
          required
          type={'text'}
        />
        <Input
          id={'Password'}
          name={'Password'}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={'Password'}
          required
          type={'text'}
        />
        <Button type={'submit'}>Add Password</Button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = Styled('section')`
  background: #edeef2;
  display: grid;
  grid-column: 2;
  grid-gap: 5%;
  grid-row: 2 / end;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
`

const TitleWrapper = Styled('div')`
  & > h4 { font-size: 0.9rem; }
  align-items: center;
  border-bottom: 2px solid #dee0e7;
  display: flex;
  justify-content: space-around;
  grid-row: 1;
`

const Form = Styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default AddPasswordWrapper
