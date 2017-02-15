import { KEY } from 'redux-pack';

/**
 * Simulate redux pack actions for testing, taken from the redux-pack readme
 */
function makeReduxPackAction(lifecycle, { type, payload, meta = {} }) {
  return {
    type,
    payload,
    meta: {
      ...meta,
      [KEY.LIFECYCLE]: lifecycle,
    },
  };
}

export default makeReduxPackAction;
