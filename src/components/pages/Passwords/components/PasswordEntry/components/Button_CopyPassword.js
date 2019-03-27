import React, { Fragment } from 'react'

function Button_CopyPassword ({ copyClicked, password, setCopyClicked }) {
  const CopyPassword = () => {
    navigator.clipboard.writeText(password)
    
    setCopyClicked(true)
    // used to set the check mark when copied
    setTimeout(() => {
      setCopyClicked(false)
    }, 2000)
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
  if (copyClicked) {
    copy = (
      <svg width='24px'
           height='24px'
           viewBox='0 0 24 24'>
        <path fill="#2faf42" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
    )
  }
  
  return ( <Fragment>{copy}</Fragment> )
}

export default Button_CopyPassword
