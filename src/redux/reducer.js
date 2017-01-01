import { combineReducers } from 'redux';

import * as reducers from './modules';

const combinedReducer = combineReducers(reducers);
const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
