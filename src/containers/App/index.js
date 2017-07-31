import styled from 'styled-components';

const App = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  background-color: ${props => props.theme.colors.background}
  min-height: 100vh;
`;

export default App;
