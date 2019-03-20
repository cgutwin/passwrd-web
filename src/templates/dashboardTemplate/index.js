import React from 'react'
import * as Auth from '../../api/auth'
import AddAccount from '../../components/pages/passwords/components/AddAccount'
import { Grid, Main, Sidebar, Header } from './Styles'

function DashboardTemplate ({ children }) {
  return (
    <Grid>
      <Header>
        <button onClick={() => {
          Auth.logout()
          window.location.reload()
        }}>Log Out</button>
      </Header>
      <Sidebar>
        <AddAccount/>
      </Sidebar>
      <Main>
        {children}
      </Main>
    </Grid>
  )
}

export default DashboardTemplate
