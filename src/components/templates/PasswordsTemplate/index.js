import React from 'react'
import Styled from 'styled-components'
import { signOut as SignOut } from '../../../api/'

function PasswordsTemplate ({ children }) {
  return (
    <Wrapper>
      <Header>
        <h1>Passwords</h1>
      </Header>
      <Sidebar>
        <button onClick={SignOut}>Sign Out</button>
      </Sidebar>
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr;
  }
  
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px 1fr;
  height: 100vh;
`

const Header = Styled('header')`
  background: white;
  border-bottom: 2px solid #e3e5ef;
  grid-column: 1 / span 2;
  grid-row: 1;
  padding: 0 2%;
  position: sticky;
`

const Sidebar = Styled('div')`
  @media screen and (max-width: 800px) {
    display: none;
  }
  
  background: white;
  border-right: 2px solid #e3e5ef;
  grid-column: 1;
  grid-row: 2;
  padding: 0 2%;
`

const Main = Styled('main')`
  @media screen and (max-width: 800px) {
    grid-column: 1;
  }
  
  grid-column: 2;
  grid-row: 2;
  padding: 20px;
`

export default PasswordsTemplate
