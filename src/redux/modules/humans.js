import { handle } from 'redux-pack';

const LOAD_HUMANS = 'boilerplate/humans/LOAD_HUMANS';
const SELECT_HUMAN = 'boilerplate/humans/SELECT_HUMAN';

const intialState = {
  error: null,
  indexOfSelectedHuman: null,
  isLoaded: false,
  isLoading: false,
  list: [],
  randomCat: '',
  triggered: false,
};

export default function reducer(state = intialState, action = {}) {
  const { payload, type } = action;
  switch (type) {
    case LOAD_HUMANS:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true, error: null }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: payload }),
        success: s => ({ ...s, isLoaded: true, list: payload }),
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
