import { handle } from 'redux-pack';

const CLEAR_RANDOM_CAT = 'boilerplate/cats/CLEAR_RANDOM_CAT';
const LOAD_CATS = 'boilerplate/cats/LOAD_CATS';
const LOAD_RANDOM_CAT = 'boilerplate/cats/LOAD_RANDOM_CAT';

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
    case CLEAR_RANDOM_CAT:
      return {
        ...state,
        randomCat: '',
      };
    case LOAD_CATS:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true, error: null }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: payload }),
        success: s => ({ ...s, isLoaded: true, list: payload.data.children }),
      });
    case LOAD_RANDOM_CAT:
      return handle(state, action, {
        failure: s => ({ ...s, error: payload }),
        success: (s) => {
          const randomCatData = payload.data[Math.floor(Math.random() * payload.data.length)];
          return {
            ...s,
            isLoaded: true,
            randomCat: randomCatData.images.original.url,
          };
        },
      });
    default:
      return state;
  }
}

export function clearRandomCat() {
  return {
    type: CLEAR_RANDOM_CAT,
  };
}

export function load() {
  return {
    type: LOAD_CATS,
    promise: fetch('https://www.reddit.com/r/cats/top.json?limit=100')
    // promise: fetch('https://www.reddit.com/r/cats/new/?app=res&count=75.json')
      .then(response => response.json()),
  };
}

export function giveRandomCat() {
  return {
    type: LOAD_RANDOM_CAT,
    promise: fetch('http://api.giphy.com/v1/gifs/search?q=$cat&api_key=dc6zaTOxFJmzC&limit=10&offset=0')
      .then(response => response.json()),
  };
}
