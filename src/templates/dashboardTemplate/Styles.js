import Styled from 'styled-components'

export const Grid = Styled('div')`
  display: grid;
  grid-template-columns: 25vw 1fr;
  grid-template-rows: 60px 1fr;
  grid-column-gap: 50px 0;
`

export const Main = Styled('main')`
  grid-row: 2;
  grid-column: 2;
  overflow-y: scroll;
  padding: 50px 0 50px 30px;
  height: calc(100vh - 160px);
  width: 95%;
`

export const Sidebar = Styled('div')`
  background: white;
  border-right: 3px solid rgba(0, 0, 0, 0.05);
`

export const Header = Styled('header')`
  background: #396afc;
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.1);
  color: white;
  grid-column: 1 / 3;
  grid-row: 1;
`
