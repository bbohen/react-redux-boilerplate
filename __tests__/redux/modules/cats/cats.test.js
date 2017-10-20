import { LIFECYCLE } from 'redux-pack';

import { cats as reducer } from './../../../../src/redux/modules';
import {
  CLEAR_RANDOM_CAT,
  LOAD_CATS,
  LOAD_RANDOM_CAT,
  clearRandomCat,
  giveRandomCat,
  initialState,
  load,
} from '../../../../src/redux/modules/cats';
import makeReduxPackAction from '../../../testUtils/makeReduxPackAction';
import mockGiphyResponse from './__mocks__/giphyResponse';
import mockRedditResponse from './__mocks__/redditResponse';

describe('Redux: cats reducer', () => {
  it('dispatching CLEAR_RANDOM_CAT clears the random cat', () => {
    const beforeState = {
      ...initialState,
      cat: 'a random cat gif',
    };
    const expectedAfterState = initialState;
    const afterState = reducer(beforeState, { type: CLEAR_RANDOM_CAT });

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_CATS starts loading cats', () => {
    const beforeState = {
      ...initialState,
    };
    const expectedAfterState = {
      ...initialState,
      isLoading: true,
      error: null,
    };
    const action = makeReduxPackAction(LIFECYCLE.START, { type: LOAD_CATS });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_CATS loads cats', () => {
    const beforeState = {
      ...initialState,
      isLoading: true,
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: true,
      isLoading: false,
      list: mockRedditResponse.data.children,
    };
    const action = makeReduxPackAction(
      LIFECYCLE.SUCCESS,
      {
        type: LOAD_CATS,
        payload: mockRedditResponse,
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_CATS handles cats failure', () => {
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
        type: LOAD_CATS,
        payload: 'test error',
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_RANDOM_CAT starts loading a random cat', () => {
    const beforeState = {
      ...initialState,
    };
    const expectedAfterState = {
      ...initialState,
      isLoading: true,
      error: null,
    };
    const action = makeReduxPackAction(LIFECYCLE.START, { type: LOAD_RANDOM_CAT });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_RANDOM_CAT loads a random cat', () => {
    const gifUrlRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:gif)/g;
    const beforeState = {
      ...initialState,
      isLoading: true,
    };
    const action = makeReduxPackAction(
      LIFECYCLE.SUCCESS,
      {
        type: LOAD_RANDOM_CAT,
        payload: mockGiphyResponse,
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState.isLoaded).toBe(true);
    expect(afterState.isLoading).toBe(false);
    expect(afterState.randomCat).toEqual(expect.stringMatching(gifUrlRegex));
  });

  it('dispatching LOAD_RANDOM_CATS handles random cat failure', () => {
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
        type: LOAD_RANDOM_CAT,
        payload: 'test error',
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });
});

describe('Redux: cats action creators', () => {
  it('clearRandomCat returns the CLEAR_RANDOM_CAT action', () => {
    const expectedAction = {
      type: CLEAR_RANDOM_CAT,
    };

    expect(clearRandomCat()).toMatchObject(expectedAction);
  });

  it('load returns the LOAD_CATS action', () => {
    expect(load().type).toEqual(LOAD_CATS);
  });

  it('giveRandomCat returns the LOAD_RANDOM_CAT action', () => {
    expect(giveRandomCat().type).toEqual(LOAD_RANDOM_CAT);
  });
});
