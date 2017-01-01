const TRIGGER = 'boilerplate/cats/HELLO_REDUX';

const intialState = {
  triggered: false,
};

export default function reducer(state = intialState, action = {}) {
  switch (action.type) {
    case TRIGGER:
      return {
        ...state,
        triggered: !state.triggered,
      };
    default:
      return state;
  }
}

export function trigger() {
  return {
    type: TRIGGER,
  };
}
