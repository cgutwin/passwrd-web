import React, { useState } from 'react'
import Styled from 'styled-components'

function PasswordCard ({ password, children }) {
  const [ copyClicked, setCopyClicked ] = useState(false)
  const [ passwordVisible, setPasswordVisible] = useState(false)
  
  const CopyPassword = () => {
    navigator.clipboard.writeText(password)
  
    setCopyClicked(true)
    // used to set the check mark when copied
    setTimeout(() => {
      setCopyClicked(false)
    }, 2000)
  }
  
  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible)
    
    setTimeout(() => {
      setPasswordVisible(false)
    }, 5000)
  }
  
  let copy = (
    <div onClick={CopyPassword} style={{cursor: 'pointer'}}>
      <svg
        width='24px'
        height='24px'
        viewBox='0 0 24 24'>
        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
      </svg>
    </div>
  )
  
  if (copyClicked) copy = (
    <div>
      <svg width='24px'
           height='24px'
           viewBox='0 0 24 24'>
        <path fill="#2faf42" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
    </div>
  )
  
  let show = (
    <svg width='24px'
         height='24px'
         viewBox='0 0 24 24'>
      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
    </svg>
  )
  
  let passwordText = "********"
  if (passwordVisible) {
    passwordText = password
    show = (
      <svg width='24px'
           height='24px'
           viewBox='0 0 24 24'>
        <path fill="#000000" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
      </svg>
    )
  }
  
  return (
    <Card>
      {/*empty grid to hold placeholder in grid for favicons??*/}
      <div>
      </div>
      {children}
      {/*passwordText separate from children to control value more easily*/}
      <p>{passwordText}</p>
      <RowIcons>
        {copy}
        <div style={{cursor: 'pointer'}}
             onClick={TogglePasswordVisible}>
          {show}
        </div>
      </RowIcons>
    </Card>
  )
}

const Card = Styled('div')`
  & > * { margin: 0; }
  
  & > h4 { font-weight: 500; }
  
  & > p { font-size: 13px; }
  
  &:hover {
    background: #304FFE;
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.08);
    color: white;
    fill: white;
  }
  
  &:active {
    background: #284Fd6;
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 20px 10px rgba(0, 0, 0, 0.08);
    transition: background 20ms
  }
  
  align-items: center;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.03);
  border-radius: 25px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr 5fr 5fr
  height: 60px;
  margin-bottom: 5px;
  transition: background 200ms, box-shadow 200ms;
  width: 100%;
`

const RowIcons = Styled('div')`
  display: flex;
  flex-direction: row;
  grid-column: 5;
  justify-content: space-between;
  padding-right: 50px;
  width: 80px;
`

export default PasswordCard
