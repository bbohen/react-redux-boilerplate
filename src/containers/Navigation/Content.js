import styled from 'styled-components';

const Content = styled.div`
  padding: 1em;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  ${props => props.theme.mediaQueries.smallerScreen`
    flex-direction: column
  `}
  align-items: center;
`;

export default Content;
