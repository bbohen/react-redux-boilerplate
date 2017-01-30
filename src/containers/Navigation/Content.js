import styled from 'styled-components';

import { SMALLER_SCREEN } from 'theme';

const Content = styled.div`
  padding: 1em;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  ${SMALLER_SCREEN`
    flex-direction: column
  `}
  align-items: center;
`;

export default Content;
