import React from 'react'
import Styled from 'styled-components'

function CategoriesWrapper ({ children }) {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>CATEGORIES</h1>
      </TitleWrapper>
      <div style={{overflowY: 'scroll'}}>
        {children}
      </div>
      <div style={{fontWeight: 500, fontSize: '0.9rem', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#375ed3', borderRadius: 20, margin: 20}}>
        ADD ACCOUNT
      </div>
    </Wrapper>
  )
}

const Wrapper = Styled('section')`
  background: #edeef2;
  display: grid;
  grid-column: 2;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 80px;
  grid-row: 2 / end;
`

const TitleWrapper = Styled('div')`
  & > h1 {
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  align-items: center;
  background: #d3d5df;
  display: flex;
  padding-left: 20px;
`

export default CategoriesWrapper
