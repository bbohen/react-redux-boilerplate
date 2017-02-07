/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';

import OpenSans from './assets/fonts/open-sans.woff';
import Quicksand from './assets/fonts/quicksand.woff';

injectGlobal`
  @font-face {
    font-family: Quicksand;
    src: url('${Quicksand}') format('woff');
  }
  @font-face {
    font-family: Open-sans;
    src: url('${OpenSans}') format('woff');
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Open-sans, Helvetica, Arial, sans-serif;
  }
`;
