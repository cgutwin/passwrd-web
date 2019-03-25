import React from "react";
import Styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <Indicator />
      <h4>Loading...</h4>
    </Wrapper>
  );
}

const translateX = keyframes`
  0% {
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  
  100% {
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
`;

const Indicator = Styled.div`
  animation: ${translateX} 1s ease-in-out infinite alternate;
  background: #304FFE;
  border-radius: 50%;
  height: 15px;
  width: 15px;
`;

const Wrapper = Styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export default Loading;
