import Axios from 'axios'
import apiConfig from '../config/api'

// double check that the configured endpoint is correct.
Axios.defaults.baseURL = apiConfig.endpoint
// withCredentials is needed to set the session cookie. Not a config option, should always be true.
Axios.defaults.withCredentials = true

export const getAccountStatus = async () => {
  return await Axios.get('/auth/status', {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
}

export const signIn = async (userToSignIn) => {
  const signInData = await Axios.post(`/auth/login`, userToSignIn, {
    headers: {
      'content-type': 'application/json'
    }
  })
  
  return {
    status: signInData,
    data: signInData.data
  }
}

export const signOut = async () => {
  return await Axios.post('/auth/logout')
}

export const getPasswords = async () => {
  const passwords = await Axios.get(`/accounts/`)
  return {
    status: true,
    data: passwords.data
  }
}

export const addPassword = async (passwordData) => {
  console.log(passwordData)
  const passwords = await Axios.post(`/accounts/new`, passwordData)
  return passwords
}

export const createAccount = async (accountToCreate) => {
  const accountData = await Axios.post(`/user/create`, accountToCreate, {
    headers: {
      'content-type': 'application/json'
    }
  })
  
  return {
    status: true,
    data: accountData.data
  }
}
