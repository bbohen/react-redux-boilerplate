import React from 'react';

import { MainContent } from '../../../src/containers';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

describe('<MainContent />', () => {
  it('renders children', () => {
    const component = testRendererWithProvider(<MainContent>
      <h1>Child 1</h1>
      <p>Child 2</p>
                                               </MainContent>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
