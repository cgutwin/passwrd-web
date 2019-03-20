import React, { Fragment } from 'react'
import LoginForm from './LoginForm'
import {withRouter} from 'react-router-dom'
import * as AuthUtil from '../../../util/auth'

function Login (props) {
  async function authenticate (user) {
    const LoginStatus = await AuthUtil.authenticate(user)
    
    console.log(LoginStatus)
    if (LoginStatus.data.userId) {
      let data = {
        state: true,
        data: {
          id: LoginStatus.data.userId,
          username: LoginStatus.data.username
        }
      }
      
      props.setIsAuthenticated(data)
      props.history.push('/dashboard');
  
    } else console.error(LoginStatus)
  }
  
  async function signUp (user) {
    const newUserStatus = await AuthUtil.newUser(user)
    
    alert(newUserStatus.data)
  }
  
  return (
    <Fragment>
      <LoginForm SignUp={signUp} Authenticate={authenticate}/>
    </Fragment>
  )
}

export default withRouter(Login)
