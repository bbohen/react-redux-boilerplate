import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation } from '../../../src/containers';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';


describe('<Navigation />', () => {
  it('renders the navigation container', () => {
    const WrappedNavigation = (
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const component = testRendererWithProvider(WrappedNavigation);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
