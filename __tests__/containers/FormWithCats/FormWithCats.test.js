import React from 'react';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import FormWithCats from '../../../src/containers/FormWithCats';
import cats from '../../../src/redux/modules/cats';
import validation from '../../../src/containers/FormWithCats/validation';
import testRendererWithProvider from '../../testUtils/testRendererWithProvider';

describe('<FormWithCats />', () => {
  let store;
  let WrappedFormWithCats;
  let component;
  let tree;

  it('renders the FormWithCats container integrated with redux form', () => {
    store = createStore(combineReducers({ form: formReducer }));
    WrappedFormWithCats = (
      <Provider store={store}>
        <FormWithCats />
      </Provider>
    );
    component = testRendererWithProvider(WrappedFormWithCats);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the FormWithCats container with a random cat provided by redux', () => {
    store = createStore(
      combineReducers({ cats, form: formReducer }),
      {
        cats: {
          randomCat: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
        },
      },
    );
    WrappedFormWithCats = (
      <Provider store={store}>
        <FormWithCats />
      </Provider>
    );
    component = testRendererWithProvider(WrappedFormWithCats);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<FormWithCats /> validation methods', () => {
  const { email, number, required } = validation;

  describe('email validation', () => {
    it('allows an email address', () => {
      expect(email('test@test.com')).toBeUndefined();
      expect(email('test@test.edu')).toBeUndefined();
      expect(email('test@test.org')).toBeUndefined();
      expect(email('test@test.gov')).toBeUndefined();
    });

    it('requires an email address', () => {
      const validationMessage = 'Thats not an email!';
      expect(email('asd')).toEqual(validationMessage);
      expect(email('123')).toEqual(validationMessage);
      expect(email('asd123@')).toEqual(validationMessage);
      expect(email('asd123@test')).toEqual(validationMessage);
      expect(email('asd123@test.')).toEqual(validationMessage);
      expect(email('asd123@test.c')).toEqual(validationMessage);
    });
  });

  describe('number validation', () => {
    it('allows a number', () => {
      expect(number(1)).toBeUndefined();
      expect(number(21)).toBeUndefined();
      expect(number(123)).toBeUndefined();
      expect(number(123131321313)).toBeUndefined();
      expect(number('1')).toBeUndefined();
      expect(number('123')).toBeUndefined();
    });

    it('requires a number', () => {
      const validationMessage = 'Thats not a number!';
      expect(number('test')).toEqual(validationMessage);
      expect(number('1t2')).toEqual(validationMessage);
    });
  });

  describe('required validation', () => {
    const validationMessage = 'Required!';
    it('requires a value', () => {
      expect(required('test')).toBeUndefined();
      expect(required(123)).toBeUndefined();
      expect(required('')).toEqual(validationMessage);
      expect(required(undefined)).toEqual(validationMessage);
      expect(required(null)).toEqual(validationMessage);
    });
  });
});
