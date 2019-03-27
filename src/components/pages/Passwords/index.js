import React, { Fragment, useState, useEffect } from 'react'
import Styled from 'styled-components'
import AddPasswordWrapper from './components/AddPasswordWrapper/'
import PasswordsTemplate from '../../templates/PasswordsTemplate'
import PasswordEntry from './components/PasswordEntry/'
import { getPasswords, addPassword } from '../../../api/'

const initialPasswordStatus = {
  status: 'loading',
  data: [
    {}
  ]
}

function Passwords () {
  const [ userPasswords, setUserPasswords ] = useState(initialPasswordStatus)
  
  useEffect(() => {
    getPasswords()
      .then(passwords => setUserPasswords(passwords))
  }, [])
  
  const AddPassword = (passwordData) => {
    console.log(passwordData)
    addPassword(passwordData)
      .then(() => {
        setUserPasswords({
          status: 'true',
          data: [...userPasswords.data, passwordData]
        })
      })
  }
  
  const passwordsList = userPasswords.data.map((account, key) => (
    <PasswordEntry Password={account.Password} key={key}>
      <h4>{account.AppName}</h4>
      <p>{account.AccountName}</p>
    </PasswordEntry>
  ))
  
  return (
    <PasswordsTemplate>
      { userPasswords.status === 'loading'
        ? (
          <Fragment>
            <div/>
            <main>
              <p>nothing selected :(</p>
            </main>
          </Fragment>
        ) : (
          <Fragment>
            <AddPasswordWrapper AddPassword={AddPassword}/>
            <main style={{gridColumn: '3 / end', paddingTop: 20, overflowY: 'scroll'}}>
              {passwordsList}
              <EndText>•</EndText>
            </main>
          </Fragment>
        )}
    </PasswordsTemplate>
  )
}

const EndText = Styled('div')`
  color: #edeef2;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`

export default Passwords
