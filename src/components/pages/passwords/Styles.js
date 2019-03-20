import Styled from 'styled-components'

export const Cards = Styled('div')`
  &:after {
    color: rgba(0, 0, 0, 0.3);
    content: "that's it!";
    margin: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  display: grid;
  grid-gap: 10px;
`
