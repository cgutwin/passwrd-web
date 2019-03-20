import * as Auth from '../api/auth'

export async function isAuthenticated () {
  const AuthStatus = await Auth.status()
  return AuthStatus.data
}

export async function authenticate (user) {
  const LoginStatus = await Auth.login(user)
  return LoginStatus
}

export async function addAccount (account) {
  const accountStatus = await Auth.addAccount(account)
  return accountStatus
}

export async function newUser (user) {
  const newUserStatus = await Auth.newUser(user)
  return newUserStatus
}
