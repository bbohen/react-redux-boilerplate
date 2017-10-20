import React from 'react';

import { Card } from '../../../src/components';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';


const mockFunction = jest.fn();

describe('<Card />', () => {
  it('renders a card component', () => {
    const component = testRendererWithProvider(<Card index={1}>
      <p>Test</p>
                                               </Card>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('defaults when given no click event', () => {
    const component = testRendererWithProvider(<Card
      index={1}
    >
      <p>Test</p>
                                               </Card>);
    let tree = component.toJSON();

    tree.props.onClick();
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('responds to a click event', () => {
    const component = testRendererWithProvider(<Card
      index={1}
      onClick={mockFunction}
    >
      <p>Test</p>
                                               </Card>);
    let tree = component.toJSON();

    tree.props.onClick();
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
