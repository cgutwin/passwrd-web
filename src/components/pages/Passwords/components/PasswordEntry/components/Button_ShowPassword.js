import React from 'react'

function Button_ShowPassword ({ passwordVisible, setPasswordVisible }) {
  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible)
    
    setTimeout(() => {
      setPasswordVisible(false)
    }, 5000)
  }
  
  let show = (
    <svg width='24px'
         height='24px'
         viewBox='0 0 24 24'>
      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
    </svg>
  )
  if (passwordVisible) {
    show = (
      <svg width='24px'
           height='24px'
           viewBox='0 0 24 24'>
        <path fill="#000000" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
      </svg>
    )
  }
  
  return ( <div style={{cursor: 'pointer'}} onClick={TogglePasswordVisible}>{show}</div> )
}

export default Button_ShowPassword
