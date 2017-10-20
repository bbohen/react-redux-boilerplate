import React from 'react';

import { NotFound } from '../../../src/components';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

describe('<NotFound />', () => {
  it('renders the not found component', () => {
    const component = testRendererWithProvider(<NotFound />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
