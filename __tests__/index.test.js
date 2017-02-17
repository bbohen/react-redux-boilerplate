import React from 'react';
import renderer from 'react-test-renderer';

import Boilerplate from '../src';

jest.mock('react-dom', () => ({
  render: () => jest.fn(),
}));
jest.mock('../src/globalStyles.js', () => jest.fn());

describe('Root component of the app', () => {
  it('renders as expected without errors', () => {
    const component = renderer.create(
      <Boilerplate />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
