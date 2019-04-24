import React from 'react'
import Styled, { keyframes } from 'styled-components'

function Toast ({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = Styled.div`
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    line-height: 15px;
    width: 80%;
  }
  
  animation: ${fadeIn} 750ms ease-in-out alternate;
  background: #fe3030;
  border-radius: 50px;
  color: white;
  font-weight: 500;
  height: 40px;
  left: 50%;
  line-height: 10px;
  position: absolute;
  text-align: center;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 25%;
`

export default Toast
