import { handle } from 'redux-pack';

export const LOAD_HUMANS = 'boilerplate/humans/LOAD_HUMANS';
export const SELECT_HUMAN = 'boilerplate/humans/SELECT_HUMAN';

export const initialState = {
  error: null,
  indexOfSelectedHuman: null,
  isLoaded: false,
  isLoading: false,
  list: [],
  triggered: false,
};

export default function reducer(state = initialState, action = {}) {
  const { payload, type = '' } = action;

  switch (type) {
    case LOAD_HUMANS:
      return handle(state, action, {
        start: s => ({
          ...s,
          isLoading: true,
          error: null,
        }),
        failure: s => ({
          ...s,
          isLoaded: false,
          isLoading: false,
          error: payload,
        }),
        success: s => ({
          ...s,
          isLoaded: true,
          isLoading: false,
          list: payload,
        }),
      });
    case SELECT_HUMAN:
      return {
        ...state,
        indexOfSelectedHuman: action.indexOfSelectedHuman,
      };
    default:
      return state;
  }
}

export function load() {
  return {
    type: LOAD_HUMANS,
    promise: fetch('http://uinames.com/api/?ext&amount=50')
      .then(response => response.json()),
  };
}

export function select(indexOfSelectedHuman) {
  return {
    type: SELECT_HUMAN,
    indexOfSelectedHuman,
  };
}
