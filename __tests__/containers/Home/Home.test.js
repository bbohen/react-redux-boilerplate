import React from 'react';

import { Home } from '../../../src/containers';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

describe('<Home />', () => {
  it('renders the home container', () => {
    const component = testRendererWithProvider(<Home />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
