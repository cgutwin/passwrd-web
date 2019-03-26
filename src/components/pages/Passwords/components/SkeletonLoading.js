import React, { Fragment } from 'react'
import Styled, { keyframes } from 'styled-components'

function SkeletonLoading () {
  return (
    <Fragment>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Fragment>
  )
}

const Pulse = keyframes`
  0% {
    background: rgba(0, 0, 0, 0.03);
  }
  
  100% {
    background: rgba(255, 255, 255, 1);
  }
`

const Card = Styled('div')`
  animation: ${Pulse} 750ms infinite alternate;
  background: rgba(0, 0, 0, 0.03);
  border: 2px solid rgba(0, 0, 0, 0.03);
  border-radius: 25px;
  height: 60px;
  margin-bottom: 5px;
  width: 100%;
`

export default SkeletonLoading
