import { handle } from 'redux-pack';

const LOAD_CATS = 'boilerplate/cats/LOAD_CATS';
const LOAD_RANDOM_CAT = 'boilerplate/cats/LOAD_RANDOM_CAT';

const intialState = {
  error: null,
  isLoaded: false,
  isLoading: false,
  list: [],
  triggered: false,
};

export default function reducer(state = intialState, action = {}) {
  const { payload, type } = action;
  switch (type) {
    case LOAD_CATS:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true, error: null }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: payload }),
        success: s => ({ ...s, isLoaded: true, list: payload.data.children }),
      });
    case LOAD_RANDOM_CAT:
      return {
        ...state,
        randomCat: true,
      };
    default:
      return state;
  }
}

export function load() {
  return {
    type: LOAD_CATS,
    promise: fetch('https://www.reddit.com/r/cats/top/.json').then(response => response.json()),
  };
}

export function giveRandomCat({ catName }) {
  return (dispatch, getState) => {
    const { cats } = { ...getState() };
    const action = {
      name: catName,
      type: LOAD_RANDOM_CAT,
    };

    if (!cats.isLoaded) {
      return dispatch(load()).then(() => {
        dispatch(action);
      });
    }

    return dispatch(action);
  };
}
