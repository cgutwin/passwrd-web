import React from 'react'
import Styled from 'styled-components'

function Header () {
  return (
    <Wrapper>
      passwrd.
    </Wrapper>
  )
}

const Wrapper = Styled('header')`
  align-items: center;
  border-bottom: 2px solid #edeef2;
  display: flex;
  flex-direction: row;
  grid-column: 1 / end;
  grid-row: 1;
  padding: 0 20px;
`

export default Header
