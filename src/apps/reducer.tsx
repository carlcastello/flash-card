import { combineReducers } from 'redux';

import webDataReducer from './dashboard/reducers';
import moduleDataReducer from './module/reducers';


export default combineReducers({
  module: moduleDataReducer,
  web: webDataReducer
});