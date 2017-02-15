import { handle } from 'redux-pack';

export const CLEAR_RANDOM_CAT = 'boilerplate/cats/CLEAR_RANDOM_CAT';
export const LOAD_CATS = 'boilerplate/cats/LOAD_CATS';
export const LOAD_RANDOM_CAT = 'boilerplate/cats/LOAD_RANDOM_CAT';

export const initialState = {
  error: null,
  isLoaded: false,
  isLoading: false,
  list: [],
  randomCat: '',
  triggered: false,
};

export default function reducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CLEAR_RANDOM_CAT:
      return {
        ...state,
        randomCat: initialState.randomCat,
      };
    case LOAD_CATS:
      return handle(state, action, {
        start: s => ({
          ...s,
          error: null,
          isLoading: true,
        }),
        failure: s => ({
          ...s,
          error: payload,
          isLoading: false,
        }),
        success: s => ({
          ...s,
          isLoaded: true,
          isLoading: false,
          list: payload.data.children,
        }),
      });
    case LOAD_RANDOM_CAT:
      return handle(state, action, {
        start: s => ({
          ...s,
          error: null,
          isLoading: true,
        }),
        failure: s => ({
          ...s,
          error: payload,
          isLoading: false,
        }),
        success: (s) => {
          const randomCatData = payload.data[Math.floor(Math.random() * payload.data.length)];
          return {
            ...s,
            isLoaded: true,
            isLoading: false,
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
