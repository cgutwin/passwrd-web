import React, { useState } from 'react'

function LoginForm (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    
    let user = {
      username: username,
      password: password
    }
    
    props.Authenticate(user)
  }
  
  const onSignUpHandler = (evt) => {
    evt.preventDefault()
    
    let user = {
      username: username,
      password: password
    }
    
    props.SignUp(user)
  }
  
  return (
    <form onSubmit={event => onSubmitHandler(event)}>
      <input name={'username'}
             onChange={event => setUsername(event.target.value)}
             placeholder={'username'}
             type={'text'}/>
      <input name={'password'}
             onChange={event => setPassword(event.target.value)}
             placeholder={'password'}
             type={'password'}/>
      <button type={'submit'}>Log In</button>
      <button onClick={event => onSignUpHandler(event)}>Sign Up</button>
    </form>
  )
}

export default LoginForm
