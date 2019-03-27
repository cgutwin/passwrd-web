import React, { useState } from 'react'
import ShowPassword from './components/Button_ShowPassword'
import CopyPassword from './components/Button_CopyPassword'
import Styled, { keyframes } from 'styled-components'

function PasswordEntry ({ children, Password }) {
  const [ copyClicked, setCopyClicked ] = useState(false)
  const [ passwordVisible, setPasswordVisible] = useState(false)
  
  let passwordDisplay = '••••••••'
  if (passwordVisible) passwordDisplay = Password
  
  return (
    <Card>
      <div style={{background: 'black', borderRadius: 20, height: 32, width: 32}}/>
      {children}
      <p>{passwordDisplay}</p>
      <Functions>
        <ShowPassword passwordVisible={passwordVisible} setPasswordVisible={setPasswordVisible}/>
        <CopyPassword password={Password} copyClicked={copyClicked} setCopyClicked={setCopyClicked}/>
      </Functions>
    </Card>
  )
}

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Card = Styled('div')`
  & > * { margin: 2px; }
  & > h4 { font-weight: 500 };
  & > p { font-size: 0.9rem };
  
  &:hover {
    background: #edeef2;
  }
  
  animation: ${FadeIn} 0.5s forwards;
  align-items: center;
  border-bottom: 2px solid #edeef2;
  display: grid;
  grid-template-columns: 50px 3fr 5fr 10fr;
  gap: 20px;
  height: 60px;
  padding: 10px 20px;
  transition: background 200ms;
`

const Functions = Styled('div')`
  display: flex;
  flex-direction: row;
  grid-column: 5;
  justify-content: space-between;
  padding-right: 50px;
  width: 80px;
`

export default PasswordEntry
