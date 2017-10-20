import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { light } from '../../src/theme';

export default function testRendererWithProvider(children) {
  return renderer.create(<ThemeProvider theme={light}>
    {children}
  </ThemeProvider >);
}
