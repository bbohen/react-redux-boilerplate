/**
 * This is just a static theme with constants
 */

import { css } from 'styled-components';

// Colors
export const PRIMARY_COLOR = 'teal';
export const SECONDARY_COLOR = 'lightSalmon';

// Media queries
export const SMALLER_SCREEN = (...args) => css`
  @media (max-width: 600px) {
    ${css(...args)}
  }
`;
