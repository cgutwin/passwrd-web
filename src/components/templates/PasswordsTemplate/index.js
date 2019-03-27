import React from 'react'
import Styled from 'styled-components'
import Header from './components/Header/'
import Menu from './components/Menu/'

function PasswordsTemplate ({ children }) {
  return (
    <Wrapper>
      <Header/>
      <Menu/>
      {children}
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr;
  }
  
  display: grid;
  grid-template-columns: 80px 2fr 2fr 7fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
`

export default PasswordsTemplate
