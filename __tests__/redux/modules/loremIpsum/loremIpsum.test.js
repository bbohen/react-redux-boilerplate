import { LIFECYCLE } from 'redux-pack';

import { loremIpsum as reducer } from './../../../../src/redux/modules';
import {
  LOAD_LOREM_IPSUM,
  initialState,
  load,
} from '../../../../src/redux/modules/loremIpsum';
import makeReduxPackAction from '../../../testUtils/makeReduxPackAction';

describe('Redux: lorem ipsum reducer', () => {
  it('dispatching LOAD_LOREM_IPSUM starts loading lorem ipsum', () => {
    const beforeState = {
      ...initialState,
    };
    const expectedAfterState = {
      ...initialState,
      isLoading: true,
      error: null,
    };
    const action = makeReduxPackAction(LIFECYCLE.START, { type: LOAD_LOREM_IPSUM });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_LOREM_IPSUM loads lorem ipsum', () => {
    const beforeState = {
      ...initialState,
      isLoading: true,
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: true,
      isLoading: false,
      content: 'test',
    };
    const action = makeReduxPackAction(
      LIFECYCLE.SUCCESS,
      {
        type: LOAD_LOREM_IPSUM,
        payload: 'test',
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_LOREM_IPSUM handles lorem ipsum failure', () => {
    const beforeState = {
      ...initialState,
      isLoading: true,
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: false,
      isLoading: false,
      error: 'test error',
    };
    const action = makeReduxPackAction(
      LIFECYCLE.FAILURE,
      {
        type: LOAD_LOREM_IPSUM,
        payload: 'test error',
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('defaults properly', () => {
    expect(reducer()).toMatchObject(initialState);
  });
});

describe('Redux: lorem ipsum action creators', () => {
  it('load returns the LOAD_LOREM_IPSUM action', () => {
    expect(load().type).toEqual(LOAD_LOREM_IPSUM);
  });
});
