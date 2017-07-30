import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { Navigation } from '../../../src/containers';

describe('<Navigation />', () => {
  it('renders the navigation container', () => {
    const WrappedNavigation = (
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const component = renderer.create(
      WrappedNavigation,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
