import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from 'theme';

const Label = styled.div`
  color: ${({ error, warning }) => {
    if (error) {
      return SECONDARY_COLOR;
    } else if (warning) {
      return 'yellow';
    }

    return PRIMARY_COLOR;
  }}
`;

export default Label;
