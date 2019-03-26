import React, { Fragment, useState, useEffect } from 'react'
import SkeletonLoading from './components/SkeletonLoading'
import PasswordsTemplate from '../../templates/PasswordsTemplate'
import PasswordCard from './components/passwordCard'
import { getPasswords } from '../../../api/'

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
  
  const PasswordList = userPasswords.data.map((account, key) => (
    <PasswordCard password={account.Password} key={key}>
      <h4>{account.AppName}</h4>
      <p>{account.AccountName}</p>
    </PasswordCard>
  ))
  
  return (
    <PasswordsTemplate>
      { userPasswords.status === 'loading'
        ? <SkeletonLoading/>
        : (
          <Fragment>
            {PasswordList}
          </Fragment>
        )}
    </PasswordsTemplate>
  )
}

export default Passwords
