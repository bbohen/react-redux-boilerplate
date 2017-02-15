import { handle } from 'redux-pack';

export const LOAD_LOREM_IPSUM = 'boilerplate/loremIpsum/LOAD_LOREM_IPSUM';

export const initialState = {
  content: '',
  error: null,
  isLoaded: false,
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  const { payload, type = '' } = action;
  switch (type) {
    case LOAD_LOREM_IPSUM:
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
          content: payload,
        }),
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
