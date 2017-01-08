import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import { Navigation } from '../../src/components';

describe('<Navigation />', () => {
  it('renders the navigation component', () => {
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
