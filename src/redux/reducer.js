import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as reducers from './modules';

const combinedReducer = combineReducers({
  ...reducers,
  form: formReducer,
});
const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
