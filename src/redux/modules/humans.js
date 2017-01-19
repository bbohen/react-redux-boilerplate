import { handle } from 'redux-pack';

const LOAD_HUMANS = 'boilerplate/cats/LOAD_HUMANS';

const intialState = {
  error: null,
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
    default:
      return state;
  }
}

export function load() {
  return {
    type: LOAD_HUMANS,
    promise: fetch('http://uinames.com/api/?ext&amount=25')
      .then(response => response.json()),
  };
}
