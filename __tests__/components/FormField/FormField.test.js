import React from 'react';
import renderer from 'react-test-renderer';

import { FormField } from '../../../src/components';

describe('<FormField />', () => {
  it('renders a form field component', () => {
    const component = renderer.create(
      <FormField />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with a label', () => {
    const component = renderer.create(
      <FormField label="This field's label" />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with an error', () => {
    const component = renderer.create(
      <FormField
        error="You are bad at forms"
        touched
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with a warning', () => {
    const component = renderer.create(
      <FormField
        warning="You are kind of bad at forms"
        touched
      />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
