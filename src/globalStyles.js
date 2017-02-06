/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
