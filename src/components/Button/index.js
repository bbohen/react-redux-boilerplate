import styled from 'styled-components';

import { LIGHT_COLOR, PRIMARY_COLOR } from 'theme';

const Button = styled.button`
  border: none;
  background: ${PRIMARY_COLOR};
  color: ${LIGHT_COLOR};
  padding: 1em;
`;

export default Button;
