import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '../../src/components';

describe('<Card />', () => {
  it('renders a card', () => {
    const component = renderer.create(
      <Card>
        <p>Test</p>
      </Card>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
