import styled from 'styled-components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from 'theme';

const Feedback = styled.div`
  border: ${({ error, warning }) => {
    let color = PRIMARY_COLOR;

    if (error) {
      color = SECONDARY_COLOR;
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  `;

export default Feedback;
