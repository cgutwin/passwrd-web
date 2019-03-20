import Axios from 'axios'
import apiConfig from '../config/api'

// double check that the configured endpoint is correct.
Axios.defaults.baseURL = apiConfig.endpoint
// withCredentials is needed to set the session cookie. Not a config option, should always be true.
Axios.defaults.withCredentials = true

export const getAccounts = async function getAccounts () {
  const result = await Axios.get(`/accounts/`)
  return result
}
