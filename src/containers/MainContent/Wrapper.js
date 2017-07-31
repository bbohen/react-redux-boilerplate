import styled from 'styled-components';

const MainWrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  padding-top: 1em;
`;

export default MainWrapper;
