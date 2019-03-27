import React from 'react'
import Styled from 'styled-components'
import { signOut } from '../../../../../api/'

function Menu () {
  return (
    <Wrapper>
      Menu
      <button onClick={() => {
        signOut()
          .then(() => window.location.reload())
      }}>Sign Out</button>
    </Wrapper>
  )
}

const Wrapper = Styled('nav')`
  background: #070c1c;
  color: white;
  grid-column: 1;
  grid-row: 2 / end;
`

export default Menu
