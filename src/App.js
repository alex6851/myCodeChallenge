import styled from 'styled-components'

import Search from './containers/Search'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: mediumseagreen;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const App = () => (
  <Div>
    <Wrapper>
      <Title>
       Show Finder
      </Title> 
      <Search />
    </Wrapper>
  </Div>
)

const Div = styled.div`
  padding: 2rem;
`
export default App
