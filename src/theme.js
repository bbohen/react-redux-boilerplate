import { css } from 'styled-components';

export default {
  colors: {
    primary: 'teal',
    secondary: 'lightSalmon',
    light: 'ivory',
  },
  mediaQueries: {
    smallerScreen: (...args) => css`
      @media (max-width: 600px) {
        ${css(...args)}
      }
    `,
  },
};

// export const smallerScreen = (...args) => css`
//   @media (max-width: 600px) {
//     ${css(...args)}
//   }
// `;

// Colors
// export const PRIMARY_COLOR = 'teal';
// export const SECONDARY_COLOR = 'lightSalmon';
// export const LIGHT_COLOR = 'ivory';

// Media queries
// export const SMALLER_SCREEN = (...args) => css`
//   @media (max-width: 600px) {
//     ${css(...args)}
//   }
// `;
