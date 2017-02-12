import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../../../src/containers';

describe('<Home />', () => {
  it('renders the home container', () => {
    const component = renderer.create(
      <Home />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
