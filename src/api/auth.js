import Axios from 'axios'
import apiConfig from '../config/api'

// double check that the configured endpoint is correct.
Axios.defaults.baseURL = apiConfig.endpoint
// withCredentials is needed to set the session cookie. Not a config option, should always be true.
Axios.defaults.withCredentials = true

export const login = async function login (authData) {
  const result = await Axios.post(`/auth/login`, authData, {
    headers: {
      'content-type': 'application/json'
    }
  })
  return result
}

// No Cache since the result would be cached by the browser. Used in the onEffect hook on index, running on page load.
export const status = async function status () {
  // return await is redundant.
  const result = await Axios.get(`/auth/status`, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  
  return result
}

export const logout = async function logout () {
  const result = await Axios.post('/auth/logout')
  return result
}

export const addAccount = async function addAccount (accountData) {
  const result = await Axios.post('/accounts/new', accountData)
  return result
}

export const newUser = async function newUser (user) {
  const result = await Axios.post('/user/create', user)
  return result
}
