import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const logger = createLogger();

export default () => createStore(
  rootReducer,
  applyMiddleware(thunk, reduxPackMiddleware, logger),
);
