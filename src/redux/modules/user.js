const HELLO_REDUX = 'boilerplate/user/HELLO_REDUX';

const intialState = {
  test: false,
};

export default function reducer(state = intialState, action = {}) {
  switch (action.type) {
    case HELLO_REDUX:
      return {
        ...state,
        triggered: true,
        test: 12,
      };
    default:
      return state;
  }
}

export function trigger() {
  return {
    type: HELLO_REDUX,
  };
}
