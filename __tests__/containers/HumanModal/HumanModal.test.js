import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { HumanModal } from '../../../src/containers';

const mockFunction = jest.fn();

describe('<HumanModal />', () => {
  it('renders the human modal container', () => {
    const component = renderer.create(
      <HumanModal onClick={() => false} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the human modal container with all the proper attributes', () => {
    const component = renderer.create(
      <HumanModal
        age={28}
        bio="Some content about the human"
        birthday={{
          mdy: '10/10/1000',
        }}
        email="test@test.com"
        imageUrl="http://img.com/1234/test.jpg"
        name="Test"
        onClick={() => false}
        phone="111 111-1111"
        surname="McTesterson"
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('responds to a click event', () => {
    const component = shallow(
      <HumanModal onClick={mockFunction} />,
    );

    component.simulate('click');
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
