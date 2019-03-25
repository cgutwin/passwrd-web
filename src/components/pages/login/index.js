import React, { Fragment } from 'react'
import { signIn as SignIn } from '../../../api/'

function LoginPage (props) {
  const signIn = () => {
    SignIn({username: 'username', password: 'password'})
      .then(signInResult => props.setAccountStatus(signInResult))
  }
  
  return (
    <Fragment>
      <button onClick={signIn}>Sign In</button>
    </Fragment>
  )
}

export default LoginPage
