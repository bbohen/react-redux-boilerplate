import { handle } from 'redux-pack';

const LOAD_LOREM_IPSUM = 'boilerplate/loremIpsum/LOAD_LOREM_IPSUM';

const intialState = {
  content: '',
  error: null,
  isLoaded: false,
  isLoading: false,
};

export default function reducer(state = intialState, action = {}) {
  const { payload, type } = action;
  switch (type) {
    case LOAD_LOREM_IPSUM:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true, error: null }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: payload }),
        success: s => ({ ...s, isLoaded: true, content: payload }),
      });
    default:
      return state;
  }
}

export function load() {
  return {
    type: LOAD_LOREM_IPSUM,
    promise: fetch('https://baconipsum.com/api/?type=all-meat&sentences=4&start-with-lorem=1')
      .then(response => response.json()),
  };
}
