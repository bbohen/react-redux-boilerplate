import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Card } from '../../../src/components';
import { mapStateToProps, UnconnectedHumans } from '../../../src/containers/Humans';
import mockHumans from './__mocks__/mockHumans';

describe('<Humans />', () => {
  it('renders an empty humans container', () => {
    const component = renderer.create(
      <UnconnectedHumans
        humansAreLoaded={false}
        loremIpsumIsLoaded={false}
        loadHumans={() => false}
        loadLoremIpsum={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a humans container with humans', () => {
    const component = renderer.create(
      <UnconnectedHumans
        humansAreLoaded
        humans={mockHumans}
        loremIpsumIsLoaded={false}
        loadHumans={() => false}
        loadLoremIpsum={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a humans container with a selected human in a human modal', () => {
    const component = renderer.create(
      <UnconnectedHumans
        humansAreLoaded
        loremIpsumIsLoaded
        humans={mockHumans}
        loremIpsum="test"
        selectedHuman={mockHumans[0]}
        loadHumans={() => false}
        loadLoremIpsum={() => false}
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('loads humans', () => {
    const mockFunction = jest.fn();

    renderer.create(
      <UnconnectedHumans
        humansAreLoaded={false}
        loremIpsumIsLoaded={false}
        loadHumans={mockFunction}
        loadLoremIpsum={() => false}
      />,
    );

    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it('loads loremIpsum', () => {
    const mockFunction = jest.fn();

    renderer.create(
      <UnconnectedHumans
        humansAreLoaded={false}
        loremIpsumIsLoaded={false}
        loadHumans={() => false}
        loadLoremIpsum={mockFunction}
      />,
    );

    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it('selectHuman is ran when a human is clicked', () => {
    const mockFunction = jest.fn();
    const component = shallow(
      <UnconnectedHumans
        humansAreLoaded
        selectHuman={mockFunction}
        humans={mockHumans}
        loremIpsumIsLoaded={false}
        loadHumans={() => false}
        loadLoremIpsum={() => false}
      />,
    );

    component.find(Card).first().simulate('click');
    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it('provides a default click callback', () => {
    const component = shallow(
      <UnconnectedHumans
        humansAreLoaded
        humans={mockHumans}
        loremIpsumIsLoaded={false}
        loadHumans={() => false}
        loadLoremIpsum={() => false}
      />,
    );

    component.find(Card).first().simulate('click');
  });

  it('should map state to props properly', () => {
    const props = mapStateToProps({
      humans: {
        indexOfSelectedHuman: 1,
        isLoaded: true,
        list: mockHumans,
      },
      loremIpsum: {
        isLoaded: true,
        content: [
          'test',
        ],
      },
    });

    expect(props).toMatchSnapshot();
  });
});
