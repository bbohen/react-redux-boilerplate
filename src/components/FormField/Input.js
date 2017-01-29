import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from 'theme';

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: ${({ error, warning }) => {
    let color = PRIMARY_COLOR;

    if (error) {
      color = SECONDARY_COLOR;
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  color: ${PRIMARY_COLOR};
  flex-grow: 1;
  outline: none;
  padding: 1em;
`;

export default Input;
