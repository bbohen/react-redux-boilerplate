import React from 'react';

import { FormField } from '../../../src/components';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

describe('<FormField />', () => {
  it('renders a form field component', () => {
    const component = testRendererWithProvider(<FormField input={{}} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with a label', () => {
    const component = testRendererWithProvider(<FormField
      input={{}}
      label="This field's label"
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with an error', () => {
    const component = testRendererWithProvider(<FormField
      input={{}}
      label="This field's label"
      meta={{
        touched: true,
        error: 'You are bad at forms',
      }}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders a form field with a warning', () => {
    const component = testRendererWithProvider(<FormField
      input={{}}
      label="This field's label"
      meta={{
        touched: true,
        warning: 'You are kind of bad at forms',
      }}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
