import React from 'react';
import renderer from 'react-test-renderer';

import { MainContent } from '../../../src/components';

describe('<MainContent />', () => {
  it('renders a child component', () => {
    const component = renderer.create(
      <MainContent>
        <h1>Child 1</h1>
        <p>Child 2</p>
      </MainContent>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
