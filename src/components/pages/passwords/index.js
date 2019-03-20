import React, { Fragment, useState, useEffect } from 'react'
import PasswordCard from './components/passwordCard'
import { Cards } from './Styles'
import * as AccountApi from '../../../api/account'

function Dashboard () {
  const [ accounts, setAccounts ] = useState([])
  
  useEffect(() => {
    const getAccounts = async () => {
      const result = await AccountApi.getAccounts()
      const accounts = result.data
      
      setAccounts(accounts)
    }
    
    getAccounts()
  }, [])
  
  const cards = accounts.map((account, key) => (
    <PasswordCard password={account.Password} key={key}>
      <h4>{account.AppName}</h4>
      <p>{account.AccountName}</p>
    </PasswordCard>
  ))
  
  return (
    <Fragment>
      <h3 style={{margin: '0 0 40px 0'}}>Your Accounts</h3>
      <Cards>
        {cards}
      </Cards>
    </Fragment>
  )
}

export default Dashboard
