import { LIFECYCLE } from 'redux-pack';

import reducer, {
  LOAD_HUMANS,
  SELECT_HUMAN,
  initialState,
  load,
  select,
} from '../../../../src/redux/modules/humans';
import makeReduxPackAction from '../../../testUtils/makeReduxPackAction';
import mockUiFaces from './__mocks__/uiFacesResponse';

const indexOfSelectedHuman = 3;

describe('Redux: humans reducer', () => {
  it('dispatching LOAD_HUMANS starts loading humans', () => {
    const beforeState = {
      ...initialState,
    };
    const expectedAfterState = {
      ...initialState,
      isLoading: true,
      error: null,
    };
    const action = makeReduxPackAction(LIFECYCLE.START, { type: LOAD_HUMANS });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_HUMANS loads humans', () => {
    const beforeState = {
      ...initialState,
      isLoading: true,
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: true,
      isLoading: false,
      list: mockUiFaces,
    };
    const action = makeReduxPackAction(
      LIFECYCLE.SUCCESS,
      {
        type: LOAD_HUMANS,
        payload: mockUiFaces,
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching LOAD_HUMANS handles humans failure', () => {
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
        type: LOAD_HUMANS,
        payload: 'test error',
      },
    );
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('dispatching SELECT_HUMAN returns the selected index', () => {
    const beforeState = {
      ...initialState,
    };
    const expectedAfterState = {
      ...initialState,
      indexOfSelectedHuman,
    };
    const action = {
      type: SELECT_HUMAN,
      indexOfSelectedHuman,
    };
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it('defaults properly', () => {
    expect(reducer()).toMatchObject(initialState);
  });
});

describe('Redux: humans action creators', () => {
  it('load returns the LOAD_HUMANS action', () => {
    expect(load().type).toEqual(LOAD_HUMANS);
  });

  it('select returns the SELECT_HUMAN action', () => {
    const expectedAction = {
      type: SELECT_HUMAN,
      indexOfSelectedHuman,
    };

    expect(select(indexOfSelectedHuman)).toMatchObject(expectedAction);
  });
});
