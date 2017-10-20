import React from 'react';

import { mapStateToProps, UnconnectedCats } from '../../../src/containers/Cats';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

const mockFunction = jest.fn();
const mockCats = [
  {
    data: {
      id: 'foo1',
      thumbnail: 'cat-href-1',
    },
  },
  {
    data: {
      id: 'foo2',
      thumbnail: 'cat-href-2',
    },
  },
  {
    data: {
      id: 'foo3',
      thumbnail: 'cat-href-3',
    },
  },
];

describe('<UnconnectedCats />', () => {
  it('renders an empty cats container', () => {
    const component = testRendererWithProvider(<UnconnectedCats
      catsAreLoaded={false}
      loadCats={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders some cats in a cats container', () => {
    const component = testRendererWithProvider(<UnconnectedCats
      cats={mockCats}
      loadCats={() => false}
      catsAreLoaded
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('tries to get you cats if you have none', () => {
    testRendererWithProvider(<UnconnectedCats
      catsAreLoaded={false}
      loadCats={mockFunction}
    />);

    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it('should map state to props properly', () => {
    const props = mapStateToProps({
      cats: {
        isLoaded: true,
        list: mockCats,
      },
    });

    expect(props).toMatchSnapshot();
  });
});
