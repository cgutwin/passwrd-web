import React from 'react'
import Styled from 'styled-components'

function Branding () {
  return (
    <Wrapper>
      <LogoText>passwrd.</LogoText>
    </Wrapper>
  )
}

const Wrapper = Styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
`

const LogoText = Styled('h1')`
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 800;
`

export default Branding
