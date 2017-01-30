import React from 'react';
import renderer from 'react-test-renderer';

import { NotFound } from '../../../src/components';

describe('<NotFound />', () => {
  it('renders the not found component', () => {
    const component = renderer.create(
      <NotFound />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
