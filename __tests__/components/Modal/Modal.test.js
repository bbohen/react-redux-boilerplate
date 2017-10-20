import React from 'react';
import renderer from 'react-test-renderer';

import { Modal } from '../../../src/components';

const mockFunction = jest.fn();

describe('<Modal />', () => {
  it('renders a child component', () => {
    const component = renderer.create(<Modal>
      <div>A child component</div>
    </Modal>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('defaults when given no click event', () => {
    const component = renderer.create(<Modal>
      <div>A child component</div>
                                      </Modal>);
    let tree = component.toJSON();

    tree.props.onClick();
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('executes a passed click event', () => {
    const component = renderer.create(<Modal onClick={mockFunction}>
      <div>A child component</div>
                                      </Modal>);
    let tree = component.toJSON();

    tree.props.onClick();
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
