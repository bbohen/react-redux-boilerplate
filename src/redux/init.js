import { compose, createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

/* eslint-disable no-underscore-dangle  */
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
/* eslint-enable */

export default () => createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, reduxPackMiddleware),
  ),
);
