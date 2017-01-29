import styled from 'styled-components';

import { SECONDARY_COLOR } from 'theme';

const NavigationList = styled.ul`
  align-items: center;
  border-bottom: 1px solid ${SECONDARY_COLOR};
  list-style: none;
  margin: 1em;
  padding: 0;
  display: flex;
`;

export default NavigationList;
