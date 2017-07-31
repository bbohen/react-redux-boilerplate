import { css } from 'styled-components';

const base = {
  mediaQueries: {
    smallerScreen: (...args) => css`
      @media (max-width: 600px) {
        ${css(...args)}
      }
    `,
  },
};

export const light = {
  colors: {
    background: 'white',
    primary: '#1C1F24',
    secondary: 'teal',
    highlight: 'lightSalmon',
    light: 'ivory',
  },
  ...base,
};

export const dark = {
  colors: {
    background: '#1C1F24',
  },
  ...base,
};
