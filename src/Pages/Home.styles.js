import styled from 'styled-components'

export const App = styled.div`
  @media (min-width: 844px) {
    margin-left: 25%;
    margin-right: 25%;
  }
  @media (max-width: 843px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`